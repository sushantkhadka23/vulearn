import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IDORPage = () => {
 
  const navigate = useNavigate();

  return (
   
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding IDOR (Insecure Direct Object Reference) Vulnerabilities
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              IDOR vulnerabilities occur when an application allows users to access sensitive objects (e.g., database records) by referencing them directly without proper authorization checks.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How IDOR Works
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              IDOR vulnerabilities arise when applications rely solely on user-provided input (e.g., IDs) to access resources, without validating whether the user is authorized to access them. For example:
            </p>
            <ul className="list-disc pl-6">
              <li>
                A user accesses their profile at <code>/api/v1/user/123</code>.
              </li>
              <li>
                By changing the ID to <code>/api/v1/user/124</code>, they can access another user's profile.
              </li>
            </ul>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Real-World Implications
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Exploiting an IDOR vulnerability can lead to severe consequences:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Data Theft:</strong> Attackers can access sensitive data like personal information or financial records.
              </li>
              <li>
                <strong>Unauthorized Actions:</strong> Attackers can modify or delete resources belonging to other users.
              </li>
            </ul>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Preventing IDOR Vulnerabilities
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              To mitigate IDOR vulnerabilities, developers should:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Implement Authorization Checks:</strong> Ensure users can only access resources they are authorized to view or modify.
              </li>
              <li>
                <strong>Use Indirect References:</strong> Replace direct IDs with secure references (e.g., UUIDs or tokens) that are mapped server-side.
              </li>
              <li>
                <strong>Regular Security Audits:</strong> Conduct security reviews to identify and fix potential vulnerabilities.
              </li>
            </ul>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Testing for IDOR Vulnerabilities
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Penetration testing tools like <code>Burp Suite</code> or <code>OWASP ZAP</code> can help detect IDOR vulnerabilities by monitoring how user input is used in requests and responses.
            </p>
          </div>
        </div>

        {/* Lab Section */}
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                Practice in Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Test your understanding of IDOR vulnerabilities with our interactive lab. Learn to identify and exploit insecure object references while exploring proper mitigation strategies.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/broken-access-control/idor/lab")}
              className="inline-flex items-center font-mono px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md whitespace-nowrap"
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

export default IDORPage;
