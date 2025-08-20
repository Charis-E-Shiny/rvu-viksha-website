import { Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-transparent backdrop-blur-md border-t border-purple-500/20 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Logo & Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-50 h-50  border border-purple-400/40 p-1 bg-purple-900/20 shadow-lg shadow-purple-500/20 overflow-hidden" style={{borderRadius:"20px"}}>
            <img 
              src="/Public/assets/Viksha2.jpg" 
              alt="VIKSHA Logo"
              style={{height:"70px",width:"100px",borderRadius:"20px"}}
            />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
            VIKSHA CODING CLUB
          </h3>
          <p className="text-sm text-gray-400 tracking-wide">OF RVU</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          {[
            { icon: Instagram, link: "https://www.instagram.com/viksha_rvu" },
            { icon: Linkedin, link: "https://www.linkedin.com/company/viksha/" },
            { icon: Github, link: "https://github.com/viksha-club-rvu" }
          ].map(({ icon: Icon, link }, i) => (
            <a 
              key={i} 
              href={link} 
              className="p-3 rounded-full border border-purple-500/30 bg-purple-900/20 hover:bg-purple-700/30 hover:scale-110 transition-all duration-300 shadow-md shadow-purple-500/20"
            >
              <Icon size={20} className="text-purple-300" />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-gray-400 text-sm space-y-1">
          <p>RV University, Bengaluru, Karnataka, India</p>
          <p>contact@vikshacodingclub.org | info@vikshacodingclub.org</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/20 w-full pt-4">
          <p className="text-gray-500 text-xs">&copy; 2024 VIKSHA Coding Club of RVU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
