import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { Tag } from "@/components/ui/tag";

export function HeroSection() {
  const { hero, person, stats, contact } = portfolioContent;
  const heroLinks = ["GitHub", "LinkedIn", "Email"]
    .map((label) => contact.methods.find((method) => method.label === label))
    .filter((method): method is NonNullable<typeof method> => Boolean(method));

  return (
    <SectionShell id="home" divider={false} className="pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.08fr)_26rem] xl:items-start xl:gap-10">
          <Reveal className="relative">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-surface-strong/[0.55] px-4 py-2 ring-1 ring-inset ring-white/[0.03]">
                <span className="h-2 w-2 rounded-full bg-accent/95" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-strong">
                  Information Security Analyst
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Tag className="bg-accent-soft/75 text-accent/90">{hero.eyebrow}</Tag>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {person.location}
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.95rem,7.8vw,5.85rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-foreground">
                {hero.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-[1.05rem]">
                {hero.intro}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ButtonLink href={hero.primaryCta.href} label={hero.primaryCta.label} />
                <ButtonLink
                  href={hero.secondaryCta.href}
                  label={hero.secondaryCta.label}
                  variant="secondary"
                />
                {hero.tertiaryCta ? (
                  <ButtonLink
                    href={hero.tertiaryCta.href}
                    label={hero.tertiaryCta.label}
                    variant="ghost"
                  />
                ) : null}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                {heroLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted transition duration-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-surface/[0.55] p-5 ring-1 ring-inset ring-white/[0.03]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted">
                    Positioning
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground/[0.88]">{person.tagline}</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-surface/[0.55] p-5 ring-1 ring-inset ring-white/[0.03]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted">
                    Professional focus
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                        Based in
                      </p>
                      <p className="mt-2 text-sm leading-7 text-foreground/[0.88]">{person.location}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                        Current direction
                      </p>
                      <p className="mt-2 text-sm leading-7 text-foreground/[0.88]">
                        {person.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="xl:pt-8">
            <div className="space-y-4">
              <SurfaceCard className="p-0">
                <div className="border-b border-white/[0.07] px-7 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">
                        Current Focus — 2026
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        Identity, automation, risk-to-control translation and analyst-facing defensive work.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <ul className="space-y-5">
                    {hero.currentFocus.map((item, index) => (
                      <li key={item} className="flex gap-4">
                        <span className="pt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent/80">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-7 text-foreground/[0.88]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SurfaceCard>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <SurfaceCard key={stat.label} className="min-h-[148px] p-5">
                    <p
                      className={
                        stat.value.length > 12
                          ? "font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.5rem]"
                          : "font-display text-[2rem] font-semibold tracking-[-0.04em] text-foreground"
                      }
                    >
                      {stat.value}
                    </p>
                    <p className="mt-3 max-w-[13rem] text-sm leading-6 text-muted">{stat.label}</p>
                  </SurfaceCard>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
