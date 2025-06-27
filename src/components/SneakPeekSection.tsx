import React from "react";
import { LearnFromLeadersSection } from "./LearnFromLeadersSection";
import { AuthorsSection } from "./AuthorsSection";

export const SneakPeekSection = () => (
  <>
    <section className="py-16 bg-gradient-to-br from-white via-[#24A89C]/10 to-orange-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What’s Inside? Sneak Peek</h2>
          <p className="text-lg text-gray-700 mb-6">
            Each of these visual guides captures the most valuable lessons from the book’s chapters. Use them to sharpen your skills, motivate your team, or keep yourself on track with actionable insights. Perfect for quick learning and easy to reference in your day-to-day work.
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base font-medium">
            <li>Be an Avid Learner</li>
            <li>Be a Team Player</li>
            <li>Be a Relationship Builder</li>
            <li>Be a Career Transition Expert</li>
            <li>Be a Go Getter</li>
            <li>Be a Marathon Runner</li>
          
          </ul>
        </div>
        <div className="flex-1 flex justify-end items-start">
          <div className="relative">
            <img
              src="https://headstartbook.in/wp-content/uploads/2024/09/Scatch-min.webp"
              alt="Sneak Peek Visual Guide"
              className="relative z-10 shadow-lg object-cover w-[420px] md:w-[500px] lg:w-[580px] xl:w-[660px] mt-3 md:mt-11 rounded-2xl ring-4 ring-[#24A89C] ring-offset-4 ring-offset-white"
            />
          </div>
        </div>
      </div>
    </section>
    <LearnFromLeadersSection />
  </>
);

export const YouTubeVideoSection = () => (
  <section className="w-full flex justify-center items-center py-16 bg-white">
    <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/wHQSWw3imaA?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full object-cover"
      ></iframe>
    </div>
  </section>
);


