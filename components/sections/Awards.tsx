/**
 * Premiações — fonte: Prefeitura de Caxias do Sul, 30/05/2022
 * (caxias.rs.gov.br/noticias/2022/05/agroindustria-caxiense-vence-concurso-estadual-de-queijos-artesanais)
 * e bio do Instagram da Monterra ("Premiação Super Ouro").
 */
const MEDALS = [
  { medal: "Ouro", cheese: "Queijo colonial" },
  { medal: "Ouro", cheese: "Queijo colonial premium" },
  { medal: "Bronze", cheese: "Queijo colonial reserva" },
];

export default function Awards() {
  return (
    <section
      id="premios"
      data-tone="dark"
      className="grain bg-forest-950 py-28 text-cream md:py-40"
    >
      <div className="container-site flex flex-col items-center text-center">
        <div data-reveal aria-hidden="true" className="relative h-28 w-28 md:h-32 md:w-32">
          <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full text-gold">
            <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle className="spin-slow" cx="60" cy="60" r="51" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 3.2" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display text-[1.125rem] tracking-[0.12em] text-gold-soft">
            2022
          </span>
        </div>

        <p
          data-reveal
          className="mt-10 font-display text-[0.8125rem] tracking-[0.24em] text-gold-soft"
        >
          Reconhecimento
        </p>
        <h2
          data-reveal
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-none"
        >
          Super Ouro
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-[34ch] font-serif text-[1.375rem] leading-snug italic text-cream/85"
        >
          1º Concurso de Queijos Artesanais do Rio Grande do Sul
        </p>
        <p
          data-reveal
          className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.75] text-cream/60"
        >
          Foram 99 queijos avaliados. O nosso colonial premium, maturado por
          mais de 120 dias, ficou com o prêmio principal.
        </p>

        <ul className="mt-16 grid w-full max-w-[52rem] border-t border-cream/12 sm:grid-cols-3">
          {MEDALS.map((m, i) => (
            <li
              key={m.cheese}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              className="border-b border-cream/12 py-7 sm:border-b-0 sm:px-4"
            >
              <p className="font-display text-[0.875rem] tracking-[0.18em] text-gold-soft">
                {m.medal}
              </p>
              <p className="mt-2 text-[1.0625rem] text-cream/75">{m.cheese}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-[50ch] text-[0.9375rem] leading-relaxed text-cream/55">
          Concurso promovido pela Associação Gaúcha de Laticinistas e
          Laticínios (AGL), em Porto Alegre, 2022.
        </p>
      </div>
    </section>
  );
}
