import { useState } from "react";
import { fetchSSRFData } from "../../../apis/ssrfApi";
import freeApis from "../../../apis/freeApi";
import { Loader, Cat, Dog, Smile, Book, Lightbulb, Code, DramaIcon } from "lucide-react";

export default function BasicSSRFLab() {
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
    <div className="min-h-screen bg-bg py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">API Explorer</h1>
          <p className="text-slate-600">Test various API endpoints and examine their responses</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          {/* API Selection Section */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Available Endpoints</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "Random Joke", api: freeApis.jokeApi, icon: <Smile className="w-4 h-4" />, color: "hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200" },
                { label: "Cat Image", api: freeApis.randomCat, icon: <Cat className="w-4 h-4" />, color: "hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200" },
                { label: "Fun Fact", api: freeApis.uselessFacts, icon: <Lightbulb className="w-4 h-4" />, color: "hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200" },
                { label: "Dog Image", api: freeApis.dogApi, icon: <Dog className="w-4 h-4" />, color: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200" },
                { label: "Number Fact", api: freeApis.numbersApi, icon: <Book className="w-4 h-4" />, color: "hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200" },
                { label: "Dev Joke", api: freeApis.programmingJokeApi, icon: <Code className="w-4 h-4" />, color: "hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200" },
                {label:"Evil Insult" , api:freeApis.evilInsult , icon:<DramaIcon className="w-4 h-4"  /> , color:"hover:bg-red-50 hover:text-red-700 hover:border-red-200"}
              ].map(({ label, api, icon, color }) => (
                <button
                  key={label}
                  onClick={() => handleFetchSSRFData(api)}
                  className={`flex items-center justify-center space-x-2 px-4 py-2.5 border border-slate-200 
                    rounded-lg text-sm font-medium text-slate-600 bg-white
                    transition-all duration-200 ${color}`}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Response Section */}
          <div className="p-6">
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Error: {errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-12">
                <Loader className="animate-spin text-slate-400" size={32} />
              </div>
            )}

            {/* API Response */}
            {ssrfResponse && !loading && (
              <div className="bg-slate-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Response</h2>
                
                {Array.isArray(ssrfResponse) ? (
                  <div className="flex justify-center">
                    <img
                      src={ssrfResponse[0]?.url}
                      alt="API Response"
                      className="rounded-lg shadow-md max-h-96 object-cover"
                    />
                  </div>
                ) : ssrfResponse?.setup ? (
                  <div className="space-y-3">
                    <p className="text-lg text-slate-700">{ssrfResponse?.setup}</p>
                    <p className="text-slate-600 italic">{ssrfResponse?.delivery}</p>
                  </div>
                ) : ssrfResponse?.text ? (
                  <p className="text-slate-700">{ssrfResponse?.text}</p>
                ) : ssrfResponse?.message ? (
                  <div className="flex justify-center">
                    <img
                      src={ssrfResponse?.message || ssrfResponse?.image}
                      alt="API Response"
                      className="rounded-lg shadow-md max-h-96 object-cover"
                    />
                  </div>
                ) : ssrfResponse?.quote ? (
                  <div className="space-y-2">
                    <p className="text-lg text-slate-700">"{ssrfResponse?.quote}"</p>
                    <p className="text-sm text-slate-500">— {ssrfResponse?.author}</p>
                  </div>
                ) : ssrfResponse?.number ? (
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-slate-700">{ssrfResponse?.insult}</p>
                    <p className="text-slate-600">{ssrfResponse?.text}</p>
                  </div>
                ) : ssrfResponse?.activity ? (
                  <p className="text-slate-700">{ssrfResponse?.activity}</p>
                ) : ssrfResponse?.question ? (
                  <p className="text-slate-700">{ssrfResponse?.question}</p>
                ) : ssrfResponse?.joke ? (
                  <div className="space-y-2">
                    <h3 className="font-medium text-slate-900">Developer Humor</h3>
                    <p className="text-slate-700">{ssrfResponse?.joke}</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}