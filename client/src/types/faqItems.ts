  export interface FAQItemProps {
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

  export default faqItems;