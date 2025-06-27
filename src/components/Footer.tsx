import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black shadow-inner">
      {/* Footer Content */}
      <div className="py-10 flex items-center min-h-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 h-full">
            <span className="text-4xl font-bold text-white tracking-wide drop-shadow font-montserrat">
              HeadStart
            </span>
            <p className="text-gray-300 text-sm font-medium tracking-wide font-montserrat text-center md:text-left">
              COPYRIGHT © Vivek Gambhir AND Sunder Ramachandran 2024. ALL RIGHTS RESERVED.
            </p>
            <p className="text-gray-300 text-sm font-medium tracking-wide font-montserrat text-center md:text-right">
              <a
                href="https://script-verse-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus:underline"
              >
                Website Design by ScriptVerse
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
