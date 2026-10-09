import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "NxCollect",
  description: "Collect recurring payments with Nixafin NxCollect.",
};

export default function NxCollectPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="NxCollect"
          title="Collect recurring payments."
          description="Subscriptions, EMIs and mandates — automate collection with smart retry and reconciliation."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
