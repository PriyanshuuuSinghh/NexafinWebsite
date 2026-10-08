import { cn } from "@/lib/format";
import { Container } from "./Container";

type Props = {
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: "paper" | "surface" | "dark" | "navy" | "sky";
  /** Decorative layer rendered behind the content (e.g. FlowLines). Clipped to the section. */
  backdrop?: React.ReactNode;
  children: React.ReactNode;
};

const tones = {
  paper: "bg-paper text-text",
  surface: "bg-surface text-text",
  dark: "bg-ink-950 text-white",
  navy: "bg-navy text-white",
  sky: "bg-sky-glow text-text",
};

export function Section({ id, className, containerClassName, tone = "paper", backdrop, children }: Props) {
  return (
    <section id={id} className={cn("relative py-[var(--spacing-section)]", backdrop != null && "isolate overflow-hidden", tones[tone], className)}>
      {backdrop && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          {backdrop}
        </div>
      )}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
