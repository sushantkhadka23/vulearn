
import {Github, Globe, ChevronRight, Search, Shield , PinIcon} from "lucide-react";
import { additionalToolTopics, exploitTopics, reconTopics } from "../../dummy/dummy_data";

export default function Tools() {
  return (
    <div className="p-6 bg-gradient-to-b bg-bg to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-mono mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Security Tools Collection
        </h1>

        {/* Recon Tools Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold font-serif">Reconnaissance Tools</h2>
          </div>
          
          <div className="space-y-6">
            {reconTopics.map((tool, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-200"
              >
                <div className="mb-4">
                  <div className="text-xl font-semibold font-mono flex items-center gap-2 mb-2">
                    {tool.name}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-gray-600 font-sans">{tool.description}</p>
                </div>
                <div className="flex gap-4">
                  {tool.githubLink && (
                    <a
                      href={tool.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {tool.webLink && (
                    <a
                      href={tool.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exploit Tools Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-semibold font-serif">Exploitation Tools</h2>
          </div>
          
          <div className="space-y-6">
            {exploitTopics.map((tool, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-200"
              >
                <div className="mb-4">
                  <div className="text-xl font-semibold font-mono flex items-center gap-2 mb-2">
                    {tool.name}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-gray-600 font-sans">{tool.description}</p>
                </div>
                <div className="flex gap-4">
                  {tool.githubLink && (
                    <a
                      href={tool.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {tool.webLink && (
                    <a
                      href={tool.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />

        {/* additional tools */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <PinIcon className="w-6 h-6 text-teal-700" />
            <h2 className="text-2xl font-semibold font-serif">Additional Tools</h2>
          </div>
          <div className="space-y-6">
            {additionalToolTopics.map((tool, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-200"
              >
                <div className="mb-4">
                  <div className="text-xl font-semibold font-mono flex items-center gap-2 mb-2">
                    {tool.name}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-gray-600 font-sans">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}