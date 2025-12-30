import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getContentBySlug, listContent } from "@/lib/content";

export async function generateStaticParams() {
  return listContent("guides").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const item = await getContentBySlug("guides", params.slug);
    return {
      title: item.title,
      description: item.description,
      alternates: { canonical: `/guides/${item.slug}` },
      openGraph: {
        title: item.title,
        description: item.description,
        url: `/guides/${item.slug}`,
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Kinetik" }],
      },
    };
  } catch {
    return { title: "Guides" };
  }
}

export default async function GuidePage({
  params,
}: {
  params: { slug: string };
}) {
  let item;
  try {
    item = await getContentBySlug("guides", params.slug);
  } catch {
    notFound();
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <Link
          href="/guides"
          className="text-sm font-medium text-primary underline underline-offset-4"
        >
          ← Back to Guides
        </Link>

        <div className="mt-8 max-w-3xl space-y-4">
          <Badge>Guide</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {item.title}
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            {item.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span>{item.date}</span>
            <span>•</span>
            <span>{item.author}</span>
            <span>•</span>
            <span>{item.tags.join(", ")}</span>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="max-w-3xl">{item.body}</div>
      </Container>
    </section>
  );
}
