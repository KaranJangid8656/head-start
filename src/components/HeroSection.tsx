
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen, Star, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#24A89C] via-[#2BB4A8] to-[#32C0B4] overflow-hidden">
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90">
              <Star className="w-4 h-4 text-orange-300" />
              #1 Career Development Book
              <Users className="w-4 h-4 text-orange-300" />
            </div>

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
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Unlock Your Career Potential with HeadStart. Start Your Journey to Success Today! 
                <span className="block mt-2 font-medium text-orange-200">
                  Don't just dream about a successful career—take action!
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 border-0 group"
              >
                Order Now!
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group"
              >
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                Watch Video Series
              </Button>
            </div>

            {/* Authors info */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-6">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <BookOpen className="w-6 h-6 text-orange-300" />
                <span className="text-white/90 font-medium">By Vivek Gambhir & Sunder Ramachandran</span>
              </div>
            </div>
          </div>

          {/* Right content - Book image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-orange-400/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse">
                <Star className="w-8 h-8 text-orange-300" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse delay-1000">
                <Users className="w-10 h-10 text-white" />
              </div>

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

              {/* Success metrics */}
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hidden xl:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5.0</div>
                  <div className="flex space-x-1 justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-orange-300 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-white/70">1000+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
