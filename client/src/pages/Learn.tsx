import { Link} from "react-router-dom";
import { ShieldAlert, FlaskConical, BookOpen } from "lucide-react";
import { LearningPath } from "../types/learnType";

const learningPaths: LearningPath[] = [
  {
    title: "Documentation & Guides",
    icon: (
      <BookOpen
        size={32}
        className="text-blue-500 group-hover:text-white transition-all duration-300"
      />
    ),
    description:
      "Comprehensive guides and documentation covering all aspects of XSS vulnerabilities.",
    features: ["Detailed explanations", "Best practices", "Security standards"],
    color: "from-blue-500 to-blue-600",
    buttonText: "Read Guides",
    navigate: "/learn/guides",
  },
  {
    title: "Labs & Workshops",
    icon: (
      <FlaskConical
        size={32}
        className="text-green-500 group-hover:text-white transition-all duration-300"
      />
    ),
    description:
      "Practical workshops with guided exercises to understand XSS attack vectors.",
    features: ["Virtual labs", "Real-world examples", "Hands-on exercises"],
    color: "from-green-500 to-green-600",
    buttonText: "Enter Lab",
    navigate: "/learn/labs",
  },
  {
    title: "Security Tools",
    icon: (
      <ShieldAlert
        size={32}
        className="text-red-500 group-hover:text-white transition-all duration-300"
      />
    ),
    description:
      "Learn to use essential security tools for identifying and preventing XSS vulnerabilities.",
    features: ["Scanner tutorials", "Prevention techniques", "Security audits"],
    color: "from-red-500 to-red-600",
    buttonText: "Explore Tools",
    navigate: "/learn/tools",
  },
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-bg text-txt py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif md:text-5xl lg:text-6xl font-bold text-txt mb-6">
            Master XSS Security
          </h1>
          <p className="text-xl text-txt/80 font-lato max-w-3xl mx-auto">
            Choose your learning path and discover how to identify, exploit, and
            protect against Cross-Site Scripting vulnerabilities.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <div
              key={index}
              className="group relative bg-bg rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-bg-bg"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${path.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">{path.icon}</div>
                <h3 className="text-xl font-bold text-txt font-serif mb-3 group-hover:text-white transition-colors duration-300">
                  {path.title}
                </h3>
                <p className="text-txt/90 font-lato mb-4 group-hover:text-white transition-colors duration-300">
                  {path.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {path.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-txt/90 font-mono group-hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2 group-hover:bg-white"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Use Link for Navigation */}
                <Link
                  to={path.navigate || '/'}
                  className="w-full inline-block text-center py-2 px-4 bg-slate-700 text-white font-semibold font-mono rounded-lg hover:bg-slate-600 transition-colors duration-300 group-hover:bg-white group-hover:text-slate-900"
                >
                  {path.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
