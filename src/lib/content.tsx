import * as React from "react";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { z } from "zod";

import { ContentLayout } from "@/components/content-layout";

const FrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(), // YYYY-MM-DD
  author: z.string(),
  tags: z.array(z.string()).default([]),
});

export type ContentType = "blog" | "guides" | "benchmarks";

export type ContentFrontmatter = z.infer<typeof FrontmatterSchema>;

export type ContentListItem = ContentFrontmatter & {
  slug: string;
  type: ContentType;
  dateObj: Date;
};

export type ContentItem = ContentListItem & {
  body: React.ReactNode;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function getDir(type: ContentType) {
  return path.join(CONTENT_ROOT, type);
}

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function parseFrontmatter(raw: string): ContentFrontmatter {
  const parsed = matter(raw);
  const fm = FrontmatterSchema.parse(parsed.data);
  return fm;
}

function toDateObj(dateStr: string) {
  // Keep it strict-ish but forgiving.
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return new Date(0);
  return d;
}

export function listContent(type: ContentType): ContentListItem[] {
  const dir = getDir(type);
  const files = safeReadDir(dir).filter((f) => f.endsWith(".mdx"));

  const items = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(dir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const fm = parseFrontmatter(raw);
      return {
        ...fm,
        slug,
        type,
        dateObj: toDateObj(fm.date),
      } satisfies ContentListItem;
    })
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

  return items;
}

export function listAllContent(): ContentListItem[] {
  const all: ContentListItem[] = [
    ...listContent("benchmarks"),
    ...listContent("guides"),
    ...listContent("blog"),
  ];
  return all.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
}

export async function getContentBySlug(
  type: ContentType,
  slug: string
): Promise<ContentItem> {
  const fullPath = path.join(getDir(type), `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

  const fm = FrontmatterSchema.parse(data);
  const dateObj = toDateObj(fm.date);

  const compiled = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: {
      // Wrap MDX in a consistent layout for spacing + typography.
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <ContentLayout>{children}</ContentLayout>
      ),
      a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a {...props} className="text-primary underline underline-offset-4" />
      ),
      ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul {...props} className="list-disc pl-6" />
      ),
      ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol {...props} className="list-decimal pl-6" />
      ),
      blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
          {...props}
          className="border-l-2 border-border pl-4 italic text-muted-foreground"
        />
      ),
      hr: () => <hr className="my-8 border-border" />,
      code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code
          {...props}
          className="rounded bg-muted px-1 py-0.5 text-sm"
        />
      ),
    },
  });

  return {
    ...fm,
    slug,
    type,
    dateObj,
    body: compiled.content,
  };
}

export function getContentPermalink(item: Pick<ContentListItem, "type" | "slug">) {
  if (item.type === "blog") return `/blog/${item.slug}`;
  if (item.type === "guides") return `/guides/${item.slug}`;
  return `/benchmarks/${item.slug}`;
}

export function getContentTypeLabel(type: ContentType) {
  switch (type) {
    case "blog":
      return "Blog";
    case "guides":
      return "Guide";
    case "benchmarks":
      return "Benchmark";
    default:
      return "Resource";
  }
}
