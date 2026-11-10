"use client";

import { useEffect, useRef } from "react";
import BrandMark from "../brand/BrandMark";

/**
 * Abertura: fundo verde, o logo se monta (selo → árvore → nome) e a
 * cortina sobe revelando o site. A coreografia é 100% CSS (globals.css);
 * este componente só permite pular (clique, toque ou tecla) e libera o scroll.
 */
export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("intro-off")) return;

    const skip = () => {
      root.classList.add("intro-skip");
      root.classList.remove("intro-lock");
    };
    const onKey = (e: KeyboardEvent) => {
      if (["Escape", "Enter", " "].includes(e.key)) skip();
    };
    const onEnd = (e: AnimationEvent) => {
      if (e.target === ref.current && e.animationName === "intro-exit") {
        root.classList.remove("intro-lock");
      }
    };

    const el = ref.current;
    el?.addEventListener("click", skip);
    el?.addEventListener("animationend", onEnd);
    window.addEventListener("keydown", onKey, { once: true });
    return () => {
      el?.removeEventListener("click", skip);
      el?.removeEventListener("animationend", onEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="intro grain cursor-pointer" aria-hidden="true">
      <div className="absolute left-(--hero-logo-x) top-[calc(var(--hero-height)*var(--hero-logo-y))] w-(--hero-logo-w) -translate-x-1/2 -translate-y-1/2">
        <BrandMark
          preload
          sizes="(min-width: 1280px) 560px, (min-width: 768px) 54vw, 82vw"
          className="drop-shadow-[0_24px_48px_rgba(8,14,9,0.45)]"
        />
      </div>
    </div>
  );
}
