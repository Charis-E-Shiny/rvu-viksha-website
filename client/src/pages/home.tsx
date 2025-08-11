import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import VkshaTeam from "@/components/VkshaTeam";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Rocket, Users } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        <Hero />
        <VkshaTeam />
        
        {/* Quick Navigation Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Explore Our World
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Discover what makes VKSHA Coding Club unique - from our innovative projects to our vibrant events
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/projects">
                <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  <div className="mb-4">
                    <Rocket className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Projects</h3>
                  <p className="text-gray-400 text-sm mb-4">Explore our innovative coding projects and solutions</p>
                  <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </div>
              </Link>
              
              <Link href="/events">
                <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  <div className="mb-4">
                    <Sparkles className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Events</h3>
                  <p className="text-gray-400 text-sm mb-4">Join our workshops, hackathons, and tech talks</p>
                  <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </div>
              </Link>
              
              <Link href="/team">
                <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  <div className="mb-4">
                    <Users className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Our Team</h3>
                  <p className="text-gray-400 text-sm mb-4">Meet the passionate minds behind VKSHA</p>
                  <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </div>
              </Link>
              
              <Link href="/contact">
                <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  <div className="mb-4">
                    <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">@</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Contact</h3>
                  <p className="text-gray-400 text-sm mb-4">Get in touch and join our community</p>
                  <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
