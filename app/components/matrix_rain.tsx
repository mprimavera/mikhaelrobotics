"use client";

import { useEffect, useRef } from "react";

interface MatrixRainProps {
  className?: string;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fontSize = 16;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drops: number[] = [];
    let columns = 0;
    const letters = "01";

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    init();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(43, 127, 255, 0.22)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Must return JSX
  return <canvas ref={canvasRef} className={className} />;
};
