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
        <Section className="bg-bg-white py-32">
            {/* Header Row: Tag + H2 + See All Button */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 px-6">
                <div className="max-w-xl">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Our Services
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-black text-heading leading-[1.1] tracking-tighter">
                            Expert Healthcare Services <br />
                            <span className="italic text-primary">Tailored to Your Well-being.</span>
                        </h2>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <Link href="/services">
                        <Button variant="outline" className="group">
                            See All Services
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </Reveal>

            </div>

            {/* The 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {services.map((service, i) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                        <motion.div
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                            className="group relative h-full aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Box */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                                />
                                {/* Subtle Blue Tint Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-primary/5 opacity-60 group-hover:opacity-80 group-hover:bg-primary/10 transition-all duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-6 bottom-6 z-10">
                                <div className="flex items-center justify-between">
                                    <div className="glass px-6 py-4 rounded-[24px] border border-white/20 backdrop-blur-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-xl font-bold text-white tracking-tight">{service.title}</h4>
                                        <p className="text-[10px] text-white/60 font-medium uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                            Explore Division
                                        </p>
                                    </div>

                                    {/* Floating Plus Icon */}
                                    <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                        <Plus size={20} className="group-hover:rotate-90 transition-transform" />
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
