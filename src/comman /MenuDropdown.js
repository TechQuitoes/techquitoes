import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const MenuDropdown = ({ label, items, trigger = "click" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close click dropdown on outside click
  useEffect(() => {
    if (trigger !== "click") return;

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [trigger]);

  /* ===== HOVER FIX ===== */
  const hoverProps =
    trigger === "hover"
      ? {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => setOpen(false),
        }
      : {};

  return (
    <div ref={ref} className="relative" {...hoverProps}>
      {/* Trigger */}
      <button
        onClick={trigger === "click" ? () => setOpen(!open) : undefined}
        className="flex items-center gap-1 text-gray-300 hover:text-white transition"
      >
        {label}
        <FaChevronDown
          className={`text-xs transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <Dropdown>
          {items.map((item, i) => (
            <DropdownItem key={i} {...item} />
          ))}
        </Dropdown>
      )}
    </div>
  );
};

export default MenuDropdown;
