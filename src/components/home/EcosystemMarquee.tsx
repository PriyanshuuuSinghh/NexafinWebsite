"use client";

import { Container } from "@/components/ui/Container";
import { officialPartners, type PartnerLogo } from "@/data/logos";
import { cn } from "@/lib/format";

type Props = {
  duration?: number;
  className?: string;
};

function PartnerLogoItem({ partner }: { partner: PartnerLogo }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-6 sm:px-10">
      {/* 
        Image attempt with onError fallback to neutral optical slot.
        No 'LOGO PENDING' or text badge labels are rendered.
      */}
      <img
        src={partner.src}
        alt={partner.name}
        className="h-8 sm:h-9 w-auto max-w-[160px] object-contain opacity-85 transition-opacity hover:opacity-100"
        onError={(e) => {
          // If image file does not exist on disk, hide missing img element and render neutral slot
          const target = e.currentTarget;
          target.style.display = "none";
          if (target.nextElementSibling) {
            (target.nextElementSibling as HTMLElement).style.display = "block";
          }
        }}
      />
      <span
        style={{ width: partner.slotWidth, display: "none" }}
        className="h-7 rounded-md bg-ink-900/[0.07] transition-colors hover:bg-ink-900/[0.12]"
        aria-hidden="true"
      />
    </li>
  );
}

export function EcosystemMarquee({ duration = 36, className }: Props) {
  return (
    <section className={cn("border-y border-line bg-paper py-6 sm:py-8", className)}>
      <Container className="mb-3">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-subtle">
          Trusted banking & payment infrastructure partners
        </p>
      </Container>

      {/* Infinite Seamless Marquee with Mask Fade Edges */}
      <div
        className="nf-marquee overflow-hidden py-2"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="nf-marquee__track flex items-center">
          <ul className="flex shrink-0 items-center" aria-label="Official Partner Logos">
            {officialPartners.map((partner) => (
              <PartnerLogoItem key={partner.id} partner={partner} />
            ))}
          </ul>
          <ul className="flex shrink-0 items-center" aria-hidden="true">
            {officialPartners.map((partner) => (
              <PartnerLogoItem key={`${partner.id}-dup`} partner={partner} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
