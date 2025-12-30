"use client";

import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const defaultLogos = [
  { name: "Enterprise Software", abbrev: "ES" },
  { name: "TechForward", abbrev: "TF" },
  { name: "GlobalScale", abbrev: "GS" },
  { name: "Apex Systems", abbrev: "AS" },
  { name: "BluePeak", abbrev: "BP" },
  { name: "VectorLabs", abbrev: "VL" },
];

export function LogoCloud({
  title = "Trusted by revenue teams at leading B2B companies",
  logos = defaultLogos,
  className,
}: {
  title?: string;
  logos?: { name: string; abbrev: string }[];
  className?: string;
}) {
  return (
    <section className={cn("py-12 border-y border-border/50", className)}>
      <Container>
        <p className="text-center text-sm text-muted-foreground mb-8">
          {title}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, idx) => (
            <div
              key={logo.name}
              className={cn(
                "flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300",
                "opacity-0 animate-fade-in"
              )}
              style={{ 
                animationDelay: `${idx * 100}ms`,
                animationFillMode: "forwards"
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-sm font-bold">
                {logo.abbrev}
              </div>
              <span className="text-sm font-medium tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Placeholder logos — customer marks added upon approval
        </p>
      </Container>
    </section>
  );
}
