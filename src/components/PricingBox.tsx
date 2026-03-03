import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingBox() {
    const items = [
        { label: "Speaker One-Sheet Guide", value: "$47" },
        { label: "Lead Magnet Formula", value: "$47" },
        { label: "Landing Page Template", value: "$97" },
        { label: "5 Welcome Sequence Email Templates", value: "$97" },
        { label: "Pitch Email Templates", value: "$47" },
        { label: "Speaker's Vault Access", value: "$97" },
    ];

    return (
        <Card className="max-w-xl mx-auto border-primary/20 shadow-xl overflow-hidden bg-card relative">
            <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
            <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    Here's What You're Getting
                </h3>

                <ul className="space-y-4 mb-8">
                    {items.map((item, i) => (
                        <li key={i} className="flex justify-between items-center text-muted-foreground font-medium">
                            <span className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>{item.label}</span>
                            </span>
                            <span className="text-foreground">{item.value}</span>
                        </li>
                    ))}
                </ul>

                <div className="border-t border-border pt-6 mb-8 text-center">
                    <p className="text-lg text-muted-foreground mb-2">Total Value: <span className="line-through">$432</span></p>
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-muted-foreground text-xl">Yours for just</span>
                        <span className="text-5xl font-black text-primary tracking-tight">$77</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 max-w-sm mx-auto">
                        You could hire someone to build all of this for you. It would cost thousands and take weeks.
                        <br /><br />
                        Or you could grab the kit, follow the guides, and have your system built by this time next week.
                    </p>
                </div>

                <Button asChild size="lg" className="w-full text-lg font-bold h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                    <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET INSTANT ACCESS</a>
                </Button>
            </CardContent>
        </Card>
    );
}
