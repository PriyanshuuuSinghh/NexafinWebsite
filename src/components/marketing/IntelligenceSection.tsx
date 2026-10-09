import { CalendarClock, Repeat, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DemoTag } from "@/components/ui/DemoTag";
import { demoCashFlow } from "@/data/demo-finance";
import { cn } from "@/lib/format";

const insights = [
  { icon: TrendingUp, text: "Your dining spending increased this month.", tone: "text-negative bg-negative-soft" },
  { icon: Repeat, text: "You have 4 recurring subscriptions.", tone: "text-ink-800 bg-sunken" },
  { icon: CalendarClock, text: "Your cash flow is strongest during the second week.", tone: "text-accent-700 bg-accent-50" },
];

export function IntelligenceSection() {
  return (
    <Section id="intelligence">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            title="From raw transactions to useful insight."
            description="Nixafin looks across your data for changes, patterns and recurring costs, then explains them in plain language."
          />
          <p className="mt-6 text-sm text-text-subtle">The examples shown here are illustrative demo output.</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[var(--radius-product)] border border-line-strong bg-white shadow-[var(--shadow-panel)]">
            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-ink-900">Cash flow by week</p>
                <DemoTag />
              </div>
              <div
                className="mt-6 flex h-40 items-end gap-3 sm:gap-5"
                role="img"
                aria-label="Weekly cash flow bar chart, demo data. The second week is strongest."
              >
                {demoCashFlow.map((w, i) => (
                  <div
                    key={w.label}
                    className={cn("nf-grow flex-1 rounded-t-[4px]", i === 1 ? "bg-accent-600" : "bg-ink-800/75")}
                    style={{ height: `${w.value}%`, animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex gap-3 text-xs text-text-subtle sm:gap-5">
                {demoCashFlow.map((w) => <span key={w.label} className="flex-1 text-center">{w.label}</span>)}
              </div>
            </div>

            <ul className="divide-y divide-line border-t border-line bg-paper">
              {insights.map(({ icon: Icon, text, tone }) => (
                <li key={text} className="flex items-center gap-3 px-5 py-4 sm:px-7">
                  <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", tone)}>
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <p className="text-sm text-ink-900">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
