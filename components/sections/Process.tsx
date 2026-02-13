import Container from "../layout/Container";

const STEPS = [
  { title: "Seleção", desc: "Ingredientes e padrões que garantem qualidade." },
  { title: "Produção artesanal", desc: "Cuidado em cada etapa, sem atalhos." },
  { title: "Maturação", desc: "Tempo e controle para desenvolver sabor e textura." },
  { title: "Finalização", desc: "Cada peça revisada antes de chegar até você." },
];

export default function Process() {
  return (
    <section id="processo" className="bg-white">
      <Container>
        <div className="py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.35em] text-[var(--green-dark)]/60">
                PROCESSO
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                Do campo à maturação
              </h2>
              <p className="mt-4 text-[var(--foreground)]/75">
                Cada etapa é pensada para manter padrão, identidade e sabor.
              </p>
            </div>

            <div className="md:col-span-7">
              <ol className="relative border-l border-[var(--green)]/25 pl-8">
                {STEPS.map((s, idx) => (
                  <li key={s.title} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[var(--green)]" />
                    <p className="text-sm text-[var(--green-dark)]/70">
                      {(idx + 1).toString().padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                      {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                      {s.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-20 h-px w-full bg-[var(--green)]/15" />
        </div>
      </Container>
    </section>
  );
}