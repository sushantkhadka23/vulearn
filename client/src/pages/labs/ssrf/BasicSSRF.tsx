import { useState } from "react";
import { fetchSSRFData } from "../../../apis/ssrfApi";
import freeApis from "../../../apis/freeApi";
import { Loader, Cat, Dog, Smile, Book, Lightbulb, Code } from "lucide-react"; 

export default function ImprovedSSRFDemo() {
  const [ssrfResponse, setSsrfResponse] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); 

  const handleFetchSSRFData = async (url: string) => {
    try {
      setErrorMessage("");
      setLoading(true); 
      const data = await fetchSSRFData(url);
      setSsrfResponse(data);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-bg py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-bold text-white text-center">SSRF API Explorer</h1>
        </div>

        <div className="p-8">
          {/* Buttons for fetching free APIs */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Choose an API:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Get a Joke", api: freeApis.jokeApi, color: "bg-purple-500", icon: <Smile /> },
                { label: "Random Cat", api: freeApis.randomCat, color: "bg-pink-500", icon: <Cat /> },
                { label: "Useless Fact", api: freeApis.uselessFacts, color: "bg-teal-500", icon: <Lightbulb /> },
                { label: "Dog Image", api: freeApis.dogApi, color: "bg-blue-500", icon: <Dog /> },
                { label: "Number Fact", api: freeApis.numbersApi, color: "bg-indigo-500", icon: <Book /> },
                { label: "Programming Joke", api: freeApis.programmingJokeApi, color: "bg-yellow-500", icon: <Code /> } // Added Programming Joke
              ].map(({ label, api, color, icon }) => (
                <button
                  key={label}
                  className={`
                    ${color} text-white rounded-lg 
                    py-3 px-4 text-sm font-medium 
                    hover:opacity-90 transition-all 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center
                  `}
                  onClick={() => handleFetchSSRFData(api)}
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 text-red-700 bg-red-100 border border-red-300 p-4 rounded-lg text-center">
              <strong>Error:</strong> {errorMessage}
            </div>
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className="flex justify-center mb-6">
              <Loader className="animate-spin text-blue-500" size={32} />
            </div>
          )}

          {/* SSRF Response */}
          {ssrfResponse && (
            <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                API Response
              </h2>
              {Array.isArray(ssrfResponse) ? (
                <div className="flex justify-center">
                  <img
                    src={ssrfResponse[0]?.url}
                    alt="Random Image"
                    className="rounded-lg shadow-lg max-h-96 object-cover"
                  />
                </div>
              ) : ssrfResponse?.setup ? (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-700">{ssrfResponse?.setup}</h3>
                  <p className="text-xl font-light text-gray-500 mt-2">{ssrfResponse?.delivery}</p>
                </div>
              ) : ssrfResponse?.text ? (
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-700">{ssrfResponse?.text}</p>
                </div>
              ) : ssrfResponse?.message ? (
                <div className="flex justify-center">
                  <img
                    src={ssrfResponse?.message || ssrfResponse?.image}
                    alt="Random Animal"
                    className="rounded-lg shadow-lg max-h-96 object-cover"
                  />
                </div>
              ) : ssrfResponse?.quote ? (
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-700">{ssrfResponse?.quote}</p>
                  <p className="text-sm text-gray-500 mt-2">- {ssrfResponse?.author}</p>
                </div>
              ) : ssrfResponse?.number ? (
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{ssrfResponse?.number}</p>
                  <p className="text-gray-500 mt-2">{ssrfResponse?.text}</p>
                </div>
              ) : ssrfResponse?.activity ? (
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-700">{ssrfResponse?.activity}</p>
                </div>
              ) : ssrfResponse?.question ? (
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-700">{ssrfResponse?.question}</p>
                </div>
              ) : ssrfResponse?.joke ? ( // Added handling for programming joke
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-700">Programming Joke</h3>
                  <p className="text-lg font-medium text-gray-700 mt-4">{ssrfResponse?.joke}</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
