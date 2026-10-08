import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { SolutionsSection } from "@/components/marketing/SolutionsSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Solutions",
  description: "NexaFin for individuals, professionals, families and businesses.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Solutions"
          title="Built around how you manage money."
          description="Whether you are an individual, professional, family or business, NexaFin adapts to the way you think about finances."
        />
        <SolutionsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
