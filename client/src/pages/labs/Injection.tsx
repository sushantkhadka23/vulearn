import { useNavigate } from "react-router-dom";

export type InjectionTopic = {
  title: string;
  description: string;
  shortSnippet: string;
  color: string; 
  link: string;
};

export default function Injection() {
  const navigate = useNavigate();

  const topics: InjectionTopic[] = [
    {
      title: "SQL Injection",
      description:
        "Learn how SQL queries can be manipulated to exploit vulnerabilities and bypass authentication.",
      shortSnippet: "Understand how attackers manipulate SQL queries.",
      color: "bg-red-100 hover:border-red-500 hover:bg-red-200",
      link: "/learn/labs/injection/sql-injection",
    },
    {
      title: "NoSQL Injection",
      description:
        "Understand how NoSQL databases can be exploited to gain unauthorized access or retrieve sensitive data.",
      shortSnippet: "Learn how NoSQL queries can be exploited.",
      color: "bg-blue-100 hover:border-blue-500 hover:bg-blue-200",
      link: "/learn/labs/injection/nosql-injection",
    },
    {
      title: "Command Injection",
      description:
        "Explore how attackers inject malicious OS commands into insecure applications.",
      shortSnippet: "Explore how OS commands can be maliciously injected.",
      color: "bg-yellow-100 hover:border-yellow-500 hover:bg-yellow-200",
      link: "/learn/labs/injection/command-injection",
    },
    {
      title: "Cross-Site Scripting (XSS)",
      description:
        "Learn how malicious scripts are injected into web pages to steal data or manipulate user interactions.",
      shortSnippet: "Understand how scripts can be injected into webpages.",
      color: "bg-green-100 hover:border-green-500 hover:bg-green-200",
      link: "/learn/labs/injection/xss-injection",
    },
  ];

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            Injection Vulnerabilities
          </h1>
          <p className="text-lg font-lato text-gray-600">
            Learn about various injection vulnerabilities and navigate to
            dedicated pages for detailed examples and labs.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl shadow-lg p-6 transition-all duration-300 ${topic.color}`}
            >
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-700 font-lato mb-4">{topic.description}</p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-800">
                <strong>Quick Overview:</strong> {topic.shortSnippet}
              </div>
              <button
                onClick={() => navigate(topic.link)}
                className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Explore {topic.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
