import { portfolioContent } from "@/content/site-content";

import { Container } from "@/components/ui/container";

export function FooterSection() {
  return (
    <footer className="border-t border-line/70 py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{portfolioContent.footer.note}</p>
        <p>© {new Date().getFullYear()} {portfolioContent.person.name}</p>
      </Container>
    </footer>
  );
}

