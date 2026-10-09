"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CreditCard, RefreshCcw, Send, CheckCircle2, ArrowRight } from "lucide-react";

const flowSteps = [
  {
    step: "01",
    label: "ACCEPT",
    title: "Omnichannel Payment Ingress",
    description: "Cards, UPI, QR codes, and digital wallets routed through a single API connection.",
    icon: CreditCard,
  },
  {
    step: "02",
    label: "PROCESS",
    title: "Intelligence & Risk Screening",
    description: "Real-time fraud screening, KYC verification, and smart routing algorithms.",
    icon: RefreshCcw,
  },
  {
    step: "03",
    label: "MOVE",
    title: "Automated Workflow Engine",
    description: "Programmable payouts, seller split payments, eNACH mandates, and batch disburals.",
    icon: Send,
  },
  {
    step: "04",
    label: "SETTLE",
    title: "Instant Clearing & Reconciliation",
    description: "Automated ledger sync, localized bank clearing, and real-time treasury management.",
    icon: CheckCircle2,
  },
];

export function PlatformOverview() {
  return (
    <Section id="platform-overview" tone="paper">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Platform Architecture
          </p>
          <h2 className="mt-3 text-h2 text-balance text-ink-950 font-bold">
            End-to-end transaction lifecycle.
          </h2>
          <p className="mt-4 text-lead text-text-muted">
            From initial payment ingress to final bank settlement, Nixafin orchestrates every step.
          </p>
        </div>
      </Reveal>

      {/* Connected System Infrastructure Flow Visual (Requirement 8) */}
      <Reveal delay={0.1} className="mt-12">
        <div className="rounded-[var(--radius-hero)] border border-line bg-surface p-6 sm:p-10 shadow-[var(--shadow-panel)]">
          {/* Top Flow Header Ribbon */}
          <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-900">
              Nixafin Flow Pipeline
            </span>
            <span className="text-xs font-mono font-medium text-blue-600">
              Latency &lt; 20ms
            </span>
          </div>

          {/* 4 Connected Pipeline Steps */}
          <div className="grid gap-6 md:grid-cols-4">
            {flowSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="relative flex flex-col justify-between rounded-[var(--radius-panel)] border border-line bg-paper p-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-600">STEP {s.step}</span>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                        {s.label}
                      </span>
                    </div>

                    <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-ink-900 border border-line">
                      <Icon className="h-4.5 w-4.5 text-blue-600" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted">
                      {s.description}
                    </p>
                  </div>

                  {idx < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-surface border border-line text-text-subtle shadow-sm">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
