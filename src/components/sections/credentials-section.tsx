import { portfolioContent } from "@/content/site-content";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";

function CredentialGroup({
  title,
  items
}: {
  title: string;
  items: typeof portfolioContent.certifications;
}) {
  return (
    <SurfaceCard className="h-full p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/[0.85]">{title}</p>
      <div className="mt-7 space-y-4">
        {items.map((item) => (
          <div
            key={`${title}-${item.title}`}
            className="rounded-[1.6rem] border border-white/[0.08] bg-background/[0.45] p-5 ring-1 ring-inset ring-white/[0.03] transition duration-300 hover:border-accent/[0.18] hover:bg-surface-soft/40"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display text-[1.4rem] font-semibold tracking-[-0.03em] text-foreground">
                {item.title}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                {item.period}
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground/90">{item.issuer}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{item.note}</p>
          </div>
        ))}
      </div>
    </SurfaceCard>
  );
}

export function CredentialsSection() {
  return (
    <SectionShell id="credentials">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Credentials that reinforce technical security practice."
            description="Selected certifications, education and research relevant to identity security, analyst work and security engineering foundations."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <CredentialGroup title="Certifications" items={portfolioContent.certifications} />
          </Reveal>
          <Reveal delay={0.12}>
            <CredentialGroup title="Education & Research" items={portfolioContent.education} />
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
