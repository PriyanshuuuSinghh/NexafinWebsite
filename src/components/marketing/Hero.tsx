import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FlowLines } from "@/components/ui/FlowLines";
import { site } from "@/config/site";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-atmosphere pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-20 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <FlowLines />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 xl:gap-14">
          <div>
            <Reveal y={8}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">Financial Intelligence</p>
            </Reveal>
            <Reveal y={10}>
              <h1 className="text-hero text-ink-950">
                <span className="block text-balance">Understand your money.</span>
                <span className="block text-balance">Make better decisions.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08} y={10}>
              <p className="mt-6 max-w-md text-lead text-text-muted text-pretty">
                NexaFin brings your financial world together and turns complex financial activity into clear, actionable insight.
              </p>
            </Reveal>
            <Reveal delay={0.16} y={10}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={site.links.getStarted} size="lg">
                  Get started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={site.links.demo} variant="secondary" size="lg">
                  Explore platform
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:pl-4 xl:-mr-12">
            <DashboardPreview />
            <p className="mt-5 text-xs italic text-text-subtle lg:mt-20">Example interface using fictional data.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
