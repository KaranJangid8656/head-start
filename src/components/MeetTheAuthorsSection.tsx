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

export const MeetTheAuthorsSection = () => (
  <section id="meet-the-authors" className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0f7fa] to-[#fef6e4]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-stretch">
        {authors.map((author, index) => (
          <div key={index} className="flex justify-center items-stretch">
            <div className="authors-animated-border rounded-3xl p-[3px] transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex flex-col items-center bg-white/95 rounded-3xl px-12 py-8 max-w-xl w-full mx-auto shadow-lg border-2 border-[#24A89C]">
                <div className="w-44 h-44 rounded-full overflow-hidden shadow-md border-2 border-black bg-gray-100 flex items-center justify-center mb-6 mt-0">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat text-center">
                  {author.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 text-justify text-balance">
                  {author.bio}
                </p>
                <div className="flex flex-row gap-4 w-full justify-center mt-2">
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border border-black text-black bg-white hover:bg-black hover:text-white rounded-md px-5 py-2 text-base font-semibold transition-colors gap-2 shadow-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${author.email}`}
                    className="flex items-center border border-black text-black bg-white hover:bg-black hover:text-white rounded-md px-5 py-2 text-base font-semibold transition-colors gap-2 shadow-sm"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
