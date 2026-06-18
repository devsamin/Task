import { motion } from "framer-motion";

export const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className = "", id = "" }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    }}
    className={className}
  >
    {children}
  </motion.section>
);

export const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-[#e85d26] text-sm font-medium uppercase tracking-widest mb-4">
    <span className="w-8 h-[1px] bg-[#e85d26]"></span>
    {children}
  </span>
);

export const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300";
  const variants = {
    primary: "bg-[#e85d26] text-white hover:bg-[#ff6b33] hover:shadow-lg hover:shadow-[#e85d26]/30",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black",
    ghost: "text-white hover:text-[#e85d26]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const StatCounter = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-white mb-1">{value}</div>
    <div className="text-gray-400 text-xs uppercase tracking-wider">{label}</div>
  </div>
);
