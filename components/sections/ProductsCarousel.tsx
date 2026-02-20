"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="queijos" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif">
            Linha de Queijos
          </h2>
        </div>

        <div className="relative">

          <div className="overflow-hidden px-6 md:px-16" ref={emblaRef}>
            <div className="flex">

              {PRODUCTS.map((product) => (
                <div
                  key={product.name}
                  className="min-w-0 flex-[0_0_85%] md:flex-[0_0_70%] px-4"
                >
                  <div className="flex flex-col items-center text-center">

                    <div className="relative w-full h-[480px] md:h-[560px] lg:h-[600px] overflow-hidden rounded-xl shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 70vw"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl md:text-3xl font-serif">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-sm md:text-base text-[var(--foreground)]/70 max-w-lg">
                      {product.desc}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Botão anterior */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10
                       h-16 w-16 rounded-full
                       bg-white/95 backdrop-blur
                       flex items-center justify-center
                       text-4xl text-[var(--foreground)]
                       shadow-lg transition hover:scale-105"
          >
            ‹
          </button>

          {/* Botão próximo */}
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10
                       h-16 w-16 rounded-full
                       bg-white/95 backdrop-blur
                       flex items-center justify-center
                       text-4xl text-[var(--foreground)]
                       shadow-lg transition hover:scale-105"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}