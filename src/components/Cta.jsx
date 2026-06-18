import { Section, FadeUp } from "./ui";

const Cta = () => (
  <Section className="relative py-32 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#e85d26] to-[#ff6b33]"></div>
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
    </div>
    <div className="relative max-w-5xl mx-auto text-center">
      <FadeUp>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1] mb-8">
          Let's Create<br />
          <span className="italic">Something</span> Amazing
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
          Ready to elevate your brand? Let's start a conversation about your next project.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2">
          Start a Project <span>→</span>
        </button>
      </FadeUp>
    </div>
  </Section>
);

export default Cta;
