import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const audiences = [
	{
		icon: GraduationCap,
		title: "Graduates & College Students",
		description:
			"Transition smoothly into the professional world with guidance on kickstarting your career successfully.",
		gradient: "from-[#24A89C] to-[#2BB4A8]",
	},
	{
		icon: Briefcase,
		title: "Early-Career Professionals",
		description:
			"Accelerate your career growth with strategies for building relationships, managing your boss, and achieving work-life balance.",
		gradient: "from-[#24A89C] to-orange-500",
	},
	{
		icon: TrendingUp,
		title: "Mid-Career Professionals",
		description:
			"Reinvigorate your career by gaining fresh perspectives from industry leaders on overcoming stagnation.",
		gradient: "from-orange-500 to-orange-600",
	},
];

export const WhoWillBenefitSection = () => {
	return (
		<section className="py-16 bg-gradient-to-br from-white via-orange-50 to-[#24A89C]/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Who Will Benefit from HeadStart?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						A comprehensive guide designed to empower individuals across various
						stages of their professional journey
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{audiences.map((audience, index) => (
						<Card
							key={index}
							className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-black shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm"
						>
							<CardContent className="p-0">
								<div className="h-32 flex items-center justify-center bg-white">
									{index === 0 ? (
										<img
											src="https://cdn-icons-png.flaticon.com/128/3068/3068380.png"
											alt="Student Icon"
											className="w-24 h-24 object-cover rounded-full bg-white p-1 shadow"
										/>
									) : index === 1 ? (
										<img
											src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png"
											alt="Professional Icon"
											className="w-24 h-24 object-cover rounded-full bg-white p-1 shadow"
										/>
									) : (
										<img
											src="https://cdn-icons-png.flaticon.com/128/11498/11498793.png"
											alt="Mid-Career Icon"
											className="w-24 h-24 object-cover rounded-full bg-white p-1 shadow"
										/>
									)}
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{audience.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{audience.description}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
