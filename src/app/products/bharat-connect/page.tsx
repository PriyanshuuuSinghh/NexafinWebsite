import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { PageHero } from "@/components/marketing/PageHero";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Bharat Connect",
  description: "India's payment infrastructure — UPI, IMPS, NEFT, RTGS and more with Nixafin Bharat Connect.",
};

export default function BharatConnectPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Bharat Connect"
          title="India's payment infrastructure."
          description="UPI, IMPS, NEFT, RTGS and Aadhaar-enabled payments — a single integration for India's payment rails."
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
