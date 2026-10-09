"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/brand/Logo";
import { 
  CreditCard, 
  Cpu, 
  Send, 
  ArrowRight, 
  ShieldCheck, 
  GitMerge, 
  RefreshCcw, 
  Landmark, 
  Layers, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/format";

type StageId = "initiation" | "processing" | "settlement";

interface StageDetail {
  id: StageId;
  stageNumber: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  inputs: string[];
  capabilities: string[];
  activeEngine: string;
  color: string;
}

const architectureStages: StageDetail[] = [
  {
    id: "initiation",
    stageNumber: "01",
    name: "Payment Initiation",
    category: "Ingress Layer",
    summary: "Unified customer & commercial payment intake",
    description: "Accept and ingest transaction payloads across cards, UPI, digital mandates, and net banking rails via standardized SDKs and REST endpoints.",
    inputs: ["UPI & QR", "Cards & Tokenization", "eNACH Mandates", "Net Banking"],
    capabilities: ["Omnichannel API ingress", "Pre-flight validation", "Payload encryption"],
    activeEngine: "Ingress Gateway · Inbound Active",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "processing",
    stageNumber: "02",
    name: "Core Processing & Orchestration",
    category: "Nixafin Core",
    summary: "Intelligent routing, fraud protection & workflow rules",
    description: "The central infrastructure layer evaluates risk with NxSecure, applies programmable workflow logic via NxFlow, and determines the optimal banking clearing path.",
    inputs: ["NxSecure Risk Scoring", "NxFlow Rule Engine", "Token Vault", "Ledger Synchronization"],
    capabilities: ["Automated payment routing", "Real-time risk scoring", "Double-entry transaction logging"],
    activeEngine: "Orchestration Layer · Engine Synchronized",
    color: "from-cyan-500/25 to-blue-600/20",
  },
  {
    id: "settlement",
    stageNumber: "03",
    name: "Payout & Settlement",
    category: "Egress & Clearing",
    summary: "Automated vendor disbursements & bank reconciliation",
    description: "Funds clear to commercial bank accounts, merchant ledgers, and vendor balances with automated batch reconciliation and Bharat Connect clearing networks.",
    inputs: ["Vendor Disburals", "Split Settlements", "Bharat Connect Rails", "Multi-Currency Accounts"],
    capabilities: ["Direct bank clearing", "Automated reconciliation", "Instant vendor transfers"],
    activeEngine: "Clearing & Settlement · Rails Ready",
    color: "from-blue-600/20 to-purple-600/15",
  },
];

export function PlatformArchitecture() {
  const [selectedStage, setSelectedStage] = useState<StageId>("processing");

  const currentStage = architectureStages.find((s) => s.id === selectedStage) || architectureStages[1];

  return (
    <section id="architecture" className="relative isolate bg-[#040C16] py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[38rem] w-[58rem] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-600/15 to-purple-600/10 blur-3xl opacity-50" />
      </div>

      <Container>
        {/* Section Heading & Factual Supporting Copy */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={8}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-[#D4FF65]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF65]" />
              PLATFORM ARCHITECTURE
            </div>
          </Reveal>

          <Reveal y={10}>
            <h2 className="text-display font-extrabold text-white tracking-tight text-balance">
              Financial infrastructure, connected.
            </h2>
          </Reveal>

          <Reveal delay={0.08} y={10}>
            <p className="mx-auto mt-4 max-w-2xl text-lead text-white/70 text-pretty font-normal">
              A unified system linking payment initiation, intelligent core processing, and automated bank settlements into one continuous flow.
            </p>
          </Reveal>
        </div>

        {/* Custom Transaction-Flow Architecture Diagram */}
        <Reveal delay={0.16} className="mt-14">
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            {/* Top Node Flow Indicator Ribbon */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  <LogoMark size={22} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    NIXAFIN CONNECTED TRANSACTION FLOW
                  </h3>
                  <p className="text-xs text-white/50 font-mono">
                    System Architecture · Click any stage to inspect
                  </p>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentStage.activeEngine}</span>
              </div>
            </div>

            {/* Stage Selector Node Cards (Initiation -> Processing -> Settlement) */}
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {architectureStages.map((stage) => {
                const isSelected = selectedStage === stage.id;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setSelectedStage(stage.id)}
                    className={cn(
                      "group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300",
                      isSelected
                        ? "border-cyan-400/60 bg-gradient-to-b from-cyan-500/20 via-white/[0.07] to-white/[0.02] shadow-xl shadow-cyan-500/10 -translate-y-0.5"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "font-mono text-xs font-bold px-2.5 py-1 rounded-md",
                          isSelected ? "bg-cyan-400 text-[#07131F]" : "bg-white/10 text-white/60"
                        )}>
                          STAGE {stage.stageNumber}
                        </span>
                        <span className="text-[11px] font-mono text-white/40">
                          {stage.category}
                        </span>
                      </div>

                      <h4 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {stage.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-white/60 leading-relaxed">
                        {stage.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                      <span className={cn(
                        "font-medium transition-colors",
                        isSelected ? "text-[#D4FF65]" : "text-white/40 group-hover:text-white/70"
                      )}>
                        {isSelected ? "Active Stage" : "Inspect Stage"}
                      </span>
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform",
                        isSelected ? "translate-x-1 text-[#D4FF65]" : "text-white/40 group-hover:translate-x-0.5"
                      )} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Deep Stage Inspector Details Panel */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#020811]/90 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Stage Narrative Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <span>FLOW STAGE // {currentStage.stageNumber}</span>
                      <span>·</span>
                      <span>{currentStage.category}</span>
                    </div>

                    <h4 className="mt-2 text-2xl font-bold text-white">
                      {currentStage.name}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {currentStage.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-white/50">
                        Verified Technical Capabilities
                      </p>
                      <div className="space-y-1.5">
                        {currentStage.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs text-white/90">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connected Flow Node Map */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/50 text-[11px]">
                      <span>STAGE NODES & SUBSYSTEMS</span>
                      <span className="text-cyan-300">NIXAFIN MESH</span>
                    </div>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {currentStage.inputs.map((item, idx) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-black/40 px-3.5 py-2.5 text-white/90"
                        >
                          <span className="grid h-6 w-6 place-items-center rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                            0{idx + 1}
                          </span>
                          <span className="text-xs truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stage Pipeline Banner */}
                    <div className="mt-4 flex items-center justify-between rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-[11px] text-cyan-200">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        <span>Continuous State Machine</span>
                      </div>
                      <span className="text-white/60 font-semibold">Zero Double-Spend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
