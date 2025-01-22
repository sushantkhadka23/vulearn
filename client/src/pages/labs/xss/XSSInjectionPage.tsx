import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DOMPurify from 'dompurify'; 

const XSSInjectionPage = () => {
  const navigate = useNavigate();

  // Simulate user input
  const userInput = "<script>alert('XSS Attack!')</script>";

  // Securely sanitize the user input
  const sanitizedInput = DOMPurify.sanitize(userInput);

  return (
    <div className="min-h-screen bg-bg">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding Cross-Site Scripting (XSS) Vulnerabilities
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Vulnerability Example: Reflected XSS
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Below is an example of a reflected XSS vulnerability. This occurs when a malicious script is injected into a parameter, and the application directly renders it without validation.
            </p>

            <div className="bg-red-100 p-4 rounded-lg shadow mb-6">
              <p className="text-lg font-mono text-red-700">
                {"<script>alert('XSS Attack!')</script>"}
              </p>
              <p className="text-sm text-gray-600 italic">
                This script can execute if the input is not properly sanitized.
              </p>
            </div>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Secure Example: Sanitized Output
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Here's how the same input is securely sanitized to prevent XSS:
            </p>

            <div className="bg-green-100 p-4 rounded-lg shadow mb-6">
              {sanitizedInput ? (
                <p
                  className="text-lg font-mono text-green-700"
                  dangerouslySetInnerHTML={{ __html: sanitizedInput }}
                ></p>
              ) : (
                <p className="text-lg font-mono text-gray-700 italic">
                  No malicious content detected. Input sanitized successfully.
                </p>
              )}
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
                  <strong>Sanitize Input:</strong> Use libraries like DOMPurify to clean user inputs before rendering.
                </li>
                <li>
                  <strong>Escape Output:</strong> Ensure all dynamic content is properly escaped for the context (HTML, JavaScript, or URL).
                </li>
                <li>
                  <strong>Use HTTP-Only Cookies:</strong> Store sensitive session tokens in HTTP-only cookies to protect against theft.
                </li>
                <li>
                  <strong>Implement CSP:</strong> Use a Content Security Policy (CSP) to control the sources of scripts and other resources.
                </li>
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
                Ready to test your knowledge? Try our interactive lab where you can safely practice identifying and exploiting XSS vulnerabilities while learning proper mitigation techniques.
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
