import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BruteForcePage = () => {
  const navigate = useNavigate();


 

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding Brute Force Attack Vulnerabilities
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              Brute force attacks involve an attacker systematically trying all possible combinations of usernames and passwords until the correct one is found. This type of attack can be devastating if proper protection mechanisms are not in place.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How Brute Force Works
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              A brute force attack is typically carried out using automated tools that repeatedly try different combinations of credentials until a successful login occurs. For example:
            </p>
            <ul className="list-disc pl-6">
              <li>Attacker enters username `admin` and tries common passwords like `password`, `123456`, and `admin`.</li>
              <li>The attacker continues the attempt until a correct combination is found, gaining access to the account.</li>
            </ul>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Real-World Implications
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Brute force attacks can lead to serious security breaches:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Account Takeover:</strong> Attackers can gain control of user accounts, including admin accounts.</li>
              <li><strong>Data Breaches:</strong> Sensitive user data can be accessed or stolen if the attacker successfully logs in.</li>
            </ul>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Preventing Brute Force Attacks
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              To defend against brute force attacks, developers should:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Limit Login Attempts:</strong> Implement rate limiting to prevent repeated login attempts.</li>
              <li><strong>Enable Multi-Factor Authentication:</strong> Use MFA to add an extra layer of protection beyond just passwords.</li>
              <li><strong>Use Strong Passwords:</strong> Enforce the use of strong, complex passwords for user accounts.</li>
            </ul>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Testing for Brute Force Vulnerabilities
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Penetration testing tools such as <code>Hydra</code> or <code>Burp Suite</code> can help identify brute force vulnerabilities by simulating login attempts with various username and password combinations.
            </p>
          </div>
        </div>

        {/* Lab Section */}
       {/* Lab Section */}
<div className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* Lab Details */}
    <div className="mb-6 md:mb-0 md:mr-8">
      <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
        Explore the Interactive Lab
      </h2>
      <p className="text-lg font-lato text-gray-600 mb-4">
        Dive into our hands-on lab to simulate brute force attacks in a secure environment. Understand the attack patterns and experiment with real-world scenarios to enhance your skills.
      </p>
      <ul className="list-disc pl-6 text-gray-600 text-lg font-lato">
        <li>Learn how attackers exploit weak authentication systems.</li>
        <li>Test and evaluate various defense mechanisms.</li>
        <li>Gain insights into security best practices.</li>
      </ul>
    </div>

    {/* Call-to-Action Button */}
    <button
      onClick={() => navigate("/learn/labs/broken-auth/brute-force/lab")}
      className="inline-flex items-center font-mono px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg whitespace-nowrap"
    >
      Start Lab Now
      <ArrowRight className="ml-2 w-5 h-5" />
    </button>
  </div>
</div>


       
      </article>
    </div>
  );
};

export default BruteForcePage;
