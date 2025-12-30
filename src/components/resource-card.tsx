import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ContentListItem } from "@/lib/content";
import { cn } from "@/lib/utils";
import { getContentPermalink, getContentTypeLabel } from "@/lib/content";

export function ResourceCard({
  item,
  className,
}: {
  item: ContentListItem;
  className?: string;
}) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge>{getContentTypeLabel(item.type)}</Badge>
          <span className="text-xs text-muted-foreground">{item.date}</span>
        </div>
        <CardTitle className="text-base">
          <Link href={getContentPermalink(item)} className="hover:underline">
            {item.title}
          </Link>
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 4).map((t) => (
            <Badge key={t} className="bg-background text-muted-foreground">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
