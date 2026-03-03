"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { ArrowUpRight, Zap, Shield, Microscope } from "lucide-react";
import Button from "@/components/ui/Button";

const icons = [Shield, Zap, Microscope];

export default function ServicesPage() {
    return (
        <main className="pt-20">
            {/* Page Hero */}
            <Section className="relative py-32 bg-heading text-white overflow-hidden rounded-b-[60px]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <h1 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.7] italic mb-12 uppercase">
                            DIAGNOSTIC <br />
                            <span className="text-primary italic">PRECISION.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mt-12 font-medium">
                            Comprehensive radiological services utilizing the world's most advanced imaging technology to provide clarity and care.
                        </p>
                    </Reveal>
                </div>
            </Section>

            {/* List of Services */}
            <Section className="py-24">
                <div className="space-y-40">
                    {services.map((service, i) => (
                        <div key={service.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                            <Reveal delay={0.1} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                                <div className="relative aspect-[4/3] rounded-[60px] overflow-hidden group shadow-2xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-heading/20 group-hover:bg-transparent transition-colors duration-700" />
                                </div>
                            </Reveal>

                            <div className={`space-y-10 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <Reveal>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                                        Division 0{i + 1}
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-black text-heading tracking-tighter leading-[0.9] italic mt-6">
                                        {service.title}.
                                    </h2>
                                </Reveal>

                                <Reveal delay={0.1}>
                                    <p className="text-xl text-body leading-relaxed max-w-lg">
                                        {service.description}
                                    </p>
                                </Reveal>

                                <div className="grid grid-cols-2 gap-8 py-4">
                                    {service.benefits.slice(0, 2).map((benefit, bi) => (
                                        <Reveal key={bi} delay={0.2 + bi * 0.1}>
                                            <div className="flex gap-4 items-start">
                                                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                                    <Shield size={16} />
                                                </div>
                                                <p className="text-sm font-bold text-heading/80 leading-tight">{benefit}</p>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>

                                <Reveal delay={0.3}>
                                    <Link href={`/services/${service.id}`}>
                                        <Button className="h-16 px-10 rounded-full group">
                                            View Full details
                                            <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />
                                        </Button>
                                    </Link>
                                </Reveal>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Banner */}
            <Section className="pb-32 px-6">
                <div className="bg-heading rounded-[60px] p-12 md:p-24 text-white text-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <h3 className="text-[20vw] font-black italic tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">BOOK NOW</h3>
                    </div>
                    <div className="relative z-10 space-y-12">
                        <Reveal>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.8] max-w-4xl mx-auto">
                                READY TO EXPERIENCE <br />
                                <span className="text-primary">PRECISION CARE?</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-xl text-white/50 max-w-xl mx-auto font-medium">
                                Fast results, world-class consultant radiologists, and a clinical environment designed for your comfort.
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <Button size="lg" className="rounded-full h-20 px-16 text-xl">
                                Book an Appointment
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </Section>
        </main>
    );
}
