import { motion } from "framer-motion";
import { BLOGS } from "../data/constants";
import { Section, SectionLabel, FadeUp, Button } from "./ui";

const BlogCard = ({ title, img, category, date, index }) => (
  <motion.article
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
    }}
    className="group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-[#e85d26] text-white text-xs px-3 py-1 rounded-full font-medium">
        {category}
      </div>
    </div>
    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
      <span>{date}</span>
      <span className="w-1 h-1 rounded-full bg-gray-500"></span>
      <span>5 min read</span>
    </div>
    <h3 className="text-lg font-medium text-white group-hover:text-[#e85d26] transition-colors leading-snug">
      {title}
    </h3>
  </motion.article>
);

const Blog = () => (
  <Section id="blog" className="bg-black py-32 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div className="max-w-2xl">
          <FadeUp>
            <SectionLabel>Our Blog</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight">
              Latest news and<br />events
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <Button variant="ghost">View All Blog →</Button>
        </FadeUp>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS.map((blog, i) => (
          <BlogCard key={i} {...blog} index={i} />
        ))}
      </div>
    </div>
  </Section>
);

export default Blog;
