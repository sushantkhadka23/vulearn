import { NavLink } from "react-router-dom"; 
import Navbar from "../../components/Navbar";

const website_name = `<VuLearn>`;

export default function Header() {
  return (
    <header className="bg-bg text-fg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website name (clickable link to home) */}
        <NavLink 
          to="/" 
          className="text-xl font-semibold hover:text-fg/70 transition-colors duration-300 whitespace-nowrap"
        >
          <span className="font-mono">{website_name}</span>
        </NavLink>
        {/* Navbar component (handles mobile and desktop navigation) */}
        <Navbar />
      </div>
    </header>
  );
}


