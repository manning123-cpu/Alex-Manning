"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Geospatial",
    items: ["ArcGIS", "QGIS", "GIS Spatial Screening", "Remote Sensing"]
  },
  {
    label: "Data & Programming",
    items: ["Python", "R", "SQL", "Excel/VBA", "Power BI", "Tableau"]
  },
  {
    label: "Sustainability & ESG",
    items: [
      "GHG Protocol (Scope 1–3)",
      "B-Corp",
      "EPR Reporting",
      "GRI Standards",
      "UNSDG",
      "LCA",
      "Supply Chain Management"
    ]
  },
  {
    label: "Business & Strategy",
    items: ["ESG Strategy", "Sustainable Business (HBS)", "Stakeholder Analysis", "Impact Investing", "B2B Sales"]
  },
  {
    label: "Lab & Science",
    items: ["Polymer Membrane Testing", "Water Filtration Analysis", "Biochemistry", "Molecular Biology"]
  },
  {
    label: "Other",
    items: ["Dynamics 365", "PowerPoint", "French (conversational)"]
  }
];

const techTags = ["ArcGIS", "QGIS", "SQL", "Python", "Regulatory Analysis", "Environmental Justice"];

export default function Projects() {
  return (
    <section id="projects" className="section-divider">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Skills &amp; Tools
        </motion.p>

        <motion.article
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <h3 className="display-face text-3xl">GIS Spatial Analysis — California Idle Well Environmental Justice Mapping</h3>
              <p className="body-copy mt-4">
                California has thousands of idle and abandoned oil wells sitting near homes, schools, and
                communities — many of them in low-income neighborhoods. I built a spatial analysis pipeline at
                the Center for Biological Diversity to answer a critical question: which of these wells are
                inside Health Protection Zones, and which communities are most at risk? Using ArcGIS and SQL, I
                cleaned and validated large PRA regulatory datasets, classified wells by status and elimination
                priority, and produced maps and analytical outputs used directly in client-facing environmental
                justice reports and policy advocacy. This is the kind of data work that changes decisions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] border-l border-[var(--color-border)]">
              <Image
                src="/projects/gis-map.png"
                alt="GIS map output placeholder for idle well analysis"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.article>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.label}
              className="glass-card p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{group.label}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
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
