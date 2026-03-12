"use client";

import { motion } from "framer-motion";

const entries = [
  {
    org: "Patagonia",
    role: "Grant Manager & Brand Advocate",
    date: "Nov 2025 – Present",
    bullets: [
      "Directing $45K in corporate philanthropic grant funding — evaluating nonprofits, allocating capital, and measuring community impact",
      "Front-line environmental educator and brand advocate for one of the world's most mission-driven consumer companies"
    ]
  },
  {
    org: "Center for Biological Diversity",
    role: "Environmental Data & Policy Analyst",
    date: "Sept 2025 – Present",
    bullets: [
      "Built GIS spatial analysis pipeline to identify idle and abandoned oil wells threatening California Health Protection Zones",
      "Cleaned and integrated large-scale PRA regulatory datasets using ArcGIS and SQL; outputs used directly in client-facing policy reports",
      "Translated complex regulatory data into spatial maps and environmental justice risk assessments for advocacy and legal use"
    ]
  },
  {
    org: "UCLA CEE Research Lab (Hoek Lab)",
    role: "Water Security Researcher",
    date: "Apr 2025 – Present",
    bullets: [
      "Conducting polymer membrane R&D under Prof. Eric M.V. Hoek, a global leader in water filtration technology with 70+ patents",
      "Developing and testing next-generation membrane solutions; analyzing performance data to improve reverse osmosis efficiency",
      "Collaborating with PhD researchers and PostDoc to refine formulations and interpret results"
    ]
  },
  {
    org: "Harvard Business School Online",
    role: "Certification, Sustainable Business Strategy",
    date: "Aug – Sept 2025",
    bullets: [
      "Completed HBS's rigorous sustainability strategy course; studied shared value creation, ESG frameworks, and impact investing",
      "Built a personal leadership plan for cross-functional sustainability initiatives and corporate strategy advisory"
    ]
  },
  {
    org: "Oboz Footwear",
    role: "ESG & Sales Operations Intern",
    date: "Jun – Oct 2025",
    bullets: [
      "Led B-Corp recertification process end-to-end; managed EPR compliance, waste reduction, and freight efficiency initiatives",
      "Built first-ever Scope 1–3 GHG inventory tracking system, monitoring energy, solar, and water usage across the business",
      "Developed strategic growth plan for underperforming B2B channels using sales and inventory analysis; drove $30K+ in seasonal revenue"
    ]
  },
  {
    org: "UCLA Young Entrepreneurs Program",
    role: "Vice President",
    date: "Jan 2025 – Present",
    bullets: [
      "Designed and led entrepreneurial workshops for low-income high school students on product design, startup financing, and business modeling",
      "Ran startup simulations guiding students from problem identification through pitch and market competition"
    ]
  },
  {
    org: "Leadership Through International Volunteer Expedition",
    role: "Fundraise & Project Manager",
    date: "Sept 2021 – Aug 2023",
    bullets: [
      "Raised $15,000 through email campaigns and community engagement to fund infrastructure projects in the Dominican Republic",
      "Managed 30+ volunteers across 5 build sites — constructed 2-room homes with electricity and implemented clean water and sanitation systems"
    ]
  },
  {
    org: "OVLC & Channel Islands Restoration",
    role: "Conservation Leader",
    date: "Mar 2021 – Aug 2023",
    bullets: [
      "Managed trail maintenance and erosion prevention across 6+ trails; led teams in brush clearing and habitat restoration",
      "Collected native plant and erosion data on Santa Cruz Island, contributing to long-term conservation planning"
    ]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="section-divider">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Experience
        </motion.p>

        <div className="relative pl-10">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-[var(--color-border)]" aria-hidden />
          <div className="space-y-8">
            {entries.map((entry, idx) => (
              <motion.article
                key={`${entry.org}-${entry.role}`}
                className="relative rounded-xl border border-[var(--color-border)] bg-[rgba(20,26,23,0.7)] p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
              >
                <span
                  aria-hidden
                  className="absolute -left-[2.2rem] top-7 h-3.5 w-3.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)]"
                />
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{entry.role}</h3>
                    <p className="text-sm tracking-wide text-[var(--color-accent)]">{entry.org}</p>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">{entry.date}</p>
                </div>
                <ul className="mt-4 space-y-2 text-[0.97rem] leading-7 text-[var(--color-text-secondary)]">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc marker:text-[var(--color-accent)]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
