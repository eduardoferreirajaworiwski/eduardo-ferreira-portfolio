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
          "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[calc(100%-3rem)] before:max-w-[72rem] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-line/90 before:to-transparent",
        className
      )}
    >
      {children}
    </section>
  );
}
