import React, { useState } from "react";

const HealthFaq = [
  {
    question: "What is health insurance?",
    answer:
      "Health insurance is a financial product that helps you pay for medical expenses. It typically covers hospitalization costs, surgery, doctor visits, and prescriptions.",
  },
  {
    question: "Why do I need health insurance?",
    answer:
      "Medical bills can be very expensive. Health insurance helps protect you from financial hardship in case of an accident, illness, or unexpected medical emergency. bills can be very expensive. Health insurance helps protect you from financial hardship in case of an accident, illness, or unexpected medical emergency.",
  },
  {
    question: "How much does health insurance cost?",
    answer:
      "The cost of health insurance depends on several factors, including your age, health, location, the type of plan you choose, and your deductible (the amount you pay out of pocket before your insurance kicks in).",
  },
  // Add more FAQ entries as needed
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {HealthFaq.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between w-full text-left text-gray-800 font-medium text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
