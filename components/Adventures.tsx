"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Ojai & Channel Islands",
    text: "I grew up in Oak View, just outside Ojai in Ventura County — close enough to the mountains and the coast to understand both. I spent two years leading trail crews and collecting ecological data on Santa Cruz Island with OVLC. Trail erosion, native plant surveys, habitat restoration: this is where environmental science stopped being abstract for me. It also taught me how to manage a team in uncomfortable conditions, which turns out to be useful everywhere.",
    gradient: "from-emerald-900/40 to-emerald-700/10"
  },
  {
    title: "The Dominican Republic",
    text: "For two years I managed infrastructure projects in the Dominican Republic — raising $15,000, leading teams of 30+ volunteers, and overseeing the construction of homes with electricity and clean water systems across five communities. I learned more about project management, stakeholder communication, and leadership under pressure on those build sites than I did anywhere else. It also made permanent something I already believed: that environmental justice and human equity are the same fight.",
    gradient: "from-amber-900/40 to-lime-700/10"
  },
  {
    title: "Mountains, Surfing & the Outdoors",
    text: "Outside of work and school, I'm outside. Surfing, hiking the Sierras, trail running in the hills above Ojai. I think better when I've been moving. The outdoors is also a constant reminder of what's at stake — it's hard to be abstract about climate change when you've watched the smoke roll in from summer fires every year growing up in Southern California.",
    gradient: "from-cyan-900/40 to-emerald-700/10"
  }
];

export default function Adventures() {
  return (
    <section id="adventures" className="section-divider">
      <div className="section-wrap">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          Beyond the Work
        </motion.p>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className={`h-40 w-full bg-gradient-to-br ${card.gradient}`} />
              <div className="p-5">
                <h3 className="display-face text-2xl">{card.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-7 text-[var(--color-text-secondary)]">{card.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.blockquote
          className="display-face mx-auto mt-12 max-w-4xl text-center text-3xl italic leading-relaxed text-[var(--color-text-primary)] md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          “Climate change isn&apos;t an environmental problem. It&apos;s a design problem — and we have the tools to
          redesign our way out of it.”
        </motion.blockquote>
      </div>
    </section>
  );
}
