import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "5+", label: "Years" },
  { value: "30+", label: "Clients" },
];

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-28 bg-gradient-to-br from-black via-[#050b10] to-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 blur-xl opacity-30"></div>

            <img
              src="https://khushaldobariyaportfolio.vercel.app/assets/image/portfolio_about.png"
              alt="about"
              className="relative w-[420px] rounded-2xl object-cover border border-neutral-800"
            />

            <span className="absolute bottom-4 left-3 px-4 py-1 rounded-full bg-black/60 text-cyan-400 text-sm border border-cyan-400/30">
              5+ Years
            </span>
            <span className="absolute top-4 right-2 px-4 py-1 rounded-full bg-black/60 text-cyan-400 text-sm border border-cyan-400/30">
              Full stack
            </span>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-400 text-sm">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experiences
            </span>{" "}
            That Matter
          </h2>

          <p className="mt-6 text-gray-400">
            I'm Hariom Ruhela, a passionate full-stack developer with over 5
            years of experience building web and mobile applications. I
            specialize in creating scalable, user-centric solutions that help
            businesses grow.
          </p>

          <p className="mt-4 text-gray-400">
            My expertise spans modern technologies including React, Next.js,
            Node.js and cloud platforms. I've worked with startups and
            enterprises delivering everything from e-commerce platforms to
            AI-powered SaaS.
          </p>

          <p className="mt-4 text-gray-400">
            I believe in writing clean, maintainable code and building products
            that not only look great but perform exceptionally well.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur border border-neutral-800 rounded-xl p-4 text-center"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/about")}
            className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition"
          >
            Learn More About Me →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
