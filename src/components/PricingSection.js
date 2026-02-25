import React from "react";
import PricingCard from "./PricingCard";
import { pricingData } from "../constants/PriceingData";

const PricingSection = () => {
  return (
    <div className="bg-[#070B14] text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
