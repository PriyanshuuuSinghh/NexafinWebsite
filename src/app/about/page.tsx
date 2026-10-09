import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nixafin's mission to build the next generation of financial and payment infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Company"
          title="Building the future of financial infrastructure."
          description="Nixafin empowers modern businesses with robust, developer-first payment and financial operations software."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
