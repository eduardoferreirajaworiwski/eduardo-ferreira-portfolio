"use client";

import type { ReactNode } from "react";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

interface SurfaceCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  interactive?: boolean;
}

export function SurfaceCard({
  children,
  className,
  interactive = true,
  ...props
}: SurfaceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        interactive && !reduceMotion
          ? {
              y: -4,
              scale: 1.005
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
        mass: 0.8
      }}
      className={cn(
        "group relative overflow-hidden rounded-[0.35rem] border border-white/[0.08] bg-surface/95 p-6 shadow-none ring-1 ring-inset ring-white/[0.02] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.01))] before:opacity-100 after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-px after:bg-white/[0.05]",
        interactive && "hover:border-white/[0.14] hover:bg-surface-strong/95",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
