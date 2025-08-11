import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Github, Linkedin, Mail, Award, Code, Star } from "lucide-react";

export default function Team() {
  const coreTeamMembers = [
    {
      name: "Arjun Sharma",
      role: "President",
      bio: "Final year Computer Science student passionate about full-stack development and AI. Led multiple successful hackathons and mentored 50+ students.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      skills: ["React", "Node.js", "Python", "Leadership"],
      achievements: ["Google Summer of Code 2023", "Inter-college Hackathon Winner"],
      github: "#",
      linkedin: "#",
      email: "arjun@vkshaclub.org"
    },
    {
      name: "Priya Patel", 
      role: "Vice President",
      bio: "Data Science enthusiast with expertise in machine learning and cloud computing. Active contributor to open source projects.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      skills: ["Python", "TensorFlow", "AWS", "Data Analysis"],
      achievements: ["Microsoft Learn Student Ambassador", "AI Research Paper Published"],
      github: "#",
      linkedin: "#",
      email: "priya@vkshaclub.org"
    },
    {
      name: "Rahul Kumar",
      role: "Technical Lead", 
      bio: "Mobile app developer and cybersecurity enthusiast. Built 5+ production apps with 10K+ downloads each.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      skills: ["React Native", "Flutter", "Cybersecurity", "DevOps"],
      achievements: ["Bug Bounty Hunter", "National Coding Championship Finalist"],
      github: "#",
      linkedin: "#",
      email: "rahul@vkshaclub.org"
    },
    {
      name: "Sneha Reddy",
      role: "Secretary",
      bio: "UI/UX designer and frontend developer with a keen eye for user experience. Designed interfaces for 20+ projects.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      skills: ["Figma", "React", "UI/UX", "Design Systems"],
      achievements: ["Design Competition Winner", "Featured on Dribbble"],
      github: "#",
      linkedin: "#",
      email: "sneha@vkshaclub.org"
    }
  ];

  const departmentHeads = [
    {
      name: "Vikram Singh",
      role: "Web Development Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      name: "Anita Joshi",
      role: "AI/ML Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      skills: ["Python", "TensorFlow", "Data Science"]
    },
    {
      name: "Karthik Menon",
      role: "Mobile Development Head",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      skills: ["React Native", "Flutter", "iOS"]
    },
    {
      name: "Divya Agarwal",
      role: "Design Head",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      skills: ["UI/UX", "Figma", "Prototyping"]
    },
    {
      name: "Rohan Gupta",
      role: "DevOps Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      skills: ["Docker", "AWS", "CI/CD"]
    },
    {
      name: "Meera Shah",
      role: "Community Head",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      skills: ["Event Management", "Social Media", "Outreach"]
    }
  ];

  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        {/* Header Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={20} />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Get to know the passionate individuals who drive VKSHA Coding Club forward. Our diverse team brings together expertise in various technologies and a shared vision for innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Core Team
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {coreTeamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-purple-500/50"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-gradient rounded-full flex items-center justify-center">
                        <Star className="text-white" size={16} />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                      <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center justify-center md:justify-start">
                          <Award className="mr-2" size={14} />
                          Achievements
                        </h4>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {member.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center justify-center md:justify-start">
                              <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-3 justify-center md:justify-start">
                        <a href={member.github} className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                          <Github size={20} />
                        </a>
                        <a href={member.linkedin} className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                          <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Department Heads
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentHeads.map((member, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-purple-900/10 to-purple-800/5 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 text-center hover:border-purple-500/30"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-purple-500/30 group-hover:border-purple-500/50 transition-colors duration-300"
                  />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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