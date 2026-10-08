import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional right-side slot for a visual element */
  visual?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, visual }: Props) {
  return (
    <section className="relative bg-hero pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid [mask-image:linear-gradient(to_bottom,#000_20%,transparent)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className={visual ? "grid gap-12 lg:grid-cols-2 lg:items-center" : "max-w-3xl"}>
          <div>
            {eyebrow && (
              <Reveal y={8}>
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">{eyebrow}</p>
              </Reveal>
            )}
            <Reveal y={10}>
              <h1 className="text-display text-balance text-ink-950">{title}</h1>
            </Reveal>
            {description && (
              <Reveal delay={0.08} y={10}>
                <p className="mt-6 max-w-xl text-lead text-text-muted text-pretty">{description}</p>
              </Reveal>
            )}
          </div>
          {visual && (
            <Reveal delay={0.16} y={16}>
              {visual}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
