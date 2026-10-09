import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "NxBiz",
  description: "Business banking and payouts with Nixafin NxBiz.",
};

export default function NxBizPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="NxBiz"
          title="Business banking and payouts."
          description="Current accounts, vendor payouts and expense management — built for modern businesses."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
