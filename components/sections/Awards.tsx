import Container from "../layout/Container";

export default function Awards() {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs tracking-[0.35em] text-[var(--green-dark)]/60">
                RECONHECIMENTO
              </p>
              <p className="mt-3 text-base text-[var(--foreground)]/80">
                Premiações e avaliações que reforçam nossa qualidade e padrão.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
              <span className="text-sm text-[var(--foreground)]/70">Super Ouro • (adicionar info)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}