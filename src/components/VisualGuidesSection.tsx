import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen, Users, Handshake, RefreshCw, Target, Timer } from "lucide-react";

const guides = [
	{ icon: BookOpen, title: "Be an Avid Learner", color: "from-[#24A89C] to-[#2BB4A8]" },
	{ icon: Users, title: "Be a Team Player", color: "from-[#24A89C] to-orange-500" },
	{ icon: Handshake, title: "Be a Relationship Builder", color: "from-orange-500 to-orange-600" },
	{ icon: RefreshCw, title: "Be a Career Transition Expert", color: "from-[#24A89C] to-[#32C0B4]" },
	{ icon: Target, title: "Be a Go Getter", color: "from-orange-500 to-[#24A89C]" },
	{ icon: Timer, title: "Be a Marathon Runner", color: "from-[#2BB4A8] to-orange-500" }
];

export const VisualGuidesSection = () => {
	return (
		<section id="guides" className="py-16 bg-gradient-to-br from-[#24A89C]/10 via-white to-orange-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Bite-Sized Section Highlights</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Each visual guide captures the most valuable lessons from the book's chapters. Perfect for quick learning
						and easy reference in your day-to-day work.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{guides.map((guide, index) => (
						<Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
							<CardContent className="p-6 text-center">
								<div className={`w-16 h-16 bg-gradient-to-r ${guide.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
									<guide.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center">
					<a href="https://headstartbook.in/visual-guides/" target="_blank" rel="noopener noreferrer">
						<Button size="lg" className="bg-gradient-to-r from-[#24A89C] to-[#2BB4A8] hover:from-[#2BB4A8] hover:to-[#32C0B4] text-white px-8 py-3 text-lg group border-0">
							<Download className="mr-2 w-5 h-5 group-hover:bounce" />
							Download Visual Guides
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};
