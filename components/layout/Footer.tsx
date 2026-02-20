import Container from "./Container";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-black/10 bg-white">
      <Container>
        <div className="py-10 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold">{SITE.name}</p>
            <p className="mt-2 text-sm text-black/70">
              Queijos artesanais com cuidado em cada etapa — da seleção à maturação.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Contato</p>
            <div className="mt-2 grid gap-2 text-sm">
              <a className="text-black/70 hover:text-black" href={SITE.whatsapp}>
                WhatsApp
              </a>
              <a className="text-black/70 hover:text-black" href={SITE.instagram}>
                Instagram
              </a>
              {/* <a className="text-black/70 hover:text-black" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a> */}
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-black/60">
              © {new Date().getFullYear()} {SITE.name}
            </p>
            <p className="mt-2 text-xs text-black/50">
              Desenvolvido por Guilherme Rech
              <br />
              Desenvolvimento de soluções digitais sob medida. 
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}