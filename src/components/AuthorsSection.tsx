import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const authors = [
	{
		name: "Vivek Gambhir",
		bio: "Vivek Gambhir, a Harvard Business School graduate, has 30 years of leadership experience across consumer goods, tech, and consulting in companies such as Bain, Godrej and boAt. In addition to serving on several boards, Vivek is a venture partner at Lightspeed India, supporting founders in scaling up. He is passionate about mentoring young professionals and shares his insights on his blog, www.monday-8am.com.",
		image: "https://headstartbook.in/wp-content/uploads/2024/09/a.webp",
		linkedin: "https://www.linkedin.com/in/vivek-gambhir-b955a836/",
		email: "vivekgambhir@gmail.com",
	},
	{
		name: "Sunder Ramachandran",
		bio: "Sunder Ramachandran has 20 years of diverse experience including a five-year stint as an entrepreneur. He has worked in leadership roles in companies such as Dr. Reddy's Laboratories, GSK and Pfizer. He holds an MBA from the Macquarie Graduate School of Management, Sydney and an MSc in Human Resources from the University of Leicester, UK. Sunder is also a Chartered Fellow of CIPD UK.",
		image: "https://headstartbook.in/wp-content/uploads/2024/09/Untitled-design-5-1.webp",
		linkedin: "https://www.linkedin.com/in/sundertrg/",
		email: "sunder.ramachandran@gmail.com",
	},
];

export const AuthorsSection = () => {
	return (
		<section
			id="authors"
			className="py-20 bg-gradient-to-br from-white via-[#24A89C]/10 to-orange-50"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<h2 className="text-4xl font-extrabold text-gray-900 mb-2 font-montserrat">
						Meet The Authors
					</h2>
					<div className="w-16 h-1 mx-auto bg-gradient-to-r from-[#24A89C] via-[#2BB4A8] to-[#32C0B4] rounded-full mb-4"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Learn from leaders who have walked this path and successfully
						navigated the challenges that come with it
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					{authors.map((author, index) => (
						<Card
							key={index}
							className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm animate-fade-in"
						>
							<CardContent className="p-10">
								<div className="text-center mb-6">
									<div className="w-44 h-44 bg-black rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-lg" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.10)' }}>
										<img
											src={author.image}
											alt={author.name}
											className="w-40 h-40 rounded-full object-cover object-top border border-black/5"
										/>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-1 font-montserrat">
										{author.name}
									</h3>
								</div>

								<p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg min-h-[96px]">
									{author.bio}
								</p>

								<div className="flex justify-center space-x-4">
									<a
										href={author.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center border border-black text-black bg-white hover:bg-black hover:text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors gap-2 shadow-sm"
									>
										<Linkedin className="w-4 h-4" />
										LinkedIn
									</a>
									<a
										href={`mailto:${author.email}`}
										className="flex items-center border border-black text-black bg-white hover:bg-black hover:text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors gap-2 shadow-sm"
									>
										<Mail className="w-4 h-4" />
										Email
									</a>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
