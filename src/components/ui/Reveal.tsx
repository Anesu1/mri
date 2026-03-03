"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    duration?: number;
    className?: string;
}

export default function Reveal({
    children,
    delay = 0,
    y = 40,
    duration = 0.8,
    className = "",
}: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
