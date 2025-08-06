import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import LogoPrelude from "./LogoPrelude";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPrelude, setShowPrelude] = useState(false);
  const [location, navigate] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/projects", label: "Projects" },
    { path: "/team", label: "Our Team" },
    { path: "/contact", label: "Contact" }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === "/") {
      // If already on home page, just show the prelude animation
      setShowPrelude(true);
    } else {
      // If on different page, show prelude then navigate
      setShowPrelude(true);
    }
  };

  const handlePreludeComplete = () => {
    setShowPrelude(false);
    if (location !== "/") {
      navigate("/");
    }
  };

  return (
    <>
      <LogoPrelude isVisible={showPrelude} onComplete={handlePreludeComplete} />
      
      <header className="w-full px-4 lg:px-8 py-6 backdrop-blur-sm bg-black/20 sticky top-0 z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent border-none outline-none"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-800/40 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden">
              <img 
                src="/assets/Viksha.jpg" 
                alt="VIKSHA Logo"
                /*className="w-8 h-auto filter brightness-0 invert opacity-90"*/
              />
            </div>
            <div className="flex items-center space-x-3">
              
              <div className="hidden md:block">
                <img 
                  src="/assets/rv-logo.png"
                  alt="RV University Logo"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent hover:from-purple-200 hover:to-white transition-all duration-300">
                  VIKSHA CODING CLUB
                </h1>
                <p className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-300">OF RVU</p>
              </div>
              
            </div>
          </button>
          
          <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              className={`relative hover:text-purple-400 transition-all duration-300 group ${
                location === item.path ? 'text-purple-400' : 'text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-purple-gradient transform transition-transform duration-300 ${
                location === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
        </nav>
        
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-white hover:bg-purple-500/20 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {isMobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left hover:text-purple-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 ${
                  location === item.path ? 'text-purple-400 bg-purple-500/10' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
    </>
  );
}
