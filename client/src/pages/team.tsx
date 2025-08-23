import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Code } from "lucide-react";

export default function Team() {
  type Member = {
    name: string;
    role: string;
    img: string;
    details: string;
  };

  // Dummy data for 2022–2025
  const teamData: Record<string, Member[]> = {
    "2022": [
      { name: "Alice", role: "President", img: "/team/2022/president.jpg", details: "Led the club in 2022." },
      { name: "Bob", role: "Vice President", img: "/team/2022/vp.jpg", details: "Organized events and operations." },
      { name: "Charlie", role: "Technical Head", img: "/team/2022/tech.jpg", details: "Oversaw technical projects." },
      { name: "Diana", role: "Head of Design", img: "/team/2022/design.jpg", details: "Managed UI/UX." },
      { name: "Eve", role: "Head of PR", img: "/team/2022/pr.jpg", details: "Handled PR and media." },
      { name: "Frank", role: "Head of Event", img: "/team/2022/events.jpg", details: "Planned events." },
    ],
    "2023": [
      { name: "Grace", role: "President", img: "/team/2023/president.jpg", details: "Led the club in 2023." },
      { name: "Hank", role: "Vice President", img: "/team/2023/vp.jpg", details: "Supported all departments." },
      { name: "Ivy", role: "Technical Head", img: "/team/2023/tech.jpg", details: "Directed coding sessions." },
      { name: "Jack", role: "Head of Design", img: "/team/2023/design.jpg", details: "Handled creative direction." },
      { name: "Karen", role: "Head of PR", img: "/team/2023/pr.jpg", details: "Worked on communications." },
      { name: "Leo", role: "Head of Event", img: "/team/2023/events.jpg", details: "Planned hackathons." },
    ],
    "2024": [
      { name: "Maya", role: "President", img: "/team/2024/president.jpg", details: "Led the club in 2024." },
      { name: "Noah", role: "Vice President", img: "/team/2024/vp.jpg", details: "Ran logistics and outreach." },
      { name: "Olivia", role: "Technical Head", img: "/team/2024/tech.jpg", details: "Managed coding events." },
      { name: "Paul", role: "Head of Design", img: "/team/2024/design.jpg", details: "Oversaw brand design." },
      { name: "Quinn", role: "Head of PR", img: "/team/2024/pr.jpg", details: "Handled external relations." },
      { name: "Ruth", role: "Head of Event", img: "/team/2024/events.jpg", details: "Organized conferences." },
    ],
    "2025": [
      { name: "Sam", role: "President", img: "/team/2025/president.jpg", details: "Leads the club in 2025." },
      { name: "Tina", role: "Vice President", img: "/team/2025/vp.jpg", details: "Coordinates operations." },
      { name: "Uma", role: "Technical Head", img: "/team/2025/tech.jpg", details: "Heads the technical team." },
      { name: "Victor", role: "Head of Design", img: "/team/2025/design.jpg", details: "Handles UI/UX design." },
      { name: "Wendy", role: "Head of PR", img: "/team/2025/pr.jpg", details: "Handles promotions." },
      { name: "Xander", role: "Head of Event", img: "/team/2025/events.jpg", details: "Plans yearly events." },
    ],
  };

  const [location] = useLocation();
  const [year, setYear] = useState("2022");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // Sync ?year= from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const yearParam = params.get("year");
    if (yearParam && teamData[yearParam]) {
      setYear(yearParam);
    }
  }, [location]);

  return (
    <Layout>
      <br/>
      <br/>
      <div className="text-white">
        {/* Header */}
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-500 bg-clip-text  mb-6">
              The Core Team
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-blue-100">
              Every club is powered by its people—these are ours
            </p>
          </div>

          {/* Year Buttons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
            {Object.keys(teamData).map((yr) => (
              <button
                key={yr}
                onClick={() => {
                  setYear(yr);
                  setFlippedIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold transition-all backdrop-blur-md shadow-md text-sm sm:text-base ${
                  year === yr
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-900/40"
                    : "bg-white/10 text-blue-100 hover:bg-white/20"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-16">
            {teamData[year].map((member, index) => (
              <div
                key={index}
                className="relative w-full h-72 sm:h-80 cursor-pointer"
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex flex-col justify-end p-3 sm:p-4 text-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-2 sm:mb-3 shadow-md"
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-blue-200">{member.role}</p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-[#0a1324]/90 backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center p-4 sm:p-6 text-center"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                  >
                    <p className="text-sm sm:text-base text-white">{member.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
                Our Impact
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center">
                {[
                  { value: "500+", label: "Active Members" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "100+", label: "Events Organized" },
                  { value: "25+", label: "Awards Won" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1 sm:space-y-2">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-300">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl sm:max-w-4xl mx-auto text-center">
            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 shadow-lg">
              <Code className="mx-auto mb-6 text-blue-300" size={40} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Want to Join Our Team?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-8">
                We're always looking for passionate developers, designers, and innovators to join our growing
                community. Be part of something amazing!
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
