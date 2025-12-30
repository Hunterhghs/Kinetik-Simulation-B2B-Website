import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Lock, Ruler, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we’re building Kinetik: making enterprise signals trustworthy, explainable, and operational for RevOps workflows.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Company</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Built for operators who need clarity.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Enterprise GTM teams are flooded with signals — but many signals can’t be trusted,
              explained, or measured. Kinetik is focused on making signal intelligence operational:
              governed definitions, provenance, and workflows that change outcomes.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="What we optimize for"
            description="These principles shape product design, messaging, and customer evaluations."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Activity,
                title: "Signals should be traceable",
                body: "Every output should link back to source systems, timestamps, and identity resolution steps.",
              },
              {
                icon: Ruler,
                title: "Definitions should be owned",
                body: "RevOps controls thresholds, verification rules, and what “ready” means — not a black box.",
              },
              {
                icon: Workflow,
                title: "Workflows should be measurable",
                body: "We focus on measurable workflow lift: routing outcomes, SLA compliance, pipeline quality, and conversion.",
              },
              {
                icon: Lock,
                title: "Trust is a feature",
                body: "Enterprise buyers expect security posture, privacy-first practices, and predictable governance from day one.",
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {p.body}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
