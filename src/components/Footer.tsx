import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-[#24A89C] shadow-inner">
      {/* CTA Section */}
      <div className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unlock The Secrets To Career Success
          </h2>
          <p className="text-xl text-white/90 mb-8">
            By Vivek Gambhir and Sunder Ramachandran
          </p>
          <a
            href="https://amzn.to/43b42LE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold group border-0"
            >
              Get Your Copy Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>

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
