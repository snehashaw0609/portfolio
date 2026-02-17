"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { HiArrowDown } from "react-icons/hi";
import { useEffect, useState } from "react";

const roles = [
    "BCA Student",
    "Aspiring Web Developer",
    "React Enthusiast",
    "UI/UX Lover",
    "Creative Coder",
];

function TypingText() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < current.length) {
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, isDeleting ? 40 : 80);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <span className="text-cyan-400">
            {roles[roleIndex].substring(0, charIndex)}
            <span className="animate-pulse text-purple-400">|</span>
        </span>
    );
}

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.1) 0%, transparent 50%), #050508",
            }}
        >
            <ParticleBackground />

            {/* Animated floating shapes */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -20, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, -40, 20, 0],
                    y: [0, 30, -30, 0],
                    scale: [1, 0.9, 1.15, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 20, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating geometric shapes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute border border-purple-500/20 rounded-lg"
                    style={{
                        width: 20 + i * 10,
                        height: 20 + i * 10,
                        left: `${15 + i * 14}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        rotate: [0, 360],
                        y: [0, -20, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                    }}
                />
            ))}

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="inline-block mb-8 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-purple-300 flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                            </span>
                            Open to opportunities
                        </span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    <span className="text-gray-100">Hi, I&apos;m </span>
                    <span className="relative">
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
                            Sneha
                        </span>
                        <motion.span
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                        />
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 font-medium h-10"
                >
                    <TypingText />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting beautiful digital experiences with modern web technologies.
                    Passionate about clean code, creative design, and pixel-perfect interfaces.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-base overflow-hidden"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center gap-2">
                            View My Work
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                        {/* Glow effect */}
                        <span className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-shadow duration-500" />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-gray-700 text-gray-300 font-semibold text-base hover:border-purple-500 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gray-600 hover:text-purple-400 transition-colors duration-300"
                >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                        Scroll Down
                    </span>
                    <div className="w-5 h-8 rounded-full border-2 border-gray-700 flex justify-center pt-1.5">
                        <motion.div
                            className="w-1 h-1.5 rounded-full bg-purple-400"
                            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
}
