import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { ResourceCard } from "@/components/resource-card";
import { TagPills } from "@/components/tag-pills";
import { listContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides",
  description: "Step-by-step playbooks for signal governance and RevOps workflows.",
};

export default function GuidesIndexPage({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const all = listContent("guides");
  const activeTag = searchParams?.tag;
  const tags = Array.from(new Set(all.flatMap((p) => p.tags))).sort();

  const items = activeTag ? all.filter((p) => p.tags.includes(activeTag)) : all;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl space-y-4">
          <Badge>Resources · Guides</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Guides you can put into production.
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Implementation-ready frameworks for RevOps, Sales Ops, and Marketing Ops.
          </p>
        </div>

        <div className="mt-8">
          <TagPills basePath="/guides" tags={tags} activeTag={activeTag} />
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
