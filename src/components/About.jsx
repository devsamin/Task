import { Section, SectionLabel, FadeUp } from "./ui";

const ABOUT_ITEMS = [
  { label: "Mission", value: "Empower brands through design" },
  { label: "Vision", value: "Shape the future of digital" },
  { label: "Values", value: "Creativity, Quality, Impact" },
  { label: "Team", value: "40+ talented professionals" },
];

const About = () => (
  <Section id="about" className="bg-white text-black py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <FadeUp>
            <SectionLabel>About Studio</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
              Design_<br />2025
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#e85d26] flex items-center justify-center text-white text-2xl">
                +
              </div>
              <p className="text-gray-600 text-sm max-w-xs">
                More about us and our journey
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-7">
          <FadeUp delay={0.2}>
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
              Volano is more than just an agency — we are a team of innovators,
              designers, and strategists committed to helping businesses grow in
              the digital era.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              With a passion for creativity and a focus on results, we deliver
              tailored solutions that align with your goals and connect with your
              audience.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="mt-12 grid grid-cols-2 gap-6">
              {ABOUT_ITEMS.map((item, i) => (
                <div key={i} className="border-l-2 border-[#e85d26] pl-4">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    {item.label}
                  </div>
                  <div className="text-gray-900 font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
