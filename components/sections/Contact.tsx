import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contato" className="bg-paper py-20 md:py-28">
      <div className="container-site flex flex-col items-center text-center">
        <h2
          data-reveal
          className="font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-tight text-forest-950"
        >
          Onde encontrar
        </h2>
        <p
          data-reveal
          className="mt-4 max-w-[40ch] text-[1.1875rem] leading-[1.7] text-muted"
        >
          Para fazer um pedido ou saber onde comprar nossos queijos, fale com a
          gente pelo WhatsApp.
        </p>

        <div
          data-reveal
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-3"
        >
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-forest-900 px-7 text-[1.0625rem] text-cream transition-colors duration-300 hover:bg-forest-800"
          >
            WhatsApp
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-full border border-forest-900/20 px-7 text-[1.0625rem] text-forest-950 transition-colors duration-300 hover:border-forest-900"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
