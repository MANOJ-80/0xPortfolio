import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Syne, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { CinematicCursor } from "@/components/ui/CinematicCursor";
import { LenisScroll } from "@/components/ui/LenisScroll";
import { SoundProvider } from "@/components/ui/SoundProvider";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { GlobalSplineBackground } from "@/components/ui/GlobalSplineBackground";
import { ThemeColorPicker } from "@/components/ui/ThemeColorPicker";

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
  metadataBase: new URL("https://manojganesan.dev"),
  title: {
    default: "Manoj Ganesan | Software Engineer",
    template: "%s | Manoj Ganesan",
  },
  description:
    "Portfolio of Manoj Ganesan, aka 0xEcho, a full stack and backend Software Engineer building practical web, AI, and security projects.",
  keywords: [
    "manoj ganesan",
    "0xecho",
    "manoj g",
    "manoj",
    "software engineer",
    "full stack engineer",
    "backend engineer",
  ],
  authors: [{ name: "Manoj Ganesan", url: "https://manojganesan.dev" }],
  creator: "Manoj Ganesan",
  publisher: "Manoj Ganesan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manojganesan.dev",
    siteName: "0xEcho",
    title: "Manoj Ganesan | Software Engineer",
    description:
      "Explore projects, systems, and engineering work by Manoj Ganesan, aka 0xEcho.",
    images: [
      {
        url: "/Images/Profile.webp",
        width: 1200,
        height: 630,
        alt: "Manoj Ganesan, Software Engineer and 0xEcho portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Ganesan | Software Engineer",
    description:
      "Projects and engineering work by Manoj Ganesan, aka 0xEcho.",
    creator: "@0xEchoDev",
    images: ["/Images/Profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
          <GlobalSplineBackground />
          <BlueprintGrid />
          <div className="relative z-10 pointer-events-none">{children}</div>
          <ThemeColorPicker />
          <SoundToggle />
        </SoundProvider>
      </body>
    </html>
  );
}
