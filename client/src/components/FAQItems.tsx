import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FAQItemProps } from "../types/faqItems";


const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <div className="border-b border-fg/70 py-4">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-fg text-xl">{question}</span>
          <span className="ml-6 flex-shrink-0">
            {isOpen ? (
              <FiChevronUp className="h-6 w-6 text-fg" />
            ) : (
              <FiChevronDown className="h-6 w-6 text-fg" />
            )}
          </span>
        </button>
        {isOpen && (
          <div className="mt-2">
            <p className="text-fg/90">{answer}</p>
          </div>
        )}
      </div>
    );
  };

  export default FAQItem;