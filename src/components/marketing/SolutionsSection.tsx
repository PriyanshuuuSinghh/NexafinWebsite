import Link from "next/link";
import { Building2, Briefcase, Home, User } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/format";

const icons = { individuals: User, professionals: Briefcase, families: Home, businesses: Building2 } as const;
const hrefs = { individuals: "/solutions#individuals", professionals: "/solutions#professionals", families: "/solutions#families", businesses: "/solutions#businesses" } as const;

/** Column dividers by breakpoint: stacked (rows), 2-up (sm), 4-up (lg). */
function cellClasses(i: number) {
  return cn(
    "border-t border-line first:border-t-0 sm:first:border-t-0",
    i >= 2 && "sm:border-t lg:border-t-0",
    i === 1 && "sm:border-t-0 lg:border-t-0",
    i % 2 === 1 && "sm:border-l sm:pl-7",
    i > 0 && "lg:border-l lg:pl-7",
    i === 2 && "sm:pl-0 sm:border-l-0 lg:border-l lg:pl-7",
    i === 3 && "sm:border-l sm:pl-7",
  );
}

export function SolutionsSection() {
  return (
    <Section id="solutions" tone="surface">
      <Reveal>
        <SectionHeading title="Built around how you manage money." />
      </Reveal>
      <div className="mt-14 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((s, i) => {
          const Icon = icons[s.id];
          return (
            <Reveal key={s.id} delay={i * 0.05} className={cellClasses(i)}>
              <Link href={hrefs[s.id]} className="group block h-full py-8 pr-6 transition-colors">
                <Icon className="h-6 w-6 text-ink-800 transition-colors group-hover:text-blue-600" strokeWidth={1.5} />
                <h3 className="mt-8 text-h3 text-ink-900">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-muted">{s.body}</p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
