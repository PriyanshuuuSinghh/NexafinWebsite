"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, CreditCard, GitMerge, RefreshCcw, Building, ShieldCheck, Landmark, CheckCircle2, Zap, ArrowRightLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProduct, supportingProducts } from "@/data/products";

const iconsMap: Record<string, typeof CreditCard> = {
  nxpay: CreditCard,
  nxflow: GitMerge,
  nxcollect: RefreshCcw,
  nxbiz: Building,
  nxsecure: ShieldCheck,
  "bharat-connect": Landmark,
};

export function ProductsShowcase() {
  return (
    <section id="products" className="relative isolate bg-[#07131F] py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Subtle radial cyan/blue glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[50rem] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-600/15 to-purple-600/10 blur-3xl opacity-60" />
      </div>

      <Container>
        {/* Section Heading & Factual Supporting Copy */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={8}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-[#D4FF65]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF65]" />
              NIXAFIN PRODUCT ECOSYSTEM
            </div>
          </Reveal>

          <Reveal y={10}>
            <h2 className="text-display font-extrabold text-white tracking-tight text-balance">
              One platform. Multiple financial capabilities.
            </h2>
          </Reveal>

          <Reveal delay={0.08} y={10}>
            <p className="mx-auto mt-4 max-w-2xl text-lead text-white/70 text-pretty font-normal">
              Modular products built to operate independently or connect seamlessly across the full transaction lifecycle.
            </p>
          </Reveal>
        </div>

        {/* Featured Product: NxPay (Wide Editorial Hero Layout) */}
        <Reveal delay={0.15} className="mt-14">
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-7 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      <CreditCard className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/20">
                      {featuredProduct.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {featuredProduct.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-300">
                    {featuredProduct.tagline}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    {featuredProduct.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {featuredProduct.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 text-sm text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href={featuredProduct.route}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#D4FF65] px-6 py-3 text-sm font-bold text-[#07131F] shadow-lg shadow-[#D4FF65]/15 transition-all hover:bg-[#c2ef4f] hover:scale-[1.02]"
                  >
                    <span>Explore NxPay</span>
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#07131F] text-[#D4FF65] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Distinctive Conceptual Payment Flow Visualization */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/10 bg-[#040C16]/90 p-5 sm:p-7 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-white/60">
                    <span className="text-cyan-300">nxpay.payment_flow</span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Architecture
                    </span>
                  </div>

                  {/* Flow Steps: Customer -> Payment -> Nixafin -> Business */}
                  <div className="mt-6 space-y-3.5 font-mono text-xs">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-cyan-500/30">
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          <CreditCard className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold text-white">01. INBOUND INGRESS</p>
                          <p className="text-[11px] text-white/50">Cards, UPI & Net Banking</p>
                        </div>
                      </div>
                      <span className="text-cyan-300 font-semibold">Accepted</span>
                    </div>

                    <div className="flex items-center justify-center text-cyan-400/50">
                      <Zap className="h-4 w-4" />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400 text-[#07131F]">
                          <ArrowRightLeft className="h-4 w-4 font-bold" />
                        </span>
                        <div>
                          <p className="font-semibold text-white">02. NXPAY PROCESSING</p>
                          <p className="text-[11px] text-cyan-200/80">Smart Routing & Security</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-semibold font-mono">200 OK</span>
                    </div>

                    <div className="flex items-center justify-center text-cyan-400/50">
                      <Zap className="h-4 w-4" />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-cyan-500/30">
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          <Building className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold text-white">03. BUSINESS DISBURSAL</p>
                          <p className="text-[11px] text-white/50">Settlement & Merchant Payout</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-semibold">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary Supporting Products Ecosystem (Varied, Typography-led, not 6 equal cards) */}
        <div className="mt-12">
          <Reveal delay={0.2}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">
                Supporting Ecosystem Capabilities
              </h4>
              <span className="text-xs text-white/40 font-mono">5 Specialized Engines</span>
            </div>
          </Reveal>

          {/* Grid layout with visual variety: Top row has 3 items, bottom row has 2 larger items */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {supportingProducts.map((p, idx) => {
              const Icon = iconsMap[p.id] || CreditCard;
              // Provide visual rhythm: first 3 products take 2 cols each on lg (3 across), last 2 take 3 cols each (2 across)
              const spanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";

              return (
                <Reveal key={p.id} delay={0.25 + idx * 0.05} className={spanClass}>
                  <Link
                    href={p.route}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.07] hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 border border-white/10 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-[#07131F] transition-colors">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <span className="text-[11px] font-mono font-medium text-white/40 group-hover:text-cyan-300 transition-colors">
                          {p.tagline}
                        </span>
                      </div>

                      <h5 className="mt-4 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                        {p.name}
                      </h5>

                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {p.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/60 font-mono"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:text-[#D4FF65] transition-colors border-t border-white/10 pt-3">
                      <span>Explore {p.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
