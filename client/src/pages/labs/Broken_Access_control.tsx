import { InjectionTopic } from "./Injection";
import { useNavigate } from "react-router-dom";

const topics: InjectionTopic[] = [
  {
    title: "IDOR",
    description:
      "Learn how Insecure Direct Object References (IDOR) vulnerabilities can be exploited to access unauthorized resources.",
    shortSnippet: "Understand how attackers exploit IDOR vulnerabilities.",
    color: "bg-purple-100 hover:border-purple-500 hover:bg-purple-200",
    link: "/learn/labs/broken-access-control/idor",
  },
];

export default function BrokenAccessControl() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            IDOR Vulnerabilities
          </h1>
          <p className="text-lg font-lato text-gray-600">
            Dive deep into Insecure Direct Object References (IDOR), explore how
            attackers exploit these vulnerabilities, and learn how to mitigate
            them effectively.
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
