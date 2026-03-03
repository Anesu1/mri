"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        value: "88 Josiah Chinamano Avenue, Harare, Zimbabwe",
        link: "https://maps.google.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+263 242 708 000",
        link: "tel:+263242708000"
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "info@mriradiology.co.zw",
        link: "mailto:info@mriradiology.co.zw"
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Mon - Fri: 8am - 8pm, Sat: 9am - 5pm",
    },
];

export default function ContactPage() {
    return (
        <main className="">
            {/* Contact Hero: Seamless Top Design */}
            <Section className="relative py-0 bg-heading text-white overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] absolute -top-1/2 -right-1/4" />
                    <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] absolute -bottom-1/4 -left-1/4" />
                    <div className="absolute inset-0 noise-panel opacity-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center pt-40 pb-20">
                    <Reveal>
                        <h1 className="text-6xl md:text-[14vw] font-black tracking-tighter leading-[0.7] italic mb-8 md:mb-12 uppercase">
                            GET IN <br />
                            <span className="text-primary italic">TOUCH.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mt-12 italic font-medium">
                            Have questions or ready to book your diagnostic scan? Our medical team is available to assist you.
                        </p>
                    </Reveal>
                </div>
            </Section>


            {/* Main Contact Grid */}
            <Section className="py-24 -mt-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <Reveal>
                            <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-black/5">
                                <h2 className="text-4xl font-black text-heading tracking-tighter italic mb-12">Send an Inquiry.</h2>
                                <form className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Full Name</label>
                                        <input type="text" className="w-full bg-accent border-none rounded-3xl px-8 py-5 focus:ring-4 focus:ring-primary/10 transition-all text-heading font-medium" placeholder="Ex: John Hammond" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Email Address</label>
                                        <input type="email" className="w-full bg-accent border-none rounded-3xl px-8 py-5 focus:ring-4 focus:ring-primary/10 transition-all text-heading font-medium" placeholder="Ex: john@mriradiology.com" />
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Service of Interest</label>
                                        <select className="w-full bg-accent border-none rounded-3xl px-8 py-5 focus:ring-4 focus:ring-primary/10 transition-all text-heading font-medium appearance-none">
                                            <option>Select a Diagnostic Service</option>
                                            <option>MRI Whole Body Scan</option>
                                            <option>Neuro Assessment MRI</option>
                                            <option>Orthopedic High-Res CT</option>
                                            <option>Contrast Ultrasound</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Clinical Details / Message</label>
                                        <textarea rows={5} className="w-full bg-accent border-none rounded-3xl px-8 py-5 focus:ring-4 focus:ring-primary/10 transition-all text-heading font-medium resize-none" placeholder="Provide any clinical details or questions here..." />
                                    </div>
                                    <div className="md:col-span-2 pt-6">
                                        <Button className="w-full py-6 text-xl rounded-full group h-20">
                                            Submit Request
                                            <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Reveal>
                    </div>

                    {/* Quick Info Section */}
                    <div className="lg:col-span-1 space-y-8">
                        {contactInfo.map((info, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="glass p-8 rounded-[40px] border border-black/5 hover:border-primary/20 transition-all duration-500 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform">
                                        <info.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-heading mb-2 uppercase tracking-tight">{info.title}</h4>
                                    <p className="text-body leading-relaxed max-w-[200px]">{info.value}</p>
                                    {info.link && (
                                        <a href={info.link} className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mt-6 group/link">
                                            Interactive Lead <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Map Placeholder Panel */}
            <Section className="py-0 px-6 mb-24 overflow-hidden">
                <div className="relative h-[400px] w-full bg-heading rounded-[60px] overflow-hidden group">
                    <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                        alt="Map Placeholder"
                        fill
                        className="object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center px-12 z-10">
                        <Reveal>
                            <h3 className="text-3xl font-black text-white italic tracking-tighter mb-4 text-center">
                                Locate Us in the Heart of Harare.<br />
                                <span className="text-primary italic">88 Josiah Chinamano Avenue</span>
                            </h3>
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-heading rounded-full px-10 h-16">
                                Get Directions <ArrowUpRight size={18} className="ml-2" />
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </Section>
        </main>
    );
}
