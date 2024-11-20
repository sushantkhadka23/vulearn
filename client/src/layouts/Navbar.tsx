import { useState } from "react";
import { NavLink } from "react-router-dom";
import {  Menu, X } from "lucide-react";
import NAV_ITEMS from "../types/navbarItems";


const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors duration-300 font-semibold ${
    isActive
      ? "text-fg dark:text-bg border-b-2 border-bg dark:border-fg"
      : "text-fg/60 dark:text-bg/60 hover:text-fg hover:border-b-2 hover:border-bg dark:hover:text-bg dark:hover:border-fg"
  }`;



export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold font-mono flex items-center">
          <NavLink to="/" className="hover:text-orange-400 flex items-center">
            <span className="text-orange-400">&lt;</span>VuLearn
            <span className="text-orange-400">&gt;</span>
          </NavLink>
        </div>
        {/* For mobile menu button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-2xl"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* For desktop navigation */}
        <div className="hidden lg:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-gray-300 font-mono font-semibold hover:text-orange-400 flex items-center group transition-all duration-300"
            >
              <item.icon className="mr-2 group-hover:animate-pulse" size={18} />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 p-4 flex flex-col justify-center items-center space-y-4 lg:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-gray-100"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-center text-gray-300 font-mono font-semibold hover:text-orange-400 flex items-center justify-center space-x-2 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="group-hover:animate-pulse" size={24} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
