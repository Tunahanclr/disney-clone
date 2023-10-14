import React, { useState } from "react";
import accordion from "../../data/Accordion";

export default function FrequentlyAskedQuestions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) setActiveIndex(null);
    else setActiveIndex(index);
  };

  return (
    <div className="text-white p-20 min-h-screen">
      <h2 className="text-4xl leading-tight font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-full mx-auto">
        {accordion.map((faq, i) => (
          <div key={i} className="mb-8 w-full bg-[#13151d]">
            <button
              onClick={() => handleToggle(i)}
              className="w-full text-left py-3 px-4 focus:outline-none rounded-md transition-colors duration-200 ease-in-out bg-[#13151d]"
            >
              <div className="flex h-20 justify-between items-center">
                <span className="text-[20px]">{faq.question}</span>
                <span className="font-bold text-[40px]">
                  {activeIndex === i ? "-" : "+"}
                </span>
              </div>
            </button>
            <div 
              className="transition-max-height duration-200 ease-in-out overflow-hidden"
              style={{maxHeight: activeIndex === i ? "1000px" : "0"}}
            >
              <div className=" p-4">
                <h3 className="text-xl font-semibold mb-3">{faq.answerTitle}</h3>
                {faq.answerList && (
                  <ul className="list-disc pl-5">
                    {faq.answerList.map((item, idx) => (
                      <li key={idx} className="mb-2 text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
