import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "See Kinetik on your data",
  description = "We'll map your existing signals, define operator controls, and stand up a measurable workflow — without disrupting your stack.",
  primaryHref = "/demo",
  primaryLabel = "Book a demo",
  secondaryHref = "/integrations",
  secondaryLabel = "Explore integrations",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                <ButtonLink href={primaryHref} size="lg" className="w-full md:w-auto btn-shine">
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={secondaryHref} variant="secondary" size="lg" className="w-full md:w-auto">
                  {secondaryLabel}
                </ButtonLink>
                <p className="text-xs text-muted-foreground text-center md:text-right">
                  No hard sell. Clear evaluation plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
