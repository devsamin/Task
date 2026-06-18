import { MARQUEE_ITEMS } from "../data/constants";

const Marquee = () => (
  <div className="border-y border-white/10 py-6 overflow-hidden bg-black">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span
          key={i}
          className="mx-8 text-2xl md:text-4xl font-serif text-white/30 flex items-center gap-8"
        >
          {item}
          <span className="text-[#e85d26]">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
