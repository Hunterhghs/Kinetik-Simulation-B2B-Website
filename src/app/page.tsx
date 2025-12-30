import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ThreeLayerDiagram } from "@/components/three-layer-diagram";
import { StatBlocks } from "@/components/stat-blocks";
import { IntegrationGrid } from "@/components/integration-grid";
import { CTASection } from "@/components/cta-section";
import { AccordionFAQ } from "@/components/accordion-faq";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { UseCaseCard } from "@/components/use-case-card";
import { ResourceCard } from "@/components/resource-card";
import { listAllContent } from "@/lib/content";
import {
  BadgeCheck,
  FolderKanban,
  GitPullRequest,
  Map,
  ShieldAlert,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Signal intelligence for RevOps workflows",
  description:
    "Kinetik turns enterprise B2B signals into RevOps-ready intelligence and measurable actions — so teams can prioritize, route, and govern revenue motions with confidence.",
};

export default function HomePage() {
  const latest = listAllContent().slice(0, 3);

  return (
    <>
      {/* 1) Hero */}
      <Hero
        title="Turn enterprise signals into RevOps-ready actions."
        subtitle="Kinetik unifies messy B2B signals, turns them into explainable intelligence, and routes work through governed workflows — so revenue teams act at the right time, for the right accounts, with measurable impact."
      />

      {/* 2) Social proof row */}
      <LogoCloud />

      {/* 3) Signals → Intelligence → Action */}
      <ThreeLayerDiagram />

      {/* 4) Use-case tiles */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Use cases"
            title="Workflows that teams can run, measure, and defend"
            description="Kinetik is built for the realities of enterprise operations: exceptions, governance, cross-system signals, and audit-ready measurement."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <UseCaseCard
              icon={ShieldAlert}
              title="Pipeline quality"
              description="Detect stage risk early by comparing signals to expected activity — not just CRM fields."
              bullets={[
                "Stage-activity mismatch alerts",
                "Quality scoring with reason codes",
                "Ops-approved definitions",
              ]}
            />
            <UseCaseCard
              icon={Map}
              title="Account prioritization"
              description="Identify which accounts are changing now — and why — with transparent scoring."
              bullets={[
                "Multi-signal scoring",
                "Time decay + dedupe",
                "Buying-group aware rollups",
              ]}
            />
            <UseCaseCard
              icon={GitPullRequest}
              title="Routing and SLAs"
              description="Turn signals into assignments and alerts with governance built-in."
              bullets={[
                "Rule-based routing + exceptions",
                "SLA timers and escalation",
                "Audit trail for changes",
              ]}
            />
            <UseCaseCard
              icon={Users}
              title="Buying committee visibility"
              description="Understand who is active in the deal and what changed across stakeholders."
              bullets={[
                "Stakeholder detection",
                "Role & influence hints",
                "Engagement timelines",
              ]}
            />
            <UseCaseCard
              icon={FolderKanban}
              title="Territory planning"
              description="Use real signal coverage to validate territory decisions and focus."
              bullets={[
                "Signal density by segment",
                "Coverage gaps surfaced",
                "Rep capacity alignment",
              ]}
            />
            <UseCaseCard
              icon={BadgeCheck}
              title="Governance & audit"
              description="Operator controls that make signals safe to act on — and easy to explain."
              bullets={[
                "Reason codes everywhere",
                "Rule versioning",
                "Exception review queues",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* 5) Proof blocks */}
      <StatBlocks />

      {/* 6) Integrations teaser */}
      <IntegrationGrid compact />

      {/* 7) Resources teaser */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Resources"
              title="Operator-first frameworks and playbooks"
              description="Short, practical resources you can hand to RevOps, Sales Ops, and Marketing Ops."
            />
            <a
              href="/resources"
              className="text-sm font-medium text-primary underline underline-offset-4"
            >
              View all resources
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latest.map((item) => (
              <ResourceCard key={`${item.type}:${item.slug}`} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 8) Final CTA band */}
      <CTASection
        title="See Kinetik on your data in 14 days"
        description="Pick one workflow (routing, SLA enforcement, or prioritization). We’ll instrument signals, define governance, and validate measurable lift — with full transparency."
      />

      <AccordionFAQ />
    </>
  );
}
