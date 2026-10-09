import Link from "next/link";
import { ArrowRight, Check, Eye, KeyRound, Lock, ShieldCheck, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DemoTag } from "@/components/ui/DemoTag";
import { FlowLines } from "@/components/ui/FlowLines";
import { trustPoints } from "@/data/security";

const icons = { eye: Eye, lock: Lock, key: KeyRound, shield: ShieldCheck } as const;

type Point = { id: string; icon: keyof typeof icons; title: string; body: string };

const access = [
  { label: "View balances", allowed: true },
  { label: "View transactions", allowed: true },
  { label: "Move money", allowed: false },
];

type Props = {
  title?: string;
  points?: readonly Point[];
  /** Link to /security. Hidden on the security page itself. */
  showLink?: boolean;
};

export function TrustSection({ title = "Your financial data stays yours.", points = trustPoints, showLink = true }: Props) {
  return (
    <Section id="security" tone="navy" backdrop={<FlowLines tone="dark" className="opacity-70" />}>
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading tone="dark" title={title} />

          <ul className="mt-10 border-t border-white/10">
            {points.map((p) => {
              const Icon = icons[p.icon];
              return (
                <li key={p.id} className="flex gap-4 border-b border-white/10 py-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/[0.06] text-accent-500">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-white/65">{p.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          {showLink && (
            <Link href="/security" className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white hover:text-blue-300">
              Security overview
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </Reveal>

        {/* Illustration of the access model. Design intent, not a certification or a claim about usage. */}
        <Reveal delay={0.1}>
          <div className="glass-dark rounded-[var(--radius-hero)] p-5 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <Lock className="h-4 w-4 text-accent-500" strokeWidth={2} /> Connected account
              </p>
              <DemoTag tone="dark">Illustration</DemoTag>
            </div>
            <p className="mt-1.5 text-sm text-white/55">What Nixafin can and cannot do</p>

            <ul className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-ink-950/30">
              {access.map((a) => (
                <li key={a.label} className="flex items-center gap-3.5 px-4 py-4">
                  <span
                    className={
                      a.allowed
                        ? "grid h-7 w-7 place-items-center rounded-full bg-accent-500/15 text-accent-500"
                        : "grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] text-white/45"
                    }
                  >
                    {a.allowed ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <X className="h-4 w-4" strokeWidth={2.5} />}
                  </span>
                  <span className={a.allowed ? "flex-1 text-[0.9375rem] text-white" : "flex-1 text-[0.9375rem] text-white/55"}>{a.label}</span>
                  <span className={a.allowed ? "text-xs font-medium text-accent-500" : "text-xs font-medium text-white/45"}>
                    {a.allowed ? "Allowed" : "Not permitted"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
