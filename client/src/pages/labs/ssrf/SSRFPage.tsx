import { useNavigate } from "react-router-dom";
import { AlertTriangle, Shield, CheckCircle, ArrowRight } from "lucide-react";

const SSRFPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              SSRF (Server-Side Request Forgery) Vulnerabilities
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              SSRF vulnerabilities occur when an application can be tricked into
              making unauthorized requests to internal or external servers on
              behalf of the attacker.
            </p>

            {/* SSRF Examples Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" />
                Common SSRF Vulnerabilities
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Vulnerable API Endpoint:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Vulnerable Node.js API endpoint
app.post('/api/proxy', (req, res) => {
  const { url } = req.body;
  fetch(url)
    .then(response => response.text())
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

// Exploit example:
POST /api/proxy
{
  "url": "http://internal-api/admin"
}`}
                </pre>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Secure Implementation:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Secure API endpoint with URL validation
app.post('/api/proxy', (req, res) => {
  const { url } = req.body;
  
  // Allowlist valid domains
  const allowedDomains = ["https://api.example.com"];
  const isValidUrl = allowedDomains.some(domain => url.startsWith(domain));
  
  if (!isValidUrl) {
    return res.status(400).send({ error: "Invalid URL" });
  }

  fetch(url)
    .then(response => response.text())
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});`}
                </pre>
              </div>
            </section>

            {/* SSRF Prevention Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                SSRF Prevention Strategies
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-4">Implementation Checklist:</h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Validate and sanitize user inputs (e.g., URLs)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Use allowlists for external domains
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Restrict network access for server-side requests
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Monitor and log requests to detect suspicious activity
                  </li>
                </ul>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
                SSRF Security Best Practices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Server Configuration</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Disable unnecessary network access</li>
                    <li>Block internal IP ranges from being accessed</li>
                    <li>Isolate critical services from public access</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Input Validation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reject malformed or suspicious URLs</li>
                    <li>Implement DNS rebinding and SSRF detection tools</li>
                    <li>Enforce HTTPS and check certificate validity</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Interactive Lab Section */}
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                SSRF Testing Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Practice finding and securing SSRF vulnerabilities in our interactive testing environment.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/ssrf/topic/lab")}
              className="inline-flex items-center font-mono px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Start SSRF Lab
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SSRFPage;
