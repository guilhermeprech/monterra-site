import { PRODUCTS, SITE } from "@/lib/constants";

/** Dados estruturados apenas com informações confirmadas. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.fullName,
    description: SITE.description,
    ...(SITE.url && {
      url: SITE.url,
      logo: `${SITE.url}/images/logo-sem-fundo.png`,
    }),
    sameAs: [SITE.instagram],
    areaServed: SITE.region,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caxias do Sul",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    award:
      "Medalha Super Ouro — 1º Concurso de Queijos Artesanais do Rio Grande do Sul (2022)",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.whatsappE164,
      contactType: "sales",
      availableLanguage: "Portuguese",
    },
    makesOffer: PRODUCTS.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: `Queijo ${p.name}`,
        description: p.desc,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
