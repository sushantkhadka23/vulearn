import React, { useState } from "react";
import { noSQLLogin } from "../../../apis/nosqlApi";

export default function NoSQLInjectionLab() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<any | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setUser(null);

    try {
      const data = await noSQLLogin(username, password);

      if (data) {
        setUser(data);
        setResponse("Login successful! User data displayed below.");
      }
    } catch (error) {
      console.error(error);
      if (
        error instanceof Error &&
        error.message === "Invalid username or password."
      ) {
        setResponse("Login failed: Incorrect username or password.");
      } else {
        setResponse("Login failed: An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-bg py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 font-serif md:text-5xl">
            NoSQL Injection Lab
          </h1>
          <p className="text-lg font-lato text-gray-600 max-w-lg mx-auto md:text-xl">
            Simulate NoSQL Injection attacks and learn about their prevention in
            a controlled environment.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Simulated Login
          </h3>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
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
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Display the backend response */}
          {response && (
            <div
              className={`mt-6 p-4 rounded-md text-sm font-medium ${
                response.includes("successful")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {response}
            </div>
          )}
        </div>

        {/* User Data Display */}
        {user && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">
              User Data
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium text-gray-700">ID:</span>
                <span className="text-lg text-gray-500">{user._id}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium text-gray-700">
                  Username:
                </span>
                <span className="text-lg text-gray-500">{user.username}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium text-gray-700">
                  Password:
                </span>
                <span className="text-lg text-gray-500">{user.password}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium text-gray-700">Flag:</span>

                <span className="text-lg text-red-600">{user.flag}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
