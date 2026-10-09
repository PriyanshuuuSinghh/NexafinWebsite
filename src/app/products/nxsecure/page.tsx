import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "NxSecure",
  description: "Fraud prevention and compliance with Nixafin NxSecure.",
};

export default function NxSecurePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="NxSecure"
          title="Fraud prevention and compliance."
          description="Real-time risk scoring, transaction monitoring and regulatory compliance — built into the payment flow."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
