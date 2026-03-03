"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, animate } from "framer-motion";
import Section from "@/components/ui/Section";

const stats = [
    { label: "Imaging Specialists", value: 15, suffix: "+" },
    { label: "Diagnostic Procedures", value: 50, suffix: "k+" },
    { label: "Corporate Partners", value: 100, suffix: "+" },
    { label: "Years of Excellence", value: 20, suffix: "+" },
];


function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    setCount(Math.floor(value));
                },
            });
            return () => controls.stop();
        }
    }, [inView, value]);

    return (
        <span ref={nodeRef}>
            {count}
            {suffix}
        </span>
    );
}

export default function TrustBar() {
    return (
        <Section className="bg-bg-white border-y border-border !py-16">
            <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left min-w-[150px]">
                        <div className="text-4xl font-bold text-heading mb-2">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm font-medium text-body uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
