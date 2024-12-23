import { NavLink } from "react-router-dom";
import NAVITEMS from "../../types/navbarItems";

const website_name = `<VuLearn/>`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 font-semibold ${
      isActive
        ? "text-txt font-serif font-semibold"
        : "text-txt/60 hover:text-txt font-serif"
    }`;

  return (
    <footer className="bg-bg dark:bg-fg text-txt dark:text-bg py-8 font-lato shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Title and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="text-xl font-mono font-semibold text-fg hover:text-fg/70">
          <span>{website_name}</span>
          </div>    

         
            <p className="text-lg mt-2">
              <strong className="text-2xl font-bold font-playwrite">&copy;</strong> {currentYear} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4 font-bold mb-4 md:mb-0">
            {NAVITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-2 py-1 m-1 border border-transparent hover:border-bg dark:hover:border-fg rounded ${navLinkClass({ isActive })}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
