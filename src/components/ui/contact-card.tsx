import type { ContactMethod } from "@/types/portfolio";

import { SurfaceCard } from "@/components/ui/surface-card";

export function ContactCard({ label, value, href, note }: ContactMethod) {
  const isExternal = href.startsWith("http");

  return (
    <SurfaceCard className="group p-0">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="block rounded-[2rem] p-6 transition duration-300 group-hover:bg-surface-strong/[0.35]"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">{label}</p>
          <span className="text-xs text-accent/70 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>
        <p className="mt-5 text-lg font-medium text-foreground">{value}</p>
        <p className="mt-3 text-sm leading-7 text-muted">{note}</p>
      </a>
    </SurfaceCard>
  );
}
