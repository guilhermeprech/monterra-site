import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.40) 45%, rgba(255,255,255,0.72) 100%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative py-24 md:py-28 text-center">
          <div className="relative z-0 flex justify-center overflow-visible">
            <Image
              src="/images/logo-sem-fundo.png"
              alt="Monterra Queijos Artesanais"
              width={420}
              height={220}
              className="pointer-events-none h-auto w-[220px] object-contain scale-175 md:w-[300px] md:scale-200 lg:w-[360px] lg:scale-[2.25]"
              priority
            />
          </div>

          <div className="relative z-10 mt-24 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={SITE.whatsapp}>WhatsApp</Button>
              <Button href={SITE.instagram}>Instagram</Button>
            </div>

            <a
              href="#historia"
              className="text-sm font-medium text-[var(--foreground)]/75 underline underline-offset-4 decoration-[var(--green)]/40 hover:text-[var(--foreground)]"
            >
              Conhecer a história
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}