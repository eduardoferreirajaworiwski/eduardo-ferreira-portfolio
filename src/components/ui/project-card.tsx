import type { ReactNode } from "react";

import type { ProjectItem } from "@/types/portfolio";

import { cn } from "@/lib/cn";

import { SurfaceCard } from "@/components/ui/surface-card";
import { Tag } from "@/components/ui/tag";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  variant?: "featured" | "secondary";
}

interface ProjectPanelProps {
  label: string;
  children: ReactNode;
  className?: string;
}

function ProjectPanel({ label, children, className }: ProjectPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[0.3rem] border border-white/[0.08] bg-background/38 p-5 ring-1 ring-inset ring-white/[0.02]",
        className
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">{label}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  variant = "featured"
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const {
    title,
    tagline,
    description,
    problem,
    architecture,
    professionalValue,
    stack,
    category,
    highlights,
    githubUrl,
    badge
  } = project;
  const visibleHighlights = highlights.slice(0, isFeatured ? 4 : 3);

  return (
    <SurfaceCard
      className={cn(
        "h-full",
        isFeatured
          ? "min-h-[38rem] border-white/[0.1] bg-[linear-gradient(180deg,rgba(17,19,24,0.99),rgba(10,12,16,0.99))] p-8 sm:p-10 lg:p-11"
          : "min-h-[30rem] bg-[linear-gradient(180deg,rgba(15,18,23,0.98),rgba(10,12,16,0.99))] p-7 sm:p-8"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            <Tag
              className={cn(
                "border-white/[0.08] bg-surface-soft/46 text-accent/92",
                !isFeatured && "bg-surface-soft/38 text-accent/86"
              )}
            >
              {category}
            </Tag>
            {badge ? <Tag className="bg-background/38 text-muted-strong">{badge}</Tag> : null}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              {String(index).padStart(2, "0")} / {isFeatured ? "Featured" : "Secondary"}
            </span>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[0.25rem] border border-white/[0.08] bg-background/38 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition duration-300 hover:border-white/[0.16] hover:text-accent"
            >
              <span>GitHub</span>
              <span aria-hidden className="text-accent/75">
                ↗
              </span>
            </a>
          </div>
        </div>

        <h3
            className={cn(
            "mt-8 max-w-4xl font-display font-semibold uppercase tracking-[-0.05em] text-foreground",
            isFeatured
              ? "text-[2.45rem] leading-[0.96] sm:text-[2.8rem]"
              : "text-[1.8rem] leading-[1.02] sm:text-[2rem]"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-4 max-w-3xl text-accent/76",
            isFeatured ? "text-[0.93rem] leading-7" : "text-[0.9rem] leading-6"
          )}
        >
          {tagline}
        </p>

        <p
          className={cn(
            "mt-5 max-w-3xl text-muted-strong",
            isFeatured ? "text-sm leading-7" : "text-sm leading-6"
          )}
        >
          {description}
        </p>

        <div
          className={cn(
            "mt-9 grid gap-6",
            isFeatured
              ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]"
              : "lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.92fr)]"
          )}
        >
          <div className="space-y-6">
            <ProjectPanel label="Problem Solved">
              <p
                className={cn(
                  isFeatured
                    ? "text-sm leading-7 text-foreground/[0.9]"
                    : "text-sm leading-7 text-foreground/[0.88]"
                )}
              >
                {problem}
              </p>
            </ProjectPanel>

            <ProjectPanel label="Architecture">
              <p
                className={cn(
                  isFeatured
                    ? "text-sm leading-7 text-foreground/[0.9]"
                    : "text-sm leading-7 text-foreground/[0.88]"
                )}
              >
                {architecture}
              </p>
            </ProjectPanel>
          </div>

          <div className="flex flex-col gap-6">
            <ProjectPanel label="Professional Value">
              <p className="text-sm leading-7 text-foreground/[0.9]">{professionalValue}</p>
            </ProjectPanel>

            <ProjectPanel label="Primary Stack">
              <div className="flex flex-wrap gap-2.5">
                {stack.map((item) => (
                  <Tag key={item} className="bg-background/38 text-muted-strong">
                    {item}
                  </Tag>
                ))}
              </div>
            </ProjectPanel>
          </div>
        </div>

        <ProjectPanel className="mt-6" label="Key Highlights">
          <ul className={cn("grid gap-3", isFeatured ? "sm:grid-cols-2" : "grid-cols-1")}>
            {visibleHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-[0.65rem] h-1.5 w-1.5 rounded-full bg-accent/80" />
                <span className="text-sm leading-6 text-foreground/[0.9]">{highlight}</span>
              </li>
            ))}
          </ul>
        </ProjectPanel>
      </div>
    </SurfaceCard>
  );
}
