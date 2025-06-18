
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-[#24A89C]/30 to-gray-800">
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#24A89C] to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unlock The Secrets To Career Success
          </h2>
          <p className="text-xl text-white/90 mb-8">
            By Vivek Gambhir and Sunder Ramachandran
          </p>
          <Button size="lg" className="bg-white text-[#24A89C] hover:bg-gray-100 px-8 py-3 text-lg font-semibold group border-0">
            Get Your Copy Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-[#24A89C] to-orange-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HeadStart</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                COPYRIGHT © Vivek Gambhir AND Sunder Ramachandran 2024. ALL RIGHTS RESERVED.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Website Design by Abhishek Singh
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
