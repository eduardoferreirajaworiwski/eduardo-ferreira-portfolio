import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
}

export function SectionShell({
  id,
  children,
  className,
  divider = true
}: SectionShellProps) {
  return (
    <section
      id={id}
        className={cn(
          "section-space relative scroll-mt-28",
          divider &&
            "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[calc(100%-2.5rem)] before:max-w-[68rem] before:-translate-x-1/2 before:bg-white/[0.06]",
          className
        )}
      >
      {children}
    </section>
  );
}
