import { Code, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-8 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-800/40 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src="/attached_assets/image_1754416683050.png" 
              alt="VIKSHA Logo"
              className="w-8 h-auto filter brightness-0 invert opacity-90"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-xl font-bold">VIKSHA CODING CLUB</h3>
              <p className="text-sm text-gray-400">OF RVU</p>
            </div>
            <img 
              src="/attached_assets/image_1754416655790.png" 
              alt="RV University Logo"
              className="h-6 w-auto opacity-60"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <p className="text-gray-400 text-sm">RV University, Bengaluru</p>
            <p className="text-gray-400 text-sm">Karnataka, India</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Email</h4>
            <p className="text-gray-400 text-sm">contact@vikshacodingclub.org</p>
            <p className="text-gray-400 text-sm">info@vikshacodingclub.org</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm">&copy; 2024 Vksha Coding Club of RVU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
