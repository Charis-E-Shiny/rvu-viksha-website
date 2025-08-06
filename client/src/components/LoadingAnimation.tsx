import React, { useState, useEffect } from 'react';


import { Player } from '@lottiefiles/react-lottie-player';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Auto-trigger completion after 3 seconds if animation doesn't complete
    const timeout = setTimeout(() => {
      handleComplete();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 1000); // Wait for fade-out animation
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
      fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* VIKSHA Logo */}
        <div className="mb-8 animate-bounce">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600/20 to-purple-800/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl flex items-center justify-center overflow-hidden mb-4">
            <img 
              src="/assets/Viksha.jpg" 
              alt="VIKSHA Logo"
              /*className="w-20 h-auto filter brightness-0 invert opacity-90"*/
            />
          </div>
        </div>

        {/* Text animation */}
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
            VIKSHA
          </h1>
          <p className="text-purple-300 text-lg animate-pulse">
            Coding Club of RV University
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 w-64 mx-auto">
          <div className="h-1 bg-purple-900/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-loading-progress" />
          </div>
        </div>
      </div>

      {/* Click to skip */}
      <button
        onClick={handleComplete}
        className="absolute bottom-8 right-8 text-purple-300 hover:text-white transition-colors duration-300 text-sm"
      >
        Skip Animation →
      </button>
    </div>
  );
}