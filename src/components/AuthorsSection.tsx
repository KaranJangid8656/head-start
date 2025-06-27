import { Button } from "@/components/ui/button";

export const AuthorsSection = () => {
	return (
		<section
			id="authors"
			className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0f7fa] to-[#fef6e4]"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
				{/* Left: Text */}
				<div className="flex-1 text-left">
					<h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 font-montserrat">
						Unlock The Secrets To Career{" "}
						<span className="text-[#24A89C]">Success</span>
					</h2>
					<h3 className="text-xl font-semibold text-black mb-6 font-montserrat">
						By Vivek Gambhir and Sunder Ramachandran
					</h3>
					{/* Optional: Add a call-to-action button here */}
				</div>
				{/* Right: Image */}
				<div className="flex-1 flex justify-center items-center">
					<div className="p-[3px] rounded-2xl border-4 border-[#24A89C] shadow-xl">
						<img
							src="https://headstartbook.in/wp-content/uploads/2024/09/Untitled-design-_6_-_1_-2048x2048.webp"
							alt="Unlock The Secrets To Career Success"
							className="w-full max-w-xl rounded-xl object-cover bg-white"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
