import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { GlobalSplineBackground } from "@/components/ui/GlobalSplineBackground";

export const metadata: Metadata = {
  title: "About Manoj Ganesan (0xEcho) | Software Engineer",
  description:
    "Learn about Manoj Ganesan (0xEcho), a Software Engineer specializing in full-stack and backend development.",
  alternates: {
    canonical: "https://manojganesan.dev/about",
  },
  openGraph: {
    title: "About Manoj Ganesan (0xEcho) | Software Engineer",
    description:
      "Learn about Manoj Ganesan (0xEcho), a Software Engineer specializing in full-stack and backend development.",
    url: "https://manojganesan.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Manoj Ganesan (0xEcho) | Software Engineer",
    description: "Learn about Manoj Ganesan (0xEcho), a Software Engineer specializing in full-stack and backend development.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://manojganesan.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://manojganesan.dev/about"
    }
  ]
};

const focusAreas = [
  "Backend systems",
  "Security tooling",
  "AI agents",
  "Full-stack products",
  "Developer tools",
  "Linux automation",
];

const stackGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "Java", "SQL", "Bash"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Data",
    items: ["MongoDB", "PostgreSQL", "ChromaDB"],
  },
  {
    label: "AI / LLM",
    items: ["MCP", "AI Agents", "Vector Embeddings", "RAG"],
  },
  {
    label: "Tools",
    items: ["Docker", "Linux", "Git", "CI/CD", "GitHub Actions"],
  },
];

const projects = [
  {
    name: "0xMemory",
    href: "https://github.com/MANOJ-80/0xMemory",
    text: "A local-first memory layer for AI agents using MCP, ChromaDB, Markdown sync, and hybrid semantic search.",
  },
  {
    name: "0xLynk",
    href: "https://github.com/MANOJ-80/0xLynk",
    text: "Browser-native P2P file transfer built with WebRTC DataChannels, integrity checks, resend recovery, and Docker deployment.",
  },
  {
    name: "0xShelf",
    href: "https://github.com/MANOJ-80/0xShelf",
    text: "A full-stack MERN inventory and order management app with authentication, role-based workflows, APIs, and analytics.",
  },
  {
    name: "0xArmor",
    href: "https://github.com/MANOJ-80/0xArmor",
    text: "Security-focused tooling aligned with Linux hardening, monitoring, and operational workflows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-lime selection:text-black">
      <GlobalSplineBackground />
      <BlueprintGrid />

      <main className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 pointer-events-auto select-auto">
        <div className="mb-20 border-b border-white/10 pb-12">
          <Link
            href="/#about"
            className="group font-mono text-gray-400 text-sm tracking-widest hover:text-accent-lime transition-colors duration-300 inline-flex items-center gap-2 mb-12"
          >
            <span className="text-accent-lime group-hover:-translate-x-1 transition-transform duration-300">
              &lt;-
            </span>
            ./RETURN_HOME
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-end">
            <div>
              <span className="font-mono text-accent-lime text-xs tracking-widest block mb-4 drop-shadow-[0_2px_10px_rgba(var(--accent-primary-rgb),0.5)]">
                [ABOUT] // IDENTITY
              </span>
              <h1 className="font-bold uppercase leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mb-6">
                <span
                  className="block text-white text-5xl md:text-7xl font-bold opacity-90 tracking-normal"
                  style={{ fontFamily: "var(--font-family-brooklyn)" }}
                >
                  Manoj Ganesan
                </span>
                <span
                  className="block text-accent-lime text-4xl md:text-6xl mt-3 font-mono normal-case tracking-tight"
                >
                  0xEcho.
                </span>
              </h1>
              <p
                className="text-gray-300 max-w-3xl text-xl md:text-2xl leading-relaxed tracking-wide"
                style={{ fontFamily: "var(--font-family-brettaline)" }}
              >
                Software Engineer focused on backend systems, security tooling,
                AI agents, and full-stack products that solve practical
                engineering problems.
              </p>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/15 bg-black/50">
              <Image
                src="/manoj-ganesan.webp"
                alt="Manoj Ganesan Software Engineer 0xEcho"
                fill
                sizes="(min-width: 1024px) 340px, 100vw"
                className="object-cover grayscale"
                priority
              />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          <article className="bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-lg">
            <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase mb-5">
              [CURRENT_WORK]
            </h2>
            <p className="text-gray-100 leading-relaxed font-semibold mb-5">
              I am currently a Software Engineer Intern at Froze
              Communication, where I work on security monitoring and endpoint
              systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My work includes multi-tenant monitoring architecture, strict
              tenant isolation, RBAC, Windows endpoint workers, batched event
              ingestion, firewall sync, auto-update flows, and near real-time
              EDR-style detection with live alerts.
            </p>
          </article>

          <article className="bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-lg">
            <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase mb-5">
              [WHAT_I_BUILD]
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="border border-accent-lime/20 bg-accent-lime/10 px-4 py-3 font-mono text-sm text-accent-lime"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">
            <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase">
              [PROJECTS_WITH_CONTEXT]
            </h2>
            <Link
              href="/works"
              className="font-mono text-xs text-gray-400 hover:text-accent-lime transition-colors uppercase tracking-widest"
            >
              ./ALL_WORKS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/45 backdrop-blur-md border border-white/10 hover:border-accent-lime/50 p-7 rounded-lg transition-all hover:bg-black/60"
              >
                <h3
                  className="text-2xl font-bold uppercase text-white group-hover:text-accent-lime transition-colors mb-4"
                  style={{ fontFamily: "var(--font-family-brooklyn)" }}
                >
                  {project.name}
                </h3>
                <p className="font-mono text-sm text-gray-400 leading-loose">
                  {project.text}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mb-16">
          <article className="bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-lg">
            <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase mb-5">
              [STACK]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {stackGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-3">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 border border-accent-lime/30 text-accent-lime text-xs font-mono bg-accent-lime/10 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-lg">
            <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase mb-5">
              [EDUCATION]
            </h2>
            <p className="font-semibold text-gray-100 leading-relaxed">
              B.Tech in Computer Science & Business Systems
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              PSG Institute of Technology and Applied Research, Coimbatore
            </p>
            <p className="font-mono text-accent-lime mt-5 text-sm">
              2023 - 2027
            </p>
          </article>
        </section>

        <section className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-lg mb-16">
          <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase mb-5">
            [PHILOSOPHY]
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed max-w-4xl font-semibold">
            I see engineering the same way I see life: as a series of
            experiments. Some succeed, some fail, but every iteration teaches
            something useful. I care about building with intent, understanding
            systems deeply, and turning rough ideas into working software.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-t border-white/10 pt-10">
          <div>
            <h2 className="font-mono text-xs text-accent-lime/80 tracking-widest uppercase mb-3">
              [CONNECT]
            </h2>
            <p className="text-gray-400">
              Open to software engineering roles, internships, freelance work,
              and technical collaborations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
            <a
              href="mailto:manojofficial.018@gmail.com"
              className="px-5 py-3 border border-white/20 text-white hover:text-black hover:bg-accent-lime hover:border-accent-lime transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/MANOJ-80"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white/20 text-white hover:text-black hover:bg-accent-lime hover:border-accent-lime transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-ganesan-2444ab28a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white/20 text-white hover:text-black hover:bg-accent-lime hover:border-accent-lime transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
