"use client";

import { motion, type Variants } from "framer-motion";
import { HiCode, HiAcademicCap, HiSparkles } from "react-icons/hi";

const highlights = [
    {
        icon: HiAcademicCap,
        title: "BCA Student",
        text: "Currently pursuing Bachelor of Computer Applications with a deep passion for technology and software development.",
        gradient: "from-purple-500 to-violet-600",
        glow: "group-hover:shadow-purple-500/20",
    },
    {
        icon: HiCode,
        title: "Web Developer",
        text: "Building responsive and interactive web applications using modern frameworks like React, Next.js, and Node.js.",
        gradient: "from-cyan-500 to-blue-600",
        glow: "group-hover:shadow-cyan-500/20",
    },
    {
        icon: HiSparkles,
        title: "Creative Thinker",
        text: "Blending design aesthetics with clean code to create beautiful, engaging, and user-centric digital experiences.",
        gradient: "from-pink-500 to-rose-600",
        glow: "group-hover:shadow-pink-500/20",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-28 sm:py-36 overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #050508 0%, #0a0a18 50%, #050508 100%)",
            }}
        >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)" }}
            />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
                style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3), transparent 70%)" }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
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
                        About Me
                    </motion.span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                        Passionate about{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            building the web
                        </span>
                    </h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        I&apos;m Sneha Kumari Shaw, a BCA student driven by a love for coding and design.
                        I enjoy transforming ideas into interactive, beautifully crafted web
                        applications. When I&apos;m not coding, you&apos;ll find me exploring cutting-edge
                        technologies and sharpening my problem-solving skills.
                    </motion.p>
                </motion.div>

                {/* Highlights with stagger */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                >
                    {highlights.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
                            className={`group glass-card p-8 rounded-2xl hover:shadow-2xl ${item.glow} transition-all duration-500 cursor-default`}
                        >
                            <motion.div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <item.icon className="text-white" size={28} />
                            </motion.div>
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {item.text}
                            </p>
                            {/* Bottom accent line */}
                            <motion.div
                                className={`mt-6 h-0.5 bg-gradient-to-r ${item.gradient} rounded-full`}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{ transformOrigin: "left" }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
