"use client";

import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "↑ 18%",
    label: "Meeting conversion from routed signals",
    note: "Example metric — replace with validated customer outcome",
    color: "text-green-500",
  },
  {
    value: "− 27%",
    label: "False-positive rate after governance rules",
    note: "Example metric — replace with validated measurement",
    color: "text-blue-500",
  },
  {
    value: "2.3×",
    label: "RevOps SLA compliance improvement",
    note: "Example metric — replace with validated measurement",
    color: "text-violet-500",
  },
];

export function StatBlocks() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Proof"
          title="Measure what changed — not just what happened"
          description="Kinetik is designed to make signal-driven workflows measurable and defensible. These examples show the kinds of outcomes teams track."
          align="center"
        />
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s, idx) => (
            <Card 
              key={s.label} 
              className={cn(
                "relative overflow-hidden card-hover",
                "opacity-0 animate-fade-in-up"
              )}
              style={{ 
                animationDelay: `${idx * 150}ms`,
                animationFillMode: "forwards" 
              }}
            >
              <CardContent className="p-8 text-center">
                <div className={cn("text-5xl font-bold tracking-tight", s.color)}>
                  {s.value}
                </div>
                <div className="mt-4 text-sm font-medium text-foreground">
                  {s.label}
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  {s.note}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
