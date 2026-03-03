"use client";

import { motion } from "framer-motion";

export function VSLPlayer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black border border-border/50 aspect-video flex items-center justify-center group"
        >
            <video
                src="/vsl-final.mov"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover outline-none"
                poster="/thumbnail-placeholder.jpg" // Optional poster if user wants to add one later
            >
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
}
