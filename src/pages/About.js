import React from "react";
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#050816] overflow-hidden">
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-teal-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-0 py-16 text-center  md:text-left">
        {/* About Badge */}
        <span className="inline-block px-5 py-2 text-sm text-teal-400 border border-teal-400/30 rounded-full bg-teal-400/10 backdrop-blur-sm">
          About Me
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Crafting Digital Excellence
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-gray-400 leading-relaxed">
          I help businesses transform their ideas into powerful digital
          solutions that drive growth and innovation.
        </p>

        {/* Button */}
        <button
          className="mt-8 px-6 py-3 rounded-xl font-medium text-white 
          bg-gradient-to-r from-teal-400 to-purple-500 
          hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
        >
          Contact Now
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* About Section Content */}
      <div className="relative w-full px-6 md:px-10 pb-16">
        <AboutSection />
      </div>
    </section>
  );
};

export default About;
