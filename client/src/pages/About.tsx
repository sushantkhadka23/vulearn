import FAQItem from "../components/FAQItems";
import faqItems from "../types/faqItems";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-txt font-serif p-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="text-lg">
            At VuLearn, we are dedicated to raising awareness about web security
            for the new generation of developers. Our structured, step-by-step
            approach helps you recognize common vulnerabilities and equips you
            with the knowledge to apply essential security practices. We aim to
            empower you to create safer web applications by focusing on
            practical, real-world solutions to today's digital security
            challenges.
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
