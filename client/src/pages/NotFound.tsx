import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <div className="relative p-8 md:p-12 max-w-lg w-full">
        {/* Large decorative 404 in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[12rem] font-bold text-slate-900">404</span>
        </div>
        
        {/* Main content */}
        <div className="relative space-y-6">
          <h1 className="text-6xl sm:text-7xl font-bold text-[#DD6B20] mb-4">
            404
          </h1>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f172a]">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-[#0f172a]/80 max-w-md mx-auto">
              Sorry, the page you're looking for cannot be found.
            </p>
          </div>
          
          <Link
            to="/"
            className="inline-block px-6 py-3 text-lg font-medium text-[#DD6B20] border-2 border-[#DD6B20] rounded-lg hover:bg-[#DD6B20] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Return Home
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#DD6B20]/20 -translate-x-4 -translate-y-4" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#DD6B20]/20 translate-x-4 translate-y-4" />
      </div>
    </div>
  );
}



