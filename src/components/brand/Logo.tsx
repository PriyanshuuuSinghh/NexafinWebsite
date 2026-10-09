import Image from "next/image";
import { cn } from "@/lib/format";

/**
 * Nixafin Logo component — uses the official provided logo assets with transparent backgrounds.
 *
 * tone="light"  → wordmark on light/white backgrounds  (nixafin-logo-light-transparent.png)
 * tone="dark"   → wordmark on dark/navy backgrounds    (nixafin-logo-dark-transparent.png)
 * tone="mark"   → icon-only mark (no wordmark)         (nixafin-mark.png)
 */
export type LogoTone = "light" | "dark" | "mark";

type LogoProps = {
  tone?: LogoTone;
  /** Pixel height of the rendered logo. Width scales proportionally. */
  height?: number;
  className?: string;
  /** Override alt text if needed */
  alt?: string;
};

const assets: Record<LogoTone, { src: string; width: number; height: number; defaultH: number }> = {
  light: { src: "/brand/logo/nixafin-logo-light-transparent.png", width: 400, height: 160, defaultH: 36 },
  dark:  { src: "/brand/logo/nixafin-logo-dark-transparent.png",  width: 400, height: 160, defaultH: 36 },
  mark:  { src: "/brand/logo/nixafin-mark.png",                   width: 200, height: 200, defaultH: 36 },
};

export function Logo({ tone = "dark", height, className, alt = "Nixafin" }: LogoProps) {
  const asset = assets[tone];
  const h = height ?? asset.defaultH;
  // Keep natural aspect ratio (400x160 is 2.5:1 ratio, height=48 gives 120px width)
  const w = Math.round(h * (asset.width / asset.height));

  return (
    <Image
      src={asset.src}
      alt={alt}
      width={w}
      height={h}
      className={cn("object-contain select-none bg-transparent mix-blend-normal border-0 shadow-none ring-0 outline-none", className)}
      priority
      draggable={false}
    />
  );
}

/**
 * Convenience alias: just the icon mark, square.
 */
export function LogoMark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <Logo tone="mark" height={size} className={className} />
  );
}
