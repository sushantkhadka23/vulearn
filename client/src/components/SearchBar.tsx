import React, { useState } from "react";
import { AlertTriangle, Search, XCircle } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string>("");

  const handleSearch = () => {
    if (query.trim()) {
      setSearchResults(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSearchResults("");
  };

  const examplePayloads = [
    "<img src='x' onerror='alert(\"Image Error XSS\")'>",
    "<div onmouseover='alert(\"Mouse Over XSS\")'>Hover me</div>",
    "<a href='javascript:alert(\"Link Click XSS\")'>Click me</a>",
    "<div style='background-color: red;' onclick='alert(\"Style Attribute XSS\")'>Click me</div>",
    "<iframe src='javascript:alert(\"Iframe XSS\")'></iframe>",
    "<form onsubmit='alert(\"Form Submission XSS\")'><input type='submit' value='Submit'></form>",
  ];
  

  return (
    <main className="min-h-screen bg-bg py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-txt text-2xl font-semibold font-serif">
            Educational demonstration of Cross-Site Scripting
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-amber-800">
                Educational Purpose Only
              </h3>
              <p className="text-sm text-amber-700 mt-1">
                This demo shows how XSS vulnerabilities work. Try entering HTML
                or script tags to see how unsanitized input can be dangerous.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex items-center p-4 gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Test XSS vulnerability here..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="p-2 text-red-500 hover:bg-red-50 rounded-md"
              >
                <XCircle className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Test
            </button>
          </div>
        </div>

        {/* Example Payloads */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-medium text-gray-800 mb-2">
            Example Test Payloads:
          </h3>
          <div className="space-y-2">
            {examplePayloads.map((payload, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded border text-sm font-mono"
              >
                {payload}
              </div>
            ))}
          </div>
        </div>

        {/* Results Display */}
        {searchResults && (
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-medium text-gray-800 mb-2">Results:</h3>
            <div
              className="p-4 bg-gray-50 rounded border overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: searchResults }}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchBar;
