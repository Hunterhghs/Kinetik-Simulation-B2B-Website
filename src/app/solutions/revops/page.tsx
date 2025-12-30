import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Route, Shield, Timer, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "RevOps solution",
  description:
    "Govern signal-based workflows, enforce SLAs, and measure outcomes with operator-owned definitions and audit-ready provenance.",
};

const workflows = [
  {
    icon: ClipboardCheck,
    title: "Pipeline hygiene",
    description:
      "Catch stage quality issues early by comparing signals to expected activity — with consistent definitions.",
    bullets: [
      "Stage/activity mismatch alerts",
      "Quality score with reason codes",
      "Exception queues for review",
    ],
  },
  {
    icon: Route,
    title: "Routing governance",
    description:
      "Turn signals into assignments safely with rules, exceptions, and versioned changes.",
    bullets: [
      "Rule-based assignment",
      "Conflict detection",
      "Audit trail for updates",
    ],
  },
  {
    icon: Timer,
    title: "SLA enforcement",
    description:
      "Instrument SLAs around signals that matter, not just timestamps in CRM fields.",
    bullets: [
      "SLA timers and escalations",
      "Coverage gaps surfaced",
      "SLA performance reporting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Attribution sanity",
    description:
      "Align what your teams believe happened with what your signals show actually happened.",
    bullets: [
      "Workflow-level measurement",
      "Reason codes for outcomes",
      "Definitions RevOps can defend",
    ],
  },
];

export default function RevOpsSolutionPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Solutions · RevOps</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Your revenue system is only as good as your signals.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Kinetik is built for RevOps teams that need governance, provenance, and measurable
              workflows — not black-box scoring and brittle automations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workflows.map((w) => {
              const Icon = w.icon;
              return (
                <Card key={w.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base">{w.title}</CardTitle>
                    </div>
                    <CardDescription>{w.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {w.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Designed for control"
            title="Operator controls and audit-ready measurement"
            description="RevOps needs to explain outcomes to Sales leadership and the board. Kinetik keeps definitions consistent and makes decisions traceable."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                    <Shield className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">Governance</CardTitle>
                </div>
                <CardDescription>
                  Centralize routing, scoring, and verification in one owned system.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Changes are versioned. Exceptions are visible. “Why did this happen?” has an answer.
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                    <ClipboardCheck className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">Definitions</CardTitle>
                </div>
                <CardDescription>
                  Ensure teams share the same view of what signals mean.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Standardize definitions for intent, engagement, qualification, and readiness.
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">Measurement</CardTitle>
                </div>
                <CardDescription>
                  Validate lift at the workflow level with clear reason codes.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Track SLA compliance, conversion, leakage, and quality — without hand-waving.
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
