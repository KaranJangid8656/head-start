import React, { useState } from "react";

const cardTitles = [
  "Be an Avid Learner",
  "Be a Team Player",
  "Be a Relationship Builder",
  "Be a Career Transition Expert",
  "Be a Go Getter",
  "Be a Marathon Runner",
  "Be an Avid Learner",
  "Be a Team Player",
  "Be a Relationship Builder",
  "Be a Career Transition Expert",
  "Be a Go Getter"
];

const cardContents = Array(11).fill(
  "Card content will be provided by you."
);

const cardImages = [
  "https://headstartbook.in/wp-content/uploads/2024/09/12.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/15.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/1.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/2.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/3.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/5.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/6.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/8.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/9.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/10.png",
  "https://headstartbook.in/wp-content/uploads/2024/09/11.png"
];

export const LearnFromLeadersSection = () => {
  const [start, setStart] = useState(0);
  const total = cardTitles.length;

  const handlePrev = () => {
    setStart((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStart((prev) => (prev + 1) % total);
  };

  const visibleCards = [
    cardTitles[start],
    cardTitles[(start + 1) % total]
  ];

  const visibleContents = [
    cardContents[start],
    cardContents[(start + 1) % total]
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Learn from Leaders who have walked this path
        </h2>
        <p className="text-base text-gray-700 mb-6 text-center leading-relaxed w-full max-w-3xl mx-auto">
          
        </p>
      </div>

      <div className="flex gap-6 justify-center items-center mx-auto overflow-hidden" style={{ maxWidth: '1240px', width: '100%' }}>
        {cardTitles.map((title, idx) => (
          <div
            key={title + idx}
            className="bg-gradient-to-br from-[#24A89C]/10 to-orange-50 rounded-xl shadow-lg p-0 min-w-0 flex flex-col items-center overflow-hidden"
            style={{ width: '600px', height: '450px', flex: '0 0 600px', display: (idx === start || idx === (start + 1) % cardTitles.length) ? 'flex' : 'none' }}
          >
            <img
              src={cardImages[idx]}
              alt={title}
              className="object-cover"
              style={{ width: '600px', height: '450px' }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 shadow-lg text-2xl text-gray-700 hover:bg-[#24A89C]/90 hover:text-white hover:border-[#24A89C] focus:outline-none focus:ring-2 focus:ring-[#24A89C] transition-all duration-200"
          aria-label="Previous"
        >
          <span className="sr-only">Previous</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 shadow-lg text-2xl text-gray-700 hover:bg-[#24A89C]/90 hover:text-white hover:border-[#24A89C] focus:outline-none focus:ring-2 focus:ring-[#24A89C] transition-all duration-200"
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </section>
  );
};
