import { BookOpen, Code, Shield } from "lucide-react";
import { WhyLearnXssProps } from "../types/whyLearnXss";

const features: WhyLearnXssProps[] = [
  {
    icon: <BookOpen className="mx-auto mb-4 text-orange-500" size={48} />,
    title: "Beginner Friendly",
    description:
      "Start from the basics and gradually build your understanding of web security and XSS.",
  },
  {
    icon: <Code className="mx-auto mb-4 text-orange-500" size={48} />,
    title: "Practical Examples",
    description:
      "Learn through simple, real-world examples that demonstrate how XSS vulnerabilities work.",
  },
  {
    icon: <Shield className="mx-auto mb-4 text-orange-500" size={48} />,
    title: "Security Best Practices",
    description:
      "Discover how to write secure code and protect websites against common vulnerabilities.",
  },
];

export default function WhyLearnXSS() {
  return (
    <section className="py-16 bg-bg text-slate-950 font-serif">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Why Learn XSS With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl hover:bg-orange-600 hover:text-white border-2 border-transparent transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
