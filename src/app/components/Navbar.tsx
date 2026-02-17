"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { HiMoon, HiSun, HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050508]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <motion.a href="#home" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent" whileHover={{ scale: 1.05 }}>
                        &lt;Sneha /&gt;
                    </motion.a>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-purple-300 transition-all duration-300 relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:w-3/4 transition-all duration-300" />
                            </motion.a>
                        ))}
                        <motion.button onClick={toggleTheme} className="ml-4 p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-purple-300 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300" whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
                            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
                        </motion.button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400" whileTap={{ scale: 0.9 }}>
                            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
                        </motion.button>
                        <motion.button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400" whileTap={{ scale: 0.9 }}>
                            {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#050508]/95 backdrop-blur-2xl border-t border-white/5">
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="block px-4 py-3 rounded-xl text-gray-300 hover:bg-purple-500/10 hover:text-purple-300 font-medium transition-all duration-300">
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
