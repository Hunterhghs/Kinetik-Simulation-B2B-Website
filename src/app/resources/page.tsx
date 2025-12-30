import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { ResourceCard } from "@/components/resource-card";
import { listContent, type ContentType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Operator-first frameworks, playbooks, and benchmarks for signal intelligence and RevOps workflows.",
};

function ResourceSection({
  type,
  title,
  description,
}: {
  type: ContentType;
  title: string;
  description: string;
}) {
  const items = listContent(type);
  
  if (items.length === 0) return null;
  
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title={title}
          description={description}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ResourceCard key={`${item.type}:${item.slug}`} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge>Resources</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Practical playbooks.
              <span className="block text-muted-foreground">For operators who ship.</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Short, practical resources for RevOps, Sales Ops, and Marketing Ops teams 
              implementing signal intelligence workflows.
            </p>
          </div>
        </Container>
      </section>

      <ResourceSection
        type="guides"
        title="Guides"
        description="Step-by-step playbooks for implementing signal intelligence workflows."
      />
      
      <ResourceSection
        type="blog"
        title="Blog"
        description="Operator-first thinking on signals, governance, and RevOps workflows."
      />
      
      <ResourceSection
        type="benchmarks"
        title="Benchmarks"
        description="Templates and measurement frameworks for tracking workflow outcomes."
      />

      <CTASection
        title="Need a custom playbook?"
        description="We work with teams to build signal intelligence workflows tailored to their stack and use cases."
      />
    </>
  );
}
