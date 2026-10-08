import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/data/logos";
import { LogoMarquee } from "./LogoMarquee";

export function LogoStrip() {
  return (
    <section aria-label="Ecosystem" className="pb-4 pt-10 sm:pt-12">
      <Container>
        <p className="mb-7 text-center text-sm text-text-subtle">Connected to your financial world</p>
      </Container>
      <LogoMarquee logos={partnerLogos} />
    </section>
  );
}
