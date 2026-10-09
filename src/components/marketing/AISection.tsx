import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DemoTag } from "@/components/ui/DemoTag";
import { LogoMark } from "@/components/ui/Logo";

export function AISection() {
  return (
    <Section id="assistant" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-[var(--radius-product)] border border-line-strong bg-paper p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-ink-900">Ask Nixafin</p>
              <DemoTag>Demo conversation</DemoTag>
            </div>

            <div className="space-y-5">
              <div className="flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md bg-ink-900 px-4 py-3 text-[0.9375rem] leading-relaxed text-white">
                  Why did my spending increase this month?
                </p>
              </div>

              <div className="flex gap-3">
                <LogoMark className="mt-0.5 h-7 w-7 shrink-0 text-ink-900" />
                <div className="min-w-0 rounded-2xl rounded-tl-md border border-line bg-white p-4 shadow-[var(--shadow-panel)] sm:p-5">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-900">
                    Most of the increase comes from two categories compared with last month.
                  </p>
                  <ul className="mt-4 divide-y divide-line text-sm">
                    <li className="flex justify-between gap-4 py-2.5">
                      <span className="text-ink-900">Dining</span>
                      <span className="tabular font-medium text-negative">+₹663</span>
                    </li>
                    <li className="flex justify-between gap-4 py-2.5">
                      <span className="text-ink-900">Transport</span>
                      <span className="tabular font-medium text-negative">+₹200</span>
                    </li>
                    <li className="flex justify-between gap-4 py-2.5">
                      <span className="text-text-muted">Everything else</span>
                      <span className="tabular text-text-muted">about the same</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted">
                    The dining rise is spread across several weekend transactions rather than one large charge.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center rounded-[var(--radius-control)] border border-line-strong bg-white px-4 py-3 text-sm text-text-subtle">
              Ask a question about your finances
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="order-1 lg:order-2">
          <SectionHeading
            title="Ask your finances a question."
            description="The Nixafin assistant answers in plain language, grounded in your own accounts and transactions, so you do not have to dig through statements."
          />
        </Reveal>
      </div>
    </Section>
  );
}
