"use client";

import { motion } from "framer-motion";

const PARTICLE_COUNT = 28;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden section-divider">
      <div className="topo-bg absolute inset-0 opacity-90" />
      <div className="absolute inset-0">
        {Array.from({ length: PARTICLE_COUNT }).map((_, index) => {
          const left = (index * 13.7) % 100;
          const top = (index * 17.9) % 100;
          const size = 2 + (index % 4);
          return (
            <span
              key={index}
              className="particle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${index * 0.4}s`,
                animationDuration: `${16 + (index % 5) * 3}s`
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="section-wrap relative z-10 pt-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.16
            }
          }
        }}
      >
        <motion.p
          className="mb-5 text-sm tracking-[0.2em] text-[var(--color-text-secondary)]"
          variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
        >
          UCLA · Environmental Science · Los Angeles, CA
        </motion.p>

        <motion.h1
          className="display-face text-balance text-[clamp(2.8rem,9vw,5.2rem)] leading-[1.02]"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <span className="block italic">Climate Strategist.</span>
          <span className="mt-2 block font-semibold not-italic">Environmental Scientist.</span>
        </motion.h1>

        <motion.p
          className="body-copy mt-8 max-w-3xl text-balance"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
        >
          I turn environmental data into decisions. From water security research to ESG strategy — I work
          where science meets business impact.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
        >
          <a
            href="#experience"
            aria-label="View my work in experience section"
            className="inline-flex items-center rounded-full border border-[var(--color-accent)] bg-[rgba(76,175,125,0.12)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-[rgba(76,175,125,0.25)]"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            aria-label="Download resume PDF"
            className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition hover:border-[var(--color-accent-warm)] hover:text-[var(--color-text-primary)]"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
