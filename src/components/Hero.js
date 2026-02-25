import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const navgate = useNavigate();
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-[#050b10] to-[#0b0f1a] animate-gradient flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-400 text-sm">
            Hi, I'm Hariom Ruhela
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <Typewriter
                words={["Modern", "Scalable", "Powerful"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
            <br />
            High-Performing{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Full-stack developer crafting exceptional eCommerce platforms,
            AI-powered tools, and custom web applications that drive results.
          </p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => navgate("/contact")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition"
            >
              Let's Talk →
            </button>

            <button
              onClick={() => navgate("/portfolio")}
              className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 blur-xl opacity-40 animate-pulse"></div>
            <img
              src="/image.png"
              alt="profile"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-black"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
