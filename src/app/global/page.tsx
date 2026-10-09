import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Globe2, ArrowLeftRight, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Infrastructure",
  description: "Cross-border payments, real-time foreign exchange, and multi-currency global accounts with Nixafin.",
};

const globalCapabilities = [
  {
    id: "cross-border",
    title: "Cross-border",
    icon: Globe2,
    description: "Accept and disburse payments in 130+ currencies with local clearing routes and optimized settlement.",
  },
  {
    id: "fx",
    title: "FX",
    icon: ArrowLeftRight,
    description: "Real-time, transparent FX conversion with competitive wholesale rates and automated hedging capabilities.",
  },
  {
    id: "accounts",
    title: "Global Accounts",
    icon: Landmark,
    description: "Open and manage localized virtual bank accounts globally to collect funds like a local entity.",
  },
];

export default function GlobalPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Global Infrastructure"
          title="Scale your business globally."
          description="Seamlessly accept international payments, hold multiple currencies, and pay out partners worldwide."
        />
        <Section tone="surface">
          <div className="grid gap-6 sm:grid-cols-3">
            {globalCapabilities.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.id} delay={i * 0.08}>
                  <div id={s.id} className="h-full rounded-[var(--radius-panel)] border border-line bg-paper p-8 shadow-[var(--shadow-panel)]">
                    <Icon className="h-7 w-7 text-blue-600" />
                    <h2 className="mt-5 text-h3 text-ink-900">{s.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
