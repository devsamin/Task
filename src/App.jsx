import { useScroll, useTransform, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Awards from "./components/Awards";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-[#e85d26] z-[60] origin-left"
        style={{ width: progressWidth }}
      />

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <Awards />
      <Faq />
      <Blog />
      <Cta />
      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
