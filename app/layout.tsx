import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Alexander Manning — Climate Strategist & Environmental Scientist",
  description:
    "UCLA Environmental Science student with expertise in GIS spatial analysis, ESG strategy, water security R&D, and climate consulting. Pursuing environmental consulting, climate strategy, climate tech, and VC.",
  keywords: [
    "environmental consulting",
    "climate strategy",
    "ESG consulting",
    "GIS analyst",
    "climate tech",
    "UCLA",
    "water security",
    "sustainability strategy"
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} bg-grain antialiased`}>
        {children}
      </body>
    </html>
  );
}
