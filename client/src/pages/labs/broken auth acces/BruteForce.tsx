import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const BruteForcePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Brute Force Attack Prevention and Security
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              Brute force attacks attempt to gain unauthorized access by
              systematically trying all possible combinations of credentials.
              Understanding these attacks is crucial for implementing effective
              defense mechanisms.
            </p>

            {/* Vulnerable Login System */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-500" />
                Vulnerable Authentication Systems
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold mb-2">
                  Vulnerable Login Implementation:
                </h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Vulnerable Express.js login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  // No rate limiting or attempt tracking!
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Login successful
  res.json({ token: generateToken(user) });
});`}
                </pre>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold mb-2">
                  Secure Implementation with Rate Limiting:
                </h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                  {`// Secure login with rate limiting and attempt tracking
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many login attempts, please try again later'
});

app.post('/api/login', loginLimiter, async (req, res) => {
  const { username, password } = req.body;
  
  // Track failed attempts
  const attempts = await LoginAttempt.count({
    username,
    createdAt: { $gt: new Date(Date.now() - 15 * 60 * 1000) }
  });

  if (attempts >= 5) {
    return res.status(429).json({
      error: 'Account temporarily locked. Try again later.'
    });
  }

  const user = await User.findOne({ username });
  if (!user) {
    await LoginAttempt.create({ username, success: false });
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    await LoginAttempt.create({ username, success: false });
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Reset attempts on successful login
  await LoginAttempt.deleteMany({ username });
  res.json({ token: generateToken(user) });
});`}
                </pre>
              </div>
            </section>

            {/* Prevention Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                Brute Force Prevention Strategies
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-4">Implementation Checklist:</h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Implement progressive delays between login attempts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Use CAPTCHA after failed attempts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Implement IP-based and account-based rate limiting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />
                    Monitor and log suspicious login patterns
                  </li>
                </ul>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
                Authentication Security Best Practices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Password Security</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Enforce strong password policies</li>
                    <li>Implement secure password hashing</li>
                    <li>Use password complexity requirements</li>
                    <li>Prevent use of common passwords</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Additional Security Layers</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Enable two-factor authentication</li>
                    <li>Implement account lockout policies</li>
                    <li>Use secure session management</li>
                    <li>Monitor for suspicious activities</li>
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
                Brute Force Attack Lab
              </h2>
              <p className="text-lg font-lato text-gray-600">
                Experience brute force attacks in a controlled environment.
                Learn to implement and test various protection mechanisms
                against automated login attempts.
              </p>
            </div>
            <button
              onClick={() =>
                navigate("/learn/labs/broken-auth/brute-force/lab")
              }
              className="inline-flex items-center font-mono px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Start Attack Lab
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BruteForcePage;
