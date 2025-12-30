import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoForm } from "@/components/demo-form";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Kinetik team. Request a demo, ask questions, or discuss enterprise requirements.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@kinetikb2b.ai",
    note: "Placeholder — update with real email",
  },
  {
    icon: MessageSquare,
    title: "Sales",
    detail: "sales@kinetikb2b.ai",
    note: "For demo requests and pricing",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "San Francisco, CA",
    note: "Headquarters",
  },
  {
    icon: Clock,
    title: "Response time",
    detail: "Within 24 hours",
    note: "Business days",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Company · Contact</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Let's talk.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Whether you're ready for a demo, have questions about signal intelligence, 
              or want to discuss enterprise requirements — we're here to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <DemoForm />
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.title} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{info.title}</p>
                          <p className="text-sm text-foreground">{info.detail}</p>
                          <p className="text-xs text-muted-foreground">{info.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Enterprise inquiries</CardTitle>
                  <CardDescription>
                    For security documentation, compliance requirements, or custom 
                    deployment discussions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enterprise customers receive dedicated support for procurement 
                    and technical evaluation. Mention "Enterprise" in your message 
                    and we'll route you appropriately.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Partnership inquiries</CardTitle>
                  <CardDescription>
                    For integration partnerships, reseller programs, or technology alliances.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contact partners@kinetikb2b.ai (placeholder) for partnership discussions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
