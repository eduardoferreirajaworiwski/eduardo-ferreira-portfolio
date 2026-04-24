import type { PortfolioContent } from "@/types/portfolio";

import { projectsContent } from "./projects-content";

export const portfolioContent = {
  person: {
    name: "Eduardo Ferreira Jaworiwski",
    role: "Information Security Analyst",
    tagline:
      "Identity security, SaaS security and defensive automation for cloud-first environments, backed by ISO 27001/27701 control implementation and risk-to-control translation.",
    location: "Florianopolis, Santa Catarina, Brazil",
    availability:
      "Identity, SaaS security, automation and threat-informed defensive work in cloud-first environments.",
    email: "eduardoferreira.ti@outlook.com"
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "Identity Security • SaaS Security • Security Automation • OSINT",
    title: "Security analyst translating risk into identity, automation and threat intelligence controls.",
    intro:
      "Information Security Analyst focused on Identity & SaaS Security, Google Workspace, Entra ID, DLP, ISO 27001/27701 control implementation, Security Automation and OSINT-driven defensive tooling.",
    currentFocus: [
      "Identity security for Google Workspace and Microsoft Entra ID",
      "ISO 27001/27701 requirements translated into access, data protection and operational controls",
      "DLP, MFA, Context-Aware Access and least-privilege control design",
      "Python automation for evidence collection, access reviews and recurring security workflows",
      "OSINT and threat intelligence tooling built from analyst use cases"
    ],
    primaryCta: {
      label: "View selected projects",
      href: "#projects"
    },
    secondaryCta: {
      label: "Review experience",
      href: "#experience"
    },
    tertiaryCta: {
      label: "Contact",
      href: "#contact"
    }
  },
  stats: [
    {
      label: "Control implementation",
      value: "ISO 27001/27701"
    },
    {
      label: "Flagship security projects",
      value: "4"
    },
    {
      label: "Research direction",
      value: "OSINT + Automation"
    },
    {
      label: "Operating style",
      value: "Hands-on"
    }
  ],
  about: {
    description:
      "I work where identity security, SaaS control design, automation and threat-informed defensive work overlap.",
    paragraphs: [
      "I entered security through hands-on IAM, Google Workspace, Entra ID and technical compliance work, where access, admin activity and data handling had to hold up in real corporate operations.",
      "My edge is connecting identity, logs, automation and risk analysis. That same mindset carries into projects across OSINT, threat intelligence, AI-assisted workflows and security engineering. My ISO 27001/27701 experience gives me a strong control implementation mindset, but my work stays grounded in practical identity, SaaS security and automation."
    ],
    highlights: [
      {
        title: "Hands-on identity security",
        description:
          "IAM, RBAC, least privilege, MFA, Context-Aware Access and admin control design across Google Workspace and Microsoft Entra ID."
      },
      {
        title: "Logs, access and control analysis",
        description:
          "I use administrative log analysis, access reviews and recurring validation workflows to turn security requirements into operating controls."
      },
      {
        title: "Security tooling mindset",
        description:
          "ScopePilot, PhantomScope, Hydra-Mapper and Aegis-Neural show how I think about security engineering, OSINT and analyst-facing tooling."
      },
      {
        title: "Maturity without GRC-first framing",
        description:
          "ISO 27001 and ISO 27701 experience support how I implement controls, but my positioning stays grounded in practical security work."
      }
    ],
    principles: [
      "Identity-first security",
      "Least privilege by design",
      "Automation with evidence",
      "Threat-informed decisions"
    ]
  },
  experience: [
    {
      role: "Information Security Analyst",
      company: "Indicium",
      period: "Jun 2025 - Present",
      location: "Florianopolis, Brazil",
      summary:
        "Hands-on identity and SaaS security work focused on Google Workspace, Entra ID, DLP, access controls and automation in a cloud environment.",
      bullets: [
        "Helped strengthen Identity & Access Management practices across a cloud-based corporate environment, with focus on lifecycle controls, access reviews and least privilege.",
        "Worked on Google Workspace Security, Microsoft Entra ID, DLP, MFA and Context-Aware Access.",
        "Strengthened RBAC and least-privilege controls for business and administrative access.",
        "Built administrative log analysis and access review workflows for recurring validation.",
        "Contributed to the technical implementation and operationalization of ISO 27001 and ISO 27701 controls, translating governance and risk requirements into identity, access and data protection workflows.",
        "Used Python automation to speed security and compliance workflows."
      ],
      technologies: [
        "IAM",
        "Entra ID",
        "Google Workspace",
        "DLP",
        "MFA",
        "Context-Aware Access",
        "RBAC",
        "Python Automation"
      ]
    },
    {
      role: "Security Analyst",
      company: "Indicium",
      period: "Oct 2024 - May 2025",
      location: "Florianopolis, Brazil",
      summary:
        "Worked on IAM lifecycle operations, cloud access governance and baseline security processes that supported day-to-day corporate security delivery.",
      bullets: [
        "Handled provisioning, deprovisioning and access validation workflows across user lifecycle events.",
        "Supported secure offboarding routines and recurring cloud access governance checks.",
        "Worked on baseline security operations tied to business systems and internal processes.",
        "Translated governance requirements into technical access and process controls."
      ],
      technologies: [
        "IAM Lifecycle",
        "Provisioning",
        "Offboarding",
        "Access Validation",
        "Cloud Governance",
        "Security Operations"
      ]
    },
    {
      role: "Trainee Developer / Intern",
      company: "SCADAHUB Tecnologia",
      period: "Mar 2023 - Feb 2024",
      location: "Brazil",
      summary:
        "Earlier engineering experience building Python data workflows, telemetry extraction and monitoring views for renewable energy operations and critical infrastructure contexts.",
      bullets: [
        "Built Python data pipelines and SQL-based telemetry extraction workflows.",
        "Worked on SCADA and HMI dashboards used for wind and solar power plant monitoring.",
        "Supported monitoring systems tied to renewable energy infrastructure.",
        "Produced technical documentation to support internal delivery and maintenance."
      ],
      technologies: [
        "Python",
        "SQL",
        "Data Pipelines",
        "SCADA",
        "HMI",
        "Monitoring Systems"
      ]
    }
  ],
  projects: projectsContent,
  focusAreas: [
    {
      title: "Identity Security",
      description:
        "Structuring admin paths, lifecycle controls and privilege boundaries so identity remains governable as the environment grows.",
      items: [
        "Entra ID",
        "Google Workspace",
        "Privileged Access",
        "Role Design",
        "Identity Governance"
      ]
    },
    {
      title: "SaaS Security",
      description:
        "Assessing where business-critical SaaS creates access concentration, weak ownership or unnecessary administrative exposure.",
      items: [
        "SaaS Risk Reviews",
        "Access Governance",
        "Shared Account Reduction",
        "Configuration Validation"
      ]
    },
    {
      title: "Data Protection",
      description:
        "Designing guardrails for how sensitive information is shared, stored and moved across collaboration platforms.",
      items: [
        "DLP",
        "Sensitive Data Flows",
        "Control Mapping",
        "Collaboration Security"
      ]
    },
    {
      title: "Security Automation",
      description:
        "Reducing repetitive operational work with scripts and workflows for evidence gathering, reviews and recurring control checks.",
      items: [
        "Workflow Automation",
        "Evidence Collection",
        "Control Verification",
        "Operational Reporting"
      ]
    },
    {
      title: "Security Governance & Control Implementation",
      description:
        "Applying governance requirements as working controls without turning security into a paperwork exercise.",
      items: [
        "ISO 27001",
        "ISO 27701",
        "Access Reviews",
        "Evidence Collection",
        "Control Implementation",
        "Risk-to-Control Translation"
      ]
    },
    {
      title: "OSINT & Threat Intelligence",
      description:
        "Using external context where it genuinely improves prioritization, enrichment and investigative quality.",
      items: [
        "OSINT Research",
        "Threat Context",
        "Risk Prioritization",
        "Defensive Insights"
      ]
    },
    {
      title: "Security Operations & Delivery",
      description:
        "Turning findings into control changes, process adjustments and follow-through that teams can actually sustain.",
      items: [
        "Control Design",
        "Stakeholder Alignment",
        "Process Hardening",
        "Operational Follow-through"
      ]
    }
  ],
  certifications: [
    {
      title: "ISC2 Candidate",
      issuer: "ISC2",
      period: "Current",
      note: "Credential path aligned with professional development in information security and defensive practice."
    },
    {
      title: "Oracle Database Foundations",
      issuer: "Oracle",
      period: "Certification",
      note: "Foundational database credential supporting structured data work, query logic and technical problem solving."
    }
  ],
  education: [
    {
      title: "Degree in Systems Analysis and Development",
      issuer: "Universidade do Sul de Santa Catarina",
      period: "Higher Education",
      note: "Formal academic background in software, systems analysis and technical foundations relevant to security engineering work."
    },
    {
      title: "Academic research on Mirai Botnet and IoT malware",
      issuer: "Research",
      period: "Botnet / Malware Analysis",
      note: "Research focused on Mirai Botnet behavior, IoT malware propagation mechanisms and command-and-control structures."
    }
  ],
  contact: {
    title: "For professional conversations, collaboration or security-related discussions.",
    description:
      "Direct contact paths for identity security, SaaS security, automation and threat-informed defensive work.",
    availability:
      "Professional focus across IAM, Google Workspace, Entra ID, DLP, ISO control implementation, automation and OSINT-driven security workflows.",
    methods: [
      {
        label: "Email",
        value: "eduardoferreira.ti@outlook.com",
        href: "mailto:eduardoferreira.ti@outlook.com",
        note: "Best for direct conversations about collaboration, projects or security-related discussions."
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/eduardoferreirajaworiwski",
        href: "https://linkedin.com/in/eduardoferreirajaworiwski",
        note: "Useful for professional background review, networking and direct contact."
      },
      {
        label: "GitHub",
        value: "github.com/eduardoferreirajaworiwski",
        href: "https://github.com/eduardoferreirajaworiwski",
        note: "Selected code, experiments and technical work."
      }
    ]
  },
  footer: {
    note: "Identity security, SaaS security and defensive automation."
  }
} satisfies PortfolioContent;
