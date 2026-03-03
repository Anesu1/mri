"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Clock, User } from "lucide-react";

const posts = [
    {
        title: "The Future of MRI: AI-Enhanced Scanning",
        excerpt: "How 2026's latest algorithms are doubling resolution and cutting scan times in half for our Harare patients.",
        category: "Innovation",
        date: "Feb 24, 2026",
        author: "Dr. L. Sirdar",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Whole Body Screening: A Preventative Roadmap",
        excerpt: "Exploring the life-saving potential of proactive diagnostic checkups for asymptomatic individuals.",
        category: "Patient Care",
        date: "Feb 18, 2026",
        author: "Dr. K. Moyo",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Navigating Neuro-Imaging for Chronic Pain",
        excerpt: "A deep dive into how high-field MRI provides clarity for neurological conditions and pain management.",
        category: "Neurology",
        date: "Feb 12, 2026",
        author: "Dr. S. Sibanda",
        image: "https://images.unsplash.com/photo-1579154235884-10f5fe138401?q=80&w=800&auto=format&fit=crop",
    },
];

export default function BlogPage() {
    return (
        <main className="">
            {/* Blog Hero: Immersive Top Design */}
            <Section className="relative py-0 bg-heading text-white overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-bg-primary to-transparent" />
                    <div className="absolute inset-0 noise-panel opacity-10" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center pt-40 pb-20">
                    <Reveal>
                        <h1 className="text-6xl md:text-[14vw] font-black tracking-tighter leading-[0.7] italic mb-8 md:mb-12 uppercase">
                            MEDICAL <br />
                            <span className="text-primary italic">INSIGHTS.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mt-12 italic font-medium">
                            Stay at the leading edge of diagnostic science with the latest research and news from Harare's imaging specialists.
                        </p>
                    </Reveal>
                </div>
            </Section>


            {/* Featured Post Panel */}
            <Section className="py-24 -mt-20">
                <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-2xl border border-black/5 overflow-hidden group">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-video rounded-[40px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1516549149721-396eb009230d?q=80&w=1200&auto=format&fit=crop"
                                alt="Featured Post"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        <div className="space-y-10 group-hover:translate-x-4 transition-transform duration-700">
                            <div className="inline-block px-5 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                                Editor's Choice
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-heading leading-[0.9] tracking-tighter italic">
                                Advancing <br />Genetics in Harare.
                            </h2>
                            <p className="text-xl text-body leading-relaxed max-w-lg">
                                Our research team is pioneering new diagnostic methods to provide earlier and more accurate hereditary profiling.
                            </p>
                            <Button className="h-20 px-12 text-xl rounded-full group/btn">
                                Read Full Article <ArrowUpRight size={24} className="ml-2 group-hover/btn:rotate-45 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Post Grid */}
            <Section className="py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <article className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden mb-10 shadow-xl border-4 border-white">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 glass px-5 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-widest backdrop-blur-3xl">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="space-y-6 px-4">
                                    <div className="flex items-center gap-6 text-[10px] font-bold text-body uppercase tracking-widest opacity-60">
                                        <div className="flex items-center gap-2"><Clock size={14} /> {post.date}</div>
                                        <div className="flex items-center gap-2"><User size={14} /> {post.author}</div>
                                    </div>

                                    <h3 className="text-3xl font-black text-heading group-hover:text-primary transition-colors tracking-tighter leading-[1] italic">
                                        {post.title}
                                    </h3>

                                    <p className="text-body text-lg leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-[10px] group-hover:gap-8 transition-all duration-500">
                                        Dive Deep <div className="w-12 h-0.5 bg-primary" /> <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Insights Footer Callout */}
            <Section className="py-0 px-6 mb-32">
                <div className="relative h-[40vh] flex items-center justify-center rounded-[60px] overflow-hidden m-6 bg-heading">
                    <Image
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop"
                        alt="Join Conversation"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="relative z-10 text-center px-6">
                        <Reveal>
                            <h3 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-tight max-w-4xl mx-auto mb-10">
                                EXPLORE <span className="text-primary italic">THE FUTURE.</span>
                            </h3>
                            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white hover:text-heading rounded-full px-12 h-20 text-xl font-black italic">
                                Join our Research Network
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </Section>
        </main>
    );
}
