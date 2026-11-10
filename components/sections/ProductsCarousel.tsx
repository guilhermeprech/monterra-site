"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import { PRODUCTS, SITE } from "@/lib/constants";

export default function ProductsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 34,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Queijos Monterra"
      onKeyDown={onKeyDown}
      className="flex flex-col lg:grid lg:grid-cols-[minmax(0,calc((100vw-min(100vw,var(--container)))/2+var(--gutter)+30rem))_1fr] lg:items-stretch"
    >
      {/* Texto do queijo ativo — todos no HTML, só o ativo visível */}
      <div className="order-2 mt-10 pl-(--gutter) pr-(--gutter) lg:order-1 lg:mt-0 lg:flex lg:flex-col lg:justify-between lg:pl-[calc((100vw-min(100vw,var(--container)))/2+var(--gutter))] lg:pr-12">
        <div className="grid">
          {PRODUCTS.map((p, i) => {
            const active = selected === i;
            return (
              <article
                key={p.name}
                aria-hidden={!active}
                className={`col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-(--ease-soft) ${
                  active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <h3 className="font-display text-[clamp(2.75rem,5vw,4.5rem)] leading-none">
                  {p.name}
                </h3>
                <p className="mt-5 font-serif text-[1.25rem] italic text-gold-soft">
                  {p.detailLabel === "Maturação"
                    ? `Maturado por ${p.detailValue}`
                    : `Textura ${p.detailValue.toLowerCase()}`}
                </p>
                <p className="mt-4 max-w-[32ch] text-[1.125rem] leading-[1.7] text-cream/65">
                  {p.desc}
                </p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={active ? 0 : -1}
                  className="mt-7 inline-block border-b border-cream/30 pb-1 text-[1rem] text-cream/85 transition-colors hover:border-cream"
                >
                  Pedir pelo WhatsApp
                </a>
              </article>
            );
          })}
        </div>

        {/* Seleção por nome */}
        <div className="mt-12 flex items-center gap-8 border-t border-cream/10 pt-6">
          <ol className="flex gap-8">
            {PRODUCTS.map((p, i) => (
              <li key={p.name}>
                <button
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-current={selected === i ? "true" : undefined}
                  className={`relative py-2 font-display text-[0.9375rem] tracking-[0.08em] transition-colors duration-500 ${
                    selected === i
                      ? "text-cream"
                      : "text-cream/55 hover:text-cream/80"
                  }`}
                >
                  {p.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold-soft transition-transform duration-700 ease-(--ease-soft) ${
                      selected === i ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ol>
          <p aria-live="polite" className="sr-only">
            {PRODUCTS[selected].name}
          </p>
        </div>
      </div>

      {/* Trilho de fotos — sangra até a borda direita */}
      <div
        ref={emblaRef}
        tabIndex={0}
        aria-label="Fotos dos queijos. Use as setas do teclado para navegar."
        className="order-1 overflow-hidden pl-(--gutter) focus-visible:outline-offset-[-2px] lg:order-2 lg:pl-0"
      >
        <div className="flex cursor-grab touch-pan-y active:cursor-grabbing">
          {PRODUCTS.map((p, i) => {
            const active = selected === i;
            return (
              <div
                key={p.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${PRODUCTS.length}: ${p.name}`}
                onClick={() => !active && scrollTo(i)}
                className={`min-w-0 shrink-0 grow-0 basis-[82%] pr-3 sm:basis-[60%] md:basis-[52%] md:pr-5 lg:basis-[62%] ${
                  active ? "" : "cursor-pointer"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-forest-900">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 82vw"
                    style={{ objectPosition: p.focus }}
                    className={`object-cover transition-[transform,opacity] duration-[1200ms] ease-(--ease-soft) ${
                      active ? "scale-100 opacity-100" : "scale-[1.04] opacity-30"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
