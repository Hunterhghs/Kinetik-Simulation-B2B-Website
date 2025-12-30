import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Status",
  description: "Kinetik platform status and uptime information.",
};

const services = [
  { name: "API", status: "operational", uptime: "99.98%" },
  { name: "Web Application", status: "operational", uptime: "99.99%" },
  { name: "Data Processing", status: "operational", uptime: "99.95%" },
  { name: "Integrations", status: "operational", uptime: "99.97%" },
  { name: "Webhooks", status: "operational", uptime: "99.96%" },
];

const recentIncidents = [
  {
    date: "No recent incidents",
    title: "All systems operational",
    status: "resolved",
    description: "No incidents to report in the last 90 days.",
  },
];

export default function StatusPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary">System Status</Badge>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  All Systems Operational
                </h1>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-xl font-semibold mb-6">Current Status</h2>
          <div className="space-y-3">
            {services.map((service) => (
              <Card key={service.name}>
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{service.uptime} uptime</span>
                      <Badge variant="secondary" className="text-green-600 bg-green-500/10">
                        Operational
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30">
        <Container>
          <h2 className="text-xl font-semibold mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {recentIncidents.map((incident, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{incident.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{incident.date}</span>
                  </div>
                  <CardDescription>{incident.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Historical uptime data and incident reports available upon request.
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Updates</CardTitle>
              <CardDescription>
                Get notified about platform status changes and scheduled maintenance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Enterprise customers receive proactive notifications about any platform 
                issues via their configured channels. Contact support to configure 
                status notifications for your team.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
