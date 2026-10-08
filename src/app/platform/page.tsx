import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { PlatformSection } from "@/components/marketing/PlatformSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Platform",
  description: "Accounts, transactions, spending, bills, subscriptions and net worth — your complete financial picture in one place.",
};

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Platform"
          title="Your financial world, in one place."
          description="Accounts, transactions, spending, bills, subscriptions and net worth — organised so your full picture is always clear."
        />
        <PlatformSection />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
