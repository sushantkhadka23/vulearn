import { BookOpen, Code, Shield } from "lucide-react";
import { Features } from "../types/whyLearnXss";

const features: Features[] = [
  {
    icon: <BookOpen className="text-orange-500 transition-all duration-300 group-hover:text-white" size={48} />,
    title: "Beginner Friendly",
    description: "Start from the basics and gradually build your understanding of web security, including common vulnerabilities.",
  },
  {
    icon: <Code className="text-orange-500 transition-all duration-300 group-hover:text-white" size={48} />,
    title: "Practical Examples",
    description: "Learn through real-world examples that demonstrate how web security vulnerabilities are exploited and how to prevent them.",
  },
  {
    icon: <Shield className="text-orange-500 transition-all duration-300 group-hover:text-white" size={48} />,
    title: "Security Best Practices",
    description: "Discover how to write secure code and apply best practices to protect websites from a wide range of security threats.",
  },
];

export default function WhyLearnWebSecurity() {
  return (
    <section className="py-16 lg:py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">
            Why Learn Web Security With Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-fg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold font-serif text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-mono group-hover:text-slate-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
