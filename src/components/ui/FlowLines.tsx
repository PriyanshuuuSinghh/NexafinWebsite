import { cn } from "@/lib/format";

type Props = {
  tone?: "light" | "dark";
  className?: string;
};

/**
 * NexaFin's background motif: three thin data series rising across the page, drawn in once.
 * Decorative only. Teal appears on one line, at low opacity.
 */
export function FlowLines({ tone = "light", className }: Props) {
  const dark = tone === "dark";
  const blue = dark ? "#60A5FA" : "#2563EB";
  const teal = dark ? "#2DD4BF" : "#14B8A6";
  const lines = [
    { d: "M-40 470 C 180 460, 340 520, 540 430 S 840 300, 1020 250 S 1300 90, 1500 40", c: blue, o: 0.5, w: 1.25, delay: 0.1 },
    { d: "M-40 560 C 200 540, 320 600, 520 500 S 860 380, 1040 330 S 1320 170, 1500 120", c: blue, o: 0.75, w: 1.5, delay: 0.3 },
    { d: "M-40 640 C 220 610, 380 660, 600 560 S 920 470, 1100 420 S 1340 280, 1500 240", c: teal, o: 0.5, w: 1.25, delay: 0.5 },
  ];
  return (
    <svg
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      className={cn("absolute inset-0 h-full w-full", className)}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {lines.map((l, i) => (
          <linearGradient key={i} id={`flow-${tone}-${i}`} gradientUnits="userSpaceOnUse" x1="0" x2="1440" y1="0" y2="0">
            <stop offset="0" stopColor={l.c} stopOpacity="0" />
            <stop offset="0.3" stopColor={l.c} stopOpacity="0" />
            <stop offset="0.52" stopColor={l.c} stopOpacity={l.o * (dark ? 0.55 : 0.4)} />
            <stop offset="0.8" stopColor={l.c} stopOpacity={l.o * (dark ? 0.9 : 0.7)} />
            <stop offset="1" stopColor={l.c} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {lines.map((l, i) => (
        <path
          key={i}
          d={l.d}
          pathLength={1}
          stroke={`url(#flow-${tone}-${i})`}
          strokeWidth={l.w}
          strokeLinecap="round"
          className="nf-draw"
          style={{ ["--draw-delay" as string]: `${l.delay}s` }}
        />
      ))}
    </svg>
  );
}
