"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
}

export function ButtonLink({
  href,
  label,
  variant = "primary"
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileHover={!reduceMotion ? { y: -2 } : undefined}
      whileTap={!reduceMotion ? { scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 340, damping: 24 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300",
        variant === "primary" &&
          "bg-accent text-slate-950 shadow-[0_16px_34px_rgba(121,153,240,0.18)] hover:bg-accent/[0.92]",
        variant === "secondary" &&
          "border border-white/[0.08] bg-surface-strong/80 text-foreground ring-1 ring-inset ring-white/[0.03] hover:border-accent/[0.28] hover:bg-surface-soft/[0.55]",
        variant === "ghost" &&
          "text-foreground/90 hover:text-foreground"
      )}
    >
      <span>{label}</span>
      <motion.span
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 1.5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "text-xs",
          variant === "primary" ? "text-slate-900/70" : "text-accent/75"
        )}
      >
        ↗
      </motion.span>
    </motion.a>
  );
}
