import { Link } from 'react-router-dom';
import { Mail, Code } from 'lucide-react';

const FOOTER_ITEMS = [
  { name: "Learn", icon: Code, path: '/learn' },
  { name: "Contact", icon: Mail, path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 font-mono shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-white flex items-center mb-2">
              <span className="text-orange-400">&lt;</span>VuLearn<span className="text-orange-400">&gt;</span>
            </Link>
            <p className="text-sm">
              Mastering web security, one vulnerability at a time.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {FOOTER_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-orange-400 font-semibold transition-colors duration-300 flex items-center"
              >
                <item.icon size={16} className="mr-2" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} VuLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
