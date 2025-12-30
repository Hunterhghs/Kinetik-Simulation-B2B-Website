import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Scale, Globe, Building, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Compliance frameworks and certifications for enterprise signal intelligence. SOC 2, GDPR, CCPA, and industry-specific requirements.",
};

const frameworks = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    status: "Certified",
    description: "Annual third-party audit verifying security, availability, and confidentiality controls. Report available under NDA.",
    details: [
      "Security controls audited annually",
      "Availability and uptime commitments",
      "Confidentiality protections verified",
      "Report available to enterprise customers",
    ],
  },
  {
    icon: Globe,
    title: "GDPR",
    status: "Compliant",
    description: "Full compliance with EU General Data Protection Regulation. Data processing agreements and EU data residency options available.",
    details: [
      "Lawful basis for processing",
      "Data subject rights support",
      "Standard Contractual Clauses",
      "EU data residency option",
    ],
  },
  {
    icon: Scale,
    title: "CCPA",
    status: "Compliant",
    description: "Compliance with California Consumer Privacy Act. Support for consumer rights and appropriate data handling.",
    details: [
      "Consumer access requests",
      "Deletion request support",
      "Opt-out mechanisms",
      "Transparency disclosures",
    ],
  },
];

const additionalCompliance = [
  {
    title: "Industry questionnaires",
    description: "We respond to SIG, CAIQ, and custom security questionnaires for enterprise evaluations.",
  },
  {
    title: "Vendor risk assessments",
    description: "Support for customer vendor risk management programs and third-party risk reviews.",
  },
  {
    title: "Contractual commitments",
    description: "Custom data processing agreements, SLAs, and security addenda for enterprise contracts.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Trust · Compliance</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Enterprise compliance.
              <span className="block text-muted-foreground">Ready for your review.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Enterprise buyers require verified compliance posture. Kinetik maintains 
              certifications and supports common frameworks to streamline procurement 
              and vendor risk reviews.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Frameworks"
            title="Certifications and compliance"
            description="Key compliance frameworks we support for enterprise customers."
          />
          
          <div className="mt-12 space-y-6">
            {frameworks.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    <CardHeader className="md:col-span-1 bg-muted/30 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{f.title}</CardTitle>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                            <CheckCircle className="h-3 w-3" />
                            {f.status}
                          </span>
                        </div>
                      </div>
                      <CardDescription className="text-sm">{f.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="md:col-span-2 py-6">
                      <div className="text-sm font-medium mb-3">Coverage includes:</div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {f.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
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
          <SectionHeading
            eyebrow="Enterprise support"
            title="Additional compliance support"
            description="We work with enterprise procurement and security teams to meet evaluation requirements."
            align="center"
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {additionalCompliance.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Procurement ready
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We understand enterprise procurement timelines and requirements. 
                  Our team is prepared to support security reviews, legal negotiations, 
                  and vendor onboarding processes.
                </p>
                
                <div className="space-y-3">
                  {[
                    { icon: FileCheck, text: "SOC 2 report available under NDA" },
                    { icon: Clock, text: "Security questionnaire turnaround: 5-7 business days" },
                    { icon: Scale, text: "Standard DPA and security addendum available" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-3 text-sm">
                        <Icon className="h-4 w-4 text-primary" />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-muted/40 rounded-xl p-6 border border-dashed border-border">
                <h3 className="font-semibold mb-4">Request compliance documentation</h3>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    SOC 2 Type II Report
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    Completed SIG/CAIQ questionnaire
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    Data Processing Agreement template
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    Insurance certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    Architecture documentation
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
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready for your compliance review"
        description="Our team works with enterprise security and procurement to meet your evaluation requirements efficiently."
        primaryLabel="Request documentation"
        primaryHref="/company/contact"
        secondaryLabel="View security"
        secondaryHref="/trust/security"
      />
    </>
  );
}
