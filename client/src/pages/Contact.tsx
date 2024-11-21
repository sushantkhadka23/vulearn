import React, { useState, useRef } from 'react';
import { Mail, User, MessageSquare, Send, Loader2 } from 'lucide-react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import appConfig from '../config/app_config';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // const handleRecaptchaChange = (value: string | null) => {
  //   setRecaptchaValue(value);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) {
      setStatus('Syntax Error: Form not found. Have you tried compiling and running again?');
      setIsSubmitting(false);
      return;
    }

    if (!recaptchaValue) {
      setStatus('Please complete the reCAPTCHA challenge before submitting.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission logic
    try {
      // Simulating a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setStatus('Woohoo! Your message has been teleported to my inbox!');
      formRef.current.reset();
      setRecaptchaValue(null);
    } catch (error) {
      setStatus('Uh-oh! Looks like your message got stuck in a digital traffic jam. Try again?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-bg dark:bg-fg p-6 font-lato">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-fg dark:text-bg mb-4 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8" />
             Contact Us
          </h2>
          <p className="text-lg text-fg/80 dark:text-bg/80 max-w-xl mx-auto">
          If you're interested for further learning,you can email us with you message.
          </p>
        </div>

        {/* Form Section */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-bg/60 dark:bg-fg/60 backdrop-blur-sm shadow-lg rounded-xl border border-fg/20 dark:border-bg/20 p-8 space-y-6"
        >
          {/* Name Field */}
          <div className="group">
            <label className="flex items-center gap-2 text-fg dark:text-bg text-sm font-medium mb-2" htmlFor="from_name">
              <User className="w-4 h-4" />
              Your Name
            </label>
            <input
              required
              className="w-full px-4 py-3 bg-bg/50 dark:bg-fg/50 border border-fg/20 dark:border-bg/20 rounded-lg 
                        text-fg dark:text-bg placeholder:text-fg/40 dark:placeholder:text-bg/40
                        focus:outline-none focus:ring-2 focus:ring-fg/30 dark:focus:ring-bg/30 
                        transition-all duration-300"
              name="from_name"
              id="from_name"
              type="text"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="flex items-center gap-2 text-fg dark:text-bg text-sm font-medium mb-2" htmlFor="from_email">
              <Mail className="w-4 h-4" />
              Your Email
            </label>
            <input
              required
              className="w-full px-4 py-3 bg-bg/50 dark:bg-fg/50 border border-fg/20 dark:border-bg/20 rounded-lg 
                        text-fg dark:text-bg placeholder:text-fg/40 dark:placeholder:text-bg/40
                        focus:outline-none focus:ring-2 focus:ring-fg/30 dark:focus:ring-bg/30 
                        transition-all duration-300"
              name="from_email"
              id="from_email"
              type="email"
              placeholder="doejohn@mail.com"
            />
          </div>

          {/* Message Field */}
          <div className="group">
            <label className="flex items-center gap-2 text-fg dark:text-bg text-sm font-medium mb-2" htmlFor="message">
              <MessageSquare className="w-4 h-4" />
              Your Message
            </label>
            <textarea
              required
              className="w-full px-4 py-3 bg-bg/50 dark:bg-fg/50 border border-fg/20 dark:border-bg/20 rounded-lg 
                        text-fg dark:text-bg placeholder:text-fg/40 dark:placeholder:text-bg/40
                        focus:outline-none focus:ring-2 focus:ring-fg/30 dark:focus:ring-bg/30 
                        transition-all duration-300 min-h-[120px] resize-y"
              name="message"
              id="message"
              placeholder="Share your message....."
            ></textarea>
          </div>

          {/* reCAPTCHA  will integrate in future*/}
          {/* <ReCAPTCHA
            sitekey={appConfig.recaptchaSiteKey}
            onChange={handleRecaptchaChange}
          /> */}

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            className={`w-full group relative inline-flex items-center justify-center bg-fg dark:bg-bg 
                       text-bg dark:text-fg font-medium px-6 py-3 rounded-lg
                       hover:bg-fg/90 dark:hover:bg-bg/90 
                       focus:outline-none focus:ring-2 focus:ring-fg/30 dark:focus:ring-bg/30
                       disabled:opacity-70 transition-all duration-300`}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </>
            )}
          </button>

          {/* Status Message */}
          {status && (
            <p className={`mt-4 text-center text-fg/50 ${status.includes('Uh-oh') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
