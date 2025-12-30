import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Globe, UserCheck, Trash2, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy-first approach to signal intelligence. Data minimization, retention controls, and individual rights support.",
};

const privacyPrinciples = [
  {
    icon: Database,
    title: "Data minimization",
    description: "We only collect and process data necessary for the signal intelligence workflows you configure. No hidden data collection or secondary uses.",
  },
  {
    icon: UserCheck,
    title: "Purpose limitation",
    description: "Customer data is used exclusively for the contracted services. We don't sell data, build profiles for advertising, or use data for unrelated purposes.",
  },
  {
    icon: Lock,
    title: "Secure processing",
    description: "All data processing occurs within secure, isolated environments with encryption and access controls. Processing activities are logged and auditable.",
  },
  {
    icon: Trash2,
    title: "Retention controls",
    description: "Customers control data retention periods. Data is deleted upon request and at contract termination per agreed timelines.",
  },
  {
    icon: Globe,
    title: "Data residency",
    description: "EU data residency options available. Data transfer mechanisms (SCCs) in place for cross-border data flows where required.",
  },
  {
    icon: Shield,
    title: "Individual rights",
    description: "We support customers in responding to individual rights requests (access, deletion, portability) under GDPR and CCPA.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Trust · Privacy</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Privacy by design.
              <span className="block text-muted-foreground">Not an afterthought.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Signal intelligence processes sensitive B2B data. Kinetik is built with 
              privacy principles embedded in the architecture — data minimization, 
              purpose limitation, and transparent controls for customers.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Privacy principles"
            title="How we protect your data"
            description="Our approach to privacy is designed for enterprise B2B data processing requirements."
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {privacyPrinciples.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4">Legal</Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Privacy Policy Summary
            </h2>
            <p className="mt-4 text-muted-foreground">
              This is a summary of key privacy terms. The full privacy policy governs 
              data processing activities. For questions, contact privacy@kinetikb2b.ai (placeholder).
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-3">Data we process</h3>
                <p className="text-sm text-muted-foreground">
                  Kinetik processes B2B contact and account data that customers 
                  provide or authorize us to access from integrated systems. This 
                  includes CRM records, engagement signals, and enrichment data 
                  necessary for signal intelligence workflows.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-3">How we use data</h3>
                <p className="text-sm text-muted-foreground">
                  Customer data is used exclusively to provide contracted signal 
                  intelligence services — scoring, routing, and workflow orchestration. 
                  We do not use customer data for advertising, sell data to third 
                  parties, or train ML models on customer data without explicit consent.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-3">Data sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Customer data is shared only with authorized sub-processors 
                  necessary to provide services (cloud infrastructure, specific 
                  integrations). All sub-processors are contractually bound to 
                  equivalent privacy protections.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-3">Data retention</h3>
                <p className="text-sm text-muted-foreground">
                  Customers configure data retention periods based on their 
                  requirements. Data is securely deleted upon request or at 
                  contract termination per agreed timelines (typically 30-90 days).
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-muted text-sm text-muted-foreground">
              <strong>Note:</strong> This summary is for informational purposes. 
              Refer to the full privacy policy and data processing agreement for 
              complete terms.
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Data Processing Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Enterprise customers receive a Data Processing Agreement (DPA) 
                  that defines roles, responsibilities, and technical measures 
                  for GDPR compliance.
                </p>
                <Link 
                  href="/company/contact"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Request DPA →
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sub-processor List</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We maintain a list of authorized sub-processors and notify 
                  customers of changes. Sub-processors are vetted for security 
                  and privacy compliance.
                </p>
                <Link 
                  href="/company/contact"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Request sub-processor list →
                </Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection
        title="Privacy questions?"
        description="Our team can discuss privacy requirements, provide documentation, and address specific concerns for your evaluation."
        primaryLabel="Contact us"
        primaryHref="/company/contact"
        secondaryLabel="View security"
        secondaryHref="/trust/security"
      />
    </>
  );
}
