"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: FaGithub, label: "GitHub", href: "#", hoverBg: "hover:bg-gray-700 hover:shadow-gray-500/20" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#", hoverBg: "hover:bg-blue-600 hover:shadow-blue-500/20" },
    { icon: FaTwitter, label: "Twitter", href: "#", hoverBg: "hover:bg-sky-500 hover:shadow-sky-500/20" },
    { icon: FaInstagram, label: "Instagram", href: "#", hoverBg: "hover:bg-pink-600 hover:shadow-pink-500/20" },
];

const contactInfo = [
    { icon: HiMail, text: "sneha@example.com" },
    { icon: HiPhone, text: "+91 98765 43210" },
    { icon: HiLocationMarker, text: "India" },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-28 sm:py-36 overflow-hidden" style={{ background: "linear-gradient(180deg, #050508 0%, #08081a 50%, #050508 100%)" }}>
            <div className="absolute top-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] opacity-15" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)" }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-20">
                    <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5">Contact</motion.span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">touch</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h4 className="text-2xl font-bold text-white mb-4">Let&apos;s work together</h4>
                        <p className="text-gray-400 mb-8 leading-relaxed">Have a project in mind or want to collaborate? I&apos;m always excited to connect with fellow developers and work on interesting ideas.</p>

                        <div className="space-y-4 mb-10">
                            {contactInfo.map((item, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500">
                                        <item.icon size={22} />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {socials.map((social, i) => (
                                <motion.a key={social.label} href={social.href} aria-label={social.label} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.2, y: -6 }} whileTap={{ scale: 0.9 }} className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:shadow-lg transition-all duration-300 ${social.hoverBg}`}>
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass-card p-8 rounded-2xl">
                        <div className="space-y-6">
                            {[
                                { id: "name", label: "Name", type: "text", placeholder: "Your name", value: formData.name, key: "name" as const },
                                { id: "email", label: "Email", type: "email", placeholder: "your@email.com", value: formData.email, key: "email" as const },
                            ].map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-sm font-semibold text-gray-300 mb-2">{field.label}</label>
                                    <input id={field.id} type={field.type} required value={field.value} onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })} className="glow-input w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all duration-300" placeholder={field.placeholder} />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                                <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="glow-input w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none" placeholder="Your message..." />
                            </div>
                            <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className={`w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-500 ${sent ? "bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]" : "bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"}`}>
                                {sent ? <span className="flex items-center justify-center gap-2">✓ Message Sent!</span> : <span className="flex items-center justify-center gap-2">Send Message <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span></span>}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-24 pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Sneha Kumari Shaw. Built with <span className="text-purple-400">♥</span> using Next.js & Tailwind CSS</p>
                </motion.div>
            </div>
        </section>
    );
}
