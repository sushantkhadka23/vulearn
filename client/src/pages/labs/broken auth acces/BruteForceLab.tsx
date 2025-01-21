import { useState } from "react";
import { Eye, EyeOff, Download, LogIn, ShieldAlert } from "lucide-react";
import {
  bruteForcePostRequest,
  downloadBruteForceList,
} from "../../../apis/bruteForce";

interface LoginStatus {
  type: "success" | "error";
  message: string;
}

const BruteForceLab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState<LoginStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await bruteForcePostRequest(username, password);
      if (response?.flag) {
        setLoginStatus({
          type: "success",
          message: `Login Successful! Flag: ${response.flag}`,
        });
      } else {
        setLoginStatus({ type: "error", message: "Login Failed. Try again." });
      }
    } catch (error) {
      setLoginStatus({ type: "error", message: (error as any).message });
    }
    setIsLoading(false);
  };

  const handleDownload = async (type: "username" | "password") => {
    try {
      await downloadBruteForceList(type);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-4 sm:p-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="h-6 w-6 text-blue-500" />
            <h1 className="text-2xl font-semibold text-gray-900 text-center font-serif">
              Brute Force Login Lab
            </h1>
          </div>
          <p className="mt-2 text-sm text-gray-500 font-mono">
            Practice security testing with controlled brute force attempts
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Username Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter username"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg bg-white pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {isPasswordVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Status Message */}
          {loginStatus?.type === "success" && (
            <div className="p-4 mt-6 bg-green-100 border border-green-300 rounded-lg text-center">
              <h2 className="text-xl font-bold text-green-700">
                Login Successful!
              </h2>
              <p className="mt-2 text-lg text-green-600 font-mono">
                Flag:{" "}
                <span className="font-bold">
                  {loginStatus.message.split("Flag:")[1].trim()}
                </span>
              </p>
            </div>
          )}
          {loginStatus?.type === "error" && (
            <div className="p-3 rounded-lg bg-red-50 text-red-700">
              {loginStatus.message}
            </div>
          )}

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <LogIn className="h-5 w-5" />
              <span>{isLoading ? "Attempting Login..." : "Login"}</span>
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleDownload("username")}
                className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Usernames</span>
              </button>
              <button
                onClick={() => handleDownload("password")}
                className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Passwords</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BruteForceLab;
