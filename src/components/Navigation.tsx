
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
              HeadStart
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#authors" className="text-gray-700 hover:text-teal-600 transition-colors">Meet Authors</a>
            <a href="#guides" className="text-gray-700 hover:text-teal-600 transition-colors">Visual Guides</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">Reviews</a>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#authors" className="block text-gray-700 hover:text-teal-600 transition-colors">Meet Authors</a>
            <a href="#guides" className="block text-gray-700 hover:text-teal-600 transition-colors">Visual Guides</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-teal-600 transition-colors">Reviews</a>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
