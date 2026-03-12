"use client";

import { motion } from "framer-motion";

const arc = [
  {
    title: "Near Term — Environmental Consulting & Climate Strategy",
    body: "I'm pursuing roles at the intersection of environmental science and business strategy — think environmental consulting firms (ERM, WSP, ICF, Ramboll), climate strategy practices at Big 4 and boutique advisory firms, and in-house sustainability roles at companies that need someone who can both run the GHG model and present to the board. I bring technical depth in GIS, data analysis, and ESG compliance — plus the HBS-backed business training to translate science into strategy."
  },
  {
    title: "Medium Term — Climate Tech",
    body: "The next chapter is climate tech — companies building solutions in water, carbon, energy transition, and sustainable materials. I want to be in the room where product strategy, market positioning, and scientific validity intersect. My goal is a role in business development, strategy, or operations at a high-growth climate company where having a genuine scientific foundation actually matters."
  },
  {
    title: "Long Term — Climate VC",
    body: "Where I'm ultimately headed: climate-focused venture capital. The leverage point for climate impact in the next 30 years isn't just better science — it's better capital allocation. I'm building the toolkit now: scientific credibility from the lab, business fluency from HBS and Oboz, field knowledge from the Center for Biological Diversity. I want to be the investor who can read a membrane patent and a cap table with equal confidence."
  }
];

export default function Vision() {
  return (
    <section id="vision" className="section-divider bg-[rgba(34,56,45,0.28)]">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Vision
        </motion.p>

        <div className="grid gap-5 lg:grid-cols-3">
          {arc.map((item, idx) => (
            <motion.article
              key={item.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <h3 className="display-face text-2xl leading-snug">{item.title}</h3>
              <p className="body-copy mt-4 text-[0.98rem]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
