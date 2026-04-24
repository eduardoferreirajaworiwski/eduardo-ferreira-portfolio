import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[48rem]", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent via-accent/90 to-transparent" />
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent/[0.85]">{eyebrow}</p>
      </div>
      <h2 className="mt-6 font-display text-[2.15rem] font-semibold leading-[1.03] tracking-[-0.04em] text-foreground sm:text-[2.65rem] lg:text-[3rem]">
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 max-w-2xl text-[0.95rem] leading-7 text-muted sm:text-base",
          align === "center" && "mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
}
