import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data/constants";
import { Section, SectionLabel, FadeUp } from "./ui";

const TestimonialCard = ({ name, role, text, color, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
    }}
    className={`${color} p-8 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}
  >
    <div className="absolute top-4 right-4 text-6xl font-serif text-white/10 leading-none">"</div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e85d26] to-[#ff8c5a] flex items-center justify-center text-white font-semibold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-white/60 text-xs">{role}</p>
      </div>
    </div>
    <p className="text-white/90 text-sm leading-relaxed">{text}</p>
    <div className="mt-6 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#e85d26] text-sm">★</span>
      ))}
    </div>
  </motion.div>
);

const Testimonials = () => (
  <Section className="bg-black py-32 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <FadeUp>
          <SectionLabel>Testimonials</SectionLabel>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Our Clients Say<br />
            <span className="italic text-[#e85d26]">About Us</span>
          </h2>
        </FadeUp>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} {...t} index={i} />
        ))}
      </div>
    </div>
  </Section>
);

export default Testimonials;
