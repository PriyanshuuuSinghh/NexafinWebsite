import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { IntelligenceSection } from "@/components/marketing/IntelligenceSection";
import { AISection } from "@/components/marketing/AISection";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Nixafin turns raw financial data into plain-language insights, patterns and answers.",
};

export default function IntelligencePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Financial Intelligence"
          title="From raw transactions to useful insight."
          description="Nixafin looks across your data for changes, patterns and recurring costs, then explains them in plain language."
        />
        <IntelligenceSection />
        <AISection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
