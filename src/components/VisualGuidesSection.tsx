import React from "react";
import { BookOpen, Users, Handshake, RefreshCw, Target, Timer } from "lucide-react";

const guides = [
	{
		icon: BookOpen,
		title: "Be an Avid Learner",
		color: "from-[#24A89C] to-[#2BB4A8]",
		content:
			"This chapter encourages readers to cultivate a growth mindset and adopt lifelong learning habits. It provides strategies to set learning goals, leverage educational frameworks, and engage with diverse learning platforms and communities. The key message is to embrace curiosity, seek new challenges, and continuously expand one’s knowledge and skills."
	},
	{
		icon: Users,
		title: "Be a Team Player",
		color: "from-[#24A89C] to-orange-500",
		content:
			"This chapter highlights the importance of collaboration, communication, and building strong professional relationships. It offers insights into finding one’s tribe, cultivating emotional intelligence, and navigating workplace dynamics. The chapter encourages readers to be generous, empathetic, and supportive team members while setting healthy boundaries."
	},
	{
		icon: Handshake,
		title: "Be a Relationship Builder",
		color: "from-orange-500 to-orange-600",
		content:
			"This chapter delves into strategies for fostering positive relationships with managers, colleagues, and mentors. It covers topics such as understanding your boss’s priorities, seeking feedback, and effective storytelling. The key takeaway is the importance of building trust, communicating clearly, and maintaining a professional yet friendly demeanor."
	},
	{
		icon: RefreshCw,
		title: "Be a Career Transition Expert",
		color: "from-[#24A89C] to-[#32C0B4]",
		content:
			"Work-life balance is crucial, and this chapter provides insights on maintaining harmony between your professional and personal lives. Topics may include time management, prioritizing self-care, setting boundaries, and finding fulfillment outside of work. The aim is to help readers avoid burnout and lead a more well-rounded, satisfying life."
	},
	{
		icon: Target,
		title: "Be a Go-Getter",
		color: "from-orange-500 to-[#24A89C]",
		content:
			"This chapter is all about developing a proactive and driven mindset to achieve your career goals. It will cover strategies like taking calculated risks, seizing opportunities, networking effectively, and persevering through challenges. The focus is on cultivating an ambitious yet ethical approach to get noticed and advance in your profession."
	},
	{
		icon: Timer,
		title: "Be a Marathon Runner",
		color: "from-[#2BB4A8] to-orange-500",
		content:
			"This chapter emphasizes the importance of viewing career growth as a long-term journey. It will likely discuss developing resilience, adaptability, and a growth mindset to navigate career transitions and setbacks successfully. The key message is to stay focused on your long-term vision while being flexible to changing circumstances."
	}
];

export const VisualGuidesSection = () => {
  return (
    <section id="guides" className="py-16 bg-gradient-to-br from-[#24A89C]/10 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bite-Sized Section Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each visual guide captures the most valuable lessons from the book's chapters. Perfect for quick learning
            and easy reference in your day-to-day work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="border border-black shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl w-full max-w-[380px] min-h-[110px] flex flex-col items-center p-3 text-center transition-all duration-300 hover:shadow-2xl hover:bg-white mx-auto"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${guide.color} rounded-full flex items-center justify-center mb-4`}>
                <guide.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-900 text-lg font-semibold mb-2">{guide.title}</span>
              <div className="text-gray-700 text-base text-justify mt-2">
                {guide.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
