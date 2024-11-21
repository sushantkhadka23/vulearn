import { Link } from "react-router-dom";
import WhyLearnXSS from "../components/WhyLearnXss";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-bg text-fg">
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
          to="/signup"
          className="bg-orange-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition"
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
