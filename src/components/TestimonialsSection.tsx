
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "If you want a head start early in your career, I highly recommend this book. Excellent, practical, insightful and actionable advice from two experienced practitioners.",
    author: "Bharat Puri",
    position: "Managing Director, Pidilite Industries Ltd"
  },
  {
    quote: "I wouldn't have achieved my career trajectory without Vivek's mentoring, honest feedback and boundless encouragement. I could not recommend a book more highly than this one.",
    author: "Nisaba Godrej",
    position: "Executive Chairperson of Godrej Consumer Products Ltd"
  },
  {
    quote: "HeadStart is the ultimate career compass I wish I had when I was starting out. Practical, relatable and comprehensive, it should be mandatory reading for young professionals.",
    author: "Vineeta Singh",
    position: "Co-Founder and CEO, SUGAR Cosmetics"
  },
  {
    quote: "I wish I had read HeadStart when I started my professional life. This is a must-read for anyone looking to chart a deliberate path to success in today's dynamic times.",
    author: "Karan Singh",
    position: "Chairman, Bain & Company, India"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Critical Acclaim</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What industry leaders are saying about HeadStart
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="w-8 h-8 text-teal-400 mr-3 flex-shrink-0" />
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
