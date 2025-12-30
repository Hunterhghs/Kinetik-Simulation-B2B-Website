"use client";

import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Activity, Zap, BarChart3 } from "lucide-react";

function SignalFeedCard() {
  const signals = [
    {
      icon: Activity,
      title: "Account shows renewed intent",
      detail: "Web + content consumption spikes",
      status: "high",
      time: "2m ago",
    },
    {
      icon: Zap,
      title: "Buying group expands",
      detail: "New stakeholder detected in email thread",
      status: "medium",
      time: "8m ago",
    },
    {
      icon: BarChart3,
      title: "Stage quality risk",
      detail: "Rep activity not matching stage",
      status: "warning",
      time: "15m ago",
    },
  ];

  return (
    <div className="relative">
      {/* Glow effect behind card */}
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl" />
      </div>
      
      <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-soft overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">Live Signal Feed</span>
          </div>
          <span className="text-xs text-muted-foreground">Real-time</span>
        </div>

        <div className="space-y-3">
          {signals.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className={cn(
                  "rounded-xl border border-border bg-background/50 p-4 transition-all duration-500 card-hover",
                  "opacity-0 animate-fade-in-up",
                  idx === 0 && "animate-delay-100",
                  idx === 1 && "animate-delay-300",
                  idx === 2 && "animate-delay-500"
                )}
                style={{ animationFillMode: "forwards" }}
              >
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                    signal.status === "high" && "bg-primary/10 text-primary",
                    signal.status === "medium" && "bg-accent/10 text-accent",
                    signal.status === "warning" && "bg-orange-500/10 text-orange-500"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium truncate">{signal.title}</p>
                      <span className="text-xs text-muted-foreground shrink-0">{signal.time}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{signal.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative bottom element */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="inline-block h-1 w-8 rounded-full bg-gradient-to-r from-primary to-accent" />
          <span>Signals → Intelligence → Action</span>
          <span className="inline-block h-1 w-8 rounded-full bg-gradient-to-r from-accent to-primary" />
        </div>
      </div>
    </div>
  );
}

export function Hero({
  title,
  subtitle,
  primaryCtaHref = "/demo",
  primaryCtaLabel = "Book a demo",
  secondaryCtaHref = "/product",
  secondaryCtaLabel = "See how it works",
  className,
}: {
  title: string;
  subtitle: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28", className)}>
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            {/* Eyebrow badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Signal Intelligence Platform
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <span className="block">{title}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "350ms", animationFillMode: "forwards" }}>
              {subtitle}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
              <ButtonLink href={primaryCtaHref} size="lg" className="btn-shine">
                {primaryCtaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={secondaryCtaHref} variant="secondary" size="lg">
                {secondaryCtaLabel}
              </ButtonLink>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "650ms", animationFillMode: "forwards" }}>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Real-time processing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Audit-ready</span>
              </div>
            </div>
          </div>

          {/* Signal Feed Visualization */}
          <div className="lg:col-span-5 opacity-0 animate-slide-in-right" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <SignalFeedCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
