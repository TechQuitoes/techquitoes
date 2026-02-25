import ServiceCard from "./ServiceCard";
import SectionHeader from "./SectionHeader";
import { servicesData } from "../constants/servicesData";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navgate = useNavigate();
  return (
    <section
      id="/service"
      className="w-full py-28 bg-gradient-to-br from-black via-[#050b10] to-[#0b0f1a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="What I"
          highlight="Build"
          subtitle="From scalable web applications to AI-powered solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((item, i) => (
            <ServiceCard key={i} {...item} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => navgate("/service")}
            className="px-6 py-3 rounded-full border border-cyan-400 text-white hover:bg-cyan-400 hover:text-black transition"
          >
            View All Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
