import type { Metadata, Viewport } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

// Cinzel: capitulares romanas, próximas do letreiro do logo (títulos e navegação).
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cinzel",
  display: "swap",
});

// EB Garamond: serifada clássica para o texto corrido e os destaques em itálico.
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const title = `${SITE.fullName} | ${SITE.region}`;
// Imagem de compartilhamento: app/opengraph-image.jpg e app/twitter-image.jpg
// (convenção de arquivos do Next — gera og:image e twitter:image automaticamente).

export const metadata: Metadata = {
  // Só define base/canonical quando o domínio oficial estiver configurado.
  ...(SITE.url && {
    metadataBase: new URL(SITE.url),
    alternates: { canonical: "/" },
  }),
  title,
  description: SITE.description,
  applicationName: SITE.fullName,
  keywords: [
    "queijo artesanal",
    "Serra Gaúcha",
    "Monterra",
    "queijo maturado",
    "Origem",
    "Raízes",
    "Artesano",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.fullName,
    title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

/**
 * Roda antes da pintura: marca JS ativo e decide se a abertura toca.
 * A abertura aparece uma vez por sessão (e nunca com movimento reduzido).
 * Enquanto toca, trava o scroll e volta ao topo para o logo encaixar no hero.
 */
const INTRO_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');var play=true;try{if(matchMedia('(prefers-reduced-motion: reduce)').matches||sessionStorage.getItem('monterra-intro'))play=false;else sessionStorage.setItem('monterra-intro','1')}catch(e){}if(!play){d.classList.add('intro-off');return}d.classList.add('intro-lock');if('scrollRestoration' in history)history.scrollRestoration='manual';window.scrollTo(0,0);setTimeout(function(){d.classList.remove('intro-lock')},3600)})()`;

export const viewport: Viewport = {
  themeColor: "#1d2b1f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${garamond.variable}`}
      // A classe "js" é adicionada antes da hidratação pelo script abaixo.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
