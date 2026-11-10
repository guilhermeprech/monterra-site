"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import queijaria from "@/public/images/site/salga.png";
import salmoura from "@/public/images/site/salga-salmoura.jpg";
import maturacao from "@/public/images/site/sala-maturacao.jpg";

type Step = {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  focus: string;
};

// Fatos e fotos das publicações da própria Monterra no Instagram.
const STEPS: Step[] = [
  {
    title: "O leite",
    text: "Na queijaria, o leite das nossas vacas é trabalhado à mão, com a temperatura sempre medida.",
    image: queijaria,
    alt: "Queijeira da Monterra medindo a temperatura do leite no tacho de inox",
    focus: "45% 40%",
  },
  {
    title: "A salga",
    text: "Cada peça fica imersa na salmoura por um tempo controlado. A salga realça o sabor e ajuda a formar a casca.",
    image: salmoura,
    alt: "Queijos Monterra imersos na salmoura durante a salga",
    focus: "50% 55%",
  },
  {
    title: "A maturação",
    text: "Na sala de maturação, os queijos são virados e escovados todos os dias. Alguns ficam semanas; outros, meses.",
    image: maturacao,
    alt: "Queijos Monterra nas prateleiras da sala de maturação",
    focus: "55% 60%",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16 md:mt-24 md:grid md:grid-cols-12 md:gap-8">
      {/* Imagem fixa (desktop) — troca conforme a etapa ativa */}
      <div className="hidden md:col-span-6 md:block">
        <div className="sticky top-[calc(var(--header-h)+3rem)] aspect-[4/5] max-h-[calc(100svh-var(--header-h)-6rem)] w-full overflow-hidden bg-forest-900">
          {STEPS.map((step, i) => (
            <Image
              key={step.title}
              src={step.image}
              alt={step.alt}
              fill
              sizes="50vw"
              style={{ objectPosition: step.focus }}
              className={`object-cover transition-[opacity,transform] duration-[1100ms] ease-(--ease-soft) ${
                active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Etapas */}
      <ol className="md:col-span-5 md:col-start-8">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            data-index={i}
            className="flex flex-col justify-center border-t border-forest-900/15 py-12 first:border-t-0 md:min-h-[72svh] md:py-0"
          >
            <div className="relative mb-8 aspect-[4/5] overflow-hidden md:hidden">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="100vw"
                style={{ objectPosition: step.focus }}
                className="object-cover"
              />
            </div>
            <span
              className={`font-display text-[0.9375rem] tracking-[0.12em] tabular-nums transition-colors duration-500 ${
                active === i ? "text-gold" : "text-forest-900/50"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight transition-colors duration-500 ${
                active === i ? "text-forest-950" : "md:text-forest-950/55"
              }`}
            >
              {step.title}
            </h3>
            <p className="mt-5 max-w-[32ch] text-[1.1875rem] leading-[1.7] text-muted">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
