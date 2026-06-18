import { motion } from "framer-motion";
import { PROJECTS } from "../data/constants";
import { Section, SectionLabel, FadeUp } from "./ui";

const Works = () => (
  <Section id="works" className="bg-black py-32 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <FadeUp>
          <SectionLabel>Featured Work</SectionLabel>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight">
            Selected Projects
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
            A curated selection of our recent work across branding, web design,
            and digital experiences.
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } },
            }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#e85d26] uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                    <div className="text-white text-xl font-medium">{project.title}</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#e85d26] flex items-center justify-center">
                    →
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-white text-lg font-medium">{project.title}</h3>
              <span className="text-gray-500 text-sm">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Works;
