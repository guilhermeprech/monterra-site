import Container from "../layout/Container";
import Button from "../ui/Button";
import { SITE } from "@/lib/constants";

export default function WhereToFind() {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-16 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Onde encontrar</h2>
            <p className="mt-3 text-black/70">
              Quer saber disponibilidade, entregas e pontos de venda? Fale com a gente.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href={SITE.whatsapp}>Falar no WhatsApp</Button>
              <Button href="#contato" variant="ghost">Ver contatos</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#fbf7f1] p-8">
            <p className="text-sm font-semibold">Atendimento</p>
            <p className="mt-2 text-sm text-black/70">
              Região, horários e pontos de venda podem ser listados aqui (vamos preencher com as infos da cliente).
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}