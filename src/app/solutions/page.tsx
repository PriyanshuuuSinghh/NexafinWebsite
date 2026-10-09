import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { SolutionsSection } from "@/components/marketing/SolutionsSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Nixafin solutions for businesses, platforms, marketplaces, and global enterprises.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Solutions"
          title="Engineered for your business model."
          description="Whether you run an online business, software platform, marketplace, or global enterprise, Nixafin provides tailored payment infrastructure."
        />
        <SolutionsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
