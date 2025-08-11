import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function VkshaTeam() {
  const scrollToTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-purple-gradient rounded-3xl h-96 w-full flex items-center justify-center">
            <Users size={96} className="text-white opacity-80" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Viksha Team</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our passionate team of developers, designers, and innovators work together to create an environment where coding enthusiasts can thrive. We believe in learning through practice, collaboration, and real-world project development.
            </p>
            <Button 
              onClick={scrollToTeam}
              className="bg-purple-gradient hover:bg-purple-gradient-hover px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white border-0"
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
