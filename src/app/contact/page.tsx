import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Contact Sales",
  description: "Get in touch with the Nixafin team to discuss payment solutions, pricing, and enterprise integrations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Talk to our team."
          description="Have questions about our payment infrastructure, custom pricing, or high-volume processing? We're here to help."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
