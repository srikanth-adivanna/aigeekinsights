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
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="h-6 w-6 rounded bg-foreground flex items-center justify-center">
              <span className="text-[9px] font-bold text-background tracking-tight">AI</span>
            </div>
            <span className="text-sm font-semibold text-foreground">AI Geek Insights</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Link
              href="/admin/review"
              className="ml-1 hidden sm:inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
