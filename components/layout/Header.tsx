"use client";

import { useState } from "react";
import Container from "./Container";
import { NAV } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gold)]/40 bg-[var(--foreground)]/95 backdrop-blur">

      <Container>
        <div className="relative flex h-16 items-center justify-center md:justify-between">

          {/* Desktop Nav (centralizado absoluto) */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-[var(--background)]/70 hover:text-[var(--background)] transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão Hamburger (mobile - direita) */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden text-white text-2xl transition"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        } bg-[var(--foreground)]`}
      >
        <div className="flex flex-col items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide text-white/80 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Filete dourado */}
      <div className="h-[2px] w-full bg-[var(--gold)]/60" />

    </header>
  );
}