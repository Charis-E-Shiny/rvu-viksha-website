import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import VkshaTeam from "@/components/VkshaTeam";
import Timeline from "@/components/Timeline";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Rocket, Users, Terminal } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        <Hero />
        <VkshaTeam />
        <Timeline />

        {/* Explore Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12" > 
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r">
                Explore Our World
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Discover what makes VKSHA Coding Club unique — from our innovative projects to our vibrant events
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  href: "/projects",
                  title: "Projects",
                  desc: "Explore our innovative coding projects and solutions",
                  Icon: Rocket,
                },
                {
                  href: "/events",
                  title: "Events",
                  desc: "Join our workshops, hackathons, and tech talks",
                  Icon: Sparkles,
                },
                {
                  href: "/team",
                  title: "Our Team",
                  desc: "Meet the passionate minds behind VKSHA",
                  Icon: Users,
                },
                {
                  href: "/contact",
                  title: "Contact",
                  desc: "Get in touch and join our community",
                  Icon: () => (
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">@</span>
                    </div>
                  ),
                },
                {
                  href: "/quiz",
                  title: "Coding Challenges",
                  desc: "Sharpen your skills with fun exercises & puzzles",
                  Icon: Terminal,
                },
              ].map(({ href, title, desc, Icon }, idx) => (
                <Link key={idx} href={href}>
                  <div className="group bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-md border border-white/40 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer">
                    <div className="mb-4">
                      {typeof Icon === "function" && Icon.name ? (
                        <Icon className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={32} />
                      ) : (
                        <Icon />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{desc}</p>
                    <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
