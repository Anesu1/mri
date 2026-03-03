"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";


const services = [
    {
        title: "Cardiology",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Neurology",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "General Surgery",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Orthopedics",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Dermatology",
        image: "https://images.unsplash.com/photo-1576086213369-97a306dca664?q=80&w=800&auto=format&fit=crop",
    },
];

export default function HorizontalServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    // Smooth horizontal scroll movement
    const x = useTransform(scrollYProgress, [0.1, 0.9], ["20%", "-60%"]);

    return (
        <>
            {/* Desktop: Horizontal Scroll */}
            <div ref={containerRef} className="relative hidden lg:block h-[250vh] bg-bg-white">

                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="container mx-auto px-16 mb-12 flex items-end justify-between">
                        <div className="space-y-3">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] italic">Our Medical Divisions</span>
                            <h2 className="text-[5vw] font-black text-heading leading-[0.9] max-w-2xl tracking-tighter italic uppercase">
                                Expert Care <br />
                                <span className="text-primary italic">Tailored to You.</span>
                            </h2>
                        </div>
                        <Link href="/services">
                            <Button size="lg" className="rounded-full px-12 py-6 shadow-xl shadow-primary/20 h-auto">
                                Explore All Services
                            </Button>
                        </Link>
                    </div>


                    <motion.div
                        style={{ x }}
                        className="flex gap-8 px-16 items-center"
                    >
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                service={service}
                                index={i}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Mobile/Tablet: Standard Vertical List */}
            <div className="lg:hidden bg-bg-white py-16 md:py-24 px-4 md:px-6">
                <div className="mb-10 text-center">
                    <Reveal>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Medical Specialties</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl font-black text-heading tracking-tighter italic leading-[0.9] uppercase">
                            Expert Care <br />
                            <span className="text-primary italic">Tailored to You.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, i) => (
                        <div key={i} className="relative aspect-[4/5] rounded-[32px] overflow-hidden group">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute inset-x-4 bottom-4">
                                <div className="glass-light p-5 rounded-[24px] backdrop-blur-3xl border border-white/20">
                                    <h4 className="text-xl font-black text-white italic tracking-tighter uppercase">{service.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center px-4">
                    <Link href="/services">
                        <Button size="lg" className="w-full sm:w-auto h-16 px-12 rounded-full shadow-xl shadow-primary/20">
                            Explore All Divisions
                        </Button>
                    </Link>
                </div>
            </div>

        </>
    );
}

import Link from "next/link";


function ServiceCard({ service, index, scrollYProgress }: { service: any, index: number, scrollYProgress: any }) {
    // Fans out vertically and rotates as it scrolls (Matches screenshot fan effect)
    const y = useTransform(
        scrollYProgress,
        [-0.2, 0.2 + index * 0.1, 0.5 + index * 0.1, 1],
        [80, -40, 40, -80]
    );

    const rotate = useTransform(
        scrollYProgress,
        [0.1 + index * 0.1, 0.4 + index * 0.1],
        [6, -6]
    );

    return (
        <motion.div
            style={{
                y,
                rotate,
                transform: "translateZ(0)",
                isolation: "isolate"
            }}
            whileHover={{
                scale: 1.05,
                y: -20,
                zIndex: 50,
            }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] // circOut
            }}
            className="relative min-w-[280px] md:min-w-[320px] h-[440px] rounded-[48px] overflow-hidden group cursor-pointer shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] flex-shrink-0"
        >
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Centered label inside a blur box at the bottom */}
            <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="w-full h-20 rounded-[32px] bg-white/40 backdrop-blur-3xl border border-white/30 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
                    <h4 className="text-xl font-bold text-heading tracking-tight text-center">
                        {service.title}
                    </h4>
                </div>
            </div>
        </motion.div>
    );
}
