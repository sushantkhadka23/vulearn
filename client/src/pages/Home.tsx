import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WhyLearnWebSecurity from "../components/WhyLearnWebSecurity";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-bg text-slate-950">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-32 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            <span className="block mt-2 font-serif">
             Introduction to Web Security Essentials
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
            Explore the fundamentals of web security. Learn about common
            vulnerabilities like Cross-Site Scripting (XSS), SQL Injection, and
            how to protect your web applications from these threats.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            <Link
              to="/learn"
              className="group relative inline-flex items-center justify-center bg-white text-fg font-semibold py-3 px-8 rounded-full ring-2 ring-orange-500 hover:ring-orange-100 hover:bg-fg hover:text-white transition-all duration-300"
            >
              <span className="relative">Start Learning Now</span>
              <ArrowRight className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-20" />
      </section>
      {/* Features Section */}
      <WhyLearnWebSecurity />
    </div>
  );
};

export default Home;
