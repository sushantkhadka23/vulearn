import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const SQLInjectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              SQL Injection Vulnerabilities and Prevention
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              SQL injection attacks occur when malicious SQL code is inserted into application queries, potentially leading to unauthorized data access, modification, or deletion of database contents.
            </p>

            {/* Basic SQL Injection Example */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" />
                Common SQL Injection Vulnerabilities
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Vulnerable Login Query:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Vulnerable Node.js/MySQL login query
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // VULNERABLE: Direct string concatenation
  const query = \`SELECT * FROM users 
    WHERE username = '\${username}' 
    AND password = '\${password}'\`;
    
  // Attacker can input: admin' --
  // This turns the query into:
  // SELECT * FROM users WHERE username = 'admin' --' AND password = 'anything'
  
  const results = await db.query(query);
  if (results.length > 0) {
    res.json({ success: true });
  }
});`}
                </pre>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Secure Implementation:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Secure login with prepared statements
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // SECURE: Using prepared statements
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  try {
    const results = await db.query(query, [username, password]);
    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Avoid exposing error details to client
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});`}
                </pre>
              </div>
            </section>

       
            {/* Prevention Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                SQL Injection Prevention Strategies
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-4">Implementation Checklist:</h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Always use parameterized queries / prepared statements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Implement proper input validation and sanitization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Use ORMs with built-in SQL injection protection
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
                    <li>Never concatenate user input into queries</li>
                    <li>Use typed parameters for all variables</li>
                    <li>Implement query timeouts</li>
                    <li>Use stored procedures when possible</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Database Configuration</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Regularly update database software</li>
                    <li>Use WAF to detect SQL injection attempts</li>
                    <li>Implement database access monitoring</li>
                    <li>Regular security audits of queries</li>
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
                SQL Injection Testing Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Practice identifying and preventing SQL injection vulnerabilities in our interactive environment. Learn to write secure queries and implement proper prevention mechanisms.
              </p>
            </div>
            <button
            onClick={() => navigate("/learn/labs/injection/sql-injection/lab")}
              className="inline-flex items-center font-mono px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Start SQL Lab
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SQLInjectionPage;


