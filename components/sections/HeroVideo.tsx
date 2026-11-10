"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import posterDesktop from "@/public/images/site/hero-video-desktop.jpg";
import posterMobile from "@/public/images/site/hero-video-mobile.jpg";

/**
 * Vídeo de fundo do hero (voo sobre o campo e as araucárias da propriedade).
 * - Celular: versão vertical 576×1024 · Desktop: faixa horizontal 1280×720.
 * - O pôster (primeiro quadro) aparece de imediato; o vídeo entra com fade
 *   quando começa a tocar.
 * - Sem vídeo para quem prefere menos movimento ou está economizando dados.
 * - Pausa quando o hero sai da tela.
 */
const DESKTOP = "(min-width: 768px)";
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** Vídeo só no navegador, sem preferência por menos movimento e sem economia de dados. */
function canPlayVideo() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
    .connection?.saveData;
  return !window.matchMedia(REDUCED).matches && !saveData;
}

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const allowed = useSyncExternalStore(subscribe, canPlayVideo, () => false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!allowed || !video) return;

    // Mostra o vídeo assim que houver quadros tocando (inclusive se o
    // autoplay começou antes deste efeito rodar).
    const show = () => {
      if (!video.paused && video.readyState >= 3) setPlaying(true);
    };
    video.addEventListener("playing", show);
    video.addEventListener("timeupdate", show);
    show();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.removeEventListener("playing", show);
      video.removeEventListener("timeupdate", show);
    };
  }, [allowed]);

  const common = { alt: "", sizes: "100vw", fill: true, preload: true } as const;
  const { props: { srcSet: desktopSrcSet } } = getImageProps({ ...common, src: posterDesktop });
  const { props: mobileProps } = getImageProps({ ...common, src: posterMobile });

  return (
    <>
      <picture>
        <source media={DESKTOP} srcSet={desktopSrcSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...mobileProps} className="object-cover object-(--hero-photo-pos)" />
      </picture>

      {allowed && (
        <video
          ref={ref}
          aria-hidden="true"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover object-(--hero-photo-pos) transition-opacity duration-[1500ms] ease-(--ease-soft) ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <source media={DESKTOP} src="/videos/hero-desktop.mp4" type="video/mp4" />
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
