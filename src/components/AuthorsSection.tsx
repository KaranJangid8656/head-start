
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedIn, Mail } from "lucide-react";

const authors = [
  {
    name: "Vivek Gambhir",
    bio: "Vivek Gambhir, a Harvard Business School graduate, has 30 years of leadership experience across consumer goods, tech, and consulting in companies such as Bain, Godrej and boAt. In addition to serving on several boards, Vivek is a venture partner at Lightspeed India, supporting founders in scaling up. He is passionate about mentoring young professionals and shares his insights on his blog, www.monday-8am.com.",
    image: "/placeholder.svg"
  },
  {
    name: "Sunder Ramachandran",
    bio: "Sunder Ramachandran has 20 years of diverse experience including a five-year stint as an entrepreneur. He has worked in leadership roles in companies such as Dr. Reddy's Laboratories, GSK and Pfizer. He holds an MBA from the Macquarie Graduate School of Management, Sydney and an MSc in Human Resources from the University of Leicester, UK. Sunder is also a Chartered Fellow of CIPD UK.",
    image: "/placeholder.svg"
  }
];

export const AuthorsSection = () => {
  return (
    <section id="authors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet The Authors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from leaders who have walked this path and successfully navigated the challenges that come with it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {authors.map((author, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{author.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{author.name}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{author.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <LinkedIn className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
