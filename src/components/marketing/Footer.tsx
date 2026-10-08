import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/config/navigation";

export function Footer() {
  return (
    <footer id="resources" className="border-t border-white/10 bg-ink-950 text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Financial intelligence that helps you understand your money and make better decisions.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {footerNav.map((g) => (
              <div key={g.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">{g.title}</h3>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={`${g.title}-${l.label}`}>
                      <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-white/40">
            NexaFin provides financial information and insights and does not provide financial, investment, tax or legal
            advice. Interface examples on this site use fictional demo data.
          </p>
          <p className="shrink-0 text-xs text-white/40">&copy; {new Date().getFullYear()} NexaFin.</p>
        </div>
      </Container>
    </footer>
  );
}
