import React from "react";
import TerminalController from "../../../components/TerminalController";

const CommandInjectionLab: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-bg text-txt py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold font-serif">
            Command Injection Lab
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-xl shadow-lg p-8">
          {/* Terminal Container */}
          <div className="bg-black text-white rounded-lg p-4">
            <TerminalController />
          </div>

          <div className="mt-6 text-txt">
            <h3 className="text-2xl font-semibold font-lato">
              How to use this lab:
            </h3>
            <p className="font-sans">
              Use the terminal above to experiment with commands like{" "}
              <code>cmatrix</code>, <code>ls</code>, <code>mkdir</code>, and
              more. Try entering commands that simulate a command injection
              attack, and observe how the system reacts.
              <br />
              <strong>Note:</strong> If you type <code>hello</code>, the system
              will respond with the word <code>hello</code> as output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandInjectionLab;
