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
        damping: 24,
        mass: 0.7
      }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(16,22,33,0.94),rgba(8,12,20,0.98))] p-6 shadow-panel ring-1 ring-inset ring-white/[0.03] backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(171,192,255,0.11),transparent_34%)] before:opacity-100 after:pointer-events-none after:absolute after:inset-x-8 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/15 after:to-transparent",
        interactive && "hover:border-accent/20 hover:shadow-panel-hover",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
