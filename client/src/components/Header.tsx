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
    { path: "/projects", label: "Achievements" },
    { path: "/team", label: "Our Team" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === "/") {
      setShowPrelude(true);
    } else {
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
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(8px)",
          borderBottom: "2px solid rgba(168,85,247,0.2)",
          marginBottom: "3px"
        }}
        className="px-4 lg:px-8 py-2"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logos container */}
          <div className="flex items-center space-x-4">
            {/* Viksha logo button */}
            <button
              onClick={handleLogoClick}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent border-none outline-none"
            >
              <div className="w-[72px] h-13 bg-gradient-to-br from-purple-600/20 to-purple-800/40 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden">
                <img src="/assets/Viksha2.jpg" alt="VIKSHA Logo" />
              </div>
            </button>

            {/* RV University logo link */}
            <a
              href="https://rvu.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <img
                src="/assets/rv-logo.png"
                alt="RV University Logo"
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative hover:text-purple-400 transition-all duration-300 group ${
                  location === item.path ? "text-purple-400" : "text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-purple-gradient transform transition-transform duration-300 ${
                    location === item.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-purple-500/20 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left hover:text-purple-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 ${
                    location === item.path
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-white"
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

