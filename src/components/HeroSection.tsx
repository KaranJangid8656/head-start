import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-24 bg-gradient-to-br from-[#24A89C] via-[#2BB4A8] to-[#32C0B4] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-400/5 to-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white block">Boost your</span>
                <span className="text-white block">career with</span>
                <span className="bg-gradient-to-r from-orange-300 via-orange-200 to-yellow-200 bg-clip-text text-transparent block">
                  HeadStart
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-400 mx-auto lg:mx-0 rounded-full"></div>
              
              <p
  className="text-2xl md:text-2.5xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto text-center mt-6 mb-2"
  style={{
    fontFamily: 'Montserrat, Arial, sans-serif',
    textShadow: '0 2px 12px rgba(0,0,0,0.12)'
  }}
>
  Unlock Your Career Potential with HeadStart.<br className="hidden md:inline" />
  <span className="block">Start Your Journey to Success Today!</span>
  <span
    className="block mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-400 drop-shadow"
    style={{fontFamily: 'Montserrat, Arial, sans-serif'}}
  >
    Don't just dream about a successful career—<span className="underline underline-offset-4 decoration-orange-300">take action!</span>
  </span>
</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="https://amzn.to/43b42LE" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 border-0 group"
                >
                  Order Now!
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a href="https://youtu.be/PyWPxMIBzO4" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 border-0 group ml-0 sm:ml-4"
                >
                  <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Watch Video
                </Button>
              </a>
            </div>

            {/* Authors info */}
            <div className="flex items-center justify-center lg:justify-start pt-2 pb-2 gap-2">
              <img src="https://headstartbook.in/wp-content/uploads/2024/09/a.webp" alt="Vivek Gambhir" className="w-11 h-11 rounded-full object-center object-cover border-2 border-orange-900 shadow" style={{objectPosition: 'top'}} />
              <img src="https://headstartbook.in/wp-content/uploads/2024/09/Untitled-design-5-1.webp" alt="Sunder Ramachandran" className="w-11 h-11 rounded-full object-center object-cover border-2 border-orange-900 shadow" style={{objectPosition: 'top'}} />
              <span className="text-orange-900 font-semibold whitespace-nowrap" style={{fontFamily: 'Montserrat, Arial, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
                By <span className="font-bold">Vivek Gambhir</span> & <span className="font-bold">Sunder Ramachandran</span>
              </span>
            </div>
          </div>

          {/* Right content - Book image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main book image */}
              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/825fd583-53cf-4652-a3b4-946d3afc37ed.png" 
                  alt="HeadStart Book Cover"
                  className="w-full max-w-md mx-auto drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500"
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-white/30 blur-3xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
