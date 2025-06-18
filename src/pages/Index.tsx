
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, TrendingUp, Award, Star, ArrowRight, Download, Play, LinkedIn, Mail } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhoWillBenefitSection } from "@/components/WhoWillBenefitSection";
import { VisualGuidesSection } from "@/components/VisualGuidesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AuthorsSection } from "@/components/AuthorsSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <WhoWillBenefitSection />
      <VisualGuidesSection />
      <TestimonialsSection />
      <AuthorsSection />
      <Footer />
    </div>
  );
};

export default Index;
