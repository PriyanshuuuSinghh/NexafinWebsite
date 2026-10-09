import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Nixafin team and help shape global payments infrastructure.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Careers"
          title="Join our mission."
          description="We're looking for passionate engineers, designers, and operators to build global financial infrastructure."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
