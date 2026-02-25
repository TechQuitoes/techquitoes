import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
        {title}
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute top-5 left-0 w-44 bg-transprent border border-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500 hover:text-black transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

