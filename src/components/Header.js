import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Dropdown from "../comman /Dropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          Hariom
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-gray-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>

          <Link to="/service">
            {" "}
            <Dropdown
              title="Services"
              items={[
                { label: "Web Development", path: "/service" },
                { label: "App Development", path: "/service" },
                { label: "UI/UX Design", path: "/service" },
              ]}
            />
          </Link>

          <Link to="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          <Link to="/technology">
            <Dropdown
              title="Technology"
              items={[
                { label: "React", path: "/technology" },
                { label: "Node", path: "/technology" },
                { label: "MongoDB", path: "/technology" },
              ]}
            />
          </Link>

          <Link to="/hire" className="hover:text-white transition">
            Hire Me
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/Hariom1.1.pdf"
            download
            className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>

          <button className="px-4 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition">
            Buy Me A Coffee
          </button>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-6 space-y-4 text-gray-300">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            About
          </Link>
          <Link
            to="/service"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            service
          </Link>

          <Link
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            to="/technology"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Technology
          </Link>

          <Link
            to="/hire"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Hire Me
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <a
              href="/Hariom1.1.pdf"
              download
              className="block text-center px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Resume
            </a>

            <button className="block text-center px-4 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition">
              Buy Me A Coffee
            </button>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
