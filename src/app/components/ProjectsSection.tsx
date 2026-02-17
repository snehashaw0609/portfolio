"use client";

import { motion, type Variants } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern, animated portfolio website showcasing skills and projects. Built with performance and accessibility in mind, featuring smooth animations, particle effects, and responsive design.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        gradient: "from-purple-600 via-violet-600 to-purple-800",
        borderGlow: "hover:border-purple-500/40",
        shadowGlow: "hover:shadow-purple-500/20",
        emoji: "🌐",
    },
    {
        title: "ToDo App",
        description:
            "A real-time collaborative task management application with user authentication, CRUD operations, and cloud syncing. Features a clean dark interface with smooth interactions.",
        tech: ["React", "Firebase", "CSS Modules", "React Router"],
        gradient: "from-cyan-500 via-blue-600 to-cyan-800",
        borderGlow: "hover:border-cyan-500/40",
        shadowGlow: "hover:shadow-cyan-500/20",
        emoji: "✅",
    },
    {
        title: "E-Commerce Mini Project",
        description:
            "A full-stack e-commerce platform with product catalog, shopping cart, checkout flow, and user authentication. RESTful API design with JWT-based security.",
        tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        gradient: "from-orange-500 via-pink-600 to-rose-800",
        borderGlow: "hover:border-pink-500/40",
        shadowGlow: "hover:shadow-pink-500/20",
        emoji: "🛒",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, rotateX: 10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative py-28 sm:py-36 overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #050508 0%, #08081a 50%, #050508 100%)",
            }}
        >
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-15"
                style={{ background: "radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)" }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5"
                    >
                        Projects
                    </motion.span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            work
                        </span>
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -14,
                                transition: { duration: 0.4, ease: "easeOut" },
                            }}
                            className={`group relative rounded-2xl overflow-hidden border border-gray-800/50 ${project.borderGlow} hover:shadow-2xl ${project.shadowGlow} transition-all duration-500`}
                            style={{ background: "rgba(10, 10, 20, 0.8)" }}
                        >
                            {/* Project header gradient */}
                            <div
                                className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                            >
                                {/* Animated mesh overlay */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                        backgroundSize: "30px 30px",
                                    }}
                                />
                                <motion.span
                                    className="text-7xl relative z-10 drop-shadow-2xl"
                                    whileHover={{ scale: 1.3, rotate: 15 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    {project.emoji}
                                </motion.span>
                                {/* Decorative */}
                                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5 blur-sm" />
                                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5 blur-sm" />
                                {/* Shimmer on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            </div>

                            {/* Content */}
                            <div className="p-7">
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-gray-300 transition-colors duration-300">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
                                    >
                                        <HiCode size={16} />
                                        Code
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300"
                                    >
                                        <HiExternalLink size={16} />
                                        Demo
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
