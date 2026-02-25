import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, desc, points, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/40 to-purple-500/40 hover:scale-[1.02] transition"
    >
      <div className="h-full rounded-2xl bg-[#070b11] p-6 flex flex-col">
        <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-[#2bd4bd]/10">
          {icon}
        </div>

        <h3 className="text-white text-lg font-semibold">{title}</h3>

        <p className="mt-3 text-sm text-gray-400 flex-1">{desc}</p>

        <ul className="mt-4 space-y-2">
          {points.map((p, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {p}
            </li>
          ))}
        </ul>

        <span className="mt-5 text-[#2bd4bd] text-sm hover:underline cursor-pointer">
          Learn More ↗
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
