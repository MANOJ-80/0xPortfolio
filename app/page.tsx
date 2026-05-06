import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Manoj Ganesan (0xEcho) | Software Engineer",
  description: "Manoj Ganesan (0xEcho) is a Software Engineer building full-stack and backend systems. Explore projects and portfolio.",
  alternates: {
    canonical: "https://manojganesan.dev",
  },
  openGraph: {
    title: "Manoj Ganesan (0xEcho) | Software Engineer",
    description: "Manoj Ganesan (0xEcho) is a Software Engineer building full-stack and backend systems. Explore projects and portfolio.",
    url: "https://manojganesan.dev",
    siteName: "Manoj Ganesan (0xEcho)",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Ganesan (0xEcho) | Software Engineer",
    description: "Manoj Ganesan (0xEcho) is a Software Engineer building full-stack and backend systems. Explore projects and portfolio.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://manojganesan.dev/#person",
      "name": "Manoj Ganesan",
      "alternateName": [
        "Manoj",
        "Manoj G",
        "0xEcho"
      ],
      "url": "https://manojganesan.dev",
      "jobTitle": "Software Engineer",
      "sameAs": [
        "https://www.linkedin.com/in/manoj-ganesan-2444ab28a/",
        "https://github.com/MANOJ-80"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://manojganesan.dev/#website",
      "url": "https://manojganesan.dev",
      "name": "Manoj Ganesan (0xEcho) | Software Engineer",
      "publisher": {
        "@id": "https://manojganesan.dev/#person"
      }
    }
  ]
};

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
