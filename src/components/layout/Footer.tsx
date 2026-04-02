import Link from "next/link";

const CATEGORIES = ["Research", "Models", "Tools", "Agents", "Tutorials", "News"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-start gap-10 sm:gap-20">
          {/* Brand */}
          <div className="shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-foreground flex items-center justify-center">
                <span className="text-[9px] font-bold text-background tracking-tight">AI</span>
              </div>
              <span className="text-sm font-semibold text-foreground">AI Geek Insights</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The best of AI, filtered and summarised daily from 15+ sources.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-medium text-foreground uppercase tracking-wider mb-3">Categories</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-medium text-foreground uppercase tracking-wider mb-3">Site</h3>
            <ul className="space-y-2">
              {[{ href: "/about", label: "About" }, { href: "/admin/review", label: "Admin" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Geek Insights
        </div>
      </div>
    </footer>
  );
}
