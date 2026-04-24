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
        <span className="h-px w-10 bg-white/[0.2]" />
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/[0.82]">{eyebrow}</p>
      </div>
      <h2 className="mt-5 max-w-[14ch] font-display text-[2.1rem] font-semibold uppercase leading-[0.98] tracking-[-0.05em] text-foreground sm:text-[2.45rem] lg:text-[2.8rem]">
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 max-w-2xl text-[0.92rem] leading-7 text-muted sm:text-[0.98rem]",
          align === "center" && "mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
}
