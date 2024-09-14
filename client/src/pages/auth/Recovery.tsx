import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Recovery() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="flex-1 bg-blue-600 text-white p-8 flex items-center justify-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Account Recovery</h2>
              <p className="text-lg">
                Enter your email address to receive recovery instructions. We'll guide you through the process of regaining access to your account.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    placeholder="you@example.com"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 pl-10 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Send Recovery Instructions
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}