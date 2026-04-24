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
        "inline-flex items-center rounded-full border border-white/[0.08] bg-surface-soft/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-strong ring-1 ring-inset ring-white/[0.03]",
        className
      )}
    >
      {children}
    </span>
  );
}
