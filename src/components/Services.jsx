import { motion } from "framer-motion";
import { SERVICES, SERVICE_LIST } from "../data/constants";
import { Section, SectionLabel, FadeUp, Button } from "./ui";

const ServiceCard = ({ num, title, desc, img, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.1 } },
    }}
    className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#e85d26]/40 transition-all duration-500 cursor-pointer"
  >
    <div className="relative h-72 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute top-4 left-4 text-xs font-mono text-white/70 bg-black/40 backdrop-blur px-3 py-1 rounded-full">
        {num}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#e85d26] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-2 text-[#e85d26] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  </motion.div>
);

const Services = () => (
  <Section id="services" className="bg-black py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div className="max-w-2xl">
          <FadeUp>
            <SectionLabel>What We Do</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight">
              Blending Design<br />with Technology
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <Button variant="outline">View All Services →</Button>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, i) => (
          <ServiceCard key={i} {...service} index={i} />
        ))}
      </div>

      <div className="mt-32">
        <FadeUp>
          <h3 className="text-3xl font-serif mb-12">All Services</h3>
        </FadeUp>
        <div className="space-y-0">
          {SERVICE_LIST.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-between py-6 border-b border-white/10 group hover:bg-white/5 px-4 rounded-lg transition cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span className="text-[#e85d26] text-sm font-mono">CASE {service.num}</span>
                <span className="text-white text-xl md:text-2xl font-medium group-hover:text-[#e85d26] transition-colors">
                  {service.title}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-20 h-14 object-cover rounded hidden md:block group-hover:scale-110 transition-transform"
                />
                <span className="text-[#e85d26] text-xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Services;
