import Image from "next/image";
import base from "@/public/images/site/selo-base.png";
import arvore from "@/public/images/site/selo-tree.png";
import nome from "@/public/images/site/selo-word.png";
import subtitulo from "@/public/images/site/selo-sub.png";

/**
 * Logo oficial Monterra (selo com fundo), montado em camadas para que cada
 * parte possa ser animada: selo, árvore, nome e subtítulo. As camadas têm o
 * mesmo fundo branco do selo, então a montagem final é idêntica ao original.
 * Posições em % do arquivo original recortado (704 × 441 px).
 */
const LAYERS = [
  { key: "base", src: base, left: 0, top: 0, width: 100 },
  { key: "tree", src: arvore, left: 40.057, top: 8.163, width: 21.023 },
  { key: "word", src: nome, left: 7.102, top: 36.961, width: 86.364 },
  { key: "sub", src: subtitulo, left: 22.727, top: 59.864, width: 54.688 },
] as const;

type Props = {
  /** Texto alternativo do conjunto. Vazio quando for decorativo. */
  label?: string;
  preload?: boolean;
  sizes?: string;
  className?: string;
};

export default function BrandMark({
  label = "",
  preload = false,
  sizes = "600px",
  className = "",
}: Props) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={`relative block aspect-[704/441] ${className}`}
    >
      {LAYERS.map((layer) => (
        <Image
          key={layer.key}
          src={layer.src}
          alt=""
          preload={preload}
          sizes={sizes}
          className={`bm-${layer.key} absolute h-auto max-w-none`}
          style={{
            left: `${layer.left}%`,
            top: `${layer.top}%`,
            width: `${layer.width}%`,
          }}
        />
      ))}
    </span>
  );
}
