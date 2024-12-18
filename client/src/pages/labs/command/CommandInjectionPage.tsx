import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CommandInjectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Understanding OS Command Injection Vulnerabilities
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-lato text-gray-600 mb-6">
              OS command injection is a critical vulnerability where an attacker manipulates an application to execute arbitrary operating system commands, often leading to complete system compromise.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How OS Command Injection Works
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              OS command injection occurs when an attacker is able to inject malicious commands into an application that will be executed by the host operating system. Applications that allow user input to influence system commands are particularly vulnerable. Attackers can exploit this to run arbitrary commands on the server, steal data, or escalate their privileges.
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Common OS Command Injection Attacks
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Some common attack vectors include:
              <ul className="list-disc pl-6">
                <li><strong>URL Parameters:</strong> Applications that take user input through URL parameters and use it in system calls can be exploited to inject commands.</li>
                <li><strong>Web Forms:</strong> Forms that process user inputs and pass them directly to system commands are vulnerable to injection.</li>
                <li><strong>File Uploads:</strong> Malicious files with embedded OS commands can be uploaded and executed.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              OS Command Injection Vulnerability Examples
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              Here’s how a typical OS command injection vulnerability might unfold:
              <ul className="list-disc pl-6">
                <li>A vulnerable application takes user input (e.g., a file path) and uses it in a system command such as <code>os.system("cat " + user_input)</code>.</li>
                <li>An attacker inputs something like <code>evilfile.txt; rm -rf /</code> in the form field, which ends up executing the <code>rm -rf /</code> command, deleting all files on the server.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              How OS Command Injection Impacts Operating Systems
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              OS command injection affects underlying operating systems by allowing unauthorized execution of system commands. Depending on the privileges of the application running the command, attackers can:
              <ul className="list-disc pl-6">
                <li><strong>Escalate Privileges:</strong> Execute commands as a higher-privileged user, gaining root or administrative access.</li>
                <li><strong>Steal Sensitive Information:</strong> Read sensitive system files or extract database information.</li>
                <li><strong>Install Malicious Software:</strong> Upload and execute malware on the server.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Prevention Techniques for OS Command Injection
            </h2>
            <p className="text-gray-600 font-lato mb-6">
              To protect systems from OS command injection attacks, follow these best practices:
              <ul className="list-disc pl-6">
                <li><strong>Avoid Direct System Calls:</strong> Avoid using functions like <code>os.system()</code> or <code>exec()</code> that execute system commands. Instead, use safer, purpose-built libraries for handling user input.</li>
                <li><strong>Sanitize Input:</strong> Always validate and sanitize user inputs to ensure they don’t contain special characters that could be used in command injection attacks (e.g., semicolons, ampersands, pipes).</li>
                <li><strong>Limit Application Privileges:</strong> Run applications with the least privileges necessary. If an application only needs read access, don't give it write or execute access.</li>
                <li><strong>Use Safe Alternatives:</strong> Use safer methods for executing system commands, such as <code>subprocess.run()</code> in Python, which allows for more control over the input and avoids shell expansion.</li>
                <li><strong>Regular Security Audits:</strong> Conduct regular security reviews and patch any vulnerabilities in the application, operating system, or libraries used by your application.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              Testing for OS Command Injection Vulnerabilities
            </h2>
            <p className="text-gray-600 font-lato mb-8">
              It is crucial to regularly test applications for OS command injection vulnerabilities. Tools like penetration testing frameworks (e.g., <code>Burp Suite</code>, <code>OWASP ZAP</code>) can help identify weak spots in applications where command injection might be possible.
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
                Ready to test your knowledge? Try our interactive lab where you can safely practice identifying and exploiting OS command injection vulnerabilities while learning proper mitigation techniques.
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
