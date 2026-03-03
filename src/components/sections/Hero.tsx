"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden bg-bg-primary">
            {/* Background DNA Helix Placeholder */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[1000px] opacity-[0.1] pointer-events-none z-0">
                <motion.svg
                    viewBox="0 0 800 800"
                    className="w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
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

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="max-w-2xl text-center lg:text-left">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-primary/10 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Diagnostic Excellence in Harare
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-heading leading-[0.9] tracking-tighter mb-6 italic uppercase">
                                Leaders in <br />
                                <span className="text-gradient">Whole Body</span> <br />
                                Imaging.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-lg md:text-xl text-body mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium opacity-70">
                                Providing exceptional radiology services with compassion and integrity. Experience the future of diagnostic precision at Zimbabwe's premier imaging centre.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                                <Button size="lg" className="shadow-2xl shadow-primary/20 w-full sm:w-auto h-16 px-10 text-lg">Book Examination</Button>
                                <Button size="lg" variant="ghost" className="w-full sm:w-auto h-16 px-10 text-lg hover:underline underline-offset-8">Our Services</Button>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0 border-t border-black/5 pt-8">
                            <Reveal delay={0.4}>
                                <div>
                                    <div className="text-2xl md:text-4xl font-black text-heading italic tracking-tighter">100%</div>
                                    <div className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Commitment</div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.5}>
                                <div>
                                    <div className="text-2xl md:text-4xl font-black text-heading italic tracking-tighter">99<span className="text-primary italic">%</span></div>
                                    <div className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Precision</div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.6}>
                                <div>
                                    <div className="text-2xl md:text-4xl font-black text-heading italic tracking-tighter">15+</div>
                                    <div className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Specialists</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Column 2: Image - Now visible on mobile stack */}
                    <div className="relative mt-8 lg:mt-0">
                        <Reveal delay={0.5} y={20}>
                            <div className="relative w-full aspect-square max-w-[450px] lg:max-w-none mx-auto lg:ml-auto group">
                                <div className="absolute inset-0 bg-primary/5 rounded-[60px] md:rounded-[80px] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
                                <div className="relative z-10 w-[95%] h-[95%] left-[2.5%] top-[2.5%] rounded-[60px] md:rounded-[80px] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-bg-primary">
                                    <Image
                                        src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop"
                                        alt="Leading Medical Expert"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>

                                {/* Floating DNA Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-4 md:-bottom-2 -left-2 md:-left-4 glass-light p-4 md:p-5 rounded-3xl shadow-2xl z-20 border border-white/20 backdrop-blur-3xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                                                <path d="M4.5 16.5c3-1 3-5 6-6s3-1 6-2m-12 10.5c3-1 3-5 6-6s3-1 6-2" />
                                                <circle cx="4.5" cy="16.5" r="1.5" />
                                                <circle cx="10.5" cy="10.5" r="1.5" />
                                                <circle cx="16.5" cy="8.5" r="1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs font-black text-heading italic tracking-tighter">TRUSTED CLINIC</div>
                                            <div className="text-[8px] text-body uppercase font-bold tracking-[0.1em] opacity-60">Advanced Laboratory</div>
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
