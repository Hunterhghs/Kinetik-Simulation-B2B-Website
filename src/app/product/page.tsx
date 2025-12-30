import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, FileCheck2, Settings2, Workflow, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Platform overview: unify enterprise signals, produce explainable intelligence, and run governed RevOps workflows across your stack.",
};

function LayerCard({
  icon: Icon,
  title,
  description,
  bullets,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
            <Icon className="h-4 w-4" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ProductPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Platform</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Signals, made operational.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Kinetik is a three-layer system that helps enterprise teams move from
              noisy inputs to explainable intelligence to governed action — all with
              measurement built in.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <LayerCard
              icon={Activity}
              title="Signal layer"
              description="Capture and normalize signals across systems with provenance and quality controls."
              bullets={[
                "Supported signals: CRM activity, web engagement, email/calendar, product usage, enrichment",
                "Normalization & dedupe (remove duplicates, unify identities)",
                "Time decay so “stale” intent doesn’t distort scoring",
                "Verification rules to reduce false positives",
                "Data provenance attached to every output",
              ]}
            />
            <LayerCard
              icon={Brain}
              title="Intelligence layer"
              description="Produce transparent scoring, buying group views, and recommendations you can explain."
              bullets={[
                "Operator-defined scoring thresholds",
                "Buying group inference (who is active, what changed)",
                "Reason codes for prioritization decisions",
                "Explainability: show the signal mix behind each score",
                "Measurement-ready outputs for reporting",
              ]}
            />
            <LayerCard
              icon={Workflow}
              title="Action layer"
              description="Route and orchestrate work through workflows that match enterprise governance."
              bullets={[
                "Routing + assignment with exceptions",
                "Alerts to Slack/email with context",
                "Playbooks and SLA timers",
                "Workflow analytics and drift detection",
                "Change control for rules and definitions",
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Operator controls"
            title="Governance that makes signals safe to act on"
            description="Enterprise GTM systems require control. Kinetik is designed for teams that need consistent definitions, visibility into changes, and an audit trail."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                    <Settings2 className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">Rules & thresholds</CardTitle>
                </div>
                <CardDescription>
                  Configure scoring, routing, and verification rules with RevOps ownership.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Keep “what counts” consistent across teams. Make changes intentionally, not ad-hoc.
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                    <FileCheck2 className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">Audit trail</CardTitle>
                </div>
                <CardDescription>
                  Track why a decision happened and what changed over time.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Reason codes, rule versions, and provenance make outputs defensible in reviews.
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                    <Activity className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">Measurement</CardTitle>
                </div>
                <CardDescription>
                  Validate that workflows change outcomes — not just activity.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Track lift, leakage, SLA compliance, and quality improvements with clear definitions.
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Provenance"
            title="Know where every signal came from"
            description="Signal intelligence must be traceable. Kinetik is designed to preserve source context so teams can trust (and verify) what’s driving action."
          />
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-12 md:items-start">
              <div className="md:col-span-7">
                <h3 className="text-lg font-semibold">Data provenance built-in</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every recommendation can include: the source system, timestamp, identity mapping,
                  and the verification rules applied. This supports compliance reviews and reduces
                  “black box” objections during evaluation.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Source attribution (system + object)",
                    "Identity resolution notes (how entities were matched)",
                    "Dedupe + decay policy applied",
                    "Reason codes for scores and routes",
                    "Change log for operational definitions",
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-dashed border-border bg-muted/40 p-6 text-xs text-muted-foreground">
                  UI placeholder: “Explainability panel” screenshot slot.
                  <div className="mt-4 grid gap-2">
                    <div className="rounded-md border border-border bg-background p-3">
                      <div className="font-medium">Score reason codes</div>
                      <div className="mt-1">Web intent (7 days) + Product usage spike + New stakeholder</div>
                    </div>
                    <div className="rounded-md border border-border bg-background p-3">
                      <div className="font-medium">Verification rules</div>
                      <div className="mt-1">Time decay + dedupe + domain match</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
