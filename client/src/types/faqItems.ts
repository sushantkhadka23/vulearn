export interface FAQItemProps {
  question: string;
  answer: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: "What is web security?",
    answer: "Web security involves protecting websites and web applications from various threats such as data breaches, hacking attempts, and malicious activities. Our platform teaches you how to identify vulnerabilities like Cross-Site Scripting (XSS), SQL Injection, and other common attacks, as well as how to prevent them."
  },
  {
    question: "How does the leveling system work?",
    answer: "As you complete challenges and learn new concepts related to web security, you'll earn experience points. These points contribute to your overall level, unlocking more advanced challenges and topics, helping you improve your skills step by step."
  },
  {
    question: "Is it legal to practice web security techniques?",
    answer: "Yes, it's legal to practice web security techniques in a controlled, educational environment like ours. However, it's crucial to use these skills ethically and responsibly. Never attempt to exploit real websites or systems without explicit permission, as this is illegal and harmful."
  },
  {
    question: "Do I need prior programming experience?",
    answer: "While some basic knowledge of HTML, JavaScript, and web technologies is helpful, our platform is designed for beginners. We provide resources, tutorials, and explanations to help you build the necessary skills to secure web applications and prevent common vulnerabilities."
  },
];

export default faqItems;
