import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock ,faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const[showPassword,setShowPassword] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', formData.email, 'Password:', formData.password);
  }, [formData]);


  const toggleShowVisibility = ()=>{
    setShowPassword(()=>!showPassword);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 font-serif">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-500">Log in to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type={showPassword ? 'text':'password'}
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
               type="button" 
               onClick={toggleShowVisibility}
               className="absolute right-3 top-1/2 transform  -translate-y-1/2 text-gray-400"
               >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <Link to="/recovery" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition duration-200">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            Log In
          </button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Continue with Google
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}