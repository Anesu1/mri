"use client";

import { use } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, Clock, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function SingleServicePage({ params }: PageProps) {
    const { id } = use(params);
    const service = services.find((s) => s.id === id);

    if (!service) {
        return (
            <main className="pt-40 text-center">
                <h1 className="text-4xl font-bold">Service Not Found</h1>
                <Link href="/services" className="text-primary mt-4 inline-block underline">Back to Services</Link>
            </main>
        );
    }

    return (
        <main className="">
            {/* Service Hero: Seamless Top Design */}
            <Section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end pb-16 md:pb-24 text-white overflow-hidden bg-heading pt-40 !py-0">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-30 grayscale hover:opacity-50 transition-opacity duration-1000"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heading via-heading/40 to-transparent" />
                    <div className="absolute inset-0 noise-panel opacity-10" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-40 pb-20">
                    <Reveal>
                        <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-black mb-8 md:mb-12 group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Divisions
                        </Link>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-5xl sm:text-7xl md:text-[12vw] font-black tracking-tighter leading-[0.8] mt-4 uppercase italic">
                            {service.title}.
                        </h1>
                    </Reveal>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 items-start">
                        <Reveal delay={0.2}>
                            <p className="text-xl md:text-3xl text-white/50 tracking-tighter leading-tight italic max-w-xl">
                                "{service.description}"
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <Button size="lg" className="w-full sm:w-auto h-16 md:h-20 px-12 md:px-16 text-lg md:text-xl rounded-full shadow-2xl shadow-primary/20">
                                Book This Exam <ArrowUpRight className="ml-2" />
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </Section>


            {/* Content Details */}
            <Section className="py-20 md:py-32">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
                    <div className="lg:col-span-2 space-y-12 md:space-y-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-black text-heading tracking-tighter italic border-b border-black/5 pb-6 md:pb-8 mb-6 md:mb-8 uppercase">Technical Overview.</h2>
                            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl font-medium opacity-80">
                                {service.fullDescription}
                            </p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            <div className="space-y-6 md:space-y-8 glass-light p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-black/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 md:p-8 text-primary shadow-primary animate-pulse opacity-20 md:opacity-100">
                                    <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-heading tracking-tighter italic uppercase">Key Benefits.</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, bi) => (
                                        <Reveal key={bi} delay={0.1 * bi}>
                                            <li className="flex items-center gap-3 text-body">
                                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                                    <CheckCircle2 size={12} />
                                                </div>
                                                <span className="font-bold text-sm">{benefit}</span>
                                            </li>
                                        </Reveal>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6 md:space-y-8 glass-light p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-black/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/40 animate-spin-slow opacity-20 md:opacity-100">
                                    <Clock className="w-8 h-8 md:w-10 md:h-10" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-heading tracking-tighter italic uppercase">Quick Prep.</h3>
                                <ul className="space-y-4">
                                    {service.preparations.map((prep, pi) => (
                                        <Reveal key={pi} delay={0.1 * pi}>
                                            <li className="flex items-center gap-3 text-body">
                                                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                                                    <AlertCircle size={12} />
                                                </div>
                                                <span className="font-bold text-sm tracking-tight">{prep}</span>
                                            </li>
                                        </Reveal>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Reveal>
                            <div className="bg-heading p-10 md:p-12 rounded-[40px] md:rounded-[50px] text-white space-y-10 md:space-y-12 sticky top-40 shadow-2xl">
                                <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase leading-none">Diagnostic <br />Center Harare.</h3>
                                <div className="space-y-6">
                                    <div className="border-b border-white/10 pb-6">
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Location</p>
                                        <p className="text-base md:text-lg font-bold italic tracking-tighter opacity-80">88 Josiah Chinamano Ave, Harare</p>
                                    </div>
                                    <div className="border-b border-white/10 pb-6">
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Radiologists</p>
                                        <p className="text-base md:text-lg font-bold italic tracking-tighter opacity-80">Dr. Sirdar, Dr. Moyo, Dr. Sibanda</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Results</p>
                                        <p className="text-base md:text-lg font-bold italic tracking-tighter opacity-80">Same-Day Results</p>
                                    </div>
                                </div>
                                <Button size="lg" className="w-full bg-white text-heading rounded-full h-16 md:h-20 text-lg md:text-xl font-black italic hover:bg-primary hover:text-white transition-all shadow-xl">
                                    Book Exam Now
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Section>

            {/* More Services Bottom Navigation */}
            <Section className="pb-24 md:pb-32 px-4 md:px-6">
                <div className="border-t border-black/5 pt-16 md:pt-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
                    <h3 className="text-3xl md:text-5xl font-black text-heading italic tracking-tighter uppercase leading-none text-center md:text-left">Explore More Services.</h3>
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto snap-x">
                        {services.filter(s => s.id !== id).slice(0, 3).map((other) => (
                            <Link key={other.id} href={`/services/${other.id}`} className="group shrink-0 snap-center">
                                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[32px] md:rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image src={other.image} alt={other.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent" />
                                    <div className="absolute inset-x-3 bottom-3 glass border border-white/20 p-3 rounded-[16px] md:rounded-[20px] text-center backdrop-blur-3xl">
                                        <span className="text-[8px] md:text-[10px] font-black text-heading uppercase tracking-widest block line-clamp-1">{other.title}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

        </main>
    );
}
