import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// O sitemap exige URLs absolutas: só é preenchido quando o domínio oficial
// estiver definido em NEXT_PUBLIC_SITE_URL.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE.url) return [];

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
