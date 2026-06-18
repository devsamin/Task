import { motion } from "framer-motion";
import { FadeUp, Button, StatCounter } from "./ui";

const Hero = () => (
  <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#e85d26]/10 pointer-events-none"></div>
    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#e85d26]/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#e85d26] animate-pulse"></span>
              <span className="text-xs text-gray-300">
                Award-winning design studio · Est. 2010
              </span>
            </div>
          </FadeUp>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-serif leading-[0.9] tracking-tight"
          >
            <span className="block">VOLANO</span>
            <span className="block text-[#e85d26] italic">_STUDIO</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 mt-8"
          >
            <span className="text-7xl md:text-9xl font-bold text-white">+</span>
            <div>
              <div className="text-5xl md:text-7xl font-serif italic text-white">Design</div>
              <div className="text-sm text-gray-400 mt-2">× Technology × Strategy</div>
            </div>
          </motion.div>

          <FadeUp delay={0.7}>
            <p className="mt-10 text-gray-400 text-lg leading-relaxed max-w-xl">
              We blend creativity with technology to craft digital experiences
              that inspire, engage, and deliver results.
            </p>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary">View Our Work <span>→</span></Button>
              <Button variant="outline">Book a Call</Button>
            </div>
          </FadeUp>

          <FadeUp delay={1}>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <StatCounter value="150+" label="Projects" />
              <StatCounter value="15+" label="Years" />
              <StatCounter value="80+" label="Clients" />
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-4 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://image.qwenlm.ai/public_source/ff98e81c-16e4-4c62-98e8-3afe798e31f7/1f8a6c33e-5be6-4cd8-808b-8cf06444e44b.png"
              alt="Workspace"
              className="w-full h-[500px] object-cover rounded-3xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#e85d26] text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-wider">Years Experience</div>
            </div>
            <div
              className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#e85d26] rounded-full flex items-center justify-center animate-spin"
              style={{ animationDuration: "20s" }}
            >
              <span className="text-xs">★</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
