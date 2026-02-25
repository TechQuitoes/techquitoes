import { useNavigate } from "react-router-dom";
import { projects } from "../constants/projectData";
import { ExternalLink } from "lucide-react";
const RecentWork = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-br from-black via-[#0b0614] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-14">
          <div>
            <h2 className="text-4xl font-bold">
              Recent <span className="text-cyan-400">Work</span>
            </h2>
            <p className="text-gray-400 mt-2">
              A quick look at my recent projects
            </p>
          </div>

          <button
            onClick={() => navigate("/portfolio")}
            className="px-2 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            View All Projects
            <ExternalLink className="h-4 w-4 text-[#2bd49d]" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/60 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300">
                  {item.category}
                </span>

                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>

                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="mt-6 w-full py-2 rounded-lg border border-white/20 
                 flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-black transition"
                >
                  Visit Site
                  <ExternalLink className="h-4 w-4 text-[#2bd49d] group-hover:text-black transition" />
                </button>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
