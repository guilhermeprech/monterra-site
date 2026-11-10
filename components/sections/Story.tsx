import Image from "next/image";
import queijoCampo from "@/public/images/site/queijo-campo.jpg";

// Frases adaptadas das publicações da própria Monterra no Instagram.
export default function Story() {
  return (
    <section id="historia" className="bg-paper py-28 md:py-40">
      <div className="container-site">
        <div className="mx-auto max-w-[52rem] text-center">
          <h2
            data-reveal
            className="font-display text-[0.8125rem] tracking-[0.24em] text-forest-600"
          >
            Nossa história
          </h2>
          <p
            data-reveal
            className="mt-8 font-serif text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.12] text-forest-950"
          >
            Queijos autorais feitos à mão na Serra Gaúcha, com o leite das
            nossas próprias vacas.
          </p>
        </div>

        <div className="mt-20 grid items-center gap-14 md:mt-32 md:grid-cols-12 md:gap-8">
          <figure data-reveal="clip" className="-mx-(--gutter) md:col-span-6 md:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4.4]">
              <Image
                src={queijoCampo}
                alt="Peça de queijo Monterra sobre um toco de madeira, com o pasto e as colinas da Serra Gaúcha ao fundo"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[62%_58%] transition-transform duration-[1800ms] ease-(--ease-soft) hover:scale-[1.03]"
              />
            </div>
          </figure>

          <div className="space-y-6 text-[1.1875rem] leading-[1.75] text-muted md:col-span-5 md:col-start-8">
            <p data-reveal>
              Tudo começou quando{" "}
              <span className="text-ink">Cátia Pasquali</span> comprou algumas
              terneiras, sem grandes planos. Criadas soltas no pasto, elas
              passaram a dar um leite muito bom.
            </p>
            <p data-reveal>
              Em 2018 saíram os primeiros queijos. A ideia era fazer
              &ldquo;alguns queijinhos, só para alguns amigos&rdquo;. Os pedidos
              foram aumentando, mas a produção continua pequena e segue o ritmo
              das estações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
