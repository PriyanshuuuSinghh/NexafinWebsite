import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "NxPay",
  description: "Accept and disburse payments with Nixafin NxPay.",
};

export default function NxPayPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="NxPay"
          title="Accept and disburse payments."
          description="A unified payment gateway to collect and send money across all major payment methods."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
