import { Smartphone, Globe, Bot, Gamepad2, TrendingUp, Cloud } from "lucide-react";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Mobile App",
      description: "A cross-platform mobile application built with React Native for student collaboration.",
      icon: Smartphone
    },
    {
      title: "Web Platform", 
      description: "A comprehensive web platform for coding competitions and skill assessment.",
      icon: Globe
    },
    {
      title: "AI Assistant",
      description: "An intelligent coding assistant powered by machine learning algorithms.",
      icon: Bot
    },
    {
      title: "Gaming Portal",
      description: "An interactive gaming platform for learning programming concepts through gamification.",
      icon: Gamepad2
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking student progress and club activities.",
      icon: TrendingUp
    },
    {
      title: "Cloud Solution",
      description: "Scalable cloud infrastructure solution for hosting student projects and applications.",
      icon: Cloud
    }
  ];

  return (
    <section id="projects" className="px-4 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
               className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl p-6 hover:scale-105 transition-transform duration-300"

              >
                <div className="mb-4">
                  <IconComponent size={48} className="text-white opacity-80" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-white opacity-90 text-sm">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
