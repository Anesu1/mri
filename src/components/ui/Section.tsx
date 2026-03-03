import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    containerClassName?: string;
    box?: boolean;
}

export default function Section({
    children,
    className,
    id,
    containerClassName,
    box = true,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 overflow-hidden", className)}
        >
            <div
                className={cn(
                    box ? "container mx-auto px-6" : "",
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
