"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Magnet, LayoutTemplate, Mail, Send, Database } from "lucide-react";

const features = [
    {
        title: "Speaker One-Sheet Guide",
        description: "Your one-sheet is often the first thing an event organizer sees. This guide shows you exactly what to include so they take you seriously — and actually respond to your pitch. You'll know what to put on it, what to leave off, and how to position yourself as the obvious choice.",
        icon: FileText
    },
    {
        title: "Lead Magnet Formula",
        description: "Most speakers don't capture leads from stage. And the ones who do? Their lead magnets don't convert. This formula shows you how to name and build a resource that your audience actually wants — one that captures their attention AND their contact info. No more QR codes that no one scans. No more freebies that collect dust.",
        icon: Magnet
    },
    {
        title: "Landing Page Template",
        description: "Your landing page is where leads become subscribers. This template gives you the exact structure that converts at 42% — the same one I use for my own business. Just fill in the blanks and launch.",
        icon: LayoutTemplate
    },
    {
        title: "5 Welcome Sequence Email Templates",
        description: "What happens after someone joins your list? If the answer is \"nothing\" — you're losing them. These 5 email templates nurture every new subscriber automatically. They build trust, deliver value, and position your offer — without you writing a single word from scratch.",
        icon: Mail
    },
    {
        title: "Pitch Email Templates",
        description: "Knowing what to say when you reach out to event organizers is half the battle. These templates give you the exact words to use — so you can pitch with confidence and actually get responses. No more staring at a blank email wondering what to write.",
        icon: Send
    },
    {
        title: "Access to The Speaker's Vault",
        description: "90+ vetted speaking opportunities across industries — conferences, podcasts, summits, panels — updated regularly. No more Googling \"call for speakers\" and hoping for the best. The research is done for you.",
        icon: Database
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function FeaturesGrid() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {features.map((feature, i) => (
                <motion.div key={i} variants={itemVariants}>
                    <Card className="h-full bg-card hover:shadow-lg transition-shadow border-border">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl text-foreground font-bold leading-tight">
                                {feature.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );
}
