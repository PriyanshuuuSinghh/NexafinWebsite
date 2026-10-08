"use client";

import { useState } from "react";
import { Landmark, Receipt, PieChart, CalendarClock, Repeat, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DemoTag } from "@/components/ui/DemoTag";
import { TrendChart } from "@/components/ui/TrendChart";
import { platformTabs, type PlatformTabId } from "@/data/platform";
import { demoAccounts, demoBills, demoNetWorth, demoSpending, demoSubscriptions, demoTransactions } from "@/data/demo-finance";
import { cn, money, moneyRound } from "@/lib/format";

const tabIcons: Record<PlatformTabId, typeof Landmark> = {
  accounts: Landmark,
  transactions: Receipt,
  spending: PieChart,
  bills: CalendarClock,
  subscriptions: Repeat,
  networth: TrendingUp,
};

function Row({ left, sub, right, tone }: { left: string; sub?: string; right: string; tone?: "neg" | "pos" }) {
  return (
    <li className="flex items-center justify-between gap-4 py-3.5">
      <div className="min-w-0">
        <p className="truncate text-[0.9375rem] font-medium text-ink-900">{left}</p>
        {sub && <p className="text-xs text-text-subtle">{sub}</p>}
      </div>
      <p className={cn("tabular shrink-0 text-[0.9375rem] font-medium", tone === "neg" ? "text-negative" : tone === "pos" ? "text-accent-700" : "text-ink-900")}>{right}</p>
    </li>
  );
}

function Panel({ id }: { id: PlatformTabId }) {
  switch (id) {
    case "accounts":
      return (
        <ul className="divide-y divide-line">
          {demoAccounts.map((a) => (
            <Row key={a.id} left={a.name} sub={a.kind} right={money(a.balance)} tone={a.balance < 0 ? "neg" : undefined} />
          ))}
        </ul>
      );
    case "transactions":
      return (
        <ul className="divide-y divide-line">
          {demoTransactions.map((t) => (
            <Row key={t.id} left={t.merchant} sub={`${t.category} · ${t.date}`} right={`${t.amount > 0 ? "+" : ""}${money(t.amount)}`} tone={t.amount > 0 ? "pos" : undefined} />
          ))}
        </ul>
      );
    case "spending":
      const max = Math.max(...demoSpending.map((s) => s.amount));
      return (
        <ul className="space-y-5 py-2">
          {demoSpending.map((s) => (
            <li key={s.category}>
              <div className="mb-2 flex justify-between text-[0.9375rem]">
                <span className="font-medium text-ink-900">{s.category}</span>
                <span className="tabular text-text-muted">{moneyRound(s.amount)}</span>
              </div>
              <div className="h-2 rounded-full bg-sunken">
                <div className="h-full rounded-full bg-ink-800 transition-[width] duration-700" style={{ width: `${(s.amount / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      );
    case "bills":
      return (
        <ul className="divide-y divide-line">
          {demoBills.map((b) => (
            <Row key={b.id} left={b.name} sub={`${b.status} · ${b.due}`} right={money(b.amount)} tone={b.status === "Due soon" ? "neg" : undefined} />
          ))}
        </ul>
      );
    case "subscriptions": {
      const yearly = demoSubscriptions.reduce((n, s) => n + (s.cycle === "Annual" ? s.amount : s.amount * 12), 0);
      return (
        <>
          <ul className="divide-y divide-line">
            {demoSubscriptions.map((s) => (
              <Row key={s.id} left={s.name} sub={s.cycle} right={money(s.amount)} />
            ))}
          </ul>
          <p className="mt-2 flex justify-between border-t border-line-strong pt-4 text-sm">
            <span className="text-text-muted">Estimated yearly cost</span>
            <span className="tabular font-semibold text-ink-900">{money(yearly)}</span>
          </p>
        </>
      );
    }
    case "networth":
      return (
        <div>
          <p className="tabular text-3xl font-semibold tracking-tight text-ink-900">{money(demoNetWorth.total)}</p>
          <TrendChart series={demoNetWorth.series} labels={demoNetWorth.months} className="mt-6 h-52 [&>div:first-child]:h-[calc(100%-1.5rem)]" />
        </div>
      );
  }
}

export function PlatformSection() {
  const [active, setActive] = useState<PlatformTabId>("accounts");
  const tab = platformTabs.find((t) => t.id === active)!;

  return (
    <Section id="platform" tone="surface">
      <Reveal>
        <SectionHeading
          title="One platform for the whole picture."
          description="Select an area to see how NexaFin organises it. Everything below uses fictional demo data."
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-12">
        <div role="tablist" aria-label="Platform areas" aria-orientation="vertical" className="-mx-[var(--spacing-gutter)] flex gap-1 overflow-x-auto px-[var(--spacing-gutter)] pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
          {platformTabs.map((t) => {
            const Icon = tabIcons[t.id];
            const on = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={on}
                aria-controls="platform-panel"
                onClick={() => setActive(t.id)}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-[var(--radius-control)] border px-4 py-3 text-left text-[0.9375rem] font-medium transition-colors",
                  on ? "border-line-strong bg-paper text-ink-900" : "border-transparent text-text-muted hover:text-ink-900",
                )}
              >
                <Icon className={cn("h-[18px] w-[18px]", on ? "text-blue-600" : "")} strokeWidth={1.75} />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="platform-panel"
          aria-labelledby={`tab-${active}`}
          className="rounded-[var(--radius-product)] border border-line bg-paper p-4 sm:p-6"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-h3 text-ink-900">{tab.title}</h3>
              <p className="mt-2 max-w-md text-[0.9375rem] text-text-muted">{tab.body}</p>
            </div>
            <DemoTag className="shrink-0" />
          </div>
          <div key={active} className="rounded-[var(--radius-panel)] border border-line bg-white px-4 py-3 shadow-[var(--shadow-panel)] sm:px-6 sm:py-5">
            <Panel id={active} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
