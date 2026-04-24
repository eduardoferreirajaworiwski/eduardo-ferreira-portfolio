import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { Tag } from "@/components/ui/tag";

export function AboutSection() {
  const { about } = portfolioContent;
  const [leadParagraph, ...supportingParagraphs] = about.paragraphs;

  return (
    <SectionShell id="about">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Hands-on security work shaped by identity, logs and automation."
            description="Practical security work grounded in identity, access visibility, automation and analyst-focused tooling."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <Reveal delay={0.05}>
            <SurfaceCard className="h-full p-8 lg:p-10" interactive={false}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">About</p>
              <div className="mt-8 space-y-6">
                <p className="text-lg leading-9 text-foreground/[0.92]">{leadParagraph}</p>
                <div className="space-y-5 text-base leading-8 text-muted">
                  {supportingParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              <SurfaceCard className="p-8" interactive={false}>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">
                  Positioning
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {about.principles.map((principle) => (
                    <Tag key={principle}>{principle}</Tag>
                  ))}
                </div>
              </SurfaceCard>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {about.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={0.1 + index * 0.03}>
              <SurfaceCard className="h-full bg-[linear-gradient(180deg,rgba(17,23,34,0.82),rgba(10,14,22,0.96))]">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent/75">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{highlight.description}</p>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
