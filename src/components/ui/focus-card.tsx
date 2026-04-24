import type { FocusAreaItem } from "@/types/portfolio";

import { SurfaceCard } from "@/components/ui/surface-card";
import { Tag } from "@/components/ui/tag";

interface FocusCardProps extends FocusAreaItem {
  index: number;
}

export function FocusCard({ title, description, items, index }: FocusCardProps) {
  return (
    <SurfaceCard className="h-full p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent/75">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-line/80 to-transparent" />
      </div>
      <h3 className="mt-5 font-display text-[1.7rem] font-semibold tracking-[-0.035em] text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </SurfaceCard>
  );
}
