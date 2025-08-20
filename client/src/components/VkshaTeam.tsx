import { Button } from "@/components/ui/button";
import GrpPic from "./GrpPic.jpeg";

export default function VkshaTeam() {
  const scrollToTeam = () => {
    const element = document.getElementById("team");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side → Image with hover zoom */}
          <div className="rounded-3xl h-96 w-full flex items-center justify-center overflow-hidden group">
            <img
              src={GrpPic}
              alt="Viksha Team"
              className="object-cover h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Right side → Text content */}
          <div>
            <h2 className="text-3xl text-cyan-500 lg:text-4xl font-bold mb-6">
              The Viksha Team
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our passionate team of developers, designers, and innovators work
              together to create an environment where coding enthusiasts can
              thrive. We believe in learning through practice, collaboration,
              and real-world project development.
            </p>
            <Button
  onClick={scrollToTeam}
  className="bg-gradient-to-r from-[rgb(70,197,212)] via-[rgb(70,197,212)] to-[rgb(70,197,212)] 
             text-white text-md font-mono px-3 py-3 rounded-lg shadow-lg 
             hover:scale-110 hover:opacity-90 transform transition-all duration-300"
>
  Meet Our Team
</Button>

          </div>
        </div>
      </div>
    </section>
  );
}
