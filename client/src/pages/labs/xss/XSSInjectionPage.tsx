import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const XSSInjectionPage = () => {
  const navigate = useNavigate();

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
            <p className="text-xl font-lato text-gray-600 mb-6">
              Cross-Site Scripting (XSS) vulnerabilities are among the most common security flaws in web applications. They allow attackers to inject malicious scripts into web pages, which can be executed by unsuspecting users.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How XSS Injection Works
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              XSS injection happens when an attacker is able to inject client-side JavaScript code into a web application’s output. This code is then executed in the browser of anyone who views the page, potentially allowing the attacker to steal cookies, session tokens, or perform actions on behalf of the user.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Types of XSS Vulnerabilities
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              XSS vulnerabilities can generally be categorized into three types:
              <ul className="list-disc pl-6">
                <li><strong>Stored XSS:</strong> Malicious scripts are permanently stored on the target server, affecting all users who access the page.</li>
                <li><strong>Reflected XSS:</strong> Malicious scripts are reflected off the server, typically via a URL or form parameter, and immediately executed in the user's browser.</li>
                <li><strong>DOM-based XSS:</strong> The vulnerability arises when the client-side JavaScript dynamically modifies the page based on user input, without proper sanitization.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How XSS Impacts Web Applications
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              XSS vulnerabilities can lead to several harmful outcomes:
              <ul className="list-disc pl-6">
                <li><strong>Session Hijacking:</strong> Attackers can steal user session cookies and impersonate the victim.</li>
                <li><strong>Phishing Attacks:</strong> Malicious scripts can be used to create fake login forms or redirect users to malicious sites.</li>
                <li><strong>Defacement:</strong> Attackers can alter the appearance of a webpage, causing reputational damage.</li>
                <li><strong>Malware Delivery:</strong> Scripts can redirect users to exploit kits or infect their devices with malware.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Prevention Techniques for XSS
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Preventing XSS requires a combination of input sanitization, output encoding, and security practices:
              <ul className="list-disc pl-6">
                <li><strong>Input Validation:</strong> Reject or sanitize any inputs that contain special characters, such as <code>&lt;</code>, <code>&gt;</code>, and <code>&amp;</code>.</li>
                <li><strong>Output Encoding:</strong> Ensure that data is properly encoded before being inserted into HTML, JavaScript, or other output contexts (e.g., use <code>htmlspecialchars</code> in PHP or <code>encodeURIComponent</code> in JavaScript).</li>
                <li><strong>Use Content Security Policy (CSP):</strong> Implement CSP headers to restrict the sources from which scripts can be loaded, limiting the impact of XSS attacks.</li>
                <li><strong>Contextual Output Escaping:</strong> Always escape content according to its specific context (HTML, JavaScript, URL, etc.) to prevent injection into unintended areas.</li>
                <li><strong>Sanitize HTML Input:</strong> Use libraries like DOMPurify to sanitize any user-generated HTML content that is inserted into your web page.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Testing for XSS Vulnerabilities
            </h2>
            <p className="text-gray-600 font-lato mb-8">
              You can test for XSS vulnerabilities by injecting payloads into input fields, URL parameters, and forms. Tools like Burp Suite and OWASP ZAP can assist in identifying these vulnerabilities in a more automated way.
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
