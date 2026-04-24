import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[0.2rem] border border-white/[0.08] bg-surface-soft/42 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-strong ring-1 ring-inset ring-white/[0.02]",
        className
      )}
    >
      {children}
    </span>
  );
}
