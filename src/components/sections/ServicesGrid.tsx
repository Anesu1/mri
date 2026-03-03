"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

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
            <div ref={containerRef} className="relative hidden lg:block h-[350vh] bg-[#F8F9FA]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="container mx-auto px-16 mb-20 flex items-end justify-between">
                        <div className="space-y-4">
                            <span className="text-sm font-semibold text-heading/50 uppercase tracking-widest italic">Our Services</span>
                            <h2 className="text-[64px] font-black text-heading leading-[1] max-w-2xl tracking-tighter italic">
                                Expert Healthcare <br />
                                <span className="text-primary italic">Tailored to You.</span>
                            </h2>
                        </div>
                        <Link href="/services">
                            <Button className="rounded-full px-12 py-6 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-xl shadow-blue-500/20 h-auto">
                                See All Services
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
            <div className="lg:hidden bg-[#F8F9FA] py-20 px-6">
                <div className="mb-12 space-y-4 text-center">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Services</span>
                    <h2 className="text-4xl font-black text-heading tracking-tighter italic leading-tight">
                        Expert Healthcare <br />
                        Tailored to You.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="relative h-[400px] rounded-[40px] overflow-hidden group">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute inset-x-6 bottom-6">
                                <div className="glass-light p-6 rounded-[24px] backdrop-blur-xl border border-white/20">
                                    <h4 className="text-xl font-black text-white italic">{service.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/services">
                        <Button className="w-full sm:w-auto rounded-full px-10 py-5 bg-[#2563EB] text-white font-bold">
                            View All Services
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
