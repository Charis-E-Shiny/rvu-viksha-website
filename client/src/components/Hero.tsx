// import { Button } from "@/components/ui/button";
// import { Link } from "wouter";
// import { Code, Rocket, Sparkles } from "lucide-react";
// import Spline from "@splinetool/react-spline";

// export default function Hero() {
//   return (
//     <section id="home" className="px-4 lg:px-8 py-16 relative overflow-hidden">
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left Content */}
//           <div className="animate-in">
//             <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 ">
//               VIKSHA CODING CLUB<br />
//               <span className="text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
//                 WHERE CODING MEETS INNOVATION...
//               </span>
//             </h1>
            
//             <div className="flex flex-col sm:flex-row gap-4 animate-in animate-stagger-2">
//               <Link href="/projects">
//                <Button className="bg-[linear-gradient(to_right,rgb(0,180,255),rgb(0,120,255),rgb(0,80,200))] hover:bg-[linear-gradient(to_right,rgb(0,200,255),rgb(0,150,255),rgb(0,100,220))] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white border-0 animate-pulse-glow">
//                    Explore Projects
//                 </Button>

//               </Link>
//               <Link href="/contact">
//                 <Button variant="outline" className="border-[rgba(0,102,255,0.5)] text-[rgba(0,153,255,0.8)] hover:bg-[rgba(0, 102, 255, 0.41)] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"> 
//                   Join Us
//                 </Button>

//               </Link>
//             </div>
//           </div>

//           {/* Right Content → Spline scene replaces Laptop box */}
//           {/* <div className="relative animate-in animate-stagger-3">
//             <div className="rounded-3xl h-96 w-full overflow-hidden relative">
//               <Spline scene="https://prod.spline.design/JnVUG8m2gstmpnK9/scene.splinecode" /> */}

//               {/* Footer overlay in corner */}
//               {/* <div className="absolute bottom-7 right-5 bg-[rgb(10_20_60_/0.85)] backdrop-blur-md text-white text-xs px-3 py-1 rounded-tl-lg">
//               . . . . . . . . . . . . . .  . .  . . . .  . .
//               </div>
//             </div>
//            </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }












// import { Button } from "@/components/ui/button";
// import { Link } from "wouter";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [text, setText] = useState("");
//   const fullText = "Where innovation meets code...";

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setText(fullText.slice(0, i));
//       i++;
//       if (i > fullText.length) clearInterval(interval);
//     }, 80); // typing speed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="px-4 lg:px-8 py-24 relative overflow-hidden flex items-center justify-center text-center">
//       <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
//         {/* Heading */}
//         <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
//           VIKSHA CODING CLUB
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(70,197,212)] via-[rgb(70,197,212)] to-[rgb(70,197,212)]">
//             {text}
//           </span>
//           <span className="animate-pulse text-[rgb(70,197,212)]">|</span>
//         </h1>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link href="/projects">
//             <Button className="bg-[linear-gradient(to_right,rgb(70,197,212),rgb(60,170,190),rgb(50,150,170))] hover:bg-[linear-gradient(to_right,rgb(90,210,220),rgb(70,197,212),rgb(60,170,190))] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white border-0">
//               Explore Projects
//             </Button>
//           </Link>

//           <Link href="/contact">
//             <Button
//               variant="outline"
//               className="border-[rgba(70,197,212,0.5)] text-[rgba(70,197,212,0.9)] hover:bg-[rgba(70,197,212,0.15)] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
//             >
//               Join Us
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }










import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Hero() {
  const texts = ["Where innovation meets code...", "Empowering ideas through coding..."];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0); // which string
  const [subIndex, setSubIndex] = useState(0); // which char
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      // pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setCurrentText(texts[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="px-20 lg:px-8 py-32 relative overflow-hidden flex items-center justify-center text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl text-cyan-500 lg:text-6xl font-bold leading-tight mb-6 font-mono">
  VIKSHA CODING CLUB
  <br />
  <span className="text-transparent bg-clip-text text-3xl bg-gradient-to-r from-[rgb(70,197,212)] via-[rgb(70,197,212)] to-[rgb(70,197,212)] font-mono">
    {currentText}
  </span>
  <span className="animate-pulse text-4xl text-[rgb(70,197,212)]">|</span>
</h1>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button className="bg-[linear-gradient(to_right,rgb(70,197,212),rgb(60,170,190),rgb(50,150,170))] hover:bg-[linear-gradient(to_right,rgb(90,210,220),rgb(70,197,212),rgb(60,170,190))] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white border-0">
              Explore Projects
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              className="border-[rgba(70,197,212,0.5)] text-[rgba(70,197,212,0.9)] hover:bg-[rgba(70,197,212,0.15)] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
