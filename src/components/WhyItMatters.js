import React from "react";

import MatterCard from "./MatterCard";
import { MatterData } from "../constants/techStackData";

const WhyItMatters = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why It Matters
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {MatterData.map((item, index) => (
            <MatterCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
