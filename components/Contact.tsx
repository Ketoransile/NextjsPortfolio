"use client";
import React, { useState, useRef } from "react";

const Contact = () => {
  const [action, setAction] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const formRef = useRef<HTMLFormElement | null>(null); // Ref to the form

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <div className="mb-6">
        <h1 className="text-primary text-3xl text-center font-bold">
          Contact Me
        </h1>
      </div>

      <div className="w-full max-w-md pt-6">
        <form
          ref={formRef} // Attach the ref here
          className="flex flex-col gap-4"
          onReset={() => {
            setAction("reset");
            setIsSubmitted(false); // Reset form submission state
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const formData = Object.fromEntries(data.entries());
            setAction(`submit ${JSON.stringify(formData)}`);
            console.log("Form submitted:", formData); // Debugging

            setIsSubmitted(true); // Set form as submitted

            // Clear the form fields after submission
            if (formRef.current) {
              formRef.current.reset(); // Reset form
            }
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white text-sm mb-2">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="text-white text-sm mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter the subject"
              required
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="reset"
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Reset
            </button>
          </div>

          {/* Success message after submission */}
          {isSubmitted && (
            <div className="mt-4 text-green-500 text-sm">
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          {/* Action feedback */}
          {action && !isSubmitted && (
            <div className="text-small text-gray-500 mt-4">
              Action: <code>{action}</code>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
