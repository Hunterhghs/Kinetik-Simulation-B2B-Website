import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Sparkles, Target, LineChart, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing solution",
  description:
    "Activate buying-group signals and measure pipeline impact with transparent attribution — built for enterprise marketing teams.",
};

const features = [
  {
    icon: Users,
    title: "Buying group activation",
    description:
      "Reach the full buying committee, not just the known contact. Surface new stakeholders and tailor engagement by role.",
    bullets: [
      "Stakeholder detection from engagement signals",
      "Role-based persona mapping",
      "Buying group coverage scoring",
    ],
  },
  {
    icon: Target,
    title: "Account-based signals",
    description:
      "Identify which accounts are surging and route them to the right programs with transparent scoring.",
    bullets: [
      "Multi-channel engagement rollups",
      "Intent signal integration",
      "Account-level scoring with reason codes",
    ],
  },
  {
    icon: BarChart3,
    title: "Campaign attribution",
    description:
      "Connect marketing activity to pipeline impact with provenance — not just first-touch or last-touch assumptions.",
    bullets: [
      "Full journey visibility",
      "Signal-based attribution",
      "Outcome measurement at the workflow level",
    ],
  },
  {
    icon: Sparkles,
    title: "Personalization at scale",
    description:
      "Use signal intelligence to personalize outreach based on actual engagement patterns and buying stage.",
    bullets: [
      "Engagement-based segmentation",
      "Stage-appropriate messaging triggers",
      "Continuous refinement from outcomes",
    ],
  },
];

const useCases = [
  {
    title: "MQL to pipeline conversion",
    desc: "Track which signal combinations lead to quality pipeline, not just lead volume.",
  },
  {
    title: "Buying group engagement",
    desc: "Measure coverage across the buying committee and surface accounts with expanding engagement.",
  },
  {
    title: "Campaign influence",
    desc: "Understand which programs influence deals with transparent signal-based attribution.",
  },
];

export default function MarketingSolutionPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Solutions · Marketing</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Activate buying groups.
              <span className="block text-muted-foreground">Measure pipeline impact.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Enterprise marketing teams need to reach the full buying committee and 
              prove impact on pipeline. Kinetik provides buying-group intelligence 
              and transparent attribution — so you can optimize programs that actually work.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="For Marketing Teams"
            title="Beyond lead scoring to buying-group intelligence"
            description="MQLs don't capture how enterprise deals actually work. Kinetik surfaces buying-group signals that marketing can act on."
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                    </div>
                    <CardDescription className="mt-3">{f.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Layers className="h-4 w-4 shrink-0 text-accent mt-0.5" />
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
            eyebrow="Use cases"
            title="Measure what matters for pipeline"
            description="Track outcomes that connect to revenue, not vanity metrics."
            align="center"
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {useCases.map((uc) => (
              <Card key={uc.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{uc.title}</CardTitle>
                  <CardDescription>{uc.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-dashed border-border bg-background p-4 text-xs text-muted-foreground">
                    Example dashboard view — add real metrics once available
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Badge className="mb-4">Attribution</Badge>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Attribution you can actually defend
              </h2>
              <p className="mt-4 text-muted-foreground">
                Black-box attribution models undermine marketing credibility. 
                Kinetik provides signal-level provenance, so you can show exactly 
                which touchpoints influenced deals — and prove it.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: LineChart,
                    title: "Full journey visibility",
                    desc: "See every signal that touched an account before it became pipeline.",
                  },
                  {
                    icon: Layers,
                    title: "Signal provenance",
                    desc: "Know where each data point came from and when.",
                  },
                  {
                    icon: BarChart3,
                    title: "Reason codes",
                    desc: "Explain why a signal mattered to the outcome.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-sm font-medium mb-4">Attribution Example</div>
              <div className="space-y-3">
                {[
                  { channel: "Content download", weight: "32%", signals: 4 },
                  { channel: "Webinar attendance", weight: "28%", signals: 2 },
                  { channel: "Email engagement", weight: "24%", signals: 8 },
                  { channel: "Website visits", weight: "16%", signals: 12 },
                ].map((row) => (
                  <div key={row.channel} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{row.channel}</span>
                        <span className="font-medium">{row.weight}</span>
                      </div>
                      <div className="mt-1.5 h-2 rounded-full bg-muted overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: row.weight }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{row.signals} signals</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Placeholder visualization — shows signal-weighted attribution
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="See buying-group intelligence in action"
        description="Pick one use case — buying group coverage, campaign attribution, or MQL-to-pipeline tracking. We'll show you how it works."
      />
    </>
  );
}
