"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const team = [
    {
        name: "Dr. Z.K. Sirdar",
        role: "Founding Partner & Radiologist",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        bio: "Pioneering radiology in Harare with over 30 years of imaging excellence and diagnostic leadership.",
    },
    {
        name: "Dr. Cuming Hove",
        role: "Consultant Radiologist",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
        bio: "Specializing in interventional radiology and advanced MRI diagnostic protocols.",
    },
    {
        name: "Dr. Elena Patel",
        role: "Senior Radiologist",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
        bio: "Expert in women’s imaging and high-resolution ultrasound diagnostics.",
    },
    {
        name: "Dr. Michael Sithole",
        role: "Medical Director",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536780?q=80&w=800&auto=format&fit=crop",
        bio: "Overseeing clinical standards and radiological innovation at the Harare centre.",
    },
];

export default function TeamSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Section className="bg-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-6">
                <div className="max-w-2xl">
                    <Reveal>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Medical Team</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h3 className="text-4xl md:text-6xl font-black text-heading tracking-tighter italic">World-Class Specialists.</h3>
                    </Reveal>
                </div>
            </div>

            {/* Desktop: Fancy Expanding Flex */}
            <div className="hidden lg:flex h-[750px] gap-4 px-6 overflow-hidden">
                {team.map((member, i) => {
                    const isHovered = hoveredIndex === i;
                    const isAnythingHovered = hoveredIndex !== null;

                    return (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            layout
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 1, 0.5, 1]
                            }}
                            className={cn(
                                "relative overflow-hidden rounded-[48px] cursor-pointer transition-all duration-500",
                                isHovered ? "flex-[2.5]" : "flex-1",
                                isAnythingHovered && !isHovered ? "opacity-40 grayscale-[0.5]" : "opacity-100 grayscale-0"
                            )}
                        >
                            <motion.div
                                animate={{
                                    scale: isHovered ? 1.1 : 1,
                                    x: isHovered ? "-5%" : "0%",
                                }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                            </motion.div>

                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <motion.div layout>
                                    <h4 className="text-2xl md:text-4xl font-black text-white mb-2 whitespace-nowrap tracking-tighter italic">
                                        {member.name}
                                    </h4>
                                    <p className="text-primary font-bold mb-6 whitespace-nowrap uppercase tracking-[0.2em] text-xs">
                                        {member.role}
                                    </p>
                                </motion.div>

                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.5, ease: "circOut" }}
                                            className="max-w-xs"
                                        >
                                            <p className="text-white/80 text-lg leading-relaxed mb-4 italic">
                                                {member.bio}
                                            </p>
                                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile/Tablet: Standard Grid */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {team.map((member, i) => (
                    <div key={i} className="relative aspect-[3/4] rounded-[32px] overflow-hidden group">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h4 className="text-3xl font-black text-white mb-1 italic tracking-tighter">{member.name}</h4>
                            <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                            <p className="text-white/60 text-sm line-clamp-2 italic">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>

        </Section>
    );
}

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

