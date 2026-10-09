import { cn } from "@/lib/format";

/** Marks illustrative UI so it is never mistaken for real Nixafin data. */
export function DemoTag({
  className,
  tone = "light",
  children = "Demo data",
}: {
  className?: string;
  tone?: "light" | "dark";
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
        tone === "light" ? "border-line-strong bg-white/70 text-text-muted" : "border-white/20 bg-white/5 text-white/60",
        className,
      )}
    >
      {children}
    </span>
  );
}
