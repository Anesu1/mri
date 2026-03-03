"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["0.1 1", "1 1"]
    });

    // The expansion effects
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["160px", "0px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.5, 1]);

    return (
        <div className="bg-bg-primary overflow-hidden">
            <motion.footer
                ref={containerRef}
                style={{
                    scale,
                    y,
                    borderRadius,
                }}
                className="bg-heading pt-48 pb-20 text-white overflow-hidden relative origin-bottom min-h-screen flex flex-col justify-end"
            >
                <div className="container mx-auto px-6 relative z-10">
                    {/* Big Call to Action at the top of the footer */}
                    <motion.div
                        style={{ opacity }}
                        className="mb-32"
                    >
                        <h2 className="text-[12vw] md:text-[15vw] font-black tracking-tighter italic leading-[0.7] text-white select-none mb-12">
                            LET'S <br />
                            <span className="text-primary italic">CONNECT.</span>
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/10 pb-20">
                            <div className="flex flex-col gap-4">
                                <p className="text-white/60 text-xl max-w-sm">
                                    Ready to experience the next level of diagnostic excellence in Harare?
                                </p>
                            </div>
                            <Button size="lg" className="group h-20 px-12 text-xl rounded-full">
                                Book an Appointment
                                <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-4 gap-12 mb-20 lg:mb-32">
                        {/* Brand */}
                        <div className="col-span-1 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-3 group mb-8">
                                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-primary/20">
                                    <span className="text-white font-black text-2xl uppercase tracking-tighter">M</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold tracking-tighter text-white leading-none">
                                        MRI & Radiology
                                    </span>
                                    <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Centre</span>
                                </div>
                            </Link>
                            <p className="text-white/60 mb-8 max-w-xs leading-relaxed">
                                Advancing medical excellence through innovation and compassionate care. Your health is our priority.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-xs text-primary">Navigation</h4>
                            <ul className="space-y-4 text-white/60">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/about" },
                                    { name: "Our Services", href: "/services" },
                                    { name: "Medical Blog", href: "/blog" },
                                    { name: "Contact", href: "/contact" }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-primary transition-colors flex items-center group">
                                            <div className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all mr-0 group-hover:mr-2" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Contact */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-xs text-primary">Harare Practice</h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <MapPin size={20} className="text-primary shrink-0" />
                                    <span className="text-white/60 text-sm leading-relaxed">
                                        88 Josiah Chinamano Avenue,<br />
                                        Harare, Zimbabwe
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <Phone size={20} className="text-primary shrink-0" />
                                    <span className="text-white/60 text-sm leading-relaxed font-bold italic tracking-tighter text-lg">
                                        +263 242 708 000
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-xs text-primary">Informed Excellence</h4>
                            <p className="text-white/60 mb-6 text-sm">
                                Stay updated with the latest medical insights and practice news.
                            </p>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                />
                                <Button className="w-full">Subscribe</Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest">
                        <p>© 2026 MRI & Radiology Centre. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>

                {/* Background Textures */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] left-[-10%] text-[400px] font-black italic tracking-tighter text-white opacity-10 select-none">
                        MRIRC
                    </div>
                </div>

                {/* Footer Decoration */}
                <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] translate-x-1/2 translate-y-1/2" />
            </motion.footer>
        </div>
    );
}
