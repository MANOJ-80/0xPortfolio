import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://manojganesan.dev/#person",
    name: "Manoj Ganesan",
    alternateName: ["Manoj", "Manoj G", "MANOJ G", "0xEcho"],
    url: "https://manojganesan.dev",
    image: "https://manojganesan.dev/manoj-ganesan.webp",
    jobTitle: "Software Engineer",
    description:
      "Full stack and backend Software Engineer building practical web, AI, and security projects.",
    sameAs: [
      "https://github.com/MANOJ-80",
      "https://x.com/0xEchoDev",
      "https://www.linkedin.com/in/manoj-ganesan-2444ab28a/",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Backend Engineering",
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "AI Agents",
      "Security Engineering",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://manojganesan.dev/#website",
    name: "0xEcho",
    alternateName: "Manoj Ganesan Portfolio",
    url: "https://manojganesan.dev",
    author: {
      "@id": "https://manojganesan.dev/#person",
    },
    description:
      "Portfolio website for Manoj Ganesan, aka 0xEcho, featuring software engineering projects and technical work.",
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://manojganesan.dev/#projects",
    name: "Featured Software Projects",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: "0xMEMORY",
          codeRepository: "https://github.com/MANOJ-80/0xMemory",
          programmingLanguage: ["Python"],
          description:
            "Cross-LLM context engine that adds persistent memory and retrieval for AI workflows.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareSourceCode",
          name: "0xLYNK",
          codeRepository: "https://github.com/MANOJ-80/0xLynk",
          programmingLanguage: ["JavaScript"],
          description:
            "Browser-based peer-to-peer file transfer tool built with WebRTC for direct sharing.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareSourceCode",
          name: "0xARMOR",
          codeRepository: "https://github.com/MANOJ-80/0xArmor",
          programmingLanguage: ["Python"],
          description:
            "Security hardening and compliance platform for Linux systems and operational workflows.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
