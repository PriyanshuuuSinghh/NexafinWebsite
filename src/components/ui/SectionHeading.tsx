import { cn } from "@/lib/format";

type Props = {
  title: string;
  description?: string;
  /** Small plain-text label above the title. Use only when it adds meaning. */
  kicker?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ title, description, kicker, tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker && (
        <p className={cn("mb-4 text-sm font-medium", dark ? "text-accent-500" : "text-accent-700")}>{kicker}</p>
      )}
      <h2 className={cn("text-h2 text-balance", dark ? "text-white" : "text-ink-900")}>{title}</h2>
      {description && (
        <p className={cn("mt-5 text-lead text-pretty", dark ? "text-white/70" : "text-text-muted")}>{description}</p>
      )}
    </div>
  );
}
