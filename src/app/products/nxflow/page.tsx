import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "NxFlow",
  description: "Automate payment workflows with Nixafin NxFlow.",
};

export default function NxFlowPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="NxFlow"
          title="Automate payment workflows."
          description="Route, split and reconcile payments automatically with programmable workflows."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
