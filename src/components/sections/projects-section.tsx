import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";

export function ProjectsSection() {
  const primaryProjects = portfolioContent.projects.filter(
    (project) => project.emphasis === "primary"
  );
  const secondaryProjects = portfolioContent.projects.filter(
    (project) => project.emphasis === "secondary"
  );
  const featureSpans = ["xl:col-span-6", "xl:col-span-6"];

  return (
    <SectionShell id="projects">
      <Container>
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Selected Projects"
              title="Selected security engineering projects."
              description="Independent projects focused on defensive automation, OSINT, AI-assisted workflows and analyst-facing security tooling."
            />

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Tag className="bg-accent-soft/72 text-accent">2 flagship projects</Tag>
              <Tag>Compact project narratives</Tag>
              <Tag>Direct GitHub access</Tag>
            </div>

            <div className="mt-6 max-w-3xl space-y-3 text-sm leading-7 text-muted">
              <p>
                Personal security engineering projects built independently to explore defensive
                automation, OSINT, AI-assisted workflows and analyst-facing tooling.
              </p>
              <p>
                These projects do not use employer data, internal systems or proprietary
                information.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-12">
          {primaryProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.08 + 0.05 * index}
              className={featureSpans[index] ?? "xl:col-span-6"}
            >
              <ProjectCard project={project} index={index + 1} variant="featured" />
            </Reveal>
          ))}

          <Reveal className="xl:col-span-12">
            <div className="flex items-center gap-4 pt-2">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line/80 to-transparent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                Supporting Projects
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line/80 to-transparent" />
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:col-span-12">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.title} delay={0.18 + 0.05 * index}>
                <ProjectCard
                  project={project}
                  index={primaryProjects.length + index + 1}
                  variant="secondary"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
