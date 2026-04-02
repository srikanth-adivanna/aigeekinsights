import Link from "next/link";

const CATEGORIES = [
  "Research",
  "Tools",
  "News",
  "Tutorials",
  "Models",
  "Agents",
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                AI
              </div>
              <span className="font-semibold text-foreground">AI Geek Insights</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The best of AI, filtered and summarised daily from 15+ sources.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/admin/review" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Geek Insights. Built with Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
