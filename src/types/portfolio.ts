export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  tagline: string;
  description: string;
  problem: string;
  architecture: string;
  professionalValue: string;
  stack: string[];
  category: string;
  highlights: string[];
  githubUrl: string;
  badge?: string;
  emphasis: "primary" | "secondary";
}

export interface FocusAreaItem {
  title: string;
  description: string;
  items: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  period: string;
  note: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  note: string;
}

export interface PortfolioContent {
  person: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    availability: string;
    email: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    currentFocus: string[];
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    tertiaryCta?: LinkItem;
  };
  stats: StatItem[];
  about: {
    description: string;
    paragraphs: string[];
    highlights: HighlightItem[];
    principles: string[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  focusAreas: FocusAreaItem[];
  certifications: CredentialItem[];
  education: CredentialItem[];
  contact: {
    title: string;
    description: string;
    availability: string;
    methods: ContactMethod[];
  };
  footer: {
    note: string;
  };
}
