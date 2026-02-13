import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Syne, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { CinematicCursor } from "@/components/ui/CinematicCursor";
import { LenisScroll } from "@/components/ui/LenisScroll";
import { SoundProvider } from "@/components/ui/SoundProvider";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { SplineScene } from "@/components/3d/SplineScene";

// Premium geometric sans-serif - clean, modern, variable
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Wide display font for headlines - bold, industrial
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Ultra-wide condensed for huge headlines
const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-wide",
  display: "swap",
  weight: "400",
});

// Mono for code and technical text
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MANOJ G // 0xEcho",
  description: "Advanced Agentic Portfolio",
  icons: {
    icon: "/Images/icon.svg",
    shortcut: "/Images/icon.svg",
    apple: "/Images/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${syne.variable} ${bebas.variable} ${jetbrains.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-background text-foreground overflow-x-hidden"
      >
        <SoundProvider>
          <LenisScroll />
          <CinematicCursor />
          <div className="fixed inset-0 z-0 opacity-80 spline-container pointer-events-auto render-isolate gpu-layer">
            <SplineScene
              url="https://prod.spline.design/ParJWjNwBpaB6b-N/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          <BlueprintGrid />
          <main className="relative z-10 pointer-events-none">{children}</main>
          <SoundToggle />
        </SoundProvider>
      </body>
    </html>
  );
}
