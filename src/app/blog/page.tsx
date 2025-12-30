import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { ResourceCard } from "@/components/resource-card";
import { TagPills } from "@/components/tag-pills";
import { listContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Operator-first writing on signals, governance, and RevOps workflows.",
};

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const all = listContent("blog");
  const activeTag = searchParams?.tag;
  const tags = Array.from(new Set(all.flatMap((p) => p.tags))).sort();

  const items = activeTag ? all.filter((p) => p.tags.includes(activeTag)) : all;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl space-y-4">
          <Badge>Resources · Blog</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Signal intelligence, explained for operators.
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Practical perspectives on signals, measurement, and governance for enterprise GTM teams.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading
            title="Filter by tag"
            description="Use tags to find the most relevant operators’ lens."
          />
          <div className="mt-4">
            <TagPills basePath="/blog" tags={tags} activeTag={activeTag} />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <ResourceCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
