import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Lock, ShieldCheck, Server, KeyRound } from "lucide-react";

const trustPillars = [
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "End-to-end encryption for sensitive payload data both in transit and at rest.",
  },
  {
    icon: ShieldCheck,
    title: "Protected Data",
    description: "Privacy-first architecture ensuring strict data isolation and permission controls.",
  },
  {
    icon: Server,
    title: "Reliable APIs",
    description: "High-availability, redundant payment rails designed for enterprise uptime.",
  },
  {
    icon: KeyRound,
    title: "Controlled Access",
    description: "Granular API key permissions, IP whitelisting, and multi-factor authentication.",
  },
];

export function TrustSection() {
  return (
    <Section id="trust-security" tone="navy">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-500">
            Security & Trust
          </p>
          <h2 className="mt-3 text-h2 text-balance text-white">
            Built for security and reliability at scale.
          </h2>
          <p className="mt-4 text-lead text-white/70">
            Financial infrastructure engineered with security, privacy, and control at its core.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-[var(--radius-panel)] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-accent-500">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-h3 text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-10 text-center">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-400"
          >
            <span>Read our Security Overview</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
