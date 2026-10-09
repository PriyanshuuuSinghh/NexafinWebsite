import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/home/Hero";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <PartnersSection />
        <ProductsShowcase />
      </main>
      <Footer />
    </>
  );
}
