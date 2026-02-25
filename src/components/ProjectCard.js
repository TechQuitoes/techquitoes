import React from "react";

const ProjectCard = ({ title, category, desc, image, tech }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        <p className="text-sm text-purple-400 mb-1">{category}</p>

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-gray-300 text-sm mb-4">{desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
