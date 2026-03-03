"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/ui/Loader";

export default function LoadingHandler({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                className={loading ? "hidden" : "block"}
            >
                {mounted && children}
            </motion.div>
        </>
    );

}
