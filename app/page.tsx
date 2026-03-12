import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const CurrentWork = dynamic(() => import("@/components/CurrentWork"));
const Timeline = dynamic(() => import("@/components/Timeline"));
const Projects = dynamic(() => import("@/components/Projects"));
const Adventures = dynamic(() => import("@/components/Adventures"));
const Vision = dynamic(() => import("@/components/Vision"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />
      <Hero />
      <About />
      <CurrentWork />
      <Timeline />
      <Projects />
      <Adventures />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
