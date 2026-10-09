import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the Nixafin product ecosystem — payments, workflows, collections, business banking, security and more.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Products"
          title="The complete payments infrastructure."
          description="From accepting payments to managing payouts, Nixafin products work together to power your financial operations."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
