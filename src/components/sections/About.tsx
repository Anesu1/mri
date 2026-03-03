"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Section className="bg-bg-primary">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-4 md:px-6">
                {/* Left: Image Grid */}
                <div className="relative group max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
                    <Reveal>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 w-[90%] aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-bg-white"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                                alt="Medical Care"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>
                    </Reveal>

                    <motion.div
                        initial={{ y: 0 }}
                        whileInView={{ y: -40 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-[30%] right-[-5%] sm:right-[-10%] w-[55%] aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-bg-primary z-20"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1581595221475-199128aa87a3?q=80&w=800&auto=format&fit=crop"
                            alt="Laboratory"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl opacity-50 animate-pulse" />
                </div>


                {/* Right: Content */}
                <div className="text-center lg:text-left mt-8 lg:mt-0">
                    <Reveal>
                        <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                            Advanced healthcare
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading mb-6 leading-tight italic tracking-tighter">
                            A Personal Approach to <br />
                            <span className="text-gradient italic">Your Well-being.</span>
                        </h3>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-body mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium opacity-80">
                            We believe that every patient deserves high-quality, personalized medical attention. Our team of specialists utilizes the latest advancements in medical technology to provide comprehensive care.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
                            {[
                                "Highly experienced medical specialists",
                                "State-of-the-art diagnostic facilities",
                                "Personalized treatment plans for every patient",
                                "Patient-centered care and support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-heading font-medium">
                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <Check className="text-white w-3 h-3" />
                                    </div>
                                    <span className="text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="outline" size="lg" className="rounded-full px-10 h-16">See Our Medical Team</Button>
                        </div>
                    </Reveal>
                </div>
            </div>

        </Section>
    );
}
