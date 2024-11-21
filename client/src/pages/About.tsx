import FAQItem from "../components/FAQItems";
import faqItems from "../types/faqItems";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-fg font-serif p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-fg font-mono">
          &lt;About XSS Learning/&gt;
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="text-lg">
            At XSS Learning, we promise to provide a safe, structured, and
            engaging environment for you to master Cross-Site Scripting (XSS)
            techniques. Our step-by-step approach ensures that you'll build a
            strong foundation in web security, allowing you to level up your
            skills with each completed challenge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
