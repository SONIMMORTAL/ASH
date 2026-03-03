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
            <iframe
                src="https://player.vimeo.com/video/1169973190?badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Get Booked Kit VSL FINAL"
                className="absolute inset-0 w-full h-full"
            />
        </motion.div>
    );
}
