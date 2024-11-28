import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SQLInjectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src="/api/placeholder/1200/600"
            alt="SQL Injection Concept"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding SQL Injection
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              SQL Injection is one of the most well-known security vulnerabilities. It occurs when an attacker is able to manipulate SQL queries by injecting malicious code into user input fields. This can lead to unauthorized access to a database, data theft, and even complete control of the server.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How SQL Injection Works
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              SQL Injection attacks typically involve injecting malicious SQL statements into query parameters that the application passes to a SQL database. If input is not properly sanitized, the injected code is executed by the database, allowing attackers to retrieve, modify, or delete sensitive data.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Common Attack Vectors
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              SQL Injection attacks can occur through several vectors, such as:
              <ul className="list-disc pl-6">
                <li>Input fields (login, search, feedback forms)</li>
                <li>URL query parameters</li>
                <li>Cookies and session variables</li>
              </ul>
              These vectors are common areas where user input is not properly sanitized.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Prevention Techniques
            </h2>
            <p className="text-gray-600 font-lato mb-8">
              To prevent SQL Injection:
              <ul className="list-disc pl-6">
                <li>Use parameterized queries (prepared statements)</li>
                <li>Validate and sanitize user input</li>
                <li>Implement proper error handling to avoid exposing database errors</li>
                <li>Use Web Application Firewalls (WAFs) to detect and block malicious traffic</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Lab Section */}
        <div className="bg-orange-50 rounded-2xl shadow-lg p-8 border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                Practice in Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Ready to test your knowledge? Try our interactive lab where you can safely practice identifying and exploiting SQL injection vulnerabilities while learning proper mitigation techniques.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/injection/sql-injection/lab")}
              className="inline-flex items-center font-mono px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Start Lab
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SQLInjectionPage;
