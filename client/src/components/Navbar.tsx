import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import NAVITEMS from "../types/navbarItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 font-semibold ${
      isActive
        ? "text-txt font-serif font-semibold"
        : "text-txt/60 hover:text-txt font-serif"
    }`;

  return (
    <nav className="relative w-full">
      {/* Mobile navigation */}
      <div className="md:hidden flex items-center w-full">
        <div className="flex-grow"></div>

        <button onClick={toggleMenu} className="text-2xl p-2 z-50 text-txt">
          {isOpen ? <X /> : <AlignRight />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-bg z-40 flex items-center justify-center font-lato">
          <div className="flex flex-col items-center space-y-8">
            {NAVITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navLinkClass}
                aria-label={item.name}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between items-center w-full p-4 font-lato">
        <div className="flex justify-center flex-grow space-x-6">
          {NAVITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={navLinkClass}
              aria-label={item.name}
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}
