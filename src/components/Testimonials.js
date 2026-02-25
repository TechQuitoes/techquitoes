import { testimonials } from "../constants/testimonials";

const Stars = () => (
  <div className="flex gap-1 text-yellow-400">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i}>★</span>
      ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-black via-[#05030a] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            What Clients <span className="text-cyan-400">Say</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Real feedback from businesses I've helped grow
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 
              hover:border-cyan-400/60 transition group"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
              </div>

              <Stars />

              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-semibold">
                  {item.avatar}
                </div>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
