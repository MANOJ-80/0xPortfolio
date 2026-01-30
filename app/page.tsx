"use client";

import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(
  () => import("@/components/sections/About").then((mod) => mod.About),
  { ssr: false },
);
const Projects = dynamic(
  () => import("@/components/sections/Projects").then((mod) => mod.Projects),
  { ssr: false },
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((mod) => mod.Contact),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
