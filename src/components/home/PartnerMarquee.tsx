import { cn } from "@/lib/format";
import type { Partner } from "@/data/partners";

type Props = {
  partners: Partner[];
  /** Seconds for one full loop. Higher is slower. */
  duration?: number;
  className?: string;
  label?: string;
};

function PartnerSlot({ partner }: { partner: Partner }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-7 sm:px-10">
      {partner.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.src}
          alt={partner.name}
          className="h-8 w-auto max-w-[11rem] object-contain object-center sm:h-9 sm:max-w-[13rem]"
        />
      ) : (
        <span className="inline-flex max-w-[16rem] flex-col items-start gap-0.5 sm:max-w-none">
          <span className="text-sm font-medium tracking-tight text-ink-900">{partner.name}</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-subtle">
            Logo pending
          </span>
        </span>
      )}
    </li>
  );
}

/**
 * Seamless infinite partner logo marquee.
 * Two identical sets are rendered; the track translates -50% in CSS.
 * The duplicate set is aria-hidden. Pauses on hover/focus; static and scrollable under reduced motion.
 */
export function PartnerMarquee({
  partners,
  duration = 56,
  className,
  label = "Official partners",
}: Props) {
  return (
    <div
      className={cn("nf-marquee overflow-hidden", className)}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
      tabIndex={0}
      aria-label={`${label}. Press Tab to pause the animation.`}
    >
      <div className="nf-marquee__track">
        <ul className="flex shrink-0 items-center" aria-label={label}>
          {partners.map((partner) => (
            <PartnerSlot key={partner.id} partner={partner} />
          ))}
        </ul>
        <ul className="flex shrink-0 items-center" aria-hidden="true">
          {partners.map((partner) => (
            <PartnerSlot key={`${partner.id}-dup`} partner={partner} />
          ))}
        </ul>
      </div>
    </div>
  );
}
