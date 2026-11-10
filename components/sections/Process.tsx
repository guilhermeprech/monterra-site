import ProcessSteps from "./ProcessSteps";

export default function Process() {
  return (
    <section id="processo" className="bg-paper py-28 md:py-40">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-12">
          <h2
            data-reveal
            className="font-display text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.05] text-forest-950 md:col-span-7"
          >
            Do leite ao queijo
          </h2>
          <p
            data-reveal
            className="max-w-[34ch] self-end text-[1.1875rem] leading-[1.7] text-muted md:col-span-4 md:col-start-9"
          >
            A qualidade de um queijo começa no pasto, muito antes de ele ficar
            pronto.
          </p>
        </div>

        <ProcessSteps />
      </div>
    </section>
  );
}
