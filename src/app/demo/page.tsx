import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { DemoForm } from "@/components/demo-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Request a demo of Kinetik. Align on signals, governance, and the first measurable workflow.",
};

export default function DemoPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <div className="max-w-2xl space-y-4">
              <Badge>Demo</Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                See signal intelligence in a workflow — not a dashboard.
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                The goal of the demo is simple: pick one workflow, show the signal inputs and governance,
                and define what measurement will prove it worked.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Workflow,
                    title: "Start with one workflow",
                    desc: "Routing governance, SLA enforcement, or prioritization.",
                  },
                  {
                    icon: Shield,
                    title: "Show operator controls",
                    desc: "Reason codes, thresholds, exceptions, and audit trail.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Define measurement",
                    desc: "Agree on lift metrics and how they’ll be calculated.",
                  },
                  {
                    icon: Clock,
                    title: "Clear evaluation plan",
                    desc: "Timeline, stakeholders, and integration checklist.",
                  },
                ].map((x) => {
                  const Icon = x.icon;
                  return (
                    <Card key={x.title} className="h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                            <Icon className="h-4 w-4" />
                          </div>
                          <CardTitle className="text-base">{x.title}</CardTitle>
                        </div>
                        <CardDescription>{x.desc}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                          Placeholder — replace with your real checklist once finalized.
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div id="tour" className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight">90-sec tour (structure)</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Replace this with a real product video or interactive tour. This section is here so the
                “Watch 90-sec tour” CTA has a stable destination.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Ingest key signals (CRM, web, email/calendar, product usage).",
                    "Normalize + dedupe + apply time decay and verification.",
                    "Generate transparent scoring with reason codes and buying-group rollups.",
                    "Route actions into CRM + alerts with exceptions and SLAs.",
                    "Measure workflow lift and tune thresholds safely over time.",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-muted text-center text-xs leading-6">
                        ✓
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <DemoForm />
          </div>
        </Container>
      </section>
    </>
  );
}
