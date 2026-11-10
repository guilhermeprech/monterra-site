import ProductsCarousel from "./ProductsCarousel";

export default function Collection() {
  return (
    <section
      id="queijos"
      data-tone="dark"
      className="grain overflow-hidden bg-forest-950 py-28 text-cream md:py-40"
    >
      <div className="container-site flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2
          data-reveal
          className="font-display text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.05]"
        >
          Nossos queijos
        </h2>
        <p
          data-reveal
          className="max-w-[36ch] text-[1.1875rem] leading-[1.7] text-cream/65"
        >
          Cada um tem o seu tempo de cura, de 20 a 120 dias.
        </p>
      </div>

      <div className="mt-14 md:mt-20">
        <ProductsCarousel />
      </div>
    </section>
  );
}
