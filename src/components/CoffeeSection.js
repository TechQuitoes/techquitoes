import React from "react";
import SectionHeader from "./SectionHeader";

const CoffeeSection = () => {
  return (
    <section className="bg-[#0B1220] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeader
          title="Book a"
          highlight="Coffee Session"
          subtitle="Want a quick consultation or mentorship chat? Book a 30-minute session via Buy Me A Coffee."
        />

        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition duration-300">
          Buy Me A Coffee →
        </button>
      </div>
    </section>
  );
};

export default CoffeeSection;
