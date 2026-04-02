import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  source: string;
  category: string;
  tags: string[];
  publishedAt: string;
  url: string;
}

const CATEGORY_COLOURS: Record<string, string> = {
  research:  "bg-violet-500/15 text-violet-400 border-violet-500/20",
  tools:     "bg-blue-500/15 text-blue-400 border-blue-500/20",
  news:      "bg-amber-500/15 text-amber-400 border-amber-500/20",
  tutorials: "bg-green-500/15 text-green-400 border-green-500/20",
  models:    "bg-pink-500/15 text-pink-400 border-pink-500/20",
  agents:    "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
};

function categoryColour(category: string) {
  return CATEGORY_COLOURS[category.toLowerCase()] ?? "bg-muted text-muted-foreground border-border";
}

export default function ArticleCard({
  id,
  title,
  summary,
  source,
  category,
  tags,
  publishedAt,
  url,
}: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full hover:border-primary/40 transition-colors group">
      <CardHeader className="pb-3">
        {/* Source + Category row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs text-muted-foreground font-medium truncate">{source}</span>
          <Badge
            variant="outline"
            className={`shrink-0 text-xs capitalize ${categoryColour(category)}`}
          >
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      </CardHeader>

      <CardContent className="pb-3 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {summary}
        </p>
      </CardContent>

      <CardFooter className="pt-0 flex items-center justify-between gap-2 flex-wrap">
        {/* Tags */}
        <div className="flex gap-1 flex-wrap">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Date + Read more */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs text-muted-foreground whitespace-nowrap">{publishedAt}</span>
          <Link
            href={`/article/${id}`}
            className="text-xs font-medium text-primary hover:underline whitespace-nowrap"
          >
            Read more →
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
