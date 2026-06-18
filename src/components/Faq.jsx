import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "../data/constants";
import { Section, SectionLabel, FadeUp, Button } from "./ui";

const FaqItem = ({ q, a, index, isOpen, toggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
      isOpen
        ? "border-[#e85d26]/40 bg-white/5"
        : "border-white/10 bg-white/[0.02]"
    }`}
  >
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
    >
      <span className="text-white font-medium pr-4">{q}</span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        className="text-[#e85d26] text-2xl flex-shrink-0"
      >
        +
      </motion.span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Section className="bg-black py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <FadeUp>
              <SectionLabel>FAQ</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
                Frequently Asked<br />Questions
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-500 text-sm">Got questions? We've got answers.</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Button variant="outline" className="mt-8">Contact Us</Button>
            </FadeUp>
          </div>
          <div className="lg:col-span-2 space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                {...faq}
                index={i}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
