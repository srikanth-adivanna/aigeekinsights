import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/research", label: "Research" },
  { href: "/tools", label: "Tools" },
  { href: "/news", label: "News" },
  { href: "/tutorials", label: "Tutorials" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              AI
            </div>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              AI Geek Insights
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/admin/review"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
