import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Nixafin terms of service and agreement.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          description="The terms and conditions governing your use of Nixafin platforms, APIs, and services."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
