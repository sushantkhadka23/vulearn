import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import NAVITEMS from "../types/navbarItems";
import { Link } from "react-router-dom";
import { LogInIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 font-semibold ${
      isActive
        ? "text-fg font-serif font-semibold"
        : "text-fg/60 hover:text-fg font-serif"
    }`;

  return (
    <nav className="relative w-full">
      {/* Mobile navigation */}
      <div className="md:hidden flex items-center w-full">
        <div className="flex-grow"></div>
        {/* Login /> */}
        <Link
          to="/login"
          className="mr-4"
          >
          <LogInIcon size={25} />
        </Link>
        <button onClick={toggleMenu} className="text-2xl p-2 z-50">
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
              <span className="">{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <Link
            to="/login"
            className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-full ring-2 ring-white hover:bg-white hover:text-orange-600 transition-all duration-300 font-mono"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
