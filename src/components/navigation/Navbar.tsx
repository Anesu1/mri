"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <nav
                        className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${isScrolled ? "glass shadow-soft border border-white/20" : "bg-transparent border border-transparent"
                            }`}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-primary/20">
                                <span className="text-white font-black text-2xl uppercase tracking-tighter">M</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tighter text-heading leading-none">
                                    MRI & Radiology
                                </span>
                                <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Centre</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-bold text-heading/80 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <Button>Book Appointment</Button>
                            </div>


                            {/* Mobile Toggle */}
                            <button
                                className="lg:hidden w-12 h-12 rounded-full glass flex items-center justify-center text-heading"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
