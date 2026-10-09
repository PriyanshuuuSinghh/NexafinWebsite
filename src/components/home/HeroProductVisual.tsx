"use client";

import { useId } from "react";
import { useReducedMotion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/format";

type FlowNodeProps = {
  label: string;
  align?: "start" | "end";
};

function FlowNode({ label, align = "start" }: FlowNodeProps) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-lg border border-white/15 bg-[#071521]/85 px-3.5 py-2.5",
        align === "end" && "lg:text-right",
      )}
    >
      <p className="text-sm font-semibold tracking-tight text-white">{label}</p>
    </div>
  );
}

function SplitConnectors({
  side,
  reduce,
}: {
  side: "in" | "out";
  reduce: boolean | null;
}) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 88 200"
      preserveAspectRatio="none"
      className="hidden h-auto min-h-[9rem] w-[12%] max-w-[4.5rem] flex-1 self-stretch lg:block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-a`} x1="0" y1="0" x2="88" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5EEAD4" stopOpacity="0.85" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={`${uid}-b`} x1="0" y1="0" x2="88" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      {side === "in" ? (
        <>
          <path
            d="M4 42 C 36 42, 52 100, 84 100"
            fill="none"
            stroke={`url(#${uid}-a)`}
            strokeWidth="1.4"
            strokeLinecap="round"
            pathLength={1}
            className={reduce ? undefined : "nf-draw"}
            style={{ ["--draw-delay" as string]: "0.15s" }}
          />
          <path
            d="M4 158 C 36 158, 52 100, 84 100"
            fill="none"
            stroke={`url(#${uid}-b)`}
            strokeWidth="1.4"
            strokeLinecap="round"
            pathLength={1}
            className={reduce ? undefined : "nf-draw"}
            style={{ ["--draw-delay" as string]: "0.28s" }}
          />
          <circle cx="4" cy="42" r="2.4" fill="#5EEAD4" />
          <circle cx="4" cy="158" r="2.4" fill="#38BDF8" />
          <circle cx="84" cy="100" r="2.6" fill="#60A5FA" />
        </>
      ) : (
        <>
          <path
            d="M4 100 C 36 100, 52 42, 84 42"
            fill="none"
            stroke={`url(#${uid}-a)`}
            strokeWidth="1.4"
            strokeLinecap="round"
            pathLength={1}
            className={reduce ? undefined : "nf-draw"}
            style={{ ["--draw-delay" as string]: "0.4s" }}
          />
          <path
            d="M4 100 C 36 100, 52 158, 84 158"
            fill="none"
            stroke={`url(#${uid}-b)`}
            strokeWidth="1.4"
            strokeLinecap="round"
            pathLength={1}
            className={reduce ? undefined : "nf-draw"}
            style={{ ["--draw-delay" as string]: "0.52s" }}
          />
          <circle cx="4" cy="100" r="2.6" fill="#60A5FA" />
          <circle cx="84" cy="42" r="2.4" fill="#5EEAD4" />
          <circle cx="84" cy="158" r="2.4" fill="#38BDF8" />
        </>
      )}
    </svg>
  );
}

const hubRows = [
  { label: "Payment acceptance", detail: "Payments and collections" },
  { label: "Transaction processing", detail: "Financial workflows" },
  { label: "Payouts", detail: "Business disbursements" },
  { label: "API access", detail: "Developer integrations" },
] as const;

function PlatformHub() {
  return (
    <div className="relative z-10 w-full min-w-0 max-w-sm rounded-2xl border border-white/15 bg-[#071521] px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex flex-col gap-2.5">
        <Logo tone="dark" height={32} />
        <p className="text-sm font-semibold tracking-tight text-white">Nixafin Platform</p>
      </div>

      <dl className="mt-5 divide-y divide-white/10 border-t border-white/10">
        {hubRows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-0.5 py-3 min-[420px]:flex-row min-[420px]:items-baseline min-[420px]:justify-between min-[420px]:gap-4"
          >
            <dt className="text-[13px] leading-snug text-white/70">{row.label}</dt>
            <dd className="text-[13px] font-medium leading-snug text-white min-[420px]:text-right">
              {row.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function HeroProductVisual({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative mx-auto w-full max-w-5xl", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[min(28rem,80%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(8,126,145,0.38),rgba(59,130,246,0.12)_55%,transparent_72%)] blur-2xl"
      />

      <div
        className="relative flex flex-col items-center gap-3 lg:flex-row lg:items-stretch lg:gap-0"
        aria-label="Customer and business connect through Nixafin to payment and payout destinations"
      >
        <div className="grid w-full grid-cols-2 gap-2 lg:flex lg:w-[8rem] lg:shrink-0 lg:flex-col lg:justify-center lg:gap-10">
          <FlowNode label="Customer" />
          <FlowNode label="Business" />
        </div>

        <div
          aria-hidden="true"
          className="h-6 w-px bg-gradient-to-b from-teal-300/80 to-blue-400/80 lg:hidden"
        />

        <SplitConnectors side="in" reduce={reduce} />

        <div className="flex w-full justify-center lg:w-auto lg:max-w-sm lg:flex-none">
          <PlatformHub />
        </div>

        <SplitConnectors side="out" reduce={reduce} />

        <div
          aria-hidden="true"
          className="h-6 w-px bg-gradient-to-b from-blue-400/80 to-cyan-300/70 lg:hidden"
        />

        <div className="grid w-full grid-cols-2 gap-2 lg:flex lg:w-[8rem] lg:shrink-0 lg:flex-col lg:justify-center lg:gap-10">
          <FlowNode label="Payment" align="end" />
          <FlowNode label="Payout" align="end" />
        </div>
      </div>
    </div>
  );
}
