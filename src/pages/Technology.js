import React from "react";
import TechStack from "../components/TechStack";
import WhyItMatters from "../components/WhyItMatters";

const Technology = () => {
  return (
    <section className="relative pt-20 bg-black overflow-hidden">
      <div className="relative  max-w-7xl mx-auto px-6 ">
        <span className=" border-emerald-400 text-emerald-400 bg-transparent border-2 py-2 px-2 rounded-full my-5 ">
          Technology Stack
        </span>
        <h1 className="text-white font-bold text-5xl mt-6">
          Tools & Technologies
        </h1>
        <p className="text-white font-semibold text-lg py-3">
          I work across the full stack, leveraging modern technologies to build
          robust, scalable solutions.
        </p>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Discuss Your Tech Needs
        </button>
      </div>
      <TechStack />
      <WhyItMatters />
    </section>
  );
};

export default Technology;
