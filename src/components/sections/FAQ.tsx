"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const faqs = [
    {
        question: "How do I prepare for my MRI scan?",
        answer: "Preparation depends on the scan type. Generally, wear comfortable, metal-free clothing. Some scans may require fasting or contrast dye; our team will provide specific instructions during your booking confirmation.",
    },
    {
        question: "How long does it take to get my results?",
        answer: "Most diagnostic reports are completed within 24–48 hours. Your referring physician will receive the full report and images via our secure portal immediately after our consultant radiologists have completed their review.",
    },
    {
        question: "Is medical imaging safe for everyone?",
        answer: "Safety is our priority. MRI is radiation-free, making it extremely safe for most patients. However, we must screen for metallic implants, pacemakers, or pregnancy prior to the procedure to ensure total safety.",
    },
    {
        question: "Do I need a doctor's referral for a scan?",
        answer: "Yes, a referral from a licensed medical practitioner is required for all diagnostic imaging at our centre. This ensures the most appropriate and safe procedure is performed for your specific clinical needs.",
    },
];


export function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-xl font-bold transition-colors ${isOpen ? "text-primary" : "text-heading"}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-primary text-white" : "bg-accent text-primary group-hover:scale-110"}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-body leading-relaxed max-w-2xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    return (
        <Section className="bg-bg-white border-t border-border">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Reveal>
                        <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">FAQ</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h3 className="text-3xl md:text-4xl font-black text-heading italic tracking-tighter uppercase">Common Questions</h3>
                    </Reveal>
                </div>

                <div className="glass rounded-[32px] p-6 md:p-10 border border-border shadow-soft">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} {...faq} />
                    ))}
                </div>
            </div>
        </Section>

    );
}
