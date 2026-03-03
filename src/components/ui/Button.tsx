"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    onClick,
}: ButtonProps) {
    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-accent text-primary",
        outline: "border-2 border-primary text-primary bg-transparent",
        ghost: "text-body hover:text-primary bg-transparent",
    };

    const sizes = {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            onClick={onClick}
            className={cn(
                "rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-xl",
                variants[variant],
                sizes[size],
                className
            )}
        >

            {children}
        </motion.button>
    );
}
