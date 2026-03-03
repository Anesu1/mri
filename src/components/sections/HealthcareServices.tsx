"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

import { services as allServices } from "@/lib/data/services";
import Link from "next/link";

const services = allServices.slice(0, 4);


const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1] as any, // Out-Cubic
        },
    }),
};

export default function HealthcareServices() {
    return (
        <Section className="bg-bg-white py-20 md:py-32">
            {/* Header Row: Tag + H2 + See All Button */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20 px-4 md:px-6 text-center md:text-left items-center md:items-start">
                <div className="max-w-xl">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Our Services
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-heading leading-[1.1] tracking-tighter italic">
                            Expert Healthcare <br className="hidden sm:block" />
                            <span className="text-primary italic">Tailored to You.</span>
                        </h2>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <Link href="/services">
                        <Button variant="outline" className="group h-14 md:h-16 px-8 rounded-full border-black/10 hover:border-primary transition-all">
                            See All Services
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </Reveal>
            </div>

            {/* The 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6">
                {services.map((service, i) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                        <motion.div
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                            className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-[32px] md:rounded-[40px] overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-700"
                        >
                            {/* Image Box */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Subtle Blue Tint Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-primary/5 opacity-80 group-hover:opacity-90 transition-all duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-4 md:inset-x-6 bottom-4 md:bottom-6 z-10">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="glass-light px-4 md:px-6 py-3 md:py-4 rounded-[20px] md:rounded-[24px] border border-white/20 backdrop-blur-3xl flex-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-lg md:text-xl font-black text-white tracking-tight italic">{service.title}</h4>
                                        <p className="text-[8px] md:text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-all delay-100">
                                            View Division
                                        </p>
                                    </div>

                                    {/* Floating Plus Icon */}
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 flex-shrink-0">
                                        <Plus size={24} className="group-hover:rotate-90 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>


        </Section>
    );
}
