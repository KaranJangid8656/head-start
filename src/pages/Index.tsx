import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, TrendingUp, Award, Star, ArrowRight, Download, Play, Linkedin, Mail } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhoWillBenefitSection } from "@/components/WhoWillBenefitSection";
import { VisualGuidesSection } from "@/components/VisualGuidesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SneakPeekSection } from "@/components/SneakPeekSection";
import { YouTubeVideoSection } from "@/components/SneakPeekSection";
import { MeetTheAuthorsSection } from "@/components/MeetTheAuthorsSection";
import { UnlockCareerSuccessSection } from "@/components/UnlockCareerSuccessSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <WhoWillBenefitSection />
      <VisualGuidesSection />
      <SneakPeekSection />
      <TestimonialsSection />
      <MeetTheAuthorsSection />
      <YouTubeVideoSection />
      <UnlockCareerSuccessSection />
      <Footer />
    </div>
  );
};

export default Index;
