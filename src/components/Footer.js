import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
const socials = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/hariom-ruhela-551032289",
  },
  {
    icon: Github,
    link: "https://github.com/hariomruhela",
  },
];
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white pt-24 pb-12">
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400">
              Hariom Ruhela
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Full-stack developer specializing in modern web applications,
              e-commerce solutions, and AI-powered tools.
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 
        hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {["Home", "About", "Portfolio", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-cyan-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "Web Dev",
                "App Dev",
                "Custom Dev",
                "AI SaaS",
                "E-commerce",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-cyan-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>hariomruhela0@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 8770948303</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Based in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm gap-4">
          <p>© 2026 Hariom. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cyan-400 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-cyan-400 cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
