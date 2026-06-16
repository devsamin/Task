import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const faqs = [
    {
      q: "How long does it take to complete a project?",
      a: "Project timelines vary based on scope and complexity. Typically, branding projects take 4-8 weeks, while web development projects may take 8-16 weeks.",
    },
    {
      q: "Do you work with startups or only established brands?",
      a: "We work with businesses of all sizes, from early-stage startups to established enterprises. Our approach is tailored to each client's unique needs.",
    },
    {
      q: "Can I request revisions during the project?",
      a: "Absolutely! We include multiple revision rounds in our process to ensure the final deliverable meets your expectations perfectly.",
    },
    {
      q: "What is your pricing structure?",
      a: "Our pricing is project-based and depends on scope, complexity, and timeline. Contact us for a custom quote tailored to your needs.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      text: "Volano transformed our brand identity completely. The team's creativity and attention to detail exceeded all expectations.",
      color: "bg-black",
    },
    {
      name: "Mike Chen",
      role: "Founder, InnovateCo",
      text: "Working with Volano was a game-changer for our business. Their strategic approach delivered real results.",
      color: "bg-[#e85d26]",
    },
    {
      name: "Lisa Park",
      role: "Director, DesignHub",
      text: "The level of professionalism and innovation Volano brings to every project is unmatched in the industry.",
      color: "bg-black",
    },
    {
      name: "James Wilson",
      role: "CMO, GrowthLab",
      text: "From concept to execution, Volano delivered a brand experience that truly resonates with our audience.",
      color: "bg-[#e85d26]",
    },
  ];

  const awards = [
    { name: "Awwwards", title: "Site of the Day", year: "2024" },
    { name: "CSS Design", title: "UI/UX Innovation", year: "2023" },
    { name: "Webflow", title: "Best Agency Website", year: "2023" },
    { name: "Framer", title: "Top Design Agency", year: "2022" },
    { name: "Dribbble", title: "Featured Design", year: "2022" },
  ];

  const services = [
    {
      title: "Brand Identity Design",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/14df70082-aee8-48f7-81ef-2e97375971d0.png",
    },
    {
      title: "NewLogo",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1df40887e-756f-448a-9a14-989c55032f7b.png",
    },
    {
      title: "BigBrand Marketing",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1b412bf85-138b-4c9f-b01b-13e9eaa437a0.png",
    },
    {
      title: "VisionWeb Development",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/166c45a23-44ae-41f2-bad1-ef482ad50f69.png",
    },
  ];

  const serviceList = [
    {
      num: "01",
      title: "UI/UX Design",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/10159d90d-e817-48b5-8f93-2b1dd1de58ad.png",
    },
    {
      num: "02",
      title: "Web Development",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1054c7c76-d5d4-480a-8cb7-04283d5f54ae.png",
    },
    {
      num: "03",
      title: "Web Design",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1d886f636-cb6f-4996-91c4-3d707b9d0f52.png",
    },
    {
      num: "04",
      title: "Branding Design",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/126eebd8b-0de0-44fa-b0de-83d332de4dfa.png",
    },
    {
      num: "05",
      title: "Website Design",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1dd11e598-cf6b-4672-b51b-0f84b636bd2a.png",
    },
  ];

  const blogs = [
    {
      title: "Why Design Thinking is Crucial for Business Growth",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1f8436f3b-078e-46e9-bf8c-a9d7298cd419.png",
    },
    {
      title: "The Future of UI/UX: Trends to Watch in 2025",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/109ef596d-a3f0-48e4-a373-ae3a4e9a2488.png",
    },
    {
      title: "How Branding Shapes Customer Experience",
      img: "https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1583cb2ad-3123-4ba2-8b5e-5c56dc839ea9.png",
    },
  ];

  const marqueeItems = [
    "Technology",
    "Building",
    "Innovation",
    "Reality",
    "Experiences",
    "Feature work",
    "Building",
    "Experiences",
    "Businesses",
    "Creative",
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-2xl font-serif italic text-white">
              Volano
            </span>
            <span className="text-[#e85d26] text-xs">®</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Works
            </a>
            <a href="#" className="hover:text-white transition">
              Services
            </a>
            <a href="#" className="hover:text-white transition">
              Pages ▾
            </a>
            <a href="#" className="hover:text-white transition">
              Blog
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Let's Talk
            </button>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Social Icons */}
            <div className="hidden lg:flex flex-col gap-4 pt-32">
              {["⊕", "✕", "f", "◎"].map((icon, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm cursor-pointer transition hover:scale-110 ${i === 1 ? "bg-[#e85d26] text-white" : "border border-white/30 text-white"}`}
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-serif leading-none tracking-tight"
              >
                VOLANO_STUDIO
              </motion.h1>
              <div className="flex items-center gap-4 mt-4 ml-auto max-w-md">
                <span className="text-6xl md:text-8xl font-bold text-white">
                  +
                </span>
                <span className="text-6xl md:text-8xl font-serif italic text-white">
                  DESIGN
                </span>
              </div>

              {/* Featured Projects */}
              <div className="mt-16">
                <p className="text-sm text-gray-400 mb-4">Featured Projects</p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative group cursor-pointer">
                    <img
                      src="https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/119657ffe-3eeb-48a1-a649-b524a3579cb3.png"
                      alt="Featured"
                      className="w-64 h-40 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs text-white">
                      + AirPlane_Studio
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Branding
                    </h3>
                    <ul className="space-y-1 text-gray-500 text-sm">
                      <li>Development</li>
                      <li>Design</li>
                      <li>Marketing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-12 text-gray-400 text-sm leading-relaxed max-w-md">
                We blend creativity with technology to craft digital experiences
                that inspire, engage, and deliver results. Whether it's building
                powerful brands, designing intuitive user interfaces, or
                developing cutting-edge solutions, our team is dedicated to
                turning your vision into reality.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 mt-8 lg:mt-32">
              <div className="relative">
                <img
                  src="https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1f8a6c33e-5be6-4cd8-808b-8cf06444e44b.png"
                  alt="Workspace"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-1 h-8 bg-white/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-serif italic">
                About Studio
              </h2>
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Design_2025
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
                Volano is more than just an agency — we are a team of
                innovators, designers, and strategists committed to helping
                businesses grow in the digital era. With a passion for
                creativity and a focus on results, we deliver tailored solutions
                that align with your goals and connect with your audience. Our
                mission is to empower brands with strategies, designs, and
                technologies that create lasting impact.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#e85d26] font-medium hover:gap-4 transition-all"
              >
                <span className="text-xl">+</span> More about us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Experience Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <img
              src="https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1f7598735-3878-44b8-9512-ccb6ce4440de.png"
              alt="Team"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute top-8 right-8 bg-white px-6 py-4 rounded-lg shadow-xl max-w-xs">
              <div className="text-4xl font-bold text-black mb-1">15+</div>
              <p className="text-sm text-gray-600">
                We have over 15 years of experience in design, development,
                production, and support of modern digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-y border-gray-200 py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span
                  key={i}
                  className="mx-6 text-lg text-gray-400 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Our Clients Say</h2>
            <h2 className="text-4xl md:text-5xl font-serif">About Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${t.color} p-6 rounded-lg transform ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"} hover:rotate-0 transition-transform cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Brands Section */}
      <section className="bg-black py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Building Brands That Inspire
                <br />
                and Endure
              </h2>
            </div>
            <div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                At Volano, we believe that great design is more than aesthetics
                — it's a strategic tool that drives growth, builds trust, and
                creates meaningful connections. Our holistic approach combines
                creativity, technology, and insight to deliver brand experiences
                that stand the test of time.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Branding",
                  "Strategy",
                  "Design",
                  "Development",
                  "Marketing",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className={`${i % 2 === 0 ? "bg-[#e85d26]" : "bg-white/10"} text-white px-4 py-2 rounded-full text-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap gap-4 mb-16">
            {[
              "AirPlane",
              "TechStart",
              "InnovateCo",
              "DesignHub",
              "GrowthLab",
              "CreativeCo",
              "NextGen",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm text-gray-300 hover:bg-white/10 transition cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-black py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-gray-500 text-sm">Our Awards</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-serif">
                We proudly Receive Worthy Recognition and Awards
              </h3>
            </div>
          </div>

          <div className="space-y-0">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-5 border-b border-white/10 group hover:bg-white/5 px-4 rounded transition cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[#e85d26] text-lg">✦</span>
                  <span className="text-white font-medium text-lg">
                    {award.name}
                  </span>
                </div>
                <span className="text-gray-400 text-sm hidden md:block">
                  {award.title}
                </span>
                <span className="text-gray-500 text-sm">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-serif mb-4">
                Frequently Asked
                <br />
                Questions
              </h3>
              <p className="text-gray-500 text-sm">
                Got questions? We've got answers.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition"
                  >
                    <span className="text-white font-medium">{faq.q}</span>
                    <span
                      className={`text-[#e85d26] text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-black py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif">
                Latest news and
                <br />
                events in our blog
              </h3>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-[#e85d26] text-sm hover:gap-4 transition-all"
            >
              View All Blog →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-white font-medium group-hover:text-[#e85d26] transition">
                  {blog.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-lg">
              Blending Design with in Technology
            </h2>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-[#e85d26] text-sm"
            >
              + View all Works
            </a>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group cursor-pointer ${i % 2 === 1 ? "md:mt-16" : ""}`}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-lg font-medium">
                    {service.title}
                  </h4>
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    App <span className="text-[#e85d26]">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service List */}
          <div className="space-y-0">
            {serviceList.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between py-6 border-b border-white/10 group hover:bg-white/5 px-4 rounded transition cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-gray-600 text-sm">
                    CASE {service.num}
                  </span>
                  <span className="text-white text-xl md:text-2xl font-medium">
                    {service.title}
                  </span>
                </div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-20 h-16 object-cover rounded hidden md:block group-hover:scale-110 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-3xl font-serif italic text-white">
                  Volano
                </span>
                <span className="text-[#e85d26] text-xs">®</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Where creativity meets technology. We craft digital experiences
                that inspire and endure.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>hello@volano.studio</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY 10001</li>
              </ul>
              <div className="flex gap-3 mt-4">
                {["f", "tw", "in", "ig"].map((s, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:bg-[#e85d26] hover:border-[#e85d26] hover:text-white transition cursor-pointer"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
            <p>© 2025 Volano Studio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
