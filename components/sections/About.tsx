import Container from "../layout/Container";

export default function About() {
  return (
    <section id="historia" className="bg-white">
      <Container>
        <div className="py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.35em] text-[var(--green-dark)]/60">
                ORIGEM
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                Nossa história
              </h2>
            </div>

            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-justify text-[var(--foreground)]/80">
              A produtora Cátia Pasquali iniciou a produção de leite, sem muita pretensão, adquirindo algumas terneiras de aptidão leiteira.
              Foi quando a propriedade iniciou uma pequena produção de leite com excelente qualidade, com vacas soltas, basicamente de leite a pasto,
              nasceu o sonho de fazer produtos com aquele leite produzido, um sonho no qual ficou adormecido por muitos anos.
              Foi em 2018, que começaram a fazer os primeiros queijos, a ideia inicial era 
              "fazer eventualmente alguns queijnhos somente para alguns amigos" mas a demanda foi crescendo, e a aceitação também.
              Hoje buscam manter a produção pequena, tentando respeitar a ordem natural das coisas, as estações, a terra e os animais.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--foreground)]/80">
                Somos movidos pela paixão e pela crença de que o artesanal não é só um método, 
                é um manifesto: o de criar sabores únicos e verdadeiros.
              </p>

              {/* <div className="mt-10 border-t border-[var(--green)]/20 pt-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Matéria-prima selecionada
                    </p>
                    <p className="mt-2 text-sm text-[var(--foreground)]/70">
                      Qualidade começa na origem e no cuidado diário.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Tempo de maturação
                    </p>
                    <p className="mt-2 text-sm text-[var(--foreground)]/70">
                      Respeitamos o processo para desenvolver sabor e textura.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* divisor verde */}
          <div className="mt-20 h-px w-full bg-[var(--green)]/15" />
        </div>
      </Container>
    </section>
  );
}