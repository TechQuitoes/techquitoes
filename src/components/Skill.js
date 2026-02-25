import { motion } from "framer-motion";
import { skills } from "../constants/skillData";

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 25,
        ease: "easeInOut",
      },
    },
  },
};

export default function Skills() {
  return (
    <section id="/skills"
     className=" py-24 overflow-hidden   bg-gradient-to-r from-[#070B1E] via-[#0B1030] to-[#070B1E]">
      <div className="flex flex-col ">
      <div className="text-center mb-14">
        <span className="font-bold text-2xl px-6 py-2 rounded-full bg-indigo-500/20 text-purple-500 ">
          Skills
        </span>
      </div>

      <div className="relative ">
        <motion.div
          className="flex gap-8 w-max"
          variants={marqueeVariants}
          animate="animate"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="min-w-[260px] h-[210px] flex flex-col items-center justify-center
                rounded-xl bg-white/5 backdrop-blur border border-white/10
                shadow-lg hover:scale-110 transition"
              >
                <Icon className="text-9xl text-yellow-400 mb-2" />
                <p className="text-lg text-gray-300">{skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
