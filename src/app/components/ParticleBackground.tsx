"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: Particle[] = [];
        const particleCount = 120;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouse);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                size: Math.random() * 2.5 + 0.5,
                opacity: Math.random() * 0.6 + 0.1,
                hue: Math.random() > 0.5 ? 270 : 190, // purple or cyan
                pulse: 0,
                pulseSpeed: Math.random() * 0.02 + 0.01,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouse = mouseRef.current;

            particles.forEach((p, i) => {
                // Mouse repulsion
                const dmx = p.x - mouse.x;
                const dmy = p.y - mouse.y;
                const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
                if (mouseDist < 150) {
                    const force = (150 - mouseDist) / 150;
                    p.vx += (dmx / mouseDist) * force * 0.3;
                    p.vy += (dmy / mouseDist) * force * 0.3;
                }

                // Dampen velocity
                p.vx *= 0.99;
                p.vy *= 0.99;

                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Pulsing glow
                p.pulse += p.pulseSpeed;
                const glowSize = Math.max(0.1, p.size + Math.sin(p.pulse) * 1.5);
                const glowOpacity = p.opacity + Math.sin(p.pulse) * 0.15;

                // Glow effect (outer)
                const gradient = ctx.createRadialGradient(
                    p.x, p.y, 0, p.x, p.y, glowSize * 4
                );
                gradient.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${glowOpacity * 0.4})`);
                gradient.addColorStop(1, `hsla(${p.hue}, 80%, 65%, 0)`);
                ctx.beginPath();
                ctx.arc(p.x, p.y, glowSize * 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${glowOpacity})`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        const lineOpacity = 0.12 * (1 - dist / 130);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `hsla(${(p.hue + particles[j].hue) / 2}, 70%, 60%, ${lineOpacity})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            });
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
