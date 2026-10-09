import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FlowLines } from "@/components/ui/FlowLines";
import { site } from "@/config/site";

export function FinalCTA() {
  return (
    <Section id="get-started" tone="sky" backdrop={<FlowLines className="opacity-50" />}>
      <Reveal>
        <div className="mx-auto max-w-2xl py-8 text-center">
          <h2 className="text-h2 text-balance text-ink-950">Build with Nixafin.</h2>
          <p className="mx-auto mt-4 max-w-md text-lead text-text-muted text-pretty">
            Power your payments, automate disburals, and scale your financial operations with unified infrastructure.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={site.links.getStarted} size="lg">
              Get started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={site.links.talkToSales} variant="secondary" size="lg">
              Talk to sales
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
