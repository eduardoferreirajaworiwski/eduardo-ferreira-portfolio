import { portfolioContent } from "@/content/site-content";

import { Container } from "@/components/ui/container";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-5">
        <div className="relative flex items-center justify-between rounded-full border border-white/[0.08] bg-background/[0.72] px-4 py-3 shadow-panel ring-1 ring-inset ring-white/[0.03] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-surface-soft/80 font-mono text-xs uppercase tracking-[0.24em] text-accent/90 ring-1 ring-inset ring-white/[0.03]">
              E
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold text-foreground">
                {portfolioContent.person.name}
              </span>
              <span className="flex items-center gap-2 truncate text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/90" />
                {portfolioContent.person.role}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {portfolioContent.navigation.slice(1, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-[0.04em] text-muted transition duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/[0.08] bg-surface-strong/[0.85] px-4 py-2 text-sm font-medium text-foreground ring-1 ring-inset ring-white/[0.03] transition duration-300 hover:border-accent/[0.28] hover:bg-surface-soft/70"
          >
            Contact ↗
          </a>
        </div>
      </Container>
    </header>
  );
}
