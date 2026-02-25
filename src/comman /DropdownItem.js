const DropdownItem = ({ name, icon: Icon, link }) => (
  <a
    href={link}
    className="flex items-center gap-3 px-3 py-2 rounded-lg
      text-gray-300 hover:text-white hover:bg-white/10 transition"
  >
    <Icon className="text-emerald-400" />
    <span className="text-sm">{name}</span>
  </a>
);

export default DropdownItem;
