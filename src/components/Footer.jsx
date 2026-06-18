import { NAV_LINKS } from "../data/constants";

const SERVICE_LINKS = ["UI/UX Design", "Web Development", "Branding", "Marketing", "Strategy"];
const SOCIAL_ICONS = ["f", "tw", "in", "ig"];

const Footer = () => (
  <footer className="bg-black border-t border-white/10 pt-20 pb-8 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <a href="#" className="flex items-center gap-1 mb-6">
            <span className="text-3xl font-serif italic text-white">Volano</span>
            <span className="text-[#e85d26] text-xs">®</span>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Where creativity meets technology. We craft digital experiences that inspire and endure.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((s, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:bg-[#e85d26] hover:border-[#e85d26] hover:text-white transition cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Navigation</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-[#e85d26] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Services</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-[#e85d26] transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Contact</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>hello@volano.studio</li>
            <li>+1 (555) 123-4567</li>
            <li>New York, NY 10001</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm gap-4">
        <p>© 2026 Volano Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
