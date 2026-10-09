import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Code2, Layers, Terminal, Webhook, ShieldCheck, Check } from "lucide-react";

export function DeveloperSection() {
  return (
    <Section id="developer-experience" tone="paper">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Developer Marketing Copy */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Developer Experience
            </p>
            <h2 className="mt-3 text-h2 text-balance text-ink-950 font-bold">
              Built by developers, for developers.
            </h2>
            <p className="mt-4 text-lead text-text-muted">
              Clean REST endpoints, client/server SDKs, instant sandbox environments, and webhooks designed for quick integration.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-900">
                <Terminal className="h-3.5 w-3.5 text-blue-600" /> REST APIs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-900">
                <Layers className="h-3.5 w-3.5 text-blue-600" /> SDKs & Libraries
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-900">
                <Webhook className="h-3.5 w-3.5 text-blue-600" /> Webhooks
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-900">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" /> Sandbox
              </span>
            </div>

            <div className="mt-8">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                <span>Read API Documentation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Integration Flow Story (Your Application -> Nixafin API -> Payment -> Response) */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-hero)] border border-line bg-ink-950 p-6 text-white shadow-xl">
              {/* Integration Story Pipeline Bar */}
              <div className="mb-5 border-b border-white/10 pb-3 text-center text-xs font-mono">
                <div className="flex items-center justify-between text-white/60">
                  <span>Your Application</span>
                  <span className="text-white/30">→</span>
                  <span className="text-accent-500 font-semibold">Nixafin API</span>
                  <span className="text-white/30">→</span>
                  <span>Payment</span>
                  <span className="text-white/30">→</span>
                  <span className="text-accent-500 font-semibold">200 Response</span>
                </div>
              </div>

              {/* cURL Snippet */}
              <div className="font-mono text-xs">
                <div className="flex items-center justify-between text-white/50 text-[11px] mb-2">
                  <span>cURL Integration</span>
                  <span className="text-accent-500">Sandbox Mode</span>
                </div>
                <div className="rounded-md bg-white/5 p-4 text-blue-200">
                  <p className="text-accent-400 font-semibold">POST /v1/payments</p>
                  <pre className="mt-2 text-xs text-white/80">
{`{
  "amount": 2500,
  "currency": "INR",
  "customer": "cust_8921"
}`}
                  </pre>
                </div>
              </div>

              {/* Status Response Confirmation */}
              <div className="mt-4 flex items-center justify-between rounded-md border border-accent-500/30 bg-accent-500/10 px-4 py-2.5 font-mono text-xs text-accent-400">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent-500" />
                  <span className="font-bold text-accent-500">200 OK</span>
                </div>
                <span className="text-[11px] text-white/60">Latency: 18ms</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
