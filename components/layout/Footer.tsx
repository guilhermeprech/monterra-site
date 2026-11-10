import Image from "next/image";
import { NAV, SITE } from "@/lib/constants";
import logo from "@/public/images/site/monterra-selo.png";

export default function Footer() {
  return (
    <footer data-tone="dark" className="grain bg-forest-950 text-cream">
      <div className="container-site pt-20 pb-10 md:pt-28">
        <div className="flex flex-col items-center text-center">
          <Image
            src={logo}
            alt={SITE.fullName}
            sizes="320px"
            className="h-auto w-[200px] md:w-[240px]"
          />
          <p className="mt-8 font-display text-[0.8125rem] tracking-[0.16em] text-cream/60">
            Queijos artesanais da {SITE.region}
          </p>
        </div>

        <nav aria-label="Rodapé" className="mt-14">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 font-display text-[0.8125rem] tracking-[0.14em]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-cream/70 transition-colors hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition-colors hover:text-cream">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition-colors hover:text-cream">
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-cream/10 pt-8 text-sm text-cream/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.fullName}</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.g9code.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              G9Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
