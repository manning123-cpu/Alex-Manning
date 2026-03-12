"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3.3 GPA", label: "University of California, Los Angeles" },
  { value: "110+", label: "Published Papers from Prof. Hoek's Lab" },
  { value: "$45K", label: "Grant Funding Managed at Patagonia" },
  { value: "$30K+", label: "B2B Revenue Driven at Oboz Footwear" },
  { value: "$15K", label: "Fundraised for International Volunteer Work" }
];

export default function About() {
  return (
    <section id="about" className="section-divider">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Who I Am
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            className="space-y-6 lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="body-copy">
              I&apos;m Alex Manning — a UCLA Environmental Science student specializing in Systems &
              Society, graduating December 2026. I&apos;m not just studying the environment; I&apos;m building the
              cross-functional toolkit to fix it.
            </p>
            <p className="body-copy">
              My work sits at the intersection of hard science and business strategy. In the lab, I&apos;m doing
              water security R&D under one of the world&apos;s leading membrane scientists. In the field, I&apos;m
              producing GIS-based spatial analyses that directly inform environmental justice policy. In the
              boardroom, I&apos;ve led ESG initiatives — from B-Corp recertification to Scope 1–3 GHG accounting
              — for a consumer goods company that cared enough to measure what most companies ignore.
            </p>
            <p className="body-copy">
              I believe the most important climate work doesn&apos;t happen in silos. It happens when scientists
              understand capital markets, when consultants understand chemistry, and when strategists
              understand what&apos;s actually at stake. That&apos;s the person I&apos;m building myself to be.
            </p>
            <p className="body-copy">
              Harvard Business School trained me in Sustainable Business Strategy. UCLA is giving me the
              science. Everything else — Patagonia, Oboz, the Center for Biological Diversity, a construction
              site in the Dominican Republic — is teaching me how the real world actually works.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-3 lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {stats.map((stat) => (
              <article key={stat.value} className="glass-card p-4">
                <p className="data-point text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
