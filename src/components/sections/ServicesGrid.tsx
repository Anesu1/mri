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
    const x = useTransform(scrollYProgress, [0.1, 0.9], ["30%", "-70%"]);

    return (
        <div ref={containerRef} className="relative h-[350vh] bg-[#F8F9FA]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Header from Screenshot */}
                <div className="container mx-auto px-16 mb-20 flex items-end justify-between">
                    <div className="space-y-4">
                        <span className="text-sm font-semibold text-heading/50 uppercase tracking-widest">Our Services</span>
                        <h2 className="text-[52px] font-bold text-heading leading-[1] max-w-2xl tracking-tighter">
                            Expert Healthcare Services <br />
                            Tailored to Your Well-being
                        </h2>
                    </div>
                    <Button className="rounded-full px-10 py-5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
                        See All Services
                    </Button>
                </div>

                {/* The Curved Gallery Horizontal Section */}
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
    );
}

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
