import { useNavigate } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';

const NoSQLInjectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding NoSQL Injection
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              NoSQL Injection is a critical security vulnerability that occurs when malicious users manipulate NoSQL database queries through unsanitized input. This attack can lead to unauthorized data access, authentication bypasses, and potential data breaches.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How NoSQL Injection Works
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Unlike traditional SQL injection, NoSQL injection exploits the way NoSQL databases handle queries. Attackers can send specially crafted payloads that alter the logical structure of database queries, potentially bypassing authentication mechanisms or accessing unauthorized data.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Common Attack Vectors
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Attackers often exploit NoSQL injection through various means, including:
              Query parameter manipulation, operator injection ($ne, $gt, etc.), and array injection attacks. Understanding these vectors is crucial for protecting your applications.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Prevention Techniques
            </h2>
            <p className="text-gray-600 font-lato mb-8">
              To prevent NoSQL injection attacks, implement proper input validation, use parameterized queries, and follow the principle of least privilege. Regular security audits and up-to-date security practices are essential for maintaining robust protection.
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
                Ready to test your knowledge? Try our interactive lab where you can safely practice identifying and exploiting NoSQL injection vulnerabilities while learning proper mitigation techniques.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/injection/nosql-injection/lab")}
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

export default NoSQLInjectionPage;






