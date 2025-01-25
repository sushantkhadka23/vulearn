import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const IdorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              IDOR (Insecure Direct Object References) Vulnerabilities
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              IDOR vulnerabilities occur when applications expose internal object references to users without proper access control checks. These vulnerabilities can lead to unauthorized data access and manipulation.
            </p>

            {/* IDOR Examples Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" />
                Common IDOR Vulnerabilities
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Vulnerable API Endpoint:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Vulnerable Express.js API endpoint
app.get('/api/users/:id/profile', (req, res) => {
  const userId = req.params.id;
  // No authorization check!
  db.query('SELECT * FROM users WHERE id = ?', [userId])
    .then(user => res.json(user));
});

// Vulnerable frontend request
fetch('/api/users/123/profile')  // User can change ID to access other profiles`}
                </pre>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Secure Implementation:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Secure Express.js API endpoint with authorization
app.get('/api/users/:id/profile', authenticate, (req, res) => {
  const userId = req.params.id;
  const currentUser = req.user;

  // Check if user has permission
  if (currentUser.id !== userId && !currentUser.isAdmin) {
    return res.status(403).json({ error: 'Access denied' });
  }

  db.query('SELECT * FROM users WHERE id = ?', [userId])
    .then(user => res.json(user));
});`}
                </pre>
              </div>
            </section>

            {/* IDOR Prevention Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                IDOR Prevention Strategies
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-4">Implementation Checklist:</h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Use indirect references (UUID instead of sequential IDs)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Implement proper authorization checks on every request
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Maintain access control lists for resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Use session-based tokens for resource access
                  </li>
                </ul>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
                IDOR Security Best Practices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Access Control Design</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Implement Role-Based Access Control (RBAC)</li>
                    <li>Use contextual access policies</li>
                    <li>Never trust client-side parameters</li>
                    <li>Implement proper session management</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Implementation Guidelines</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use UUIDs for resource identifiers</li>
                    <li>Implement resource ownership checks</li>
                    <li>Log and monitor access attempts</li>
                    <li>Regular security audits of endpoints</li>
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
                IDOR Testing Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Practice identifying and fixing IDOR vulnerabilities in our interactive environment. Learn how to implement proper access controls and prevent unauthorized resource access.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/broken-access-control/idor/lab")}
              className="inline-flex items-center font-mono px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Start IDOR Lab
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default IdorPage;