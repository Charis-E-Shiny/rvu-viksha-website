import React, { useEffect, useRef } from "react";

// --- Animated background that matches the WnCC IIT Bombay screenshot ---
// Dark navy background with soft center vignette and slowly floating blue glowing dots.
// TypeScript-friendly and Tailwind-ready. Place as a page background.

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseA: number; // base opacity
  phase: number; // for twinkle
  twinkle: number; // speed of twinkle
};

export const AnimatedBackground: React.FC<{ bg?: string; glow?: string }> = ({
  bg = "#0a192f", // dark navy
  glow = "#00aaff", // cyan-blue glow
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const init = () => {
      const { width: w, height: h } = canvas;
      particlesRef.current = [];
      const count = Math.min(120, Math.floor(window.innerWidth / 12));
      for (let i = 0; i < count; i++) {
        const r = (Math.random() * 1.8 + 0.6) * DPR;
        particlesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18 * DPR,
          vy: (Math.random() - 0.5) * 0.18 * DPR,
          r,
          baseA: Math.random() * 0.6 + 0.25,
          phase: Math.random() * Math.PI * 2,
          twinkle: Math.random() * 0.005 + 0.002,
        });
      }
    };

    const draw = () => {
      const { width: w, height: h } = canvas;

      // Background fill
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Soft vignette (darker edges like the screenshot)
      const g = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.7
      );
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.65)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Particles
      for (const p of particlesRef.current) {
        // motion with gentle random drift
        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.005 * DPR;
        p.vy += (Math.random() - 0.5) * 0.005 * DPR;
        p.vx = Math.max(-0.25 * DPR, Math.min(0.25 * DPR, p.vx));
        p.vy = Math.max(-0.25 * DPR, Math.min(0.25 * DPR, p.vy));

        // wrap around screen for seamless flow
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // twinkle
        p.phase += p.twinkle;
        const a = p.baseA * (0.7 + 0.3 * Math.sin(p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,170,255,${a})`;
        ctx.shadowBlur = 12 * DPR;
        ctx.shadowColor = glow;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      init();
    };

    resize();
    init();
    draw();

    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [bg, glow]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

// --- Demo page preview ---
// This default export renders the background + a centered heading similar to your reference image.
const PreviewPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground />
    </div>
  );
};

export default AnimatedBackground;
