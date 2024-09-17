"use client";
import { cn } from "../../lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

type WavyBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
} & React.HTMLProps<HTMLCanvasElement>;

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  
  // Use useRef to persist values across renders
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctxRef.current = ctx;
        wRef.current = ctx.canvas.width = window.innerWidth;
        hRef.current = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        ntRef.current = 0;
        window.onresize = () => {
          if (ctxRef.current) {
            wRef.current = ctxRef.current.canvas.width = window.innerWidth;
            hRef.current = ctxRef.current.canvas.height = window.innerHeight;
            ctxRef.current.filter = `blur(${blur}px)`;
          }
        };
        render();
      }
    }
  }, [blur]); // Include blur in dependencies

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + hRef.current * 0.5); // adjust for height
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const animationId = useRef<number | null>(null);

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animationId.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Check for Safari browser
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
        {...props}
      ></canvas>
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};
