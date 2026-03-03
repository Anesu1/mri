"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const clients = [
    "Triangle Ltd.",
    "Hippo Valley",
    "U.S. Embassy",
    "Japanese Embassy",
    "University of Zimbabwe",
    "Government Agencies",
    "ZCDC",
    "Econet Wireless",
];

export default function Clients() {
    return (
        <Section className="bg-bg-primary py-12">
            <div className="text-center mb-10">
                <Reveal>
                    <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Trusted By Zimbabwe's Leading Organisations</h2>
                </Reveal>
            </div>

            <div className="relative overflow-hidden flex whitespace-nowrap py-4">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-12 items-center"
                >
                    {[...clients, ...clients].map((client, i) => (
                        <div
                            key={i}
                            className="text-2xl md:text-3xl font-bold text-heading/20 uppercase tracking-tighter whitespace-nowrap hover:text-primary/40 transition-colors cursor-default"
                        >
                            {client}
                        </div>
                    ))}
                </motion.div>

                {/* Gradients to fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />
            </div>
        </Section>
    );
}
