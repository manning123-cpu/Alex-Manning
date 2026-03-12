"use client";

import { motion } from "framer-motion";

const roles = [
  {
    title: "Water Security Researcher",
    org: "UCLA Civil & Environmental Engineering — Hoek Lab",
    body: "Professor Eric M.V. Hoek co-founded UCLA's Water Technology Research Center, holds 70+ global patents, and built NanoH2O — a membrane tech company acquired by LG. I work directly in his lab developing and testing polymer membrane solutions for next-generation water filtration. I analyze performance data, identify efficiency trends, and collaborate with PhD researchers and a PostDoc to advance reverse osmosis outcomes. This isn't classroom science — it's R&D at the frontier of global water security.",
    tags: ["Water Security R&D", "Polymer Membranes", "Reverse Osmosis", "Data Analysis", "Lab Research"]
  },
  {
    title: "Environmental Data & Policy Analyst",
    org: "Center for Biological Diversity",
    body: "Conducting GIS-based spatial analysis on California's Idle Well Management Plan — identifying abandoned oil wells inside Health Protection Zones and near sensitive receptors like schools and homes. I clean and integrate large-scale regulatory datasets using ArcGIS and SQL, produce maps for client-facing reports, and translate complex regulatory data into actionable policy insights. Real analytical work on real environmental justice issues.",
    tags: ["GIS", "Spatial Analysis", "Environmental Justice", "SQL", "Regulatory Policy", "ArcGIS"]
  },
  {
    title: "Grant Manager & Brand Advocate",
    org: "Patagonia",
    body: "Directing $45,000 in Patagonia grant funding to high-impact local nonprofits — evaluating organizations, allocating capital, and ensuring dollars go where they matter. Patagonia gives 1% of sales to environmental causes; I'm responsible for part of that pipeline in our market. I also serve as a front-line brand advocate, educating customers on responsible consumption and environmental issues.",
    tags: ["Grant Allocation", "Impact Assessment", "Environmental Finance", "Brand Advocacy"]
  }
];

export default function CurrentWork() {
  return (
    <section id="work" className="section-divider">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Current Work
        </motion.p>

        <div className="grid gap-6 lg:grid-cols-3">
          {roles.map((role, index) => (
            <motion.article
              key={role.title}
              className="glass-card flex h-full flex-col p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <h3 className="display-face text-2xl leading-tight text-[var(--color-text-primary)]">{role.title}</h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-[var(--color-accent)]">{role.org}</p>
              <p className="body-copy mt-4 flex-1 text-[0.98rem]">{role.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
