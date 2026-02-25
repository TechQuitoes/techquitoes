import { motion } from "framer-motion";

const SectionHeader = ({ title, highlight, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="mt-4 text-gray-400">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeader;
