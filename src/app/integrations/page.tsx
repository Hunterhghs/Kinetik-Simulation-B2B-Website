import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Kinetik to your existing GTM stack. Ingest signals, normalize them, and push governed actions back into your systems.",
};

type Integration = {
  name: string;
  description: string;
  supportedSignals: string[];
};

const categories: Record<string, Integration[]> = {
  CRM: [
    {
      name: "Salesforce",
      description: "Accounts, opportunities, activities, stage changes, ownership, and routing outcomes.",
      supportedSignals: ["Stage changes", "Activity events", "Ownership changes"],
    },
    {
      name: "HubSpot CRM",
      description: "Contacts, companies, deals, engagement events, and lifecycle updates.",
      supportedSignals: ["Lifecycle changes", "Engagement events"],
    },
  ],
  MAP: [
    {
      name: "Marketo",
      description: "Program membership, lead scoring, email engagement, and lifecycle logic.",
      supportedSignals: ["Email engagement", "Program signals"],
    },
    {
      name: "HubSpot Marketing",
      description: "Forms, emails, lists, and campaign engagement signals.",
      supportedSignals: ["Form conversions", "Email clicks/opens"],
    },
  ],
  "Data Warehouse": [
    {
      name: "Snowflake",
      description: "Ingest modeled events from your warehouse for unified scoring and measurement.",
      supportedSignals: ["Custom event tables", "Account-level rollups"],
    },
    {
      name: "BigQuery",
      description: "Warehouse-native signals for product usage and GTM measurement models.",
      supportedSignals: ["Product usage", "Attribution models"],
    },
  ],
  Messaging: [
    {
      name: "Slack",
      description: "Deliver alerts with context and route exception reviews to channels.",
      supportedSignals: ["Alert delivery", "Exception review queues"],
    },
    {
      name: "Microsoft Teams",
      description: "Notify account owners and ops teams where they work.",
      supportedSignals: ["Alerts", "SLA escalations"],
    },
  ],
  "Enrichment / Intent": [
    {
      name: "Clearbit (placeholder)",
      description: "Firmographics enrichment and account identity support.",
      supportedSignals: ["Firmographics updates", "Domain-to-account mapping"],
    },
    {
      name: "Intent provider (placeholder)",
      description: "Topic and consumption signals, normalized and governed.",
      supportedSignals: ["Intent spikes", "Topic changes"],
    },
  ],
  Ticketing: [
    {
      name: "Zendesk (placeholder)",
      description: "Support signals that may indicate churn risk or expansion timing.",
      supportedSignals: ["Ticket volume changes", "Escalations"],
    },
    {
      name: "Jira (placeholder)",
      description: "Operational signals tied to onboarding and delivery milestones.",
      supportedSignals: ["Milestone changes", "Delivery status"],
    },
  ],
  BI: [
    {
      name: "Looker (placeholder)",
      description: "Expose signal-driven outcomes in dashboards stakeholders already use.",
      supportedSignals: ["Workflow performance metrics"],
    },
    {
      name: "Tableau (placeholder)",
      description: "Report on signal coverage, routing outcomes, and SLA compliance.",
      supportedSignals: ["SLA reporting", "Coverage analytics"],
    },
  ],
};

export default function IntegrationsPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Integrations</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Integrate signals. Keep your stack.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Kinetik is designed to ingest signals where they live and push actions back into
              the systems your teams already operate in — with governance and measurement included.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category}>
                <SectionHeading
                  title={category}
                  description="Example integration cards — replace with your confirmed connectors and supported signals."
                />
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {items.map((i) => (
                    <Card key={i.name} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-base">{i.name}</CardTitle>
                        <CardDescription>{i.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Supported signals
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {i.supportedSignals.map((s) => (
                            <li key={s} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
