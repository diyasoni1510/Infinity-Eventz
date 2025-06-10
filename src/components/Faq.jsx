import React, { useState, useRef, useEffect } from "react";
import faq from "../images/faq-bg.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question:
      "What services does Infinity offer for destination weddings/events?",
    answer:
      "Infinity offers end-to-end services for destination weddings and events, including venue selection, theme decor, catering, entertainment, vendor management, and on-site coordination to create a seamless, memorable experience for guests.",
  },
  {
    question:
      "How can I check the availability and pricing for a venue or service?",
    answer:
      "You can check availability and pricing by visiting our website, selecting your preferred venue or service, and submitting an inquiry form. Our team will respond with details tailored to your requirements within 24-48 hours",
  },
  {
    question: "Can I customize the wedding or event package as per my needs?",
    answer:
      "Absolutely! Infinity allows complete customization of packages to match your preferences—be it decor themes, catering, entertainment, or guest management, ensuring your event reflects your style and vision.",
  },
  {
    question: "Do you provide on-ground assistance and event planning support?",
    answer:
      "Yes, Infinity provides dedicated on-ground assistance, including event managers, coordinators, and a support team to ensure every aspect of your event runs smoothly, so you can enjoy your special day stress-free.",
  },
  {
    question: "What is the cancellation or refund policy?",
    answer:
      "Our cancellation and refund policy is flexible based on the stage of planning. If cancellation occurs within a stipulated time, a partial or full refund may apply. Please contact our team for detailed terms and conditions.",
  },
  {
    question: "Are the properties/venues verified and safe for guests?",
    answer:
      "Yes, all our properties and venues are thoroughly verified for safety, hygiene, and compliance with local regulations. We prioritize guest well-being and ensure venues are secure, accessible, and equipped with essential facilities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="lg:px-28 lg:py-14 px-5 py-6 bg-contain bg-center"
      style={{ backgroundImage: `url(${faq})` }}
    >
      <div className="text-center">
        <h2 className="uppercase mb-3">Have Questions? We’ve Got Answers</h2>

        <div className="py-6 md:py-14 flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b-2 border-gray-300 py-4 text-[#6D6D6D]">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center font-semibold text-lg focus:outline-none"
      >
        {faq.question}
        <span className="p-1 font-bold border text-black">
          {isOpen ? <IoIosArrowUp size={14} /> : <IoIosArrowDown size={14} />}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <p className="mt-3 text-gray-700 text-start">{faq.answer}</p>
      </div>
    </div>
  );
}
