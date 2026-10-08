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
        <div className="mx-auto max-w-2xl py-6 text-center">
          <h2 className="text-h2 text-balance text-ink-950">Your financial picture, finally clear.</h2>
          <p className="mx-auto mt-5 max-w-md text-lead text-text-muted text-pretty">
            Connect your accounts and let NexaFin turn them into something you can understand and act on.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={site.links.getStarted} size="lg">
              Get started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/platform" variant="secondary" size="lg">
              Explore platform
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
