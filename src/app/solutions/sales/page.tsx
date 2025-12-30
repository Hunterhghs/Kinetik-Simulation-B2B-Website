import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users, Clock, Map, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales solution",
  description:
    "Prioritize timing, accounts, and territories with transparent scoring and buying-group visibility — built for enterprise sales teams.",
};

const features = [
  {
    icon: Target,
    title: "Account prioritization",
    description:
      "Know which accounts are changing now — and why — with multi-signal scoring that shows the reason behind every recommendation.",
    bullets: [
      "Multi-signal scoring with transparency",
      "Time decay so stale signals don't mislead",
      "Buying-group aware rollups",
    ],
  },
  {
    icon: Users,
    title: "Buying committee visibility",
    description:
      "See who is newly active in the deal, what role they might play, and how engagement has changed across stakeholders.",
    bullets: [
      "Stakeholder detection from email + CRM",
      "Role and influence hints",
      "Engagement timelines per contact",
    ],
  },
  {
    icon: Clock,
    title: "Timing signals",
    description:
      "Act when accounts are ready — not when CRM fields say so. Signals show real-time changes worth responding to.",
    bullets: [
      "Web + content consumption spikes",
      "Product usage changes",
      "Expansion and renewal timing hints",
    ],
  },
  {
    icon: Map,
    title: "Territory intelligence",
    description:
      "Use real signal coverage to validate territory decisions and identify where focus is needed most.",
    bullets: [
      "Signal density by segment",
      "Coverage gaps surfaced",
      "Rep capacity alignment data",
    ],
  },
];

const outcomes = [
  {
    metric: "↑ 23%",
    label: "Meeting conversion from signal-prioritized accounts",
    note: "Example metric — replace with validated customer data",
  },
  {
    metric: "− 35%",
    label: "Time spent on unqualified accounts",
    note: "Example metric — replace with validated customer data",
  },
  {
    metric: "2.1×",
    label: "Pipeline velocity improvement",
    note: "Example metric — replace with validated customer data",
  },
];

export default function SalesSolutionPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Solutions · Sales</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Prioritize with confidence.
              <span className="block text-muted-foreground">Act at the right time.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Enterprise sales teams need more than lead scores. Kinetik provides 
              transparent, explainable intelligence about which accounts are changing 
              and why — so reps focus on the right opportunities at the right time.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="For Sales Teams"
            title="Intelligence that reps actually trust"
            description="Sellers ignore black-box scores. Kinetik provides reason codes and provenance, so every recommendation is explainable."
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                    </div>
                    <CardDescription className="mt-3">{f.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Zap className="h-4 w-4 shrink-0 text-primary mt-0.5" />
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

      <section className="py-16 bg-muted/30">
        <Container>
          <SectionHeading
            eyebrow="Outcomes"
            title="Measured at the workflow level"
            description="Track impact where it matters: meeting conversion, pipeline velocity, and rep efficiency."
            align="center"
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {outcomes.map((o) => (
              <Card key={o.label} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold tracking-tight text-primary">
                    {o.metric}
                  </div>
                  <p className="mt-3 text-sm text-foreground">{o.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{o.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Built for sales workflows, not just dashboards
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Signal intelligence is only useful if it changes what teams do. 
                  Kinetik pushes prioritized accounts, timing alerts, and buying-group 
                  updates into the CRM and tools reps already use.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Alerts in Slack/email with context and reason codes",
                    "Prioritized account lists synced to CRM",
                    "Buying group changes surfaced in opportunity views",
                    "SLA timers for follow-up accountability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-dashed border-border bg-muted/40 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Product screenshot placeholder — 
                  <br />
                  Account prioritization or buying group view
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="See signal-driven prioritization in action"
        description="Pick one workflow — account prioritization, buying group visibility, or territory coverage. We'll show you how it works on your data."
      />
    </>
  );
}
