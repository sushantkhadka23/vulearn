import { Link } from "react-router-dom";

import logo from '../assets/logo.png';
import Navbar from "../pract/Navbar";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and website name */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Link to="/">
            <img
            src={logo}
              alt="Logo"
              className="h-12 w-12"
            />
          </Link>
          {/* Website Name */}
          <Link to="/">
            <h1 className="text-2xl font-bold font-serif hover:text-orange-400">
              XSS Learn
            </h1>
          </Link>
        </div>
        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
