import React from "react";

const PricingCard = ({
  category,
  title,
  description,
  price,
  features = [],
  buttonText = "Hire Now",
}) => {
  return (
    <div className="bg-[#0E1627] border border-cyan-500/30 rounded-2xl p-6 hover:border-purple-500 transition duration-300">
      <p className="text-cyan-400 text-sm mb-2">{category}</p>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <h4 className="text-3xl font-bold text-cyan-400 mb-6">
        {price}
        <span className="text-base text-gray-400 font-medium">/hr</span>
      </h4>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="text-cyan-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full py-2 rounded-xl border border-gray-600 hover:border-cyan-400 transition duration-300 flex items-center justify-center gap-2">
        {buttonText} →
      </button>
    </div>
  );
};

export default PricingCard;
