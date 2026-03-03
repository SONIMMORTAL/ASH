"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { VSLPlayer } from "@/components/VSLPlayer";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PricingBox } from "@/components/PricingBox";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";

export default function Home() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the video
      if (window.scrollY > 800) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">

      {/* SECTION 1 & 2: Hero & VSL */}
      <Section bg="default" className="pt-24 md:pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Turn Speaking Into Clients — <br className="hidden md:block" />
            <span className="text-primary">Not Just Applause.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            A DIY toolkit that gives you everything you need to get booked on stages and turn those audiences into paying clients.
          </p>
        </motion.div>

        <VSLPlayer />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-muted-foreground font-medium"
        >
          Watch this 5-minute video to see how the Profit Pipeline works:<br />
          <span className="text-sm">Prefer to read? Keep scrolling for the full breakdown.</span>
        </motion.p>
      </Section>

      {/* SECTION 3 & 4: Personal Letter & Problem */}
      <Section bg="muted" size="sm" className="font-serif-like text-lg md:text-xl leading-relaxed space-y-8">
        <div className="space-y-6">
          <p>If you're reading this, you probably already know you're good at what you do.</p>
          <p>You've got the credentials. You've got the expertise. Maybe you've even been on a few stages.</p>
          <p><strong>But for some reason, speaking isn't turning into clients the way it should.</strong></p>
          <p>You show up. You deliver. The audience is nodding along, taking notes, coming up to you afterward saying "that was amazing."</p>
          <p>And then... nothing.</p>
          <p>No leads. No inquiries. No clients.</p>
          <p>Just a nice memory and a LinkedIn connection request you'll forget about by next week.</p>
          <p>If that sounds familiar, keep reading — because I built something specifically for this problem.</p>
        </div>

        <div className="pt-8 space-y-6 border-t border-border/50">
          <h2 className="text-3xl font-bold text-foreground mb-8">The Applause Fades. Then What?</h2>
          <p>Here's what I see all the time:</p>
          <p>You're getting booked on stages. Or you could be — you have the credentials, the expertise, the story.</p>
          <p>But speaking isn't turning into clients.</p>
          <p>You give a talk. You get a standing ovation. People tell you how much you inspired them.</p>
          <p>And then they forget about you before you reach your car.</p>
          <p>You're the best-kept secret in your industry. Everyone who works with you gets results. But not enough people know you exist.</p>
          <p>So you keep speaking for free, hoping the phone will ring. Hoping someone in that audience will reach out. Hoping visibility will eventually turn into revenue.</p>
          <p className="font-bold text-primary text-2xl py-4 italic">But hope isn't a strategy.</p>

          <div className="bg-card p-8 rounded-xl border border-border/50 shadow-sm my-8 space-y-4">
            <h3 className="text-xl font-bold mb-4">Here's the math that explains why speaking alone doesn't work:</h3>
            <p>One talk gives you 45 minutes on 1 platform.</p>
            <p>But research shows it takes 7 hours of exposure, 11 interactions, and 4 platforms before someone trusts you enough to buy.</p>
            <p>That means a single speaking gig leaves you 6+ hours and 10+ touchpoints short of building real trust.</p>
          </div>

          <p>A standing ovation doesn't close that gap.</p>
          <p>That's why the applause fades. That's why audiences don't convert. That's why you feel like you're doing everything right but still not seeing results.</p>
          <p>It's not you. It's the system — or the lack of one.</p>
        </div>
      </Section>

      {/* SECTION 5: The Solution */}
      <Section bg="default" size="sm" className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground">
          The Speakers Who Convert Aren't Doing More.<br />
          <span className="text-primary opacity-90">They're Doing It Differently.</span>
        </h2>

        <p className="text-lg">The difference between speakers who get applause and speakers who get clients?</p>
        <p className="text-2xl font-bold text-primary">A system.</p>
        <p className="text-lg">Not more stages. Not better content. Not a bigger audience.</p>
        <p className="text-lg">A system that captures attention, nurtures relationships, and turns visibility into revenue.</p>
        <p className="text-lg font-bold">I call it The Profit Pipeline.</p>

        <div className="bg-muted p-8 rounded-xl space-y-4 my-8 border border-border/50">
          <p className="font-bold mb-4">It has four steps:</p>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>Research opportunities</strong> — Find stages where your ideal clients are actually in the room</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>Reach your audience</strong> — Capture their contact information before you leave the stage</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>Build the relationship</strong> — Nurture them with valuable content until they're ready to buy</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>Generate revenue</strong> — Turn subscribers into clients, referrals, and future speaking invitations</span>
            </li>
          </ul>
        </div>

        <p className="text-lg">That's it. Research. Reach. Relationship. Revenue.</p>
        <p className="text-lg">The speakers who convert aren't working harder than you. They just have this system in place.</p>
        <p className="text-lg font-bold mb-8">The Get Booked Kit gives you everything you need to build it.</p>

        <div className="text-center pt-8">
          <Button asChild size="lg" className="w-full md:w-auto px-12 h-14 text-lg font-bold bg-primary hover:bg-primary/90">
            <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET THE KIT NOW</a>
          </Button>
        </div>
      </Section>

      {/* SECTION 6: What's Included */}
      <Section bg="muted" size="default">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Everything You Need to Turn Speaking Into Clients</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            When you get The Get Booked Kit, you're not getting another course to watch. You're getting a complete toolkit — templates, guides, and resources you can implement this week.
          </p>
          <p className="text-lg font-bold text-primary pt-4">Here's what's inside:</p>
        </div>

        <FeaturesGrid />

        <div className="text-center mt-16">
          <Button asChild size="lg" className="w-full md:w-auto px-12 h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg">
            <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET INSTANT ACCESS</a>
          </Button>
        </div>
      </Section>

      {/* SECTION 7: Value Stack & Pricing */}
      <Section bg="default" size="default" className="py-24">
        <PricingBox />
      </Section>

      {/* SECTION 8: How It Works */}
      <Section bg="muted" size="sm" className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From Download to Pitch in One Week</h2>
        <p className="text-lg text-center mb-12">This isn't a course you need to "find time" for. It's a toolkit you can implement immediately.</p>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {[
            { step: 1, title: "Download the kit.", desc: "You'll get instant access to everything — no waiting, no drip schedule, no hoops to jump through." },
            { step: 2, title: "Build your assets.", desc: "Follow the guides to create your speaker one-sheet, lead magnet, and landing page. The templates make it simple — just fill in the blanks." },
            { step: 3, title: "Pitch opportunities.", desc: "Open The Speaker's Vault, find events that align with your expertise, and use the pitch templates to reach out. No more wondering what to say." },
            { step: 4, title: "Capture and nurture.", desc: "When you get booked, use your QR code on stage to capture leads. Your welcome sequence does the rest — nurturing new subscribers while you sleep." }
          ].map((s) => (
            <div key={s.step} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {s.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 space-y-6">
          <p className="text-xl font-bold text-primary">Research. Reach. Relationship. Revenue.</p>
          <p className="text-lg">That's the Profit Pipeline. And now you have everything you need to build it.</p>
        </div>
      </Section>

      {/* SECTION 9 & 10: Who this is for / NOT for */}
      <Section bg="default" size="default" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">The Ideal Fit</span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">Who This Kit Is Built For</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* ✅ For You */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-10 border border-primary/15 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                    <Check className="w-5 h-5" />
                  </span>
                  This Is For You If...
                </h4>
                <ul className="space-y-4 mb-8">
                  {[
                    "You're a speaker, coach, consultant, author, or expert with real credentials and proven results.",
                    "You're getting booked on stages but audiences aren't turning into clients.",
                    "You want speaking to grow your business — not just pad your resume.",
                    "You're tired of being the best-kept secret in your industry.",
                    "You're ready to build a system that works — not just collect another resource."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-foreground/85">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary/40">
                  <p className="text-[15px] text-foreground/80 leading-relaxed">
                    You have a business. You have an offer that transforms lives. You just need a system that turns visibility into clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ✗ NOT For You */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-muted/50 rounded-3xl p-8 md:p-10 border border-border/70 flex flex-col"
            >
              <h4 className="text-2xl font-bold text-foreground/70 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-muted-foreground/15 flex items-center justify-center text-muted-foreground">
                  <X className="w-5 h-5" />
                </span>
                This Is NOT For You If...
              </h4>
              <ul className="space-y-4 flex-grow">
                {[
                  "You want speaking to BE your business — chasing speaker fees without an offer to sell.",
                  "You're not willing to build your assets — this is a toolkit, not a magic wand.",
                  "You just want to collect resources without implementing — save your $77.",
                  "You're brand new with no credentials yet — start with The Speaker's Vault (it's free)."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-foreground/60">
                    <X className="w-4 h-4 shrink-0 mt-1 opacity-60" />
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/40 text-center">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50">
                  This kit is for speakers who are ready to build.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* SECTION 11: Proof / Credibility */}
      <Section bg="muted" size="sm" className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">This Isn't Theory. It's What's Working Right Now.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I don't teach concepts I read about in a book. I teach what I do every single day — for myself and for my clients.
          </p>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 py-2 my-12 italic text-xl md:text-2xl text-foreground font-medium leading-relaxed">
          "One of my clients came to me with one free conference acceptance. 90 days later? Paid keynote. Inbound requests from event organizers. A full pipeline of opportunities. She didn't become a better speaker — she built a better system."
        </blockquote>

        <div className="space-y-6 text-lg">
          <p>Here's what it's done for me:</p>
          <p>
            My own landing page — the one you're going to replicate with the template in this kit — converts at 42%. That means nearly half of everyone who visits becomes a subscriber.
          </p>
          <p>That's not luck. That's the system.</p>
          <p>Here's why I know it works:</p>
          <p>
            I run a visibility agency where my team and I do this every single day for our clients. We research opportunities, write pitches, design lead magnets, create landing pages, and write email sequences.
          </p>
          <p>
            This kit is the DIY version of what we do at a done-for-you level.
          </p>
          <p>It's not theory. It's what's working right now.</p>
        </div>

        <div className="text-center pt-8">
          <Button asChild size="lg" className="w-full md:w-auto px-12 h-14 text-lg font-bold shadow-lg text-primary-foreground">
            <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET THE KIT NOW</a>
          </Button>
        </div>
      </Section>

      {/* SECTION 12: FAQs */}
      <Section bg="default" size="sm">
        <h2 className="text-3xl font-bold text-center mb-12">Questions You Might Have</h2>

        <Accordion type="multiple" className="w-full">
          {[
            {
              q: "I've never spoken before — is this for me?",
              a: "This kit is for speakers who are already getting booked (or have the credentials to be) but aren't converting those audiences into clients. If you're brand new and still figuring out your message, start with The Speaker's Vault — it's free. Come back to the kit when you're ready to build your system."
            },
            {
              q: "How is this different from other speaker trainings?",
              a: "Most speaker trainings teach you how to speak better — delivery, storytelling, stage presence. This isn't that. The Get Booked Kit teaches you how to turn speaking into clients. It's not about being a better speaker. It's about building a system that converts. Different problem, different solution."
            },
            {
              q: "How quickly can I implement this?",
              a: "If you block out a few hours this week, you could have your one-sheet and lead magnet done. Your landing page could be live by the weekend. Your first pitch could go out on Monday. This isn't a 12-week course. It's a toolkit you can use immediately."
            },
            {
              q: "What if I already have a one-sheet?",
              a: "Great — use the guide to audit it and make sure it's optimized. Most one-sheets I see are missing key elements that event organizers actually look for. And even if your one-sheet is perfect, the kit includes everything else you need: lead magnet formula, landing page template, email sequences, pitch templates, and Vault access."
            },
            {
              q: "Is this a course?",
              a: "No. There are no long videos to watch. No modules to complete. No certificates at the end. It's a toolkit — templates, guides, and resources you can implement immediately. Download it, use it, build your system."
            }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* SECTION 13 & 14: Guarantee */}
      <Section bg="muted" size="sm" className="space-y-12">
        <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm text-center space-y-6">
          <h2 className="text-2xl font-bold">There Is No Catch</h2>
          <p className="text-xl italic text-muted-foreground">"$77 sounds too good to be true for everything you're getting."</p>
          <p>I get it. You've probably bought $500 courses that gave you less than this.</p>
          <p>So let me be clear:</p>
          <p className="font-bold">There's no catch.</p>
          <p className="text-muted-foreground">
            No upsell required to make it work. No "you need the $997 version for the real stuff." No monthly subscription that quietly charges your card.
          </p>
          <p className="text-muted-foreground">
            Just the toolkit, the templates, and The Vault — yours forever.
          </p>
          <p>I priced it at $77 because I want it to be a no-brainer for speakers who are ready to build their system. If you implement even one piece of this kit, it'll pay for itself many times over.</p>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">30-Day Money-Back Guarantee</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm confident this kit will help you — but I also know you've been burned before. So here's my promise: If you go through the kit, do the work, and don't feel like it was worth every penny — email me within 30 days and I'll refund you. No questions asked. No awkward conversation. No hoops. <strong>You either love it or you get your money back.</strong>
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="px-12 h-14 text-lg font-bold shadow-lg">
              <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET THE KIT NOW</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* SECTION 15: Final CTA */}
      <Section bg="default" size="sm" className="text-center space-y-8 py-24 border-t border-border/50">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">The System Is Here. <br /><span className="text-primary text-3xl md:text-4xl">Are You Ready to Use It?</span></h2>

        <p className="text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground">
          Let me remind you of the one belief that changes everything:<br /><br />
          <strong className="text-foreground">If you have a system for finding opportunities, capturing leads, and staying top of mind — you can turn speaking into clients, not just applause.</strong>
        </p>

        <div className="bg-muted p-8 rounded-xl max-w-xl mx-auto text-left space-y-4 my-12 border border-border">
          <p className="font-bold text-lg mb-4 text-center">By this time next week, you could have:</p>
          <ul className="space-y-3">
            {[
              "Your speaker one-sheet done and ready to send",
              "Your lead magnet named and built",
              "Your landing page live and converting",
              "Your first pitch sent to an event organizer"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground font-medium">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-2xl font-bold text-foreground mb-8">The only question is: are you ready to build?</p>

        <Button asChild size="lg" className="px-14 h-16 text-xl font-black shadow-xl hover:scale-105 transition-transform">
          <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET THE KIT NOW</a>
        </Button>
      </Section>

      {/* SECTION 16: P.S. */}
      <Section bg="muted" size="sm" className="pb-32">
        <div className="bg-card p-8 rounded-xl border border-border/50 shadow-sm space-y-6 text-muted-foreground">
          <p className="font-bold text-foreground text-xl">P.S. — If you scrolled straight to the bottom, here's the deal:</p>
          <p>
            <strong>The Get Booked Kit</strong> is a DIY toolkit that gives you everything you need to get booked on stages and turn those audiences into clients.
          </p>
          <p>
            You get: The Speaker One-Sheet Guide, The Lead Magnet Formula, The Landing Page Template, 5 Welcome Sequence Email Templates, Pitch Email Templates, and Access to The Speaker's Vault.
          </p>
          <p className="text-lg">
            Total value: $432. Yours for $77.
          </p>
          <p>
            If it doesn't deliver, I'll refund you — no questions asked, just email me within 30-days.
          </p>
          <p>
            The system is here. Click the button below to get instant access.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="w-full md:w-auto px-10 h-12 text-md font-bold">
              <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET INSTANT ACCESS</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border z-50 md:hidden flex justify-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
          >
            <Button asChild size="lg" className="w-full max-w-md h-14 text-lg font-bold shadow-lg bg-primary text-primary-foreground">
              <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"}>GET INSTANT ACCESS</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
