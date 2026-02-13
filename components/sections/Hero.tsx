import Container from "../layout/Container";
import Button from "../ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay (menos branco + degradê) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.40) 45%, rgba(255,255,255,0.72) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <Container>
        <div className="relative py-24 md:py-28 text-center">
          <p className="text-xs tracking-[0.35em] text-[var(--foreground)]/70">
            MONTERRA • PRODUTOS ARTESANAIS
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-serif font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-7xl">
            Tradição, tempo e cuidado
            <br />
            em cada maturação.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/85">
           Queijos feitos com tradição e qualidade
           na Serra Gaúcha.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">

          {/* Linha principal */}
          <div className="flex flex-wrap justify-center gap-4">

              <Button href={SITE.whatsapp}>
              WhatsApp
              </Button>

              <Button href={SITE.instagram}>
              Instagram
              </Button>

          </div>

        {/* Link secundário */}
        <a
            href="#historia"
            className="text-sm font-medium text-[var(--foreground)]/75 underline underline-offset-4 decoration-[var(--green)]/40 hover:text-[var(--foreground)]"
        >
        Conhecer a história
        </a>

        </div>

          {/* detalhe verde sutil */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-[2px] w-12 bg-[var(--green)]/70" />
            <span className="text-sm text-[var(--green-dark)]/70">
              Campos de Cima da Serra
            </span>
            <span className="h-[2px] w-12 bg-[var(--green)]/70" />
          </div>
        </div>
      </Container>
    </section>
  );
}