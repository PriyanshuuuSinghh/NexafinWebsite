"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, CreditCard, Landmark, PiggyBank, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DemoTag } from "@/components/ui/DemoTag";
import { LogoMark } from "@/components/ui/Logo";
import { motionTokens } from "@/config/tokens";
import { demoAccounts, demoNetWorth, demoSpending } from "@/data/demo-finance";
import { cn, money, moneyRound, pct } from "@/lib/format";

const accountIcon = { Checking: Landmark, Savings: PiggyBank, Credit: CreditCard, Investments: TrendingUp } as const;
// Blue hierarchy; teal marks the one small recurring category.
const palette = ["var(--color-ink-800)", "var(--color-blue-600)", "var(--color-blue-400)", "var(--color-blue-200)", "var(--color-accent-500)"];

const total = demoSpending.reduce((n, s) => n + s.amount, 0);
const segments = (() => {
  let offset = 0;
  return demoSpending.map((s, i) => {
    const share = (s.amount / total) * 100;
    const seg = { ...s, share, offset, color: palette[i] };
    offset += share;
    return seg;
  });
})();

const assets = demoAccounts.filter((a) => a.balance > 0).reduce((n, a) => n + a.balance, 0);
const liabilities = demoAccounts.filter((a) => a.balance < 0).reduce((n, a) => n + a.balance, 0);
const recent = demoNetWorth.series.slice(-6);
const recentMonths = demoNetWorth.months.slice(-6);

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-medium text-text-muted">{children}</h3>;
}

/** Homepage platform teaser: one wide product window instead of tabs or feature cards. */
export function PlatformShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const a = active === null ? null : segments[active];
  const lo = Math.min(...recent);
  const hi = Math.max(...recent);

  return (
    <Section id="platform" tone="surface">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading title="One financial picture." description="Accounts, balances, spending and net worth, together in one clear view." />
        </Reveal>
        <Reveal delay={0.06}>
          <Link href="/platform" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-blue-600 hover:text-blue-700">
            Explore the platform
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative isolate mt-12 lg:mt-16">
        <div
          aria-hidden="true"
          className="absolute -inset-x-[var(--spacing-gutter)] -inset-y-10 -z-10 bg-[radial-gradient(50%_60%_at_50%_45%,rgb(59_130_246/0.14),transparent_72%)]"
        />
        <div className="overflow-hidden rounded-[var(--radius-hero)] border border-line-strong bg-surface shadow-[var(--shadow-float)]">
          <header className="flex items-center gap-3 border-b border-line px-5 py-3.5 sm:px-7">
            <LogoMark className="h-6 w-6 text-ink-900" />
            <p className="text-sm font-semibold text-ink-900">Financial overview</p>
            <DemoTag className="ml-auto">Demo data</DemoTag>
          </header>

          <div className="grid divide-y divide-line lg:grid-cols-[1.15fr_1.05fr_0.9fr] lg:divide-x lg:divide-y-0">
            {/* Accounts */}
            <div className="p-5 sm:p-7">
              <ColumnTitle>Accounts</ColumnTitle>
              <ul className="mt-4 divide-y divide-line">
                {demoAccounts.map((acc) => {
                  const Icon = accountIcon[acc.kind];
                  return (
                    <li key={acc.id} className="flex items-center gap-3 py-3.5 first:pt-1">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[0.9375rem] font-medium text-ink-900">{acc.name}</p>
                        <p className="text-xs text-text-subtle">{acc.kind}</p>
                      </div>
                      <p className={cn("tabular text-[0.9375rem] font-semibold", acc.balance < 0 ? "text-negative" : "text-ink-900")}>{money(acc.balance)}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Spending */}
            <div className="p-5 sm:p-7">
              <ColumnTitle>Spending this month</ColumnTitle>
              <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row lg:flex-col xl:flex-row">
                <div className="relative h-40 w-40 shrink-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" role="img" aria-label="Spending by category, demo data">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-sunken)" strokeWidth="11" />
                    {segments.map((s, i) => (
                      <circle
                        key={s.category}
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke={s.color}
                        pathLength={100}
                        strokeDasharray={`${Math.max(s.share - 1.2, 0.2)} ${100 - Math.max(s.share - 1.2, 0.2)}`}
                        strokeDashoffset={-s.offset}
                        strokeWidth={active === i ? 13.5 : 11}
                        opacity={active === null || active === i ? 1 : 0.3}
                        className="cursor-pointer transition-[stroke-width,opacity] duration-200"
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                      />
                    ))}
                  </svg>
                  <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
                    <div>
                      <p className="text-[11px] text-text-subtle">{a ? a.category : "Total"}</p>
                      <p className="tabular text-lg font-semibold tracking-tight text-ink-900">{moneyRound(a ? a.amount : total)}</p>
                    </div>
                  </div>
                </div>

                <ul className="w-full min-w-0 flex-1 space-y-1">
                  {segments.map((s, i) => (
                    <li key={s.category}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(i)}
                        onBlur={() => setActive(null)}
                        className={cn(
                          "flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                          active === i ? "bg-blue-50" : "hover:bg-paper",
                        )}
                      >
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
                        <span className="flex-1 truncate text-ink-900">{s.category}</span>
                        <span className="tabular text-text-muted">{moneyRound(s.amount)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Net worth */}
            <div className="flex flex-col p-5 sm:p-7">
              <ColumnTitle>Net worth</ColumnTitle>
              <p className="tabular mt-3 text-[2rem] font-semibold leading-none tracking-tight text-ink-900">{money(demoNetWorth.total)}</p>
              <span className="tabular mt-3 inline-flex w-fit items-center gap-0.5 rounded-full border border-accent-100 bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                {pct(demoNetWorth.changePct)}
              </span>

              <p className="mt-6 text-[11px] text-text-subtle">Last 6 months</p>
              <div className="mt-2 flex h-24 items-end gap-2.5" role="img" aria-label="Net worth, last six months, demo data">
                {recent.map((v, i) => (
                  <motion.div
                    key={recentMonths[i]}
                    className={cn("flex-1 rounded-t-[5px]", i === recent.length - 1 ? "bg-blue-600" : "bg-blue-200")}
                    style={{ height: `${35 + ((v - lo) / (hi - lo)) * 65}%`, originY: 1 }}
                    initial={reduce ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: motionTokens.ease }}
                  />
                ))}
              </div>
              <div className="mt-2 flex gap-2.5 text-[11px] text-text-subtle">
                {recentMonths.map((m) => (
                  <span key={m} className="flex-1 text-center">{m}</span>
                ))}
              </div>

              <dl className="mt-auto space-y-2 border-t border-line pt-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-text-muted">Assets</dt>
                  <dd className="tabular font-medium text-ink-900">{money(assets)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">Liabilities</dt>
                  <dd className="tabular font-medium text-negative">{money(liabilities)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
