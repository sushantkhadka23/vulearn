import React, { useState } from "react";
import { idorPostRequest, IdorResponse } from "../../../apis/idorApi";
import { EyeIcon, EyeOffIcon } from "lucide-react";

// Example authenticated user object
const user = {
  username: "bob",
  password: "bobPass",
};

const IDORLab: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<IdorResponse | null>(null);
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResponse(null);
    try {
      const result = await idorPostRequest(username, password);
      if (!result) {
        setError("Invalid username or password.");
      } else {
        setResponse(result);
      }
    } catch (err: any) {
      console.error("Error during login:", err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-bg p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center font-serif">IDOR Vulnerability Lab</h1>
        </div>

        <div className="bg-white rounded-b-xl shadow-lg">
          <div className="p-6">
            {/* Example User Card */}
            <div className="mb-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-lg font-semibold mb-4 text-blue-900">Example Authenticated User</h2>
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Username:</strong> {user.username}
              </div>
              <div className="bg-white p-3 rounded border border-blue-200 mt-2">
                <strong className="text-blue-700">Password:</strong> {user.password}
              </div>
              <p className="text-sm text-blue-700 mt-4">
                Use the credentials above to simulate an example login in the playground.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={isEyeOpen ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsEyeOpen(!isEyeOpen)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {isEyeOpen ? <EyeIcon className="w-5 h-5" /> : <EyeOffIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 transition-colors"
              >
                Login
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            {/* Response Display */}
            {response && (
              <div className="mt-6 bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Login Response</h3>
                <div className="bg-white p-3 rounded border border-green-200">
                  <strong className="text-green-700">Username:</strong> {response.username}
                </div>
                <div className="bg-white p-3 rounded border border-green-200 mt-2">
                  <strong className="text-green-700">Password:</strong> {response.password}
                </div>
                <div className="mt-4 bg-white p-3 rounded border border-green-200">
                  <strong className="text-green-700">Flag:</strong> {response.flag || "No flag available"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDORLab;
