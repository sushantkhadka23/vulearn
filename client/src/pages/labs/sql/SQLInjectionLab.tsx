import React, { useState } from 'react';
import { login } from '../../../apis/sqlApi';

export default function SQLInjectionLab() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    // Call the login function from the API
    const data = await login(username, password);

    // Set the response message based on the API response
    setResponse(data.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-bg py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 font-serif md:text-5xl">
            SQL Injection Lab
          </h1>
          <p className="text-lg font-lato text-gray-600 max-w-lg mx-auto md:text-xl">
            Simulate SQL Injection attacks and learn about their prevention in a controlled environment.
          </p>
        </div>

        {/* Scenario Description */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Scenario Overview</h2>
          <p className="text-gray-700 mb-4">
            This lab features a vulnerable login form. Your task is to bypass authentication
            by injecting malicious SQL queries.
          </p>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-800">
            Example Input: <code>' OR '1'='1'; --</code>
          </div>
        </div>

        {/* Login Simulation */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 font-serif">Simulated Login</h3>
          <p className="text-gray-600 font-lato mb-6">
            Use the fields below to simulate an SQL Injection attack. Observe the responses
            and consider how to prevent such vulnerabilities.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium font-mono text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium font-mono text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`inline-block w-full md:w-auto px-6 py-3 font-medium text-white rounded-lg transition-colors duration-300 ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Display the backend response */}
          {response && (
            <div
              className={`mt-6 p-4 rounded-md text-sm font-medium ${
                response.includes("bypassed")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
