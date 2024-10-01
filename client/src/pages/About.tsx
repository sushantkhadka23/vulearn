import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqItems:FAQItemProps[] = [
  {
    question: "What is XSS?",
    answer: "XSS (Cross-Site Scripting) is a type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. Our platform teaches you how to identify, exploit, and prevent these vulnerabilities."
  },
  {
    question: "How does the leveling system work?",
    answer: "As you complete challenges and learn new concepts, you'll earn experience points. These points contribute to your overall level, unlocking new, more advanced challenges as you progress."
  },
  {
    question: "Is it legal to practice XSS techniques?",
    answer: "Yes, it's legal to practice XSS techniques in a controlled, educational environment like ours. However, it's crucial to only use these skills ethically and never attempt to exploit real websites without explicit permission."
  },
  {
    question: "Do I need prior programming experience?",
    answer: "While some basic knowledge of HTML, JavaScript, and web technologies is helpful, our platform is designed to accommodate beginners. We provide resources and explanations to help you build the necessary skills as you progress."
  },
];

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)} >
        <span className="font-medium text-gray-300">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? ( <FiChevronUp className="h-6 w-6 text-orange-400" /> 
          ) : ( <FiChevronDown className="h-6 w-6 text-orange-400" /> 
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-serif p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-400 font-mono">&lt;About XSS Learning&gt;</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="text-lg">
            At XSS Learning, we promise to provide a safe, structured, and engaging environment for you to master Cross-Site Scripting (XSS) techniques. Our step-by-step approach ensures that you'll build a strong foundation in web security, allowing you to level up your skills with each completed challenge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
