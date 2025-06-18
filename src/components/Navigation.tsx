
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#24A89C] to-[#2BB4A8] backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              HeadStart
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#authors" className="text-white/90 hover:text-white transition-colors">Meet Authors</a>
            <a href="#guides" className="text-white/90 hover:text-white transition-colors">Visual Guides</a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">Reviews</a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#24A89C]/95 py-4 space-y-4">
            <a href="#about" className="block text-white/90 hover:text-white transition-colors">About</a>
            <a href="#authors" className="block text-white/90 hover:text-white transition-colors">Meet Authors</a>
            <a href="#guides" className="block text-white/90 hover:text-white transition-colors">Visual Guides</a>
            <a href="#testimonials" className="block text-white/90 hover:text-white transition-colors">Reviews</a>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0">
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
