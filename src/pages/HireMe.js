import React from "react";
import PricingSection from "../components/PricingSection";
import CoffeeSection from "../components/CoffeeSection";

const HireMe = () => {
  return (
    <section className="relative  pt-20 bg-black overflow-hidden">
      <div className="relative  max-w-7xl mx-auto px-6 py-4">
        <span className=" border-emerald-400 text-emerald-400 bg-transparent border-2 py-2 px-2 rounded-full my-5 ">
          Hire Me
        </span>
        <h1 className="text-white font-bold text-5xl mt-6">
          Let's Work Together
        </h1>
        <p className="text-white font-semibold text-lg py-3">
          Available for freelance projects on an hourly or fixed-rate basis.
          Flexible engagement models to suit your needs.
        </p>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Contact Now
        </button>
      </div>
      <PricingSection />
      <CoffeeSection />
    </section>
  );
};

export default HireMe;
