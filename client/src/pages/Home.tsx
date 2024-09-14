import { Link } from "react-router-dom";
import { Code, BookOpen, Shield } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-5xl font-bold font-serif mb-4">
          Learn XSS: Web Security Essentials
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Discover Cross-Site Scripting (XSS) from the basics. Understand web
          vulnerabilities and how to protect against them.
        </p>
        <Link
          to="/signup"
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition"
        >
          Start Learning Now
        </Link>
      </section>

      {/* Simple Example Section */}
      <section className="py-16 bg-slate-800 text-center font-sans">
        <h2 className="text-3xl font-bold mb-8 font-serif">XSS Explained Simply</h2>
        <div className="max-w-3xl mx-auto bg-slate-700 p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-xl font-bold mb-4">A Basic XSS Example</h3>
          <p className="mb-4">Imagine a website with a simple greeting form:</p>
          <pre className="bg-slate-900 p-4 rounded overflow-x-auto mb-4">
            <code className="text-sm text-orange-300">
              {`<form>
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>
<p>Hello, <span id="greeting"></span>!</p>`}
            </code>
          </pre>
          <p className="mb-4">
            And here's the JavaScript code that updates the greeting:
          </p>
          <pre className="bg-slate-900 p-4 rounded overflow-x-auto mb-4">
            <code className="text-sm text-orange-300">
              {`const nameInput = document.getElementById('name');
const greetingElement = document.getElementById('greeting');
nameInput.addEventListener('input', () => {
  greetingElement.textContent = nameInput.value;
});`}
            </code>
          </pre>
          <p className="mb-4">
            Now, let's say an attacker enters the following name in the form:
          </p>
          <pre className="bg-slate-900 p-4 rounded overflow-x-auto mb-4">
            <code className="text-sm text-orange-300">
              {`<script>alert('XSS attack!')</script>`}
            </code>
          </pre>
          <p className="mb-4">
            When the attacker submits the form, the website will display their
            name, but it will also execute the JavaScript code that was entered:
          </p>
          <pre className="bg-slate-900 p-4 rounded overflow-x-auto mb-4">
            <code className="text-sm text-orange-300">
              {`<p>Hello, <span id="greeting"><script>alert('XSS attack!')</script></span>!</p>`}
            </code>
          </pre>
          <p className="mb-4">
            This malicious code will be executed by the browser. To prevent this
            vulnerability, you should always sanitize and escape user input
            before displaying it on the page. This means that you should replace
            special characters like and with their HTML entities (&lt; and &gt;)
            so that they are displayed as text instead of being interpreted as
            HTML tags.
          </p>
          <p>
            Learn how to find and fix vulnerabilities like this in our
            beginner-friendly XSS course!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-center font-serif">
        <h2 className="text-3xl font-bold mb-8">Why Learn XSS With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <BookOpen className="mx-auto mb-4 text-orange-500" size={48} />
            <h3 className="text-xl font-bold mb-2">Beginner Friendly</h3>
            <p>
              Start from the basics and gradually build your understanding of
              web security and XSS.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <Code className="mx-auto mb-4 text-orange-500" size={48} />
            <h3 className="text-xl font-bold mb-2">Practical Examples</h3>
            <p>
              Learn through simple, real-world examples that demonstrate how XSS
              vulnerabilities work.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <Shield className="mx-auto mb-4 text-orange-500" size={48} />
            <h3 className="text-xl font-bold mb-2">Security Best Practices</h3>
            <p>
              Discover how to write secure code and protect websites against
              common vulnerabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
