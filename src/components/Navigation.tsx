
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-6 max-w-5xl w-[96%] rounded-2xl bg-gradient-to-r from-[#24A89C]/90 to-[#2BB4A8]/90 backdrop-blur-md z-50 shadow-2xl border border-white/20" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
  <span
  className="text-2xl md:text-3xl font-semibold text-white tracking-wide"
  style={{
    fontFamily: 'Montserrat, Arial, sans-serif',
    letterSpacing: '0.01em',
    textShadow: '0 1px 4px rgba(0,0,0,0.10)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }}
>
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
