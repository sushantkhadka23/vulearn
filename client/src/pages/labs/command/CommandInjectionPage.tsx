import { useNavigate } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Shield } from 'lucide-react';

const CommandInjectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding OS Command Injection Vulnerabilities
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              OS command injection is a critical vulnerability where an attacker manipulates an application to execute arbitrary operating system commands, often leading to complete system compromise.
            </p>

            {/* Vulnerability Example */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" />
                Command Injection Vulnerability Example
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Vulnerable Code:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Node.js: Vulnerable command execution
app.post('/ping', (req, res) => {
  const { ip } = req.body;

  // VULNERABLE: Executing user input directly in a shell command
  const command = \`ping -c 4 \${ip}\`;
  require('child_process').exec(command, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: 'Command failed' });
    }
    res.json({ output: stdout });
  });
});`}
                </pre>
              </div>
              <p className="text-gray-600 font-lato mb-6">
                In this example, an attacker can inject malicious commands such as <code>127.0.0.1; rm -rf /</code>, leading to destructive actions like deleting server files.
              </p>
            </section>

            {/* Prevention Example */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                Preventing Command Injection
              </h2>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold mb-2">Secure Implementation:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Secure command execution with validation
const { execFile } = require('child_process');

app.post('/ping', (req, res) => {
  const { ip } = req.body;

  // SECURE: Validate user input and use execFile for safer execution
  if (!/^[0-9.]+$/.test(ip)) {
    return res.status(400).json({ error: 'Invalid IP address' });
  }

  execFile('ping', ['-c', '4', ip], (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: 'Command failed' });
    }
    res.json({ output: stdout });
  });
});`}
                </pre>
              </div>
              <p className="text-gray-600 font-lato mb-6">
                By using <code>execFile</code>, the command is executed without invoking a shell, significantly reducing the risk of injection attacks.
              </p>
            </section>

            {/* Prevention Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
                Best Practices for Mitigation
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Input Validation:</strong> Ensure all user inputs are sanitized and validated against a whitelist of acceptable patterns.
                  </li>
                  <li>
                    <strong>Use Safer APIs:</strong> Prefer APIs like <code>execFile</code> or <code>spawn</code> instead of <code>exec</code>.
                  </li>
                  <li>
                    <strong>Limit Application Privileges:</strong> Run applications with the least privileges required to perform their functions.
                  </li>
                  <li>
                    <strong>Escape User Input:</strong> Use libraries or utilities to escape special characters in input.
                  </li>
                  <li>
                    <strong>Monitor and Audit:</strong> Continuously monitor system logs and conduct security audits to identify unusual activity.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Interactive Lab Section */}
        <div className="bg-orange-50 rounded-2xl shadow-lg p-8 border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                Practice in the Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Ready to test your skills? Explore our lab to practice identifying and preventing OS command injection vulnerabilities.
              </p>
            </div>
            <button
              onClick={() => navigate("/learn/labs/injection/command-injection/lab")}
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

export default CommandInjectionPage;
