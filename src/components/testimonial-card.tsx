import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  note = "Placeholder testimonial — replace with customer-approved quote.",
}: {
  quote: string;
  name: string;
  title: string;
  company: string;
  note?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{company}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">“{quote}”</p>
        <div className="mt-4 text-sm font-medium">
          {name} <span className="text-muted-foreground">· {title}</span>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">{note}</div>
      </CardContent>
    </Card>
  );
}
