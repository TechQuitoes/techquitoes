import React from 'react'

const ExperticeCard = ({ title, icon: Icon }) => {
  return (
    <div
      className="group bg-gradient-to-br from-[#0b1030] to-[#050816]
      w-64 min-h-[18rem] p-6 rounded-2xl border border-white/10
      flex flex-col gap-12 transition-all duration-300
      hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]
      
      "
    >
      {/* Icon */}
      <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-xl
        bg-emerald-400/10 text-emerald-400 text-7xl ">
        <Icon />
      </div>

      {/* Title */}
      <h1 className="text-white font-semibold text-lg ml-10 ">
        {title}
      </h1>

    

      {/* Hover line */}
      <span className="mt-auto h-[2px] w-0 bg-emerald-400
        group-hover:w-full transition-all duration-300" />
    </div>
  );
};

export default ExperticeCard