import Link from "next/link";
import { cn } from "@/lib/format";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkSecondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] font-medium transition-[background-color,border-color,color,box-shadow] duration-200 select-none";

const variants: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_1px_0_rgb(255_255_255/0.12)_inset]",
  secondary: "bg-surface text-ink-900 border border-line-strong hover:border-line-strong hover:bg-paper",
  ghost: "text-text-muted hover:text-ink-900 hover:bg-paper",
  onDark: "bg-white text-ink-950 hover:bg-white/90",
  onDarkSecondary: "text-white border border-white/25 hover:border-white/40 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({ href, variant = "primary", size = "md", className, children, ...rest }: Props) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}
