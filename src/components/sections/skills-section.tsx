import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { FocusCard } from "@/components/ui/focus-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills / Focus Areas"
            title="Domains where I can contribute with technical depth and operational clarity."
            description="The areas below summarize the kind of security work I am strongest in today."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioContent.focusAreas.map((focusArea, index) => (
            <Reveal key={focusArea.title} delay={0.04 * index}>
              <FocusCard {...focusArea} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
