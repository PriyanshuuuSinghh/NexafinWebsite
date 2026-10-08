import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description: "NexaFin pricing — transparent plans for every need.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          description="Pricing details will be published here. Join the waitlist to be notified when NexaFin launches."
        />
        <Section>
          <Reveal>
            <div className="mx-auto max-w-xl rounded-[var(--radius-product)] border border-line bg-surface p-10 text-center shadow-[var(--shadow-panel)]">
              <p className="text-sm font-medium text-text-muted">Pricing coming soon</p>
              <p className="mt-4 text-h3 text-ink-900">We&rsquo;re finalising our plans.</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-muted">
                NexaFin is in early access. Pricing will be announced closer to general availability.
              </p>
            </div>
          </Reveal>
        </Section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
