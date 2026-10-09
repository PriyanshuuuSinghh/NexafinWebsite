import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, Code2, Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers",
  description: "Documentation, API reference, SDKs, and integration guides for Nixafin.",
};

const developerSections = [
  {
    id: "docs",
    title: "Documentation",
    icon: BookOpen,
    description: "Comprehensive guides to integrating payments, managing webhooks, and understanding authentication.",
  },
  {
    id: "api",
    title: "API Reference",
    icon: Terminal,
    description: "Detailed REST API endpoints, request/response formats, error codes, and rate limits.",
  },
  {
    id: "sdks",
    title: "SDKs & Libraries",
    icon: Layers,
    description: "Official server-side and client-side SDKs for Node.js, Python, Java, Go, React, iOS, and Android.",
  },
  {
    id: "guides",
    title: "Integration Guides",
    icon: Code2,
    description: "Step-by-step tutorials to get up and running quickly with custom checkout flows and payouts.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Developers"
          title="Build with modern payment APIs."
          description="Robust developer tools, comprehensive documentation, and pre-built SDKs to get you to production in hours."
        />
        <Section tone="surface">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {developerSections.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.id} delay={i * 0.06}>
                  <div id={s.id} className="h-full rounded-[var(--radius-panel)] border border-line bg-paper p-6 shadow-[var(--shadow-panel)]">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h2 className="mt-4 text-h3 text-ink-900">{s.title}</h2>
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
