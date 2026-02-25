

const NavLink = ({ label, href }) => (
  <a
    href={href}
    className="relative text-gray-300 hover:text-white transition
      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
      after:w-0 after:bg-emerald-400 after:transition-all
      hover:after:w-full"
  >
    {label}
  </a>
);

export default NavLink;
