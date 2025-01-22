import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const XSSInjectionPage = () => {
  const navigate = useNavigate();

  // Simulated user input - vulnerable example
  const userInput = `<img src="x" onerror="alert('XSS Attack!');">
` ;

  // Manually sanitized version of the input
  const sanitizedInput = `&lt;img src=&quot;x&quot;&gt;`;

  return (
    <div className="min-h-screen bg-bg">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Understanding Cross-Site Scripting (XSS) Vulnerabilities
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
            Vulnerability Example: Reflected XSS
          </h2>
          <p className="text-gray-600 font-lato mb-6">
            Below is an example of how a malicious script can be directly injected and executed in a vulnerable application.
          </p>

          {/* Vulnerable Input */}
          <div className="bg-red-100 p-4 rounded-lg shadow mb-6">
            <p className="text-lg font-mono text-red-700">
              {userInput}
            </p>
            <p className="text-sm text-gray-600 italic">
              This input can execute malicious scripts if not sanitized.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
            Secure Example: Sanitized Output
          </h2>
          <p className="text-gray-600 font-lato mb-6">
            Here's how the input is sanitized to prevent the execution of malicious scripts:
          </p>

          {/* Sanitized Input */}
          <div className="bg-green-100 p-4 rounded-lg shadow mb-6">
            <p
              className="text-lg font-mono text-green-700"
              dangerouslySetInnerHTML={{ __html: sanitizedInput }}
            ></p>
            <p className="text-sm text-gray-600 italic">
              The input has been sanitized and is now safe to render.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
            Key Prevention Techniques
          </h2>
          <p className="text-gray-600 font-lato mb-6">
            To prevent XSS vulnerabilities in your applications, follow these best practices:
            <ul className="list-disc pl-6">
              <li>
                <strong>Escape Output:</strong> Convert special characters to their HTML-encoded equivalents (e.g., <code>&lt;</code> for <code>&lt;</code>, <code>&gt;</code> for <code>&gt;</code>, etc.).
              </li>
              <li>
                <strong>Validate Input:</strong> Only allow expected and safe input values from users.
              </li>
              <li>
                <strong>Implement CSP:</strong> Use a Content Security Policy (CSP) to control which resources can be loaded and executed.
              </li>
            </ul>
          </p>
        </div>

        {/* Lab Section */}
        <div className="bg-orange-50 rounded-2xl shadow-lg p-8 border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                Practice in Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Ready to test your knowledge? Try our interactive lab where you can safely practice identifying and mitigating XSS vulnerabilities.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/injection/xss-injection/lab")}
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

export default XSSInjectionPage;
