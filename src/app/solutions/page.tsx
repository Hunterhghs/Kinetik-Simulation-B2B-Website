import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2, TrendingUp, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Signal intelligence solutions for RevOps, Sales, and Marketing teams. Governance, measurement, and workflows that change outcomes.",
};

const solutions = [
  {
    icon: Settings2,
    title: "RevOps",
    description: "Govern signal-based workflows, enforce SLAs, and measure outcomes with operator-owned definitions and audit-ready provenance.",
    href: "/solutions/revops",
    highlights: [
      "Pipeline hygiene automation",
      "Routing governance",
      "SLA enforcement",
      "Attribution with reason codes",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales",
    description: "Prioritize timing, accounts, and territories with transparent scoring and buying-group visibility that reps can trust.",
    href: "/solutions/sales",
    highlights: [
      "Account prioritization",
      "Buying committee visibility",
      "Timing signals",
      "Territory intelligence",
    ],
  },
  {
    icon: Users,
    title: "Marketing",
    description: "Activate buying-group signals and measure pipeline impact with transparent attribution that marketing can defend.",
    href: "/solutions/marketing",
    highlights: [
      "Buying group activation",
      "Account-based signals",
      "Campaign attribution",
      "Personalization at scale",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Solutions</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Signal intelligence for every team.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Kinetik is built for the realities of enterprise GTM — governance, 
              exceptions, cross-system signals, and audit-ready measurement. 
              Each solution is tailored to the workflows your team actually runs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card key={solution.title} className="overflow-hidden card-hover">
                  <div className="grid md:grid-cols-3">
                    <CardHeader className="md:col-span-1 bg-muted/30 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">{solution.description}</CardDescription>
                      <Link 
                        href={solution.href}
                        className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardHeader>
                    <CardContent className="md:col-span-2 py-6 flex items-center">
                      <div className="grid sm:grid-cols-2 gap-4 w-full">
                        {solution.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Start with one workflow
            </h2>
            <p className="mt-4 text-muted-foreground">
              The best way to evaluate Kinetik is to pick one measurable workflow — 
              routing governance, prioritization, or SLA enforcement — and validate 
              it on your data with your team.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="See signal intelligence in action"
        description="Book a demo to see how Kinetik handles signals for your specific use case — with governance and measurement built in."
      />
    </>
  );
}
