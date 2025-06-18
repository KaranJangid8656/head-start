
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why HeadStart?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cut through the noise of online career advice with "HeadStart." Learn from industry veterans 
            who share real-life experiences, hard-earned insights, and proven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn from <strong>Vivek Gambhir</strong>, former CEO of Godrej Consumer Products and boAt Lifestyle, 
              and <strong>Sunder Ramachandran</strong>, a seasoned business leader. Whether you're starting 
              your career or making a transition, this book is your roadmap to success.
            </p>
            
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg border-l-4 border-teal-500">
              <p className="text-gray-800 font-medium italic">
                "The perfect runway for a young professional's career to take off. Packed with actionable 
                insights from industry veterans and proven strategies to win at the workplace."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                - Pramath Sinha, Founder and Trustee, Ashoka University
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/825fd583-53cf-4652-a3b4-946d3afc37ed.png" 
              alt="HeadStart Book"
              className="w-full max-w-sm mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
