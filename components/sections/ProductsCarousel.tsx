"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const PRODUCTS = [
  {
    name: "Origem",
    desc: "Queijo jovem, maturado apenas 20 dias, delicado, macio e com notas lácticas.",
    image: "/images/origem.jpg",
  },
  {
    name: "Raízes",
    desc: "Maturado por 120 dias, com sabor mais apurado, porém macio e com leve picância.",
    image: "/images/raizes.jpg",
  },
  {
    name: "Artesano",
    desc: "Possui textura semidura, sabor acentuado e aroma característico.",
    image: "/images/artesano.jpg",
  },
];

export default function ProductsCarousel() {
  const [mounted, setMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!mounted) return null;

  return (
    <section id="queijos" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-serif md:text-4xl">
            Linha de Queijos
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-6 md:px-16" ref={emblaRef}>
            <div className="flex">
              {PRODUCTS.map((product) => (
                <div
                  key={product.name}
                  className="min-w-0 flex-[0_0_85%] px-4 md:flex-[0_0_70%]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-[480px] w-full overflow-hidden rounded-xl shadow-sm md:h-[560px] lg:h-[600px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 70vw"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-serif md:text-3xl">
                      {product.name}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm text-[var(--foreground)]/70 md:text-base">
                      {product.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 backdrop-blur text-4xl text-[var(--foreground)] shadow-lg transition hover:scale-105 md:left-10"
          >
            ‹
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 backdrop-blur text-4xl text-[var(--foreground)] shadow-lg transition hover:scale-105 md:right-10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}