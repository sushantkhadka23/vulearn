import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NAV_ITEMS: string[] = ["home", "about", "contact" , "signup"];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <nav className="bg-slate-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Webisite Name */}
       <Link to={'/'}>
       <h1 className="text-xl font-bold font-serif">VuLearn</h1>
       </Link>

        {/* For mobile */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-2xl"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* For desktop */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item.toLowerCase()}`}
              className="text-orange-200 font-serif hover:text-orange-400 font-bold"
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-slate-600 p-4 flex flex-col space-y-4 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="self-end text-gray-300 hover:text-gray-100"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item}
                to={item === "home" ? "/" : `/${item.toLowerCase()}`}
                className="block text-center text-orange-200 font-semibold hover:text-orange-400 font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.toUpperCase()}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
