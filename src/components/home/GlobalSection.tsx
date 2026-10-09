import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Globe2, Landmark, RefreshCw, ArrowLeftRight, CheckCircle2 } from "lucide-react";

export function GlobalSection() {
  return (
    <Section id="global-infrastructure" tone="surface">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Transaction Flow Visual (USD -> Nixafin -> FX -> INR -> Settlement) */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <Reveal>
            <div className="rounded-[var(--radius-hero)] border border-line bg-paper p-6 sm:p-8 shadow-[var(--shadow-panel)]">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2.5">
                  <Globe2 className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-bold text-ink-900">Cross-Border FX Pipeline</span>
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  130+ Currencies
                </span>
              </div>

              {/* Cross-Border Flow Ribbon (USD -> Nixafin -> FX -> INR -> Settlement) */}
              <div className="my-6 rounded-[var(--radius-panel)] border border-line bg-surface p-4">
                <div className="flex items-center justify-between text-center font-mono text-xs">
                  <div className="rounded bg-paper px-3 py-1.5 font-bold text-ink-900">
                    USD
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-text-subtle" />

                  <div className="rounded bg-blue-50 px-3 py-1.5 font-bold text-blue-600">
                    Nixafin
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-text-subtle" />

                  <div className="rounded bg-paper px-3 py-1.5 font-bold text-ink-900">
                    FX Conversion
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-text-subtle" />

                  <div className="rounded bg-paper px-3 py-1.5 font-bold text-ink-900">
                    INR
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-text-subtle" />

                  <div className="rounded bg-accent-50 px-3 py-1.5 font-bold text-accent-700">
                    Settlement
                  </div>
                </div>
              </div>

              {/* Execution Detail Cards */}
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-lg border border-line bg-surface p-3.5">
                  <p className="text-text-subtle font-medium">Virtual US Account</p>
                  <p className="mt-1 text-base font-bold text-ink-900">$10,000.00 USD</p>
                  <p className="mt-1 text-accent-700 font-medium">Inbound Collection</p>
                </div>

                <div className="rounded-lg border border-line bg-surface p-3.5">
                  <p className="text-text-subtle font-medium">INR Local Settlement</p>
                  <p className="mt-1 text-base font-bold text-ink-900">₹8,34,200.00</p>
                  <p className="mt-1 text-blue-600 font-medium">Direct Bank Disbursal</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Global Infrastructure Copy */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Global Financial Infrastructure
            </p>
            <h2 className="mt-3 text-h2 text-balance text-ink-950 font-bold">
              Seamless cross-border transactions.
            </h2>
            <p className="mt-4 text-lead text-text-muted">
              Accept payments internationally, hold virtual multi-currency accounts, and convert currencies at transparent FX rates.
            </p>

            <div className="mt-8">
              <Link
                href="/global"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                <span>Explore Global Infrastructure</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
