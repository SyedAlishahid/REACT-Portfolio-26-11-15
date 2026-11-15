import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Menu, X, Home, User, Folder, Mail } from "lucide-react";
import { stagger, fromRight } from "../lib/motion";

const links = [
  { label: "Home", icon: Home },
  { label: "About", icon: User },
  { label: "Projects", icon: Folder },
  { label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop bar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex justify-between items-center h-20 px-8 text-[#D0D2D6] bg-[#05060A] backdrop-blur-md border-b border-slate-700/60 shadow-lg"
      >
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <motion.span
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <Target className="text-indigo-600" size={28} />
          </motion.span>
          Code By Ali
        </a>

        <motion.ul
          variants={stagger(0.08, 0.3)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-8"
        >
          {links.map(({ label, icon: Icon }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: -15 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -2 }}
            >
              <a
                href={`#${label.toLowerCase()}`}
                className="flex items-center gap-1.5 text-sm font-medium hover:text-indigo-600 transition-colors"
              >
                <Icon size={16} />
                {label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Mobile top bar */}
      <motion.div
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden flex justify-between items-center h-16 px-4 text-[#D0D2D6] bg-[#05060A] backdrop-blur-md shadow-sm"
      >
        <a href="/" className="flex items-center gap-2 text-lg font-bold">
          <Target className="text-indigo-600" size={24} />
          Code By Ali
        </a>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu size={24} />
        </motion.button>
      </motion.div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-64 bg-[#05060A] text-white shadow-xl"
            >
              <div className="flex justify-between items-center h-16 px-4 border-b border-gray-100">
                <span className="text-lg font-bold">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <motion.ul
                variants={stagger(0.07, 0.15)}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-1 p-4"
              >
                {links.map(({ label, icon: Icon }) => (
                  <motion.li key={label} variants={fromRight}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      <Icon size={20} />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
