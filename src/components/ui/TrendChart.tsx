"use client";

import { useId, useState } from "react";
import { smoothPath, toPoints } from "@/lib/chart";
import { cn } from "@/lib/format";

type Props = {
  series: readonly number[];
  labels?: readonly string[];
  className?: string;
  /** Called with the hovered/focused index (or last index when idle). */
  onActiveChange?: (index: number) => void;
  /** Hide axis labels (for compact use). */
  compact?: boolean;
};

/**
 * Lightweight SVG area/line chart. Pointer or keyboard scrub updates the active point.
 * Stroke is drawn in once on load (CSS), disabled for reduced motion.
 */
export function TrendChart({ series, labels, className, onActiveChange, compact }: Props) {
  const gid = useId().replace(/:/g, "");
  const last = series.length - 1;
  const [active, setActive] = useState(last);
  const pts = toPoints(series);
  const line = smoothPath(pts);
  const area = `${line} L 100 100 L 0 100 Z`;

  const set = (i: number) => {
    const idx = Math.max(0, Math.min(last, i));
    setActive(idx);
    onActiveChange?.(idx);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    set(Math.round(((e.clientX - r.left) / r.width) * last));
  };

  const a = pts[active];

  return (
    <div className={cn("w-full", className)}>
      <div
        className="relative h-full min-h-32 touch-pan-y outline-offset-4"
        onPointerMove={onMove}
        onPointerLeave={() => set(last)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") set(active - 1);
          if (e.key === "ArrowRight") set(active + 1);
        }}
        tabIndex={0}
        role="img"
        aria-label={`Trend chart, demo data. Selected ${labels?.[active] ?? `point ${active + 1}`}.`}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="nf-wipe absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <linearGradient id={`g-${gid}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--color-blue-600)" stopOpacity="0.20" />
              <stop offset="1" stopColor="var(--color-blue-600)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--color-blue-100)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
          <path d={area} fill={`url(#g-${gid})`} />
          <path
            d={line}
            fill="none"
            stroke="var(--color-blue-600)"
            strokeWidth="2.25"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <line x1={a.x} x2={a.x} y1="0" y2="100" stroke="var(--color-blue-600)" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
        </svg>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-blue-600 shadow-[0_0_0_4px_rgb(37_99_235/0.16)] transition-[left,top] duration-150"
          style={{ left: `${a.x}%`, top: `${a.y}%` }}
        />
      </div>
      {!compact && labels && (
        <div className="mt-2 flex justify-between text-[11px] text-text-subtle">
          {labels.filter((_, i) => i % 3 === 0 || i === last).map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}
