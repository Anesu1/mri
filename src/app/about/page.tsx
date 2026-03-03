"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { CheckCircle2, Award, Zap, Shield } from "lucide-react";

const stats = [
    { label: "Patient Cases", value: "250K+" },
    { label: "Radiologists", value: "15+" },
    { label: "Accuracy Rate", value: "99.9%" },
    { label: "Years Exp", value: "20+" },
];

const values = [
    {
        title: "Precision First",
        description: "Our diagnostic reports are triple-checked by consultant radiologists to ensure zero-error margins.",
        icon: Shield,
    },
    {
        title: "Same-Day Results",
        description: "We understand that time is critical. Most scans are reported within 24 hours of completion.",
        icon: Zap,
    },
    {
        title: "World-Class Tech",
        description: "We invest in the latest MRI and CT technology, keeping Harare at the forefront of global imaging.",
        icon: Award,
    },
];

export default function AboutPage() {
    return (
        <main className="pt-20">
            {/* Cinematic Hero */}
            <Section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                        alt="Medical Facility"
                        fill
                        className="object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Since 1998
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-6xl md:text-9xl font-black text-heading tracking-tighter leading-[0.8] mb-12">
                            Pioneering <br />
                            <span className="italic text-primary">Medical Excellence.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-body max-w-3xl mx-auto leading-relaxed font-medium">
                            The MRI & Radiology Centre is Zimbabwe's premier diagnostic practice, dedicated to providing high-fidelity imaging through advanced technology and human compassion.
                        </p>
                    </Reveal>
                </div>
            </Section>

            {/* Stats Bar */}
            <div className="bg-heading py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter italic">{stat.value}</div>
                                <div className="text-xs font-bold text-primary uppercase tracking-[0.3em]">{stat.label}</div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-32">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <Reveal>
                            <div className="relative aspect-square rounded-[60px] overflow-hidden border-[20px] border-white shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1516549149721-396eb009230d?q=80&w=800&auto=format&fit=crop"
                                    alt="Radiology Tech"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Reveal>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-[40px] p-8 text-white hidden md:block">
                            <div className="text-4xl font-black italic mb-2">24/7</div>
                            <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">Emergency <br />Diagnostic Support</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <Reveal>
                            <h2 className="text-4xl md:text-6xl font-black text-heading leading-[0.9] tracking-tighter italic">
                                Compassion <br />Meet Integrity.
                            </h2>
                        </Reveal>
                        <p className="text-xl text-body leading-relaxed border-l-4 border-primary pl-8">
                            We don't just produce images; we provide clarity. Our mission is to ensure every patient in Harare receives world-class diagnostic care with a deeply personal, human touch.
                        </p>

                        <div className="grid gap-8">
                            {values.map((v, i) => (
                                <Reveal key={i} delay={0.1 * i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <v.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-heading mb-2">{v.title}</h4>
                                            <p className="text-body leading-relaxed">{v.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Vision Banner */}
            <Section className="bg-bg-white py-0 overflow-hidden">
                <div className="relative h-[50vh] flex items-center justify-center rounded-[60px] overflow-hidden m-6 bg-heading">
                    <Image
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop"
                        alt="Vision"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="relative z-10 text-center px-6">
                        <Reveal>
                            <h3 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter leading-tight max-w-4xl mx-auto">
                                "The Standard of <span className="text-primary italic">Precision</span> across the African Continent."
                            </h3>
                        </Reveal>
                    </div>
                </div>
            </Section>
        </main>
    );
}
