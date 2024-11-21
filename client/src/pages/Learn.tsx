import React, { useState } from 'react';
import levels from '../types/levelItems';



const Learn: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const executeCode = () => {
    const scriptPattern = /^<script>alert\('(.+)'\)<\/script>$/;
    const match = scriptPattern.exec(userInput.trim());

    if (match) {
      alert(match[1]);  
      setFeedback("Correct! Great job!");
    } 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setFeedback("Input cannot be empty. Please try again.");
      return;
    }

    executeCode();
  };

  return (
    <div className="min-h-screen bg-bg text-fg font-serif p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-fg font-mono">&lt;XSS Learning/&gt;</h1>
        
        <div className="bg-gray-800 text-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">
            Level {levels[0].id}: {levels[0].title}
          </h2>
          <p className="mb-4">{levels[0].description}</p>
          <div className="bg-gray-700 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">Challenge:</h3>
            <p>{levels[0].challenge}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="mb-4">
            <textarea 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-300"
              rows={4}
              placeholder="Enter your solution here"
            />
            <button type="submit" className="mt-2 bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
              Submit Solution
            </button>
          </form>
          
          {feedback && (
            <div className={`p-4 rounded-md mb-4 ${feedback.includes('Correct') ? 'bg-green-700' : 'bg-red-700'}`}>
              <h3 className="font-semibold mb-2">Feedback:</h3>
              <p>{feedback}</p>
            </div>
          )}
          
          <button 
            onClick={() => setFeedback(levels[0].hint)}
            className="text-orange-400 hover:text-orange-300"
          >
            Need a hint?
          </button>
        </div>
        
        <div className="mt-8 flex justify-between">
          <button 
            disabled
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 disabled:opacity-50"
          >
            Previous Level
          </button>
          <button 
            disabled
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 disabled:opacity-50"
          >
            Next Level
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
