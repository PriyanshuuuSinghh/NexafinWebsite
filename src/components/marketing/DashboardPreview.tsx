"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CreditCard, Landmark, LayoutGrid, PiggyBank, Receipt, Repeat, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { TrendChart } from "@/components/ui/TrendChart";
import { DemoTag } from "@/components/ui/DemoTag";
import { LogoMark } from "@/components/ui/Logo";
import { motionTokens } from "@/config/tokens";
import { demoAccounts, demoNetWorth, demoSpending, demoSubscriptions } from "@/data/demo-finance";
import { cn, money, moneyRound, pct } from "@/lib/format";

const rail = [LayoutGrid, Wallet, Receipt, Repeat, TrendingUp];
const accountIcon = { Checking: Landmark, Savings: PiggyBank, Credit: CreditCard, Investments: TrendingUp } as const;

const dining = demoSpending.find((s) => s.category === "Dining")!;
const diningChange = Math.round(((dining.amount - dining.previous) / dining.previous) * 100);

/** A floating glass card. Enters once, then drifts a few pixels. Absolute on lg+, in flow below. */
function Float({
  children,
  className,
  delay,
  duration = 8,
  phase = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  duration?: number;
  phase?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("lg:absolute", className)}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: motionTokens.ease }}
    >
      <div
        className="nf-float glass rounded-[var(--radius-float)] p-3.5"
        style={{ ["--float-dur" as string]: `${duration}s`, ["--float-delay" as string]: `${phase}s` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/**
 * Hero product composition: one glass Financial Overview panel, two faint plates behind it,
 * and three floating cards. All figures are demo data.
 */
export function DashboardPreview({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const last = demoNetWorth.series.length - 1;
  const [idx, setIdx] = useState(last);

  const value = demoNetWorth.series[idx];
  const baseIdx = Math.max(0, idx - 6);
  const base = demoNetWorth.series[baseIdx];
  const change = base ? ((value - base) / base) * 100 : 0;

  return (
    <div className={cn("relative", className)}>
      {/* Layered plates: depth, not content */}
      <div aria-hidden="true" className="glass absolute inset-0 hidden translate-x-4 -translate-y-4 rounded-[var(--radius-hero)] opacity-55 sm:block" />
      <div aria-hidden="true" className="glass absolute inset-0 hidden translate-x-8 -translate-y-8 rounded-[var(--radius-hero)] opacity-30 sm:block" />

      {/* Main panel */}
      <motion.div
        className="glass relative overflow-hidden rounded-[var(--radius-hero)]"
        initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: motionTokens.ease }}
      >
        <div className="flex">
          <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 bg-ink-900 py-4 sm:flex" aria-hidden="true">
            <LogoMark className="mb-4 h-7 w-7 text-ink-700" />
            {rail.map((Icon, i) => (
              <span key={i} className={cn("grid h-9 w-9 place-items-center rounded-lg", i === 0 ? "bg-white/10 text-white" : "text-white/40")}>
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </span>
            ))}
          </aside>

          <div className="min-w-0 flex-1">
            <header className="flex items-center gap-3 px-5 pb-1 pt-4 sm:px-7 sm:pt-5">
              <p className="text-sm font-semibold text-ink-900">Financial overview</p>
              <DemoTag>Demo data</DemoTag>
            </header>

            <div className="px-5 pt-3 sm:px-7">
              <p className="text-sm text-text-muted">Net worth</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="tabular text-[2rem] font-semibold leading-none tracking-tight text-ink-900 sm:text-[2.5rem]">{money(value)}</p>
                <span className="tabular inline-flex items-center gap-0.5 rounded-full border border-accent-100 bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700">
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                  {pct(change)}
                </span>
              </div>
              <p className="mt-2 text-xs text-text-subtle">
                {demoNetWorth.months[idx]} · {baseIdx === idx ? "start of period" : `change since ${demoNetWorth.months[baseIdx]}`}
              </p>
            </div>

            <div className="px-5 pt-3 sm:px-7">
              <TrendChart
                series={demoNetWorth.series}
                labels={demoNetWorth.months}
                onActiveChange={setIdx}
                className="h-40 sm:h-48 [&>div:first-child]:h-[calc(100%-1.5rem)]"
              />
            </div>

            <ul className="mt-3 grid grid-cols-2 border-t border-white/80 sm:grid-cols-4">
              {demoAccounts.map((a, i) => {
                const Icon = accountIcon[a.kind];
                return (
                  <li
                    key={a.id}
                    className={cn(
                      "flex items-center gap-2.5 px-4 py-3 sm:px-5",
                      i % 2 === 1 && "border-l border-white/80",
                      i > 1 && "border-t border-white/80 sm:border-t-0",
                      i > 0 && "sm:border-l sm:border-white/80",
                    )}
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 lg:max-[1359px]:hidden">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[11px] text-text-subtle">{a.kind}</p>
                      <p className={cn("tabular truncate text-[13px] font-semibold", a.balance < 0 ? "text-negative" : "text-ink-900")}>
                        {moneyRound(a.balance)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Floating cards: in flow on small screens, overlapping the panel from lg */}
      <div className="relative z-10 -mt-2 grid gap-3 px-3 sm:grid-cols-3 sm:px-5 lg:contents">
        <Float delay={0.9} duration={9} phase={0} className="w-full lg:right-[-1.25rem] lg:top-[-1.75rem] lg:w-[15.5rem] xl:right-[-2rem]">
          <div className="flex items-start gap-2.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-600 text-white">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <div>
              <p className="text-xs font-semibold text-blue-700">Spending insight</p>
              <p className="mt-1 text-[13px] leading-snug text-ink-900">Dining spending increased {diningChange}% this month.</p>
            </div>
          </div>
        </Float>

        <Float delay={1.05} duration={10} phase={-3} className="max-sm:hidden lg:left-[-2.5rem] lg:top-[46%] lg:w-[14.5rem] xl:left-[-3.5rem]">
          <p className="text-xs font-semibold text-blue-700">Accounts</p>
          <div className="mt-2 flex items-center gap-2.5">
            <span className="flex -space-x-1.5" aria-hidden="true">
              {([Landmark, PiggyBank, CreditCard, TrendingUp] as const).map((Icon, i) => (
                <span key={i} className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-blue-50 text-blue-700 shadow-sm">
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              ))}
            </span>
            <p className="text-[13px] leading-snug text-ink-900">{demoAccounts.length} connected accounts</p>
          </div>
        </Float>

        <Float delay={1.2} duration={9} phase={-5} className="w-full lg:bottom-[-4.6rem] lg:right-6 lg:w-[16rem] xl:right-4">
          <div className="flex items-start gap-2.5">
            <LogoMark className="h-7 w-7 shrink-0 text-ink-900" />
            <div>
              <p className="text-xs font-semibold text-blue-700">Financial intelligence</p>
              <p className="mt-1 text-[13px] leading-snug text-ink-900">{demoSubscriptions.length} recurring subscriptions detected.</p>
            </div>
          </div>
        </Float>
      </div>
    </div>
  );
}
