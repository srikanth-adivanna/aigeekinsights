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
  research:  "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-950/40",
  tools:     "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40",
  news:      "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/40",
  tutorials: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40",
  models:    "text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-950/40",
  agents:    "text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-950/40",
};

function categoryColour(category: string) {
  return CATEGORY_COLOURS[category.toLowerCase()] ?? "text-foreground bg-muted";
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
    <article className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-colors">
      {/* Category + source */}
      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${categoryColour(category)}`}
        >
          {category}
        </span>
        <span className="text-xs text-muted-foreground truncate">{source}</span>
      </div>

      {/* Title */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <h2 className="text-sm font-semibold leading-snug text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
          {title}
        </h2>
      </a>

      {/* Summary */}
      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
        {summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-border">
        <div className="flex gap-1.5 flex-wrap">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 ml-auto shrink-0">
          <span className="text-xs text-muted-foreground">{publishedAt}</span>
          <Link
            href={`/article/${id}`}
            className="text-xs font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
