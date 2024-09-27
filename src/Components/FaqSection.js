import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "When does the workshop start?", answer: "The workshop starts on March 30, 2024." },
    { question: "Is the workshop live or pre-recorded?", answer: "The workshop is conducted live with recordings available." },
    { question: "Timing of the workshop?", answer: "The workshop starts at 6 PM every day and lasts for 2 hours." },
    { question: "Will I get recording if I miss out on a live session?", answer: "Yes, recordings will be provided after each session." },
    { question: "Is it a certified workshop?", answer: "Yes, you'll receive a certification upon completion." },
    { question: "Is there a specific device requirement?", answer: "A laptop or desktop with a stable internet connection is recommended." },
    { question: "Are there any pre-requisites to attend this workshop?", answer: "No prior experience is needed, anyone can attend." },
    { question: "I made the payment but didn't receive any update", answer: "Please contact our support team at support@example.com." },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-2 border-black bg-[#1b0751] text-white my-2 p-4 cursor-pointer" onClick={() => toggleAnswer(index)}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPlus}
                className={`text-2xl transition-transform duration-300 mr-4 ${openIndex === index ? 'rotate-90' : ''}`}
              />
              <span className="text-lg font-semibold">{faq.question}</span>
            </div>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-sm">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
