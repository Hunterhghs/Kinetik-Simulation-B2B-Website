import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogoCloud } from "@/components/logo-cloud";
import { TestimonialCard } from "@/components/testimonial-card";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Customer outcomes, stories, and proof. (All examples are placeholders — replace with real customer-approved assets.)",
};

export default function CustomersPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Customers</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Proof that stands up in real evaluations.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Enterprise buyers need outcomes, governance, and traceability — not just feature lists.
              This page is structured to hold logos, quotes, and case studies once approved.
            </p>
          </div>
        </Container>
      </section>

      <LogoCloud title="Logo placeholders" />

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What operators want to be able to say"
            description="Replace these placeholders with customer-approved quotes once you have them."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              company="EnterpriseCo"
              name="Alex Rivera"
              title="RevOps Director"
              quote="We finally aligned what our teams believed with what our signals showed. Routing stopped being a black box."
            />
            <TestimonialCard
              company="Northwind"
              name="Jordan Lee"
              title="VP, Revenue Operations"
              quote="The reason codes and audit trail made adoption easier — and made our measurement defensible."
            />
            <TestimonialCard
              company="ApexWorks"
              name="Sam Patel"
              title="Sales Operations"
              quote="We reduced noise and focused reps on the accounts that were actually changing week to week."
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Case studies"
            title="Stories built around measurable workflows"
            description="Use this section to publish workflow-level outcomes (routing, SLA enforcement, prioritization)."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Signal-based routing governance",
                desc: "How a RevOps team reduced exceptions and improved SLA compliance with versioned rules.",
              },
              {
                title: "Reducing false positives in prioritization",
                desc: "How time decay and verification cut noise and increased seller trust in scores.",
              },
              {
                title: "Buying group visibility for pipeline impact",
                desc: "How marketing activated buying-group signals and measured lift at the workflow level.",
              },
            ].map((c) => (
              <Card key={c.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{c.title}</CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
                    Placeholder: add problem, approach, timeline, metrics, and quotes once approved.
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
