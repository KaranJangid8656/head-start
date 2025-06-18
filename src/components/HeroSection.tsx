
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Boost your career with </span>
                <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                  HeadStart
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unlock Your Career Potential with HeadStart. Start Your Journey to Success Today! 
                Don't just dream about a successful career—take action!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg group">
                Order Now!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 px-8 py-3 text-lg group">
                <Play className="mr-2 w-5 h-5" />
                Watch Video Series
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <span>By Vivek Gambhir & Sunder Ramachandran</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/825fd583-53cf-4652-a3b4-946d3afc37ed.png" 
                alt="HeadStart Book Cover"
                className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-orange-400/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
