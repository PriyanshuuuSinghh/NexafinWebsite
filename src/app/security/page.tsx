import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { TrustSection } from "@/components/marketing/TrustSection";
import { securityPrinciples } from "@/data/security";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Security",
  description: "How NexaFin keeps your financial data private, encrypted and under your control.",
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Security"
          title="Your data stays yours."
          description="NexaFin is built with a privacy-first approach. Read-only access, encrypted data, and strong authentication are foundational — not afterthoughts."
        />
        <TrustSection title="Built for trust." points={securityPrinciples} showLink={false} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
