import { Link } from "react-router-dom";
import WhyLearnXSS from "../components/WhyLearnXss";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-bg text-slate-950">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-5xl font-bold font-serif mb-4">
          Learn XSS: Web Security Essentials
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Discover Cross-Site Scripting (XSS) from the basics. Understand web
          vulnerabilities and how to protect against them.
        </p>

        <Link
          to="/learn"
          className="bg-white text-fg font-semibold py-3 px-6 rounded-full ring-2 ring-orange-500 hover:ring-orange-700 hover:bg-fg hover:text-white transition-all duration-300"
        >
          Start Learning Now
        </Link>
      </section>

      {/* Features Section */}
      <WhyLearnXSS />

    </div>
  );
};

export default Home;
