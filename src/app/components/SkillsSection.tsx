"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiGit, SiNextdotjs } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: FaHtml5, level: 90, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, level: 85, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, level: 80, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, level: 70, color: "#3178C6" },
    { name: "React", icon: FaReact, level: 82, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, level: 75, color: "#aaa" },
    { name: "Node.js", icon: FaNodeJs, level: 72, color: "#339933" },
    { name: "Tailwind", icon: SiTailwindcss, level: 88, color: "#06B6D4" },
    { name: "MongoDB", icon: SiMongodb, level: 65, color: "#47A248" },
    { name: "Git", icon: SiGit, level: 75, color: "#F05032" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="relative py-28 sm:py-36 overflow-hidden" style={{ background: "linear-gradient(180deg, #050508 0%, #0a0a18 50%, #050508 100%)" }}>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)" }} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-20">
                    <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5">Skills</motion.span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">tech stack</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-20">
                    {skills.map((skill, i) => (
                        <motion.div key={skill.name} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all duration-500">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <motion.div whileHover={{ scale: 1.3, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <skill.icon size={24} style={{ color: skill.color }} className="drop-shadow-[0_0_8px_currentColor]" />
                                    </motion.div>
                                    <span className="font-semibold text-gray-200 text-sm">{skill.name}</span>
                                </div>
                                <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: i * 0.08 }} className="h-full rounded-full relative" style={{ background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`, boxShadow: `0 0 12px ${skill.color}40` }}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex justify-center">
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <motion.p className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>10+</motion.p>
                                <p className="text-sm text-gray-500 font-medium mt-1">Technologies</p>
                            </div>
                        </div>
                        <motion.div className="absolute inset-[10%] rounded-full border border-purple-500/10" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                        <div className="absolute inset-[20%] rounded-full border border-dashed border-cyan-500/10" />
                        {skills.slice(0, 8).map((skill, i) => {
                            const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
                            const r = 44;
                            const x = 50 + r * Math.cos(angle);
                            const y = 50 + r * Math.sin(angle);
                            return (
                                <motion.div key={skill.name} className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center cursor-pointer border border-white/10" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", background: "rgba(10,10,20,0.8)", backdropFilter: "blur(8px)" }} animate={{ y: [0, -10, 0], boxShadow: [`0 0 0px ${skill.color}00`, `0 0 20px ${skill.color}30`, `0 0 0px ${skill.color}00`] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} whileHover={{ scale: 1.4, boxShadow: `0 0 30px ${skill.color}50` }} title={skill.name}>
                                    <skill.icon size={26} style={{ color: skill.color }} />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
