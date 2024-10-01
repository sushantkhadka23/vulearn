
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-serif p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-4xl font-bold mb-8 text-center text-orange-400 font-mono pt-8">&lt;Contact Us&gt;</h2>
        <form className="space-y-6 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">First Name</label>
              <input
              required
                type="text"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500 text-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Last Name</label>
              <input
                required
                type="text"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500 text-gray-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
            required
              type="email"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500 text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
            required
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm p-3 focus:ring-orange-500 focus:border-orange-500 text-gray-300"
              rows={4}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-4 px-8 rounded-md hover:bg-orange-600 transition duration-300 w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
