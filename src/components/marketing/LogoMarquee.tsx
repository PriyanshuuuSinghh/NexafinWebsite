import { cn } from "@/lib/format";
import type { PartnerLogo } from "@/data/logos";

type Props = {
  logos: PartnerLogo[];
  /** Seconds for one full loop. Higher is slower. */
  duration?: number;
  className?: string;
};

function LogoSlot({ logo }: { logo: PartnerLogo }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-8 sm:px-12" style={{ minWidth: logo.slotWidth + 64 }}>
      {logo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo.src} alt={logo.name} className="h-7 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
      ) : (
        <span
          role="img"
          aria-label={logo.name}
          className="block h-6 rounded-[5px] bg-ink-900/[0.09]"
          style={{ width: logo.slotWidth }}
        />
      )}
    </li>
  );
}

/**
 * Seamless infinite marquee. Two identical sets are rendered; the track translates -50% in CSS.
 * The duplicate set is aria-hidden. Pauses on hover/focus; static + scrollable under reduced motion.
 */
export function LogoMarquee({ logos, duration = 48, className }: Props) {
  return (
    <div
      className={cn("nf-marquee overflow-hidden", className)}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      <div className="nf-marquee__track">
        <ul className="flex shrink-0 items-center" aria-label="Partner logos (placeholders)">
          {logos.map((l) => <LogoSlot key={l.id} logo={l} />)}
        </ul>
        <ul className="flex shrink-0 items-center" aria-hidden="true">
          {logos.map((l) => <LogoSlot key={`${l.id}-dup`} logo={l} />)}
        </ul>
      </div>
    </div>
  );
}
