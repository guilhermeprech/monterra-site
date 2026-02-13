import Container from "../layout/Container";
import Button from "../ui/Button";
import { PRODUCTS, SITE } from "@/lib/constants";

export default function Products() {
  return (
    <section id="queijos" className="bg-white">
      <Container>
        <div className="py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.35em] text-[var(--green-dark)]/60">
                LINHA
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                Nossos queijos
              </h2>
              <p className="mt-4 text-[var(--foreground)]/75">
                Uma seleção para o dia a dia e ocasiões especiais. Consulte disponibilidade.
              </p>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <Button href={SITE.whatsapp}>Consultar no WhatsApp</Button>
            </div>
          </div>

          <div className="mt-12 divide-y divide-[var(--green)]/15 border-t border-[var(--green)]/15">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="py-8 md:flex md:items-center md:justify-between md:gap-10">
                <div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">{p.name}</p>
                  <p className="mt-2 text-sm text-[var(--foreground)]/75">{p.desc}</p>
                </div>
                <div className="mt-5 md:mt-0">
                  <Button href={SITE.whatsapp} variant="ghost">
                    Pedir / Disponibilidade
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 h-px w-full bg-[var(--green)]/15" />
        </div>
      </Container>
    </section>
  );
}