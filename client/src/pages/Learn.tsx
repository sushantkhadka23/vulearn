import React, { useState } from 'react';

interface LevelProps {
  id: number;
  title: string;
  description: string;
  challenge: string;
  hint: string;
  solution: string;
}

const levels: LevelProps[] = [
  {
    id: 1,
    title: "Basic XSS",
    description: "Learn to inject a simple script into a web page.",
    challenge: "Inject an alert that says 'XSS'",
    hint: "Try using <script> tags with an alert function.",
    solution: "<script>alert('XSS')</script>"
  },
  {
    id: 2,
    title: "Attribute XSS",
    description: "Exploit vulnerabilities in HTML attributes.",
    challenge: "Inject a script into an image's onerror attribute.",
    hint: "The onerror event can execute JavaScript when an image fails to load.",
    solution: "<img src='x' onerror=\"alert('XSS')\">"
  },
];

export default function Learn() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentChallenge = levels[currentLevel];
    
    if (userInput.trim().toLowerCase() === currentChallenge.solution.toLowerCase()) {
      setFeedback("Correct! Great job!");
      setTimeout(() => {
        if (currentLevel < levels.length - 1) {
          setCurrentLevel(currentLevel + 1);
          setUserInput('');
          setFeedback('');
        } else {
          setFeedback("Congratulations! You've completed all levels!");
        }
      }, 2000);
    } else {
      setFeedback("Not quite right. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-serif p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-400 font-mono">&lt;XSS Learning&gt;</h1>
        
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">Level {levels[currentLevel].id}: {levels[currentLevel].title}</h2>
          <p className="mb-4">{levels[currentLevel].description}</p>
          <div className="bg-gray-700 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">Challenge:</h3>
            <p>{levels[currentLevel].challenge}</p>
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
            onClick={() => setFeedback(levels[currentLevel].hint)}
            className="text-orange-400 hover:text-orange-300"
          >
            Need a hint?
          </button>
        </div>
        
        <div className="mt-8 flex justify-between">
          <button 
            onClick={() => setCurrentLevel(Math.max(0, currentLevel - 1))}
            disabled={currentLevel === 0}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 disabled:opacity-50"
          >
            Previous Level
          </button>
          <button 
            onClick={() => setCurrentLevel(Math.min(levels.length - 1, currentLevel + 1))}
            disabled={currentLevel === levels.length - 1}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 disabled:opacity-50"
          >
            Next Level
          </button>
        </div>
      </div>
    </div>
  );
}
