import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { ExperienceCard } from "@/components/ui/experience-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience grounded in identity, SaaS security and technical delivery."
            description="Corporate security work across IAM, Google Workspace, Entra ID, DLP and automation, backed by earlier engineering experience with Python, telemetry and critical infrastructure monitoring."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {portfolioContent.experience.map((item, index) => (
            <Reveal key={`${item.role}-${item.period}`} delay={0.04 * index}>
              <ExperienceCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
