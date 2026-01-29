import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { CinematicCursor } from "@/components/ui/CinematicCursor";
import { LenisScroll } from "@/components/ui/LenisScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-clash", // Keeping variable name for compatibility
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MANOJ G // 0xMe",
  description: "Advanced Agentic Portfolio",
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
      className={`${spaceGrotesk.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-background text-foreground overflow-x-hidden"
      >
        <LenisScroll />
        <CinematicCursor />
        <BlueprintGrid />

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
