"use client";

import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Activity, Brain, Workflow, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const layers = [
  {
    icon: Activity,
    title: "Signal Layer",
    color: "from-blue-500 to-cyan-500",
    colorBg: "bg-blue-500/10",
    colorText: "text-blue-500",
    desc: "Capture and normalize signals across your entire GTM stack — with provenance, dedupe, and time decay.",
    bullets: [
      "CRM + activity signals",
      "Web + content engagement",
      "Email + calendar engagement",
      "Product usage events",
      "Firmographics + enrichment",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    color: "from-violet-500 to-purple-500",
    colorBg: "bg-violet-500/10",
    colorText: "text-violet-500",
    desc: "Transform signals into explainable scoring, buying group visibility, and next-best actions.",
    bullets: [
      "Transparent scoring",
      "Buying group inference",
      "False-positive controls",
      "Reason codes + audit trail",
      "Measurement-ready outputs",
    ],
  },
  {
    icon: Workflow,
    title: "Action Layer",
    color: "from-emerald-500 to-teal-500",
    colorBg: "bg-emerald-500/10",
    colorText: "text-emerald-500",
    desc: "Route, alert, and orchestrate workflows across your stack — with SLAs and governance.",
    bullets: [
      "Routing and assignment",
      "Alerting (Slack/email)",
      "Playbooks & orchestration",
      "SLA enforcement",
      "Workflow analytics",
    ],
  },
];

export function ThreeLayerDiagram() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="How it works"
          title="A three-layer system built for RevOps reality"
          description="Signals are only valuable when they're reliable, explainable, and operationalized inside the tools your teams already use."
          align="center"
        />

        {/* Flow indicator */}
        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-500 font-medium">Signals</span>
          <ArrowRight className="h-4 w-4" />
          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-500 font-medium">Intelligence</span>
          <ArrowRight className="h-4 w-4" />
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-500 font-medium">Action</span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {layers.map((l, idx) => {
            const Icon = l.icon;
            return (
              <Card 
                key={l.title} 
                className={cn(
                  "relative overflow-hidden transition-all duration-300 card-hover",
                  "opacity-0 animate-fade-in-up"
                )}
                style={{ 
                  animationDelay: `${idx * 150}ms`,
                  animationFillMode: "forwards" 
                }}
              >
                {/* Gradient top border */}
                <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", l.color)} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", l.colorBg)}>
                      <Icon className={cn("h-5 w-5", l.colorText)} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Layer {idx + 1}
                      </span>
                      <CardTitle className="text-lg">{l.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-3">{l.desc}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2.5">
                    {l.bullets.map((b, bulletIdx) => (
                      <li 
                        key={b} 
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className={cn(
                          "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r",
                          l.color
                        )} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 justify-between pointer-events-none">
          <div className="flex-1 border-t-2 border-dashed border-border/50 mt-32" />
          <div className="flex-1 border-t-2 border-dashed border-border/50 mt-32" />
        </div>
      </Container>
    </section>
  );
}
