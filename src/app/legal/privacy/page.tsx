import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nixafin privacy policy and data protection commitments.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="How Nixafin collects, uses, and safeguards your personal and financial information."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
