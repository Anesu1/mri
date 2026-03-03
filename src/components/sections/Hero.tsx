"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-bg-primary">
            {/* Background DNA Helix Placeholder */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[1200px] opacity-[0.15] pointer-events-none z-0">
                <motion.svg
                    viewBox="0 0 800 800"
                    className="w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                    <defs>
                        <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0B64F4" />
                            <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M400,100 C600,200 200,300 400,400 C600,500 200,600 400,700"
                        fill="none"
                        stroke="url(#dnaGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M400,100 C200,200 600,300 400,400 C200,500 600,600 400,700"
                        fill="none"
                        stroke="url(#dnaGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </motion.svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
                    <div className="max-w-2xl">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Diagnostic Excellence in Harare
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-5xl md:text-8xl font-extrabold text-heading leading-[0.9] tracking-tighter mb-8 italic">
                                Leaders in <br />
                                <span className="text-gradient">Whole Body</span> <br />
                                Imaging.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-xl text-body mb-10 leading-relaxed max-w-lg">
                                Providing exceptional radiology services with compassion and integrity. Experience the future of diagnostic precision at Zimbabwe's premier imaging centre.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <Button size="lg" className="shadow-2xl shadow-primary/20">Book Examination</Button>
                                <Button size="lg" variant="outline">Our Services</Button>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-3 gap-8">
                            <Reveal delay={0.4}>
                                <div>
                                    <div className="text-4xl font-bold text-heading">100%</div>
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Commitment</div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.5}>
                                <div>
                                    <div className="text-4xl font-bold text-heading">99%</div>
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Precision</div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.6}>
                                <div>
                                    <div className="text-4xl font-bold text-heading">15+</div>
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Specialists</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    {/* Column 2: Image */}
                    <div className="relative lg:block hidden">
                        <Reveal delay={0.5} y={0}>
                            <div className="relative w-full aspect-square max-w-[600px] ml-auto">
                                {/* Image Placeholder - since I generated one I'll use it if I can, or use the generated path */}
                                <div className="absolute inset-0 bg-accent rounded-[80px] -rotate-3 z-0" />
                                <div className="relative z-10 w-full h-full rounded-[80px] overflow-hidden shadow-2xl border-8 border-bg-white">
                                    <Image
                                        src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop"
                                        alt="Leading Medical Expert"
                                        fill
                                        className="object-cover"
                                    />

                                </div>
                                {/* Floating DNA Badge */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-soft z-20 border border-white"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                                                <path d="M4.5 16.5c3-1 3-5 6-6s3-1 6-2m-12 10.5c3-1 3-5 6-6s3-1 6-2" />
                                                <circle cx="4.5" cy="16.5" r="1.5" />
                                                <circle cx="10.5" cy="10.5" r="1.5" />
                                                <circle cx="16.5" cy="8.5" r="1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-heading">Trusted Genetics</div>
                                            <div className="text-xs text-body">Advanced Laboratory</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
