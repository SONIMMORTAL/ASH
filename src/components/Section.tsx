import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    containerClass?: string;
    size?: "default" | "sm" | "lg" | "full";
    bg?: "default" | "muted" | "card" | "accent";
}

export function Section({
    children,
    className,
    containerClass,
    size = "default",
    bg = "default",
    ...props
}: SectionProps) {
    const maxWidths = {
        sm: "max-w-3xl",
        default: "max-w-5xl",
        lg: "max-w-7xl",
        full: "max-w-full px-0",
    };

    const backgrounds = {
        default: "bg-background",
        muted: "bg-muted",
        card: "bg-card",
        accent: "bg-accent",
    };

    return (
        <section
            className={cn(
                "py-16 md:py-24",
                backgrounds[bg],
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "mx-auto px-4 md:px-8",
                    maxWidths[size],
                    containerClass
                )}
            >
                {children}
            </div>
        </section>
    );
}
