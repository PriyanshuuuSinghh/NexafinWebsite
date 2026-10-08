import { cn } from "@/lib/format";

/** NexaFin mark: two offset strokes forming an "N" that reads as a rising path. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" className={cn("h-7 w-7", className)} fill="none">
      <rect width="28" height="28" rx="7" fill="currentColor" />
      <path d="M8.5 20V8.5l11 11V8" stroke="var(--color-accent-500)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", tone === "dark" ? "text-ink-900" : "text-white", className)}>
      <LogoMark className={tone === "dark" ? "text-ink-900" : "text-ink-800"} />
      <span className="text-[1.0625rem] font-semibold tracking-tight">NexaFin</span>
    </span>
  );
}
