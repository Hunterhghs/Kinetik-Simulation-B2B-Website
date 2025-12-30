import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const integrations = [
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM / MAP" },
  { name: "Marketo", category: "MAP" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "BigQuery", category: "Data Warehouse" },
  { name: "Slack", category: "Messaging" },
  { name: "Teams", category: "Messaging" },
  { name: "Clearbit", category: "Enrichment" },
  { name: "Segment", category: "CDP" },
];

export function IntegrationGrid({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "py-10" : "py-16"}>
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Fits your stack — without forcing a rebuild"
          description="Kinetik is designed to ingest signals where they live, and push actions back into the tools your teams already operate in."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {integrations.map((i) => (
            <Card key={i.name} className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{i.name}</CardTitle>
                <CardDescription>{i.category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="rounded-md border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
                  Integration placeholder. Add real capabilities and supported signals.
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
