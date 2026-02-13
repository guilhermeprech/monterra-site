import Container from "./Container";
import { NAV, SITE } from "@/lib/constants";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gold)]/40 bg-[var(--foreground)]/95 backdrop-blur">
      <Container>
        {/* relative pra permitir centralizar o nav absoluto */}
        <div className="relative flex h-16 items-center">
          {/* ESQUERDA */}
          <a href="#" className="flex items-center">
            <div className="h-11 w-11 rounded-full overflow-hidden border border-white/30 transition hover:scale-105 duration-300">
                <Image
                src="/brand/logo.png"
                alt="Monterra Queijos"
                width={44}
                height={44}
                className="h-full w-full object-cover"
                priority
                />
            </div>
          </a>
          {/* CENTRO (sempre no meio da tela) */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--background)]/70 hover:text-[var(--background)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </Container>

      <div className="h-[2px] w-full bg-[var(--gold)]/60" />
    </header>
  );
}