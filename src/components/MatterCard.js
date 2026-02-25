import React from "react";

const MatterCard = ({ title, desc }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default MatterCard;
