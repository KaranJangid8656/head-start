
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, BookOpen, Award, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Actionable Tactics",
    description: "Practical strategies, tools, Monday Morning Actions to implement immediately ensuring tangible progress in your career management."
  },
  {
    icon: Award,
    title: "Leadership Insights",
    description: "Valuable insights, Pro tips from CEOs, entrepreneurs, coaches, and leaders. Learn from their successes and challenges."
  },
  {
    icon: Users,
    title: "Holistic Approach",
    description: "Covers a wide array of career topics for comprehensive understanding. Get guidance on relationships, work-life balance, and teamwork."
  },
  {
    icon: BookOpen,
    title: "Real Examples",
    description: "Real-life examples from authors' experiences, relatable stories of young professionals navigating career challenges."
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description: "Overcome challenges and achieve aspirations through dedicated personal and professional development."
  },
  {
    icon: Lightbulb,
    title: "Continual Learning",
    description: "Importance of an avid learning mindset. Strategies for sustainable progression and staying relevant."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes HeadStart Different?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six core pillars that make this book your ultimate career companion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
