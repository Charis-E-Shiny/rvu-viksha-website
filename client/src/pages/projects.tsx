import Layout from "@/components/Layout";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Github, ExternalLink, Star } from "lucide-react";

export default function Projects() {
  const featuredProjects = [
    {
      title: "AI Code Assistant",
      description: "An intelligent coding companion that helps students learn programming concepts through real-time suggestions and explanations.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "Live",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      github: "#",
      demo: "#"
    },
    {
      title: "Campus Connect",
      description: "A comprehensive platform connecting students, faculty, and resources across RVU campus with real-time messaging and event coordination.",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      status: "Beta",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Study Planner",
      description: "An ML-powered study scheduler that adapts to individual learning patterns and optimizes study sessions for maximum retention.",
      tech: ["Vue.js", "Python", "PostgreSQL", "scikit-learn"],
      status: "Development",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      github: "#",
      demo: "#"
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
                Our Projects
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Explore the innovative solutions and cutting-edge applications built by our talented team. Each project represents our commitment to solving real-world problems through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid lg:grid-cols-1 gap-12">
              {featuredProjects.map((project, index) => (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  <div className="lg:w-1/2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Star className="text-yellow-400" size={16} />
                        <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button className="bg-purple-gradient hover:bg-purple-gradient-hover flex items-center space-x-2 transition-all duration-300">
                        <Github size={16} />
                        <span>View Code</span>
                      </Button>
                      {project.status === 'Live' && (
                        <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 flex items-center space-x-2 transition-all duration-300">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              All Projects
            </h2>
            <ProjectsGrid />
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Have a Project Idea?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our team and bring your innovative ideas to life. We're always looking for passionate developers to collaborate on exciting projects.
              </p>
              <Link href="/contact">
                <Button className="bg-purple-gradient hover:bg-purple-gradient-hover px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}