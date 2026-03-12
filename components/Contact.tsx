"use client";

import { Mail, Phone, Linkedin, FileDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-divider">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Let&apos;s Connect
        </motion.p>

        <motion.h2
          className="display-face text-balance text-4xl leading-tight md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Open to consulting, climate strategy, climate tech, and research roles.
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.05 }}
        >
          <a
            href="mailto:awmanning316@gmail.com"
            aria-label="Send email to Alexander Manning"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] bg-[rgba(76,175,125,0.14)] px-5 py-3 text-sm font-medium"
          >
            <Mail size={16} />
            awmanning316@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/alexandermanning"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            aria-label="Download Alexander Manning resume"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Phone size={14} />
          <span>(603) 731-4725</span>
        </motion.div>

        <p className="mt-12 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-secondary)]">
          Alexander Manning · UCLA Environmental Science · Class of December 2026
        </p>
      </div>
    </section>
  );
}
