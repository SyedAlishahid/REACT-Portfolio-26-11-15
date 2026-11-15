import React, { useState } from "react";
import { Target, Menu, X, Home, User, Folder, Mail } from "lucide-react";

const links = [
  { label: "Home", icon: Home },
  { label: "About", icon: User },
  { label: "Projects", icon: Folder },
  { label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full   z-50">
      {/* Desktop bar */}
      <div className="hidden md:flex  justify-between items-center h-20 px-8 text-[#D0D2D6] bg-[#05060A]  backdrop-blur-md border-b border-slate-700/60 shadow-lg">
        {" "}
        <a href="/" className="flex items-center gap-2 text-xl font-bold ">
          <Target className="text-indigo-600" size={28} />
          Code By Ali
        </a>
        <ul className="flex items-center gap-8">
          {links.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="flex items-center gap-1.5 text-sm font-medium  hover:text-indigo-600 transition-colors"
              >
                <Icon size={16} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden flex justify-between items-center h-16 px-4 text-[#D0D2D6] bg-[#05060A]  backdrop-blur-md shadow-sm">
        <a href="/" className="flex items-center gap-2 text-lg font-bold ">
          <Target className="text-indigo-600" size={24} />
          Code By Ali
        </a>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50  transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-64  bg-[#05060A]  text-white shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center h-16 px-4 border-b border-gray-100">
            <span className="text-lg font-bold ">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="flex flex-col gap-1 p-4">
            {links.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl  font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                >
                  <Icon size={20} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
