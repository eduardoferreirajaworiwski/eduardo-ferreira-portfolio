import type { ExperienceItem } from "@/types/portfolio";

import { SurfaceCard } from "@/components/ui/surface-card";
import { Tag } from "@/components/ui/tag";

export function ExperienceCard({
  role,
  company,
  period,
  location,
  summary,
  bullets,
  technologies
}: ExperienceItem) {
  return (
    <SurfaceCard interactive={false} className="grid gap-8 p-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:p-9">
      <div className="border-b border-white/[0.07] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">{period}</p>
        <p className="mt-6 text-sm font-medium text-foreground/[0.92]">{company}</p>
        <p className="mt-2 text-sm text-muted">{location}</p>
      </div>

      <div>
        <div>
          <h3 className="font-display text-[1.7rem] font-semibold tracking-[-0.04em] text-foreground">
            {role}
          </h3>
          <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-muted">{summary}</p>
        </div>

        <ul className="mt-8 space-y-4 text-sm leading-7 text-foreground/[0.88]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}
