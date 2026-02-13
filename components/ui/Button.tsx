import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
      : "border border-[var(--foreground)]/15 bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}