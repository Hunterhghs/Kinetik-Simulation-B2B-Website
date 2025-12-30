import Link from "next/link";
import { cn } from "@/lib/utils";

export function TagPills({
  basePath,
  tags,
  activeTag,
}: {
  basePath: string;
  tags: string[];
  activeTag?: string;
}) {
  const allHref = basePath;

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={allHref}
        className={cn(
          "rounded-full border border-border px-3 py-1 text-xs font-medium",
          !activeTag ? "bg-muted" : "bg-background hover:bg-muted/60"
        )}
      >
        All
      </Link>

      {tags.map((t) => (
        <Link
          key={t}
          href={`${basePath}?tag=${encodeURIComponent(t)}`}
          className={cn(
            "rounded-full border border-border px-3 py-1 text-xs font-medium",
            activeTag === t ? "bg-muted" : "bg-background hover:bg-muted/60"
          )}
        >
          {t}
        </Link>
      ))}
    </div>
  );
}
