import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Server, Eye, FileCheck, Users, AlertTriangle, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Enterprise-grade security posture for signal intelligence. SOC 2 Type II, encryption, access controls, and audit trails.",
};

const securityFeatures = [
  {
    icon: Lock,
    title: "Data encryption",
    description: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Customer data is isolated in dedicated environments.",
  },
  {
    icon: Key,
    title: "Access controls",
    description: "Role-based access control (RBAC), SSO integration (SAML 2.0, OIDC), and MFA enforcement for all accounts.",
  },
  {
    icon: Server,
    title: "Infrastructure security",
    description: "Hosted on SOC 2 certified cloud infrastructure with network isolation, DDoS protection, and continuous monitoring.",
  },
  {
    icon: Eye,
    title: "Audit logging",
    description: "Comprehensive audit trails for all data access and configuration changes. Logs retained per customer requirements.",
  },
  {
    icon: FileCheck,
    title: "Vulnerability management",
    description: "Regular penetration testing, automated vulnerability scanning, and responsible disclosure program.",
  },
  {
    icon: Users,
    title: "Personnel security",
    description: "Background checks for all employees, security awareness training, and least-privilege access policies.",
  },
];

const certifications = [
  {
    name: "SOC 2 Type II",
    status: "Certified",
    description: "Annual audit for security, availability, and confidentiality controls.",
  },
  {
    name: "GDPR",
    status: "Compliant",
    description: "Data processing agreements, privacy controls, and EU data residency options.",
  },
  {
    name: "CCPA",
    status: "Compliant",
    description: "Consumer privacy rights and data handling controls for California residents.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Trust · Security</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Enterprise security.
              <span className="block text-muted-foreground">Built in, not bolted on.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Signal intelligence handles sensitive GTM data. Kinetik is designed from the 
              ground up with enterprise security requirements — encryption, access controls, 
              audit trails, and compliance certifications.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 border-b border-border">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <Shield className="h-5 w-5 text-primary" />
                  {cert.name}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{cert.status}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Security controls"
            title="Defense in depth"
            description="Multiple layers of security controls protect your data at every level of the stack."
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{f.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Badge className="mb-4">Compliance</Badge>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Certifications and compliance
              </h2>
              <p className="mt-4 text-muted-foreground">
                Enterprise buyers require verified security posture. Kinetik maintains 
                SOC 2 Type II certification and supports GDPR and CCPA compliance requirements.
              </p>
              
              <div className="mt-8 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                    <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-semibold mb-4">Request security documentation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Enterprise customers can request SOC 2 reports, security questionnaire 
                responses, and detailed architecture documentation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary" />
                  SOC 2 Type II Report
                </li>
                <li className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary" />
                  Security questionnaire (SIG, CAIQ)
                </li>
                <li className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary" />
                  Architecture & data flow documentation
                </li>
                <li className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary" />
                  Penetration test summary
                </li>
              </ul>
              <Link 
                href="/company/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Contact us for documentation →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Responsible disclosure</h3>
                <p className="mt-2 text-muted-foreground">
                  We welcome security researchers to report vulnerabilities responsibly. 
                  If you discover a security issue, please contact our security team 
                  at <span className="text-primary">security@kinetikb2b.ai</span> (placeholder).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Questions about security?"
        description="Our team is happy to discuss security requirements, provide documentation, and answer questions for your evaluation."
        primaryLabel="Contact security team"
        primaryHref="/company/contact"
        secondaryLabel="View privacy policy"
        secondaryHref="/trust/privacy"
      />
    </>
  );
}
