import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-40 overflow-hidden bg-black text-white">
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Amazing?
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Let's turn your ideas into reality with a custom solution tailored to
          your needs.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="group mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-xl 
        bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium
        hover:scale-105 transition"
        >
          Start a Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
