import React, { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { servicesData } from "../constants/servicesData";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = 3;

  const nextSlide = () => {
    if (startIndex < servicesData.length - cardsPerView) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">
      <div className="relative  max-w-7xl mx-auto px-6 ">
        <span className=" border-emerald-400 text-emerald-400 bg-transparent border-2 py-2 px-2 rounded-full my-5 ">
          Service
        </span>
        <h1 className="text-white font-bold text-5xl mt-6">
          Solutions That Drive Results
        </h1>
        <p className="text-white font-semibold text-lg py-3">
          From web development to AI-powered applications, I deliver end-to-end
          solutions tailored to your business needs.
        </p>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Discuss Your Project
        </button>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mt-20 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">
            <span className="text-white">All </span>
            <span className="text-teal-400">Services</span>
          </h3>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-teal-400 transition"
            >
              <IoIosArrowBack />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-teal-400 transition"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {servicesData
            .slice(startIndex, startIndex + cardsPerView)
            .map((item, i) => (
              <ServiceCard key={i} {...item} index={i} />
            ))}
        </div>
      </div>
      {/* Overview Services */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mt-20 flex flex-col items-center justify-between">
          <h1 className="text-3xl font-semibold ">
            <span className="text-white">Complete </span>
            <span className="text-teal-400">Services Overview</span>
          </h1>
          <p className="text-sm text-white p-2">
            Browse all services in detail
          </p>
        </div>
        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {servicesData.map((item, i) => (
            <ServiceCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
