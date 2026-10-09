import Link from "next/link";
import { ArrowUpRight, CreditCard, Send, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroProductVisual } from "./HeroProductVisual";

const capabilityHighlights = [
  {
    icon: CreditCard,
    title: "Accept payments",
    description: "Collect from customers across supported methods and digital channels.",
  },
  {
    icon: Send,
    title: "Move funds",
    description: "Run payouts and financial workflows from the same operating layer.",
  },
  {
    icon: Globe2,
    title: "Connect globally",
    description: "Support cross-border movement and FX where those capabilities apply.",
  },
];

export function Hero() {
  return (
    <>
      <section className="relative isolate bg-atmosphere pt-28 sm:pt-36">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal y={8}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-[#D4FF65]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF65] motion-safe:animate-pulse" />
                FINANCIAL INFRASTRUCTURE FOR MODERN BUSINESSES
              </div>
            </Reveal>

            <Reveal y={10}>
              <h1 className="text-display font-extrabold text-white tracking-tight text-balance">
                <span>Move money. </span>
                <span className="bg-gradient-to-r from-[#13B8A6] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                  Build what&apos;s next.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.08} y={10}>
              <p className="mx-auto mt-5 max-w-xl text-lead text-white/85 text-pretty font-normal">
                Financial infrastructure for payments, collections, payouts and financial workflows.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={10}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/products/nxpay"
                  className="group flex items-center gap-2 rounded-full border border-white/20 bg-[#071521] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <span>Explore the platform</span>
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#D4FF65] text-[#071521] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                </Link>

                <Link
                  href="/developers"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  For developers
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22} y={16} className="mt-10 sm:mt-12">
            <HeroProductVisual />
          </Reveal>
        </Container>

        <div
          aria-hidden="true"
          className="mt-10 h-16 bg-gradient-to-b from-transparent via-[#EAF5F8]/50 to-[#F7FAFC] sm:mt-12 sm:h-20"
        />
      </section>

      <section className="relative bg-[#F7FAFC] pb-20 pt-6 sm:pb-24 sm:pt-8">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-h2 font-bold text-ink-950 text-balance">
                One platform. Multiple ways to move money.
              </h2>
              <p className="mt-4 text-lead text-text-muted text-pretty">
                Nixafin sits between the people who pay you, the operations that run your business,
                and the destinations that settle funds—so acceptance, payouts, and global movement
                share one infrastructure layer.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-3">
              {capabilityHighlights.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="flex gap-4 border-b border-line py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:py-10 first:sm:pl-0 last:sm:pr-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-line"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={1.75} />
                    <div>
                      <p className="font-mono text-[11px] font-semibold tracking-wider text-text-subtle">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink-900">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
