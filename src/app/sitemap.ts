import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { listAllContent, getContentPermalink } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticRoutes = [
    "/",
    "/product",
    "/solutions",
    "/solutions/revops",
    "/solutions/sales",
    "/solutions/marketing",
    "/integrations",
    "/customers",
    "/resources",
    "/blog",
    "/guides",
    "/benchmarks",
    "/company/about",
    "/company/contact",
    "/trust/security",
    "/trust/privacy",
    "/trust/compliance",
    "/demo",
    "/status",
  ];

  const contentRoutes = listAllContent().map((item) => getContentPermalink(item));

  const now = new Date();

  return [...staticRoutes, ...contentRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }));
}
