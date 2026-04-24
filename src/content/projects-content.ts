import type { ProjectItem } from "@/types/portfolio";

// Edit project data here.
export const projectsContent: ProjectItem[] = [
  {
    title: "ScopePilot",
    tagline: "Human-in-the-loop bug bounty workflow platform",
    description:
      "AI-assisted platform for authorized bug bounty operations with strict scope control and auditability.",
    problem:
      "Prevents AI-assisted testing from running without validated scope, human approval and evidence traceability.",
    architecture:
      "FastAPI and Pydantic handle workflow states, approvals and evidence records, while Next.js provides the analyst-facing control layer.",
    professionalValue:
      "Shows controlled automation design, workflow safety and auditability for security operations.",
    stack: [
      "FastAPI",
      "Python",
      "SQLite",
      "Pydantic",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query"
    ],
    category: "AI Security / Bug Bounty Workflow",
    highlights: [
      "Human-in-the-loop approval workflow",
      "Mandatory scope validation",
      "Audit trail for operational decisions",
      "Evidence store with sanitized request/response snapshots",
      "Report agent with Markdown and JSON export",
      "Separate workflow for hypothesis, approval, execution and finding"
    ],
    githubUrl: "https://github.com/eduardoferreirajaworiwski/scopepilot",
    badge: "Featured Project",
    emphasis: "primary"
  },
  {
    title: "PhantomScope",
    tagline: "Explainable phishing and brand abuse intelligence",
    description:
      "Threat intelligence product for suspicious lookalike domains and phishing-related infrastructure.",
    problem:
      "Gives analysts explainable triage and evidence correlation for phishing and brand abuse investigations.",
    architecture:
      "FastAPI drives deterministic enrichment and scoring, Streamlit provides the analyst UI, and SQLite supports exportable evidence workflows.",
    professionalValue:
      "Demonstrates explainable CTI product thinking with deterministic scoring and deployment-ready reporting.",
    stack: [
      "FastAPI",
      "Python",
      "Streamlit",
      "SQLite",
      "Pydantic",
      "httpx",
      "Docker",
      "Render"
    ],
    category: "OSINT / Threat Intelligence / Brand Protection",
    highlights: [
      "Suspicious domain generation",
      "Certificate Transparency monitoring",
      "DNS, RDAP, IP and ASN enrichment",
      "Deterministic and explainable risk scoring",
      "AI-assisted summary with deterministic fallback",
      "Markdown and JSON report export",
      "Render deployment-ready architecture"
    ],
    githubUrl: "https://github.com/eduardoferreirajaworiwski/phantomscope",
    badge: "Featured Project",
    emphasis: "primary"
  },
  {
    title: "Hydra-Mapper",
    tagline: "Real-time adversary infrastructure mapping",
    description:
      "Modular CTI tool for certificate transparency monitoring and suspicious domain mapping.",
    problem:
      "Improves visibility into newly issued certificates and suspicious domains tied to possible adversary infrastructure.",
    architecture:
      "Built as a modular Python pipeline around CertStream ingestion, suspicious-domain detection and future evidence collection modules.",
    professionalValue:
      "Shows real-time monitoring, modular pipeline design and forensic thinking for CTI workflows.",
    stack: ["Python", "CertStream", "Playwright", "SHA-256", "Modular Evidence Collection"],
    category: "CTI / OSINT / Infrastructure Mapping",
    highlights: [
      "Real-time CT log monitoring",
      "Suspicious domain identification",
      "Modular architecture",
      "Planned forensic evidence collection",
      "SHA-256 chain-of-custody concept",
      "Infrastructure mapping workflow"
    ],
    githubUrl: "https://github.com/eduardoferreirajaworiwski/hydra-mapper",
    emphasis: "secondary"
  },
  {
    title: "Aegis-Neural",
    tagline: "Unsupervised anomaly detection for security logs",
    description:
      "Autoencoder-based anomaly detection project for network and system log analysis.",
    problem:
      "Explores anomaly detection for unusual activity without depending only on predefined signatures.",
    architecture:
      "A Python pipeline handles preprocessing, training and validation, with reconstruction error used as the anomaly signal.",
    professionalValue:
      "Shows I can apply ML concepts to security use cases with clear analyst-facing logic.",
    stack: ["Python", "PyTorch", "scikit-learn", "Synthetic Logs", "Preprocessing Pipeline"],
    category: "ML for Security / Anomaly Detection",
    highlights: [
      "Deep autoencoder architecture",
      "Reconstruction error-based anomaly scoring",
      "Synthetic security log generation",
      "Training and validation pipeline",
      "Clear explanation of unsupervised detection logic"
    ],
    githubUrl: "https://github.com/eduardoferreirajaworiwski/aegis-neural",
    emphasis: "secondary"
  }
];
