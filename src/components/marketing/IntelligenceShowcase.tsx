"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Repeat, TrendingDown, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DemoTag } from "@/components/ui/DemoTag";
import { motionTokens } from "@/config/tokens";
import { demoSpending, demoSubscriptions } from "@/data/demo-finance";
import { cn, moneyRound } from "@/lib/format";

// Flexible spending only: fixed housing costs would flatten every other bar.
const rows = demoSpending.filter((s) => s.category !== "Housing");
const scale = Math.max(...rows.flatMap((r) => [r.amount, r.previous])) * 1.08;
const change = (category: string) => {
  const r = rows.find((x) => x.category === category)!;
  return Math.round(((r.amount - r.previous) / r.previous) * 100);
};

// Every insight is derived from the demo data above, never typed in separately.
const insights = [
  { id: "dining", category: "Dining", icon: TrendingUp, text: `Dining spending increased ${change("Dining")}% this month.`, chip: `+${change("Dining")}%` },
  { id: "subs", category: "Subscriptions", icon: Repeat, text: `${demoSubscriptions.length} recurring subscriptions detected.`, chip: `${demoSubscriptions.length} recurring` },
  { id: "groceries", category: "Groceries", icon: TrendingDown, text: `Groceries are ${Math.abs(change("Groceries"))}% lower than last month.`, chip: `${change("Groceries")}%` },
];

/** Homepage intelligence teaser: three insights drive one chart. */
export function IntelligenceShowcase() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(insights[0].id);
  const current = insights.find((i) => i.id === activeId)!;

  return (
    <Section id="intelligence" tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            title="From financial data to useful decisions."
            description="Nixafin watches for changes, patterns and recurring costs, then says what it found in plain language."
          />

          <ul className="mt-10 border-t border-line" aria-label="Example insights">
            {insights.map(({ id, icon: Icon, text }) => {
              const on = id === activeId;
              return (
                <li key={id} className="border-b border-line">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActiveId(id)}
                    onMouseEnter={() => setActiveId(id)}
                    onFocus={() => setActiveId(id)}
                    className="group relative flex w-full items-center gap-4 py-4 pl-4 text-left"
                  >
                    <span aria-hidden="true" className={cn("absolute inset-y-3 left-0 w-0.5 rounded-full transition-colors duration-200", on ? "bg-blue-600" : "bg-transparent")} />
                    <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors duration-200", on ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700")}>
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className={cn("text-[0.9375rem] transition-colors duration-200", on ? "font-medium text-ink-900" : "text-text-muted group-hover:text-ink-900")}>{text}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <Link href="/intelligence" className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-blue-600 hover:text-blue-700">
            See how intelligence works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[var(--radius-hero)] border border-line-strong bg-surface shadow-[var(--shadow-panel)]">
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
              <div>
                <p className="text-sm font-semibold text-ink-900">Flexible spending</p>
                <p className="mt-0.5 text-xs text-text-subtle">This month compared with last month</p>
              </div>
              <DemoTag>Demo data</DemoTag>
            </div>

            <ul className="px-5 py-3 sm:px-7" role="img" aria-label={`Spending by category, demo data. ${current.text}`}>
              {rows.map((r, i) => {
                const on = r.category === current.category;
                return (
                  <li key={r.category} className="grid grid-cols-[5.75rem_1fr] items-center gap-x-4 gap-y-1 py-3.5 sm:grid-cols-[6.5rem_1fr_4.5rem]">
                    <span className={cn("text-sm transition-colors duration-200", on ? "font-medium text-ink-900" : "text-text-muted")}>{r.category}</span>
                    <div className="relative h-3 rounded-full bg-sunken">
                      <motion.div
                        className={cn("h-full rounded-full transition-colors duration-300", on ? "bg-blue-600" : "bg-blue-200")}
                        style={{ width: `${(r.amount / scale) * 100}%`, originX: 0 }}
                        initial={reduce ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: motionTokens.ease }}
                      />
                      {/* last month marker */}
                      <span aria-hidden="true" className="absolute -top-1.5 bottom-[-6px] w-0.5 rounded-full bg-ink-900/60" style={{ left: `${(r.previous / scale) * 100}%` }} />
                    </div>
                    <span className={cn("tabular text-right text-sm max-sm:hidden", on ? "font-semibold text-ink-900" : "text-text-muted")}>{moneyRound(r.amount)}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-between gap-4 border-t border-line bg-paper px-5 py-3.5 sm:px-7">
              <p className="flex items-center gap-2 text-xs text-text-muted">
                <span aria-hidden="true" className="h-3.5 w-0.5 rounded-full bg-ink-900/60" /> Last month
              </p>
              <p key={current.id} className="tabular rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 motion-safe:animate-[nf-pop_0.35s_var(--ease-out-quart)]">
                {current.category} · {current.chip}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
