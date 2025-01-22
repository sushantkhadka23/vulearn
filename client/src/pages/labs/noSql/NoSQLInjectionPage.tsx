import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const NoSQLInjectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              NoSQL Injection Vulnerabilities and Prevention
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              NoSQL Injection attacks occur when malicious input is used to manipulate NoSQL queries, potentially allowing unauthorized access to data, authentication bypasses, or other severe breaches.
            </p>

            {/* Basic NoSQL Injection Example */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" />
                Common NoSQL Injection Vulnerabilities
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Vulnerable Login Query:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Vulnerable Node.js/MongoDB login query
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // VULNERABLE: Using user input directly in the query
  const user = await db.collection('users').findOne({
    username: username,
    password: password, // Attacker can inject: { "$ne": null }
  });
  
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});`}
                </pre>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Secure Implementation:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Secure login with parameterized queries
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // SECURE: Explicitly check input types and values
  const user = await db.collection('users').findOne({
    username: username,
    password: password,
  });

  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});`}
                </pre>
              </div>
            </section>

            {/* Prevention Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                NoSQL Injection Prevention Strategies
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-4">Implementation Checklist:</h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Validate and sanitize all user inputs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Use ObjectIDs for identifying database records instead of user-provided values
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Limit query operations to avoid dangerous operators like `$ne`, `$or`, or `$gt`
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Apply the principle of least privilege to database users
                  </li>
                </ul>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
                Database Security Best Practices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Query Construction</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Never use unsanitized user input in queries</li>
                    <li>Use libraries or middleware for input validation</li>
                    <li>Set query timeouts to prevent long-running queries</li>
                    <li>Limit fields returned in queries to reduce exposure</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Database Configuration</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Regularly update your database software</li>
                    <li>Enable query logging and monitoring</li>
                    <li>Implement rate limiting to prevent brute-force attacks</li>
                    <li>Perform regular security audits and pen tests</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Interactive Lab Section */}
        <div className="bg-orange-50 rounded-2xl shadow-lg p-8 border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                NoSQL Injection Testing Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Practice identifying and preventing NoSQL injection vulnerabilities in our interactive lab. Learn to write secure queries and protect your applications.
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
