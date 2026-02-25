import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projectData";

const Protfolio = () => {
  return (
    <section className="relative py-6 bg-[#050816] overflow-hidden">
      <div className="relative  max-w-7xl mx-auto px-6 ">
        <span className=" border-emerald-400 text-emerald-400 bg-transparent border-2 py-2 px-2 rounded-full my-5 ">
          Protfolio
        </span>
        <h1 className="text-white font-bold text-5xl mt-6">My Recent Work</h1>
        <p className="text-white font-semibold text-lg py-3">
          A quick look at my recent projects across eCommerce, AI tools, and web
          applications.
        </p>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Start Your Project
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-9 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Protfolio;
