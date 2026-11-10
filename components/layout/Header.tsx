"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/constants";
import selo from "@/public/images/site/monterra-selo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Header transparente sobre o hero; depois assume o tom da seção que está
  // por baixo (verde nas seções escuras marcadas com data-tone="dark").
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
      const probe = (headerRef.current?.offsetHeight ?? 72) / 2;
      const dark = Array.from(
        document.querySelectorAll<HTMLElement>('[data-tone="dark"]'),
      ).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom >= probe;
      });
      setOverDark(dark);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Menu mobile: trava o scroll, foco, Esc, Tab circular e fecha ao ir para desktop.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !headerRef.current) return;

      const focusables = headerRef.current.querySelectorAll<HTMLElement>(
        "[data-menu-focus]",
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  // Header claro (fundo branco) só quando rolado sobre uma seção clara.
  const light = scrolled && !open && !overDark;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500 ${
        open
          ? "border-b border-cream/10 bg-forest-950 text-cream"
          : light
            ? "border-b border-forest-900/10 bg-paper/95 text-forest-950 backdrop-blur-md"
            : scrolled
              ? "border-b border-cream/10 bg-forest-950/85 text-cream backdrop-blur-md"
              : "border-b border-transparent bg-transparent text-cream"
      }`}
    >
      <div className="container-site flex h-(--header-h) items-center justify-between">
        {/* Marca discreta: só aparece depois do hero (onde o logo é protagonista). */}
        <a
          href="#inicio"
          data-menu-focus
          aria-label={`${SITE.fullName} — voltar ao início`}
          className={`block transition-opacity duration-500 ${
            scrolled || open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          tabIndex={scrolled || open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          <Image
            src={selo}
            alt=""
            sizes="104px"
            className="h-auto w-[88px] md:w-[104px]"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 font-display text-[0.8125rem] tracking-[0.14em]"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-(--ease-soft) group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-10 items-center rounded-full border px-5 font-display text-[0.8125rem] tracking-[0.14em] transition-colors duration-300 ${
                  light
                    ? "border-forest-900/30 hover:bg-forest-900 hover:text-cream"
                    : "border-cream/50 hover:bg-cream hover:text-forest-950"
                }`}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          data-menu-focus
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative -mr-3 flex h-12 w-12 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-7">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-(--ease-soft) ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-(--ease-soft) ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-(--header-h) bottom-0 bg-forest-950 text-cream lg:hidden"
      >
        <nav
          aria-label="Menu mobile"
          className="container-site flex h-full flex-col justify-between pb-10 pt-10"
        >
          <ul className="flex flex-col">
            {NAV.map((item, i) => (
              <li key={item.href} className="border-b border-cream/10">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  data-menu-focus
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-5 font-display text-[1.75rem] leading-none"
                >
                  <span className="font-serif text-[1rem] text-gold-soft tabular-nums">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-menu-focus
              className="py-1 hover:text-cream"
            >
              WhatsApp · {SITE.whatsappDisplay}
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-menu-focus
              className="py-1 hover:text-cream"
            >
              Instagram · {SITE.instagramHandle}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
