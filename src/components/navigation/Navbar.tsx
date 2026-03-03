"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const isHome = pathname === "/";


    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-2 md:py-4" : "py-4 md:py-6"
                    }`}
            >

                <div className="container mx-auto px-6">
                    <nav
                        className={`flex items-center justify-between px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-700 ${isScrolled
                            ? "glass shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/20"
                            : "bg-white/50 backdrop-blur-md md:bg-transparent border border-white/10 md:border-transparent"
                            }`}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-primary/20 flex-shrink-0">
                                <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter">M</span>
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-lg md:text-2xl font-black tracking-tighter leading-tight uppercase italic ${isScrolled ? "text-heading" : (isHome ? "text-heading" : "text-white")}`}>
                                    MRI Radiology
                                </span>
                                <span className="text-[8px] md:text-[10px] font-bold text-primary tracking-[0.3em] uppercase leading-none">Centre</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary ${pathname === link.href ? "text-primary scale-110" : (isScrolled ? "text-heading" : (isHome ? "text-heading" : "text-white"))
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <Button size="sm">Book Appointment</Button>
                            </div>


                            {/* Mobile Toggle */}
                            <button
                                className={`lg:hidden w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center shadow-soft border border-white/40 ${isScrolled ? "text-heading" : (isHome ? "text-heading" : "text-white")}`}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>

                        </div>
                    </nav>
                </div>


                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-24 inset-x-6 z-40 bg-white/90 backdrop-blur-2xl rounded-[40px] p-8 lg:hidden shadow-2xl border border-white/20"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-bold text-heading flex justify-between items-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-border my-2" />
                                <Button size="lg" className="w-full">
                                    Book Appointment
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}

