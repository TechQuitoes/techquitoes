import React from 'react'

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let’s <span className="text-purple-500">Connect.</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We generate creative & innovative ideas for your business.
            We thrive on collaboration, creativity, and a shared vision of
            driving growth through technology and innovation. Our leaders
            are masters of managing remote teams, fostering an environment
            where every voice is heard, regardless of location.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              "Website Development",
              "E-commerce Development",
              "Design Studio",
              "Data Analytics and Dashboards",
              "ChatGPT and AI Development",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-white cursor-pointer transition"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["About Us", "Portfolio", "Contact Us"].map((link, i) => (
              <li
                key={i}
                className="hover:text-white cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Connect@techQ
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Let's build your future-ready solution.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg mb-6">
            <FaFacebookF className="hover:text-purple-500 cursor-pointer" />
            <FaInstagram className="hover:text-purple-500 cursor-pointer" />
            <FaTiktok className="hover:text-purple-500 cursor-pointer" />
            <FaXTwitter className="hover:text-purple-500 cursor-pointer" />
          </div>

          <hr className="border-white/10 mb-4" />

          <h4 className="font-semibold mb-2">How can we help?</h4>
          <p className="text-sm text-gray-400">
            hello@techquitoes.com
          </p>
          <p className="text-sm text-gray-400">
            +91-7889822746
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        Copyright © 2025 Techquitoes Solutions | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
