import Image from "next/image";
import { SITE } from "@/lib/constants";
import casca from "@/public/images/site/casca-trancada.jpg";
import selo from "@/public/images/site/monterra-selo.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      data-tone="dark"
      aria-label="Apresentação"
      className="relative isolate h-(--hero-height) overflow-hidden bg-forest-950 text-cream"
    >
      <div className="hero-photo absolute inset-0 -z-20">
        <Image
          src={casca}
          alt="Queijos Monterra em maturação, com o desenho trançado da forma marcado na casca"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-(--hero-photo-pos)"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-forest-950 opacity-(--hero-overlay)"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,transparent_30%,rgba(18,27,20,0.55)_100%)]"
      />
      <h1 className="pointer-events-none absolute left-(--hero-logo-x) top-[calc(var(--hero-height)*var(--hero-logo-y))] w-(--hero-logo-w) -translate-x-1/2 -translate-y-1/2">
        <Image
          src={selo}
          alt={SITE.fullName}
          preload
          sizes="(min-width: 1280px) 560px, (min-width: 768px) 54vw, 82vw"
          className="h-auto w-full drop-shadow-[0_24px_48px_rgba(8,14,9,0.45)]"
        />
      </h1>

      <div className="hero-rise absolute inset-x-0 bottom-(--hero-cta-bottom)">
        <div className="container-site flex justify-center">
          <a
            href="#historia"
            className="flex flex-col items-center p-3 text-cream/70 transition-colors hover:text-cream"
          >
            <span className="sr-only">Conheça a Monterra</span>
            <span aria-hidden="true" className="scroll-cue relative block h-10 w-px bg-cream/25" />
          </a>
        </div>
      </div>
    </section>
  );
}
