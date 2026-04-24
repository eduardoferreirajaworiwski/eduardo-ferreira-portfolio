import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ContactCard } from "@/components/ui/contact-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";

export function ContactSection() {
  const { contact } = portfolioContent;

  return (
    <SectionShell id="contact" className="pb-10">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={contact.title}
            description={contact.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)]">
          <Reveal delay={0.05}>
            <SurfaceCard className="flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">
                  Professional focus
                </p>
                <p className="mt-6 max-w-xl text-[1.35rem] leading-9 text-foreground/[0.92]">
                  {contact.availability}
                </p>
                <p className="mt-8 max-w-lg text-sm leading-7 text-muted">
                  The portfolio is designed to give a clear view of profile, experience, tooling and direct contact paths.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href={`mailto:${portfolioContent.person.email}`} label="Send email" />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  {portfolioContent.person.email}
                </span>
              </div>
            </SurfaceCard>
          </Reveal>

          <div className="grid gap-4">
            {contact.methods.map((method, index) => (
              <Reveal key={method.label} delay={0.08 + index * 0.04}>
                <ContactCard {...method} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
