import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, blog, help center and documentation for NexaFin.",
};

const sections = [
  { id: "guides", title: "Guides", description: "Step-by-step articles to help you get the most out of NexaFin." },
  { id: "blog", title: "Blog", description: "Financial insights, product updates and best practices." },
  { id: "help", title: "Help Center", description: "Answers to common questions and support articles." },
  { id: "docs", title: "Documentation", description: "Technical reference for integrations and the NexaFin API." },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Resources"
          title="Everything you need to get started."
          description="Guides, documentation, and help articles — all in one place."
        />
        <Section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <div id={s.id} className="rounded-[var(--radius-panel)] border border-line bg-surface p-6 shadow-[var(--shadow-panel)]">
                  <h2 className="text-h3 text-ink-900">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
