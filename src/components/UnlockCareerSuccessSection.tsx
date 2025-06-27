import React from "react";

export const UnlockCareerSuccessSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      {/* Left: Text */}
      <div className="flex-1 text-left">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 font-montserrat">
          Unlock The Secrets To Career{" "}
          <span className="text-[#24A89C]">Success</span>
        </h2>
        <h3 className="text-2xl font-semibold text-black mb-2 font-montserrat text-justify">
          By Vivek Gambhir and Sunder Ramachandran
        </h3>
        <p className="text-lg text-gray-700 mb-6 text-justify max-w-2xl">
          
        </p>
        <a
          href="https://amzn.to/43b42LE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-10 py-4 text-xl rounded-none bg-[#1e8c7c] hover:bg-[#24A89C] text-white font-bold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-[#24A89C] focus:ring-opacity-60 animate-glow">
            ORDER NOW!
          </button>
        </a>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="https://headstartbook.in/wp-content/uploads/2024/09/Untitled-design-_6_-_1_-2048x2048.webp"
          alt="Unlock The Secrets To Career Success"
          className="w-full max-w-xl rounded-2xl shadow-2xl object-cover border-4 border-[#24A89C]"
        />
      </div>
    </div>
  </section>
);

/* Add this to your global CSS (e.g., App.css or index.css):
.animate-glow {
  box-shadow: 0 0 16px 4px #24A89C, 0 0 32px 8px #1e8c7c;
  transition: box-shadow 0.3s;
}
.animate-glow:hover, .animate-glow:focus {
  box-shadow: 0 0 32px 8px #24A89C, 0 0 48px 16px #1e8c7c;
}
*/
