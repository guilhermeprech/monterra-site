export const SITE = {
  name: "Monterra",
  fullName: "Monterra Queijos Artesanais",
  region: "Serra Gaúcha",
  description:
    "Queijos artesanais feitos em Caxias do Sul, na Serra Gaúcha. Medalha Super Ouro no 1º Concurso de Queijos Artesanais do RS.",
  whatsapp: "https://wa.me/5554981413763",
  whatsappDisplay: "(54) 98141-3763",
  whatsappE164: "+5554981413763",
  instagram: "https://www.instagram.com/monterraqueijos",
  instagramHandle: "@monterraqueijos",
  email: "contato@monterraqueijos.com.br",
  /**
   * Domínio oficial ainda não confirmado. Defina NEXT_PUBLIC_SITE_URL
   * (ex.: https://dominio-oficial.com.br) para ativar canonical, sitemap e OG absolutos.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || undefined,
} as const;

export const NAV = [
  { label: "História", href: "#historia" },
  { label: "Prêmios", href: "#premios" },
  { label: "Processo", href: "#processo" },
  { label: "Queijos", href: "#queijos" },
  { label: "Contato", href: "#contato" },
] as const;

export type Product = {
  name: string;
  /** Atributo factual exibido em destaque (maturação ou textura). */
  detailLabel: string;
  detailValue: string;
  desc: string;
  image: string;
  alt: string;
  /** Enquadramento da foto no slide (CSS object-position). */
  focus: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Origem",
    detailLabel: "Maturação",
    detailValue: "20 dias",
    desc: "Jovem, delicado e macio, com notas lácticas.",
    image: "/images/origem.jpg",
    alt: "Queijo Origem da Monterra, peça inteira com rótulo, sobre tábua de madeira em fundo escuro",
    focus: "50% 62%",
  },
  {
    name: "Raízes",
    detailLabel: "Maturação",
    detailValue: "120 dias",
    desc: "Sabor mais apurado, mas ainda macio, com uma leve picância.",
    image: "/images/raizes.jpg",
    alt: "Queijo Raízes da Monterra, peça inteira de casca dourada com rótulo azul, ao lado de ramos de alecrim",
    focus: "50% 50%",
  },
  {
    name: "Artesano",
    detailLabel: "Textura",
    detailValue: "Semidura",
    desc: "Sabor acentuado e aroma característico.",
    image: "/images/site/artesano.jpg",
    alt: "Peças do queijo Artesano da Monterra com o nome gravado na casca, diante das prateleiras de maturação",
    focus: "44% 50%",
  },
];
