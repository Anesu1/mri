"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
    }, [isVisible]);

    if (typeof window === "undefined" || window.innerWidth < 1024) return null;

    return (
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
                left: -12,
                top: -12,
                opacity: isVisible ? 1 : 0,
            }}
            className="fixed w-6 h-6 border border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        />
    );
}
