import { useEffect, useState } from 'react';
import { Code, Sparkles, Rocket, Zap } from 'lucide-react';

interface LogoPreludeProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function LogoPrelude({ isVisible, onComplete }: LogoPreludeProps) {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const stages = [
      0,    // Initial state
      500,  // Logo appears
      1000, // Text appears
      1500, // Sparkle effects
      2000, // Scale and glow
      2800  // Fade out and complete
    ];

    stages.forEach((delay, index) => {
      setTimeout(() => {
        setAnimationStage(index);
        if (index === stages.length - 1) {
          setTimeout(onComplete, 300);
        }
      }, delay);
    });
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 ${
  animationStage >= 2 ? 'opacity-100 animate-ping' : 'opacity-0'
}`}

            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="relative flex flex-col items-center">
        {/* Logo icon */}
        <div className={`relative mb-8 transition-all duration-1000 ease-out ${
          animationStage >= 1 
            ? animationStage >= 4 
              ? 'scale-125 opacity-100' 
              : 'scale-100 opacity-100'
            : 'scale-50 opacity-0'
        }`}>
          <div
  className={`w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-800/40 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl flex items-center justify-center relative overflow-hidden ${
    animationStage >= 4 ? 'animate-pulse-glow' : ''
  }`}
>

            <img 
              src="/assets/Viksha.jpg" 
              alt="VIKSHA Logo"
             /* className="w-20 h-auto filter brightness-0 invert opacity-90"*/
            />
            
            {/* Orbiting elements */}
            {animationStage >= 3 && (
              <>
                <div className="absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '3s' }}>
                  <Sparkles className="text-yellow-400" size={16} />
                </div>
                <div className="absolute -bottom-2 -left-2 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                  <Rocket className="text-blue-400" size={16} />
                </div>
                <div className="absolute -top-2 -left-2 animate-spin" style={{ animationDuration: '2.5s' }}>
                  <Zap className="text-green-400" size={16} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Text */}
        <div className={`text-center transition-all duration-1000 ease-out ${
          animationStage >= 2 
            ? animationStage >= 4 
              ? 'scale-110 opacity-100' 
              : 'scale-100 opacity-100'
            : 'scale-90 opacity-0'
        }`}>
          <h1
  className={`text-4xl lg:text-5xl font-bold mb-2 ${
    animationStage >= 4
      ? 'bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient'
      : 'text-white'
  }`}
>

            VIKSHA CODING CLUB
          </h1>
          <p
  className={`text-lg ${
    animationStage >= 4 
      ? 'text-blue-300'
      : 'text-gray-400'
  } transition-colors duration-500`}
>
  OF RVU
</p>

        </div>

        {/* Tagline */}
        <div className={`mt-6 transition-all duration-1000 ease-out ${
          animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-gray-300 text-center max-w-md">
            Empowering Innovation Through Code
          </p>
        </div>

        {/* Loading dots */}
        <div className={`flex space-x-2 mt-8 transition-all duration-500 ${
          animationStage >= 1 && animationStage < 5 ? 'opacity-100' : 'opacity-0'
        }`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 bg-blue-400 rounded-full transition-all duration-300 ${
  animationStage >= 2 ? 'animate-bounce' : ''
}`}

              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Fade out overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
        animationStage >= 5 ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}