import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Github, Linkedin, Mail, Award, Code, Star } from "lucide-react";

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

  const [year, setYear] = useState("2022");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div>
        <section className="w-full py-16 bg-[#0a1324] text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-400">The Core Team</h2>
            <p className="text-gray-400">Every club is powered by its people—these are ours</p>
          </div>

          {/* Timeline */}
          <div className="flex justify-center gap-8 mb-12">
            {Object.keys(teamData).map((yr) => (
              <button
                key={yr}
                onClick={() => {
                  setYear(yr);
                  setFlippedIndex(null);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  year === yr
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
            {teamData[year].map((member, index) => (
              <div
                key={index}
                className="relative w-full h-72"
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl shadow-lg flex flex-col justify-end p-4 text-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center p-4 text-center"
                    style={{ 
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <p className="text-sm text-gray-300">{member.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Our Impact
              </h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-gray-300 text-sm">Active Members</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">100+</div>
                  <div className="text-gray-300 text-sm">Events Organized</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">25+</div>
                  <div className="text-gray-300 text-sm">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
              <Code className="mx-auto mb-6 text-purple-400" size={48} />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Want to Join Our Team?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                We're always looking for passionate developers, designers, and innovators to join our growing community. Be part of something amazing!
              </p>
              <Link href="/contact">
                <Button className="bg-purple-gradient hover:bg-purple-gradient-hover px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
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
