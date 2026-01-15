
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-[#070B1E] via-[#0B1030] to-[#070B1E] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo / Name */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-emerald-400">TechQuitoes</span>{" "}
            
          </h1>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["About", "service", "Skills", "Our Expertise", "Projects"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.toUpperCase()}
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Icon (optional for later) */}
          <div className="md:hidden text-white text-xl cursor-pointer">
            ☰
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
