"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "The diagnostic precision at MRI & Radiology Centre was beyond my expectations. Dr. Sirdar's team provided a clear path to recovery when other centres were uncertain.",
        author: "Robert Hammond",
        role: "Verified Patient",
        range: [0, 0.3],
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "Professional, fast, and incredibly compassionate. The MRI scan was handled with such care that I felt completely at ease throughout the entire procedure.",
        author: "Sarah Mapfumo",
        role: "Verified Patient",
        range: [0.35, 0.65],
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "As a corporate partner, we rely on their diagnostic speed. They consistently deliver high-quality results that help our employees get back to health faster.",
        author: "David Chidzero",
        role: "HR Director, Econet",
        range: [0.7, 1],
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // rotation of the whole group
    const rotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-bg-primary">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container mx-auto px-6 h-full flex items-center">
                    <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

                        {/* Left: Rotating Visuals */}
                        <div className="relative aspect-square max-w-[500px] mx-auto flex items-center justify-center">

                            {/* DNA Helix Background (Pinned & Rotating) */}
                            <motion.div
                                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
                                className="absolute inset-0 opacity-10 pointer-events-none"
                            >
                                <div className="w-full h-full border-[1px] border-primary rounded-full" />
                                <div className="absolute inset-0 border-[4px] border-dashed border-primary/20 rounded-full scale-110" />
                            </motion.div>

                            {/* Center Satisfaction Circle */}
                            <div className="relative z-20 w-56 h-56 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-[20px] border-primary/5">
                                <div className="text-5xl font-black text-heading italic">99<span className="text-primary">%</span></div>
                                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Satisfaction</div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 border border-primary/10 rounded-full"
                                />
                            </div>

                            {/* Orbiting Avatars */}
                            <motion.div
                                style={{ rotate: rotation }}
                                className="absolute inset-0"
                            >
                                {testimonials.map((t, i) => {
                                    const angle = (i * 360) / testimonials.length;
                                    const radius = 220; // Radius of orbit

                                    return (
                                        <AvatarNode
                                            key={t.id}
                                            i={i}
                                            testimonial={t}
                                            scrollYProgress={scrollYProgress}
                                            angle={angle}
                                            radius={radius}
                                        />
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Right: Scrolling Testimonials */}
                        <div className="relative h-[450px]">
                            {testimonials.map((t) => (
                                <TestimonialItem
                                    key={t.id}
                                    testimonial={t}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

function AvatarNode({ i, testimonial, scrollYProgress, angle, radius }: any) {
    // Current rotation to counteract parent rotation so image stays upright
    const counterRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    // Scale and Grayscale based on its active range
    const isActive = useTransform(
        scrollYProgress,
        [testimonial.range[0] - 0.1, testimonial.range[0], testimonial.range[1], testimonial.range[1] + 0.1],
        [0.8, 1.2, 1.2, 0.8]
    );

    const grayscale = useTransform(
        scrollYProgress,
        [testimonial.range[0] - 0.05, testimonial.range[0], testimonial.range[1], testimonial.range[1] + 0.05],
        ["100%", "0%", "0%", "100%"]
    );

    const opacity = useTransform(
        scrollYProgress,
        [testimonial.range[0] - 0.1, testimonial.range[0], testimonial.range[1], testimonial.range[1] + 0.1],
        [0.4, 1, 1, 0.4]
    );

    const glow = useTransform(
        scrollYProgress,
        [testimonial.range[0], testimonial.range[0] + 0.1, testimonial.range[1] - 0.1, testimonial.range[1]],
        ["0px 0px 0px rgba(37, 99, 235, 0)", "0px 0px 40px rgba(37, 99, 235, 0.3)", "0px 0px 40px rgba(37, 99, 235, 0.3)", "0px 0px 0px rgba(37, 99, 235, 0)"]
    );

    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
        <motion.div
            style={{
                x: `calc(50% + ${x}px - 60px)`,
                y: `calc(50% + ${y}px - 60px)`,
                rotate: counterRotate,
                scale: isActive,
                opacity,
                filter: useTransform(grayscale, (v) => `grayscale(${v})`),
                boxShadow: glow,
            }}
            className="absolute w-[120px] h-[120px] border-8 border-white rounded-[40px] overflow-hidden z-30 pointer-events-none transition-shadow"
        >

            <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}

function TestimonialItem({ testimonial, scrollYProgress }: { testimonial: any, scrollYProgress: any }) {
    const opacity = useTransform(
        scrollYProgress,
        [testimonial.range[0], testimonial.range[0] + 0.1, testimonial.range[1] - 0.1, testimonial.range[1]],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [testimonial.range[0], testimonial.range[1]],
        [100, -100]
    );

    const blur = useTransform(
        scrollYProgress,
        [testimonial.range[0], testimonial.range[0] + 0.05, testimonial.range[1] - 0.05, testimonial.range[1]],
        ["10px", "0px", "0px", "10px"]
    );

    return (
        <motion.div
            style={{ opacity, y, filter: blur }}
            className="absolute inset-0 flex flex-col justify-center"
        >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8 w-fit">
                Patient Stories
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-heading leading-[1.1] tracking-tighter italic mb-8">
                "{testimonial.text}"
            </h3>
            <div className="flex items-center gap-6">
                <div className="w-16 h-[2px] bg-primary" />
                <div>
                    <div className="text-xl font-bold text-heading">{testimonial.author}</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{testimonial.role}</div>
                </div>
            </div>
        </motion.div>
    );
}
