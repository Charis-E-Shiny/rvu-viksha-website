import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LaptopIcon, Code, Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="px-4 lg:px-8 py-16 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Code className="text-purple-400" size={32} />
        </div>
        <div className="absolute top-40 right-20 animate-float animate-stagger-2 opacity-20">
          <Rocket className="text-purple-400" size={28} />
        </div>
        <div className="absolute bottom-32 left-20 animate-float animate-stagger-3 opacity-20">
          <Sparkles className="text-purple-400" size={24} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              VIKSHA CODING CLUB<br />
              <span className="text-purple-gradient animate-gradient bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
                OF RVU
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-in animate-stagger-1">
              Empowering students with cutting-edge programming skills and fostering innovation in technology through collaborative learning and practical projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in animate-stagger-2">
              <Link href="/projects">
                <Button className="bg-purple-gradient hover:bg-purple-gradient-hover px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white border-0 animate-pulse-glow">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-in animate-stagger-3">
            <div className="bg-purple-gradient rounded-3xl h-96 w-full flex items-center justify-center animate-pulse-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <LaptopIcon size={96} className="text-white opacity-80 transform group-hover:scale-110 transition-transform duration-500 relative z-10" />
              
              {/* Floating code symbols */}
              <div className="absolute top-8 left-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <div className="text-white text-sm font-mono animate-float">&lt;/&gt;</div>
              </div>
              <div className="absolute bottom-8 right-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <div className="text-white text-sm font-mono animate-float animate-stagger-1">{`{}`}</div>
              </div>
              <div className="absolute top-1/2 left-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <div className="text-white text-sm font-mono animate-float animate-stagger-2">( )</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse animate-stagger-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
