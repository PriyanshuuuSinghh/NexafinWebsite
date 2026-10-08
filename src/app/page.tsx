import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { LogoStrip } from "@/components/marketing/LogoStrip";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";
import { IntelligenceShowcase } from "@/components/marketing/IntelligenceShowcase";
import { TrustSection } from "@/components/marketing/TrustSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

/** Homepage: a short teaser for each area. Detail lives on /platform, /intelligence and /security. */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoStrip />
        <PlatformShowcase />
        <IntelligenceShowcase />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
