import { portfolioContent } from "@/content/site-content";

import { Container } from "@/components/ui/container";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-4">
        <div className="relative flex items-center justify-between rounded-[0.35rem] border border-white/[0.08] bg-background/[0.9] px-4 py-3 ring-1 ring-inset ring-white/[0.02] backdrop-blur-md">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[0.25rem] border border-white/[0.08] bg-surface-soft/70 font-mono text-xs uppercase tracking-[0.24em] text-accent/90 ring-1 ring-inset ring-white/[0.02]">
              E
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-[0.95rem] font-semibold uppercase tracking-[-0.02em] text-foreground">
                {portfolioContent.person.name}
              </span>
              <span className="flex items-center gap-2 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span className="h-px w-3 bg-accent/85" />
                {portfolioContent.person.role}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {portfolioContent.navigation.slice(1, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-[0.25rem] border border-white/[0.08] bg-surface-strong/[0.85] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground ring-1 ring-inset ring-white/[0.02] transition duration-300 hover:border-white/[0.16] hover:bg-surface-soft/70"
          >
            Contact ↗
          </a>
        </div>
      </Container>
    </header>
  );
}
