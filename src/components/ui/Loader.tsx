"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // Reduced duration for better UX
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTimeout(onComplete, 600);
        }, 1800);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center p-4 md:p-6"
        >
            <div className="relative">
                {/* Background Layer (Gray) */}
                <h1 className="text-2xl sm:text-3xl md:text-6xl font-black tracking-tighter text-[#D1D5DB] whitespace-nowrap uppercase">
                    MRI & Radiology Centre
                </h1>

                {/* Foreground Layer (Black) with Clipping Mask */}
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                        duration: 1.4,
                        ease: [0.65, 0, 0.35, 1],
                        delay: 0.1,
                    }}
                    className="absolute inset-0 overflow-hidden whitespace-nowrap"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-6xl font-black tracking-tighter text-heading whitespace-nowrap uppercase">
                        MRI & Radiology Centre
                    </h1>
                </motion.div>
            </div>


            {/* Subtle progress line at bottom */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute bottom-12 left-12 right-12 h-[1px] bg-primary/20 origin-left"
            />
        </motion.div>
    );
}
