import { motion } from "framer-motion";
import { AWARDS } from "../data/constants";
import { Section, SectionLabel, FadeUp } from "./ui";

const Awards = () => (
  <Section className="bg-black py-32 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div>
          <FadeUp>
            <SectionLabel>Recognition</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-gray-400 text-sm">Our Awards</p>
          </FadeUp>
        </div>
        <div className="lg:col-span-2">
          <FadeUp delay={0.1}>
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              We proudly Receive Worthy Recognition and Awards
            </h3>
          </FadeUp>
        </div>
      </div>

      <div className="space-y-0">
        {AWARDS.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between py-6 border-b border-white/10 group hover:bg-white/5 px-4 rounded-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <span className="text-[#e85d26] text-lg">✦</span>
              <span className="text-white font-medium text-lg md:text-xl">{award.name}</span>
            </div>
            <span className="text-gray-400 text-sm hidden md:block">{award.title}</span>
            <span className="text-[#e85d26] text-sm font-mono">{award.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Awards;
