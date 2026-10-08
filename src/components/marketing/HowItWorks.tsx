import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/data/how-it-works";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Reveal>
        <SectionHeading title="From scattered accounts to a clear decision." />
      </Reveal>
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {steps.map((s, i) => (
          <li key={s.id} className="relative lg:pr-10">
            <Reveal delay={i * 0.07}>
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-900 text-xs font-semibold text-white">{i + 1}</span>
                {i < steps.length - 1 && <span aria-hidden="true" className="hidden h-px flex-1 bg-line-strong lg:block" />}
              </div>
              <h3 className="mt-6 text-h3 text-ink-900">{s.title}</h3>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-text-muted">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
