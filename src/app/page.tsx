import Image from "next/image";
import { ResourcePreview } from "@/components/kit/ResourcePreview";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  CircleHelp,
  Clock3,
  FileText,
  Search,
  Send,
  TrendingUp,
  Users,
} from "lucide-react";
import { KitNavigation } from "@/components/kit/KitNavigation";
import { KitChecklist } from "@/components/kit/KitChecklist";
import { VSLPlayer } from "@/components/VSLPlayer";

const steps = [
  {
    id: "research",
    number: "01",
    title: "Research Opportunities",
    note: "Find the rooms where you belong.",
    resources: [
      {
        title: "AI Speaking Opportunity Research Prompt",
        description:
          "Use AI to build a list of speaking opportunities that fit your work, each with a source link to check",
        type: "AI PROMPT",
        preview: "prompt" as const,
        url: "https://docs.google.com/document/d/1LO0pJwLLFz8AwrSDKK4VjI8GrpeMLlgT-cIDbNwm3JI/copy?tab=t.0",
      },
      {
        title: "The Speaker's Vault",
        description:
          "100+ vetted speaking opportunities across conferences, summits, associations, podcasts, and organizations, with application links and deadlines",
        type: "OPPORTUNITY LIBRARY",
        preview: "vault" as const,
        url: "https://docs.google.com/spreadsheets/d/1xhnDaJKMEVLjU6UIClVramVQSPtXaZMR/edit?usp=sharing&ouid=112033106492854075084&rtpof=true&sd=true",
      },
      {
        title: "Speaking Opportunity Tracker",
        description:
          "Keep every opportunity organized in one place, and see how many turn into bookings each month",
        type: "GOOGLE SHEET",
        preview: "tracker" as const,
        url: "https://docs.google.com/spreadsheets/d/1ouZrw6llCL_gHpV9FiU9MfCKembeGUAjs69r76BuPAs/copy?gid=990732984#gid=990732984",
      },
    ],
  },
  {
    id: "reach",
    number: "02",
    title: "Reach Your Audience",
    note: "Make your next introduction count.",
    resources: [
      {
        title: "Speaker One-Sheet Guides",
        description:
          "Build the right one-sheet for conferences, workshops and trainings, and podcasts",
        type: "3 GUIDES IN ONE",
        preview: "onesheet" as const,
        url: "https://docs.google.com/document/d/1lMM76Fz5CUHYSQx5BZxKh9ncjxDZ2GyhLL5fBeGmVmk/copy?tab=t.0",
      },
      {
        title: "Pitch Email Templates",
        description:
          "Real pitches and follow-ups for organizations and podcasts, ready to personalize",
        type: "EMAIL TEMPLATES",
        preview: "pitch" as const,
        url: "https://docs.google.com/document/d/10je6NS_QId5GZ3wjaUadzphUX9HZjRESJcYxGp-r-pY/copy?tab=t.0",
      },
      {
        title: "Conference Proposal Guide",
        description:
          "Build a proposal that shows reviewers why your session belongs on their program",
        type: "PROPOSAL GUIDE",
        preview: "proposal" as const,
        url: "https://docs.google.com/document/d/12D-bjkCdhxkGtjvATSY-B80jJXzfUYn8kkrLgcc3WJo/copy?tab=t.0",
      },
    ],
  },
  {
    id: "relationship",
    number: "03",
    title: "Build the Relationship",
    note: "Let the conversation keep going.",
    resources: [
      {
        title: "Lead Magnet Formula Worksheet",
        description:
          "Create a free resource and the landing page that turns your audience into subscribers",
        type: "WORKSHEET",
        preview: "magnet" as const,
        url: "https://docs.google.com/document/d/1w1g9YOGmysVkVxwHmuk9VCltN7PG0eZKXjE1QKjehgQ/copy?tab=t.0#bookmark=id.pbraff44wrgn",
      },
      {
        title: "5-Email Welcome Sequence Guide",
        description:
          'Nurture new subscribers from "just met you" to "ready to buy"',
        type: "EMAIL SEQUENCE",
        preview: "sequence" as const,
        url: "https://docs.google.com/document/d/1PihjYOcjjouxAfIs9QpXFHuAgiGbtQYyi8PcBcmTdds/copy?tab=t.0",
      },
    ],
  },
];

function KitArtwork() {
  return (
    <figure className="hero-collage">
      <div className="photo-editorial-label">
        <span>THE ART OF SHOWING UP</span>
        <span>01 — 03</span>
      </div>
      <div className="collage-grid">
        <div className="collage-photo collage-main">
          <Image
            src="/images/speakers-stage.jpeg"
            alt="Two speakers sharing ideas on an auditorium stage"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 760px) 92vw, (max-width: 950px) 540px, 42vw"
          />
          <span className="photo-tag" aria-hidden="true">
            01 · MAINSTAGE & KEYNOTES
          </span>
        </div>
        <div className="collage-photo collage-left">
          <Image
            src="/images/speaker-summit.jpeg"
            alt="A speaker connecting with an audience at an intimate summit"
            fill
            sizes="(max-width: 760px) 46vw, 22vw"
          />
          <span className="photo-tag" aria-hidden="true">
            02 · SUMMITS & PANELS
          </span>
        </div>
        <div className="collage-photo collage-right">
          <Image
            src="/images/speaker-community.jpeg"
            alt="A speaker addressing an engaged community audience"
            fill
            sizes="(max-width: 760px) 46vw, 22vw"
          />
          <span className="photo-tag" aria-hidden="true">
            03 · SALONS & WORKSHOPS
          </span>
        </div>
      </div>
      <figcaption>
        <span>Your voice belongs in the room.</span>
        <span className="photo-caption-index">THE GET BOOKED KIT</span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="kit-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <KitNavigation />
      <div className="workspace">
        <header className="topbar">
          <div className="topbar-left">
            <span className="topbar-pill">CLIENT PORTAL</span>
            <span>Your toolkit. Your next chapter.</span>
          </div>
          <div className="topbar-actions">
            <a className="topbar-jump" href="#how-to">
              Setup checklist
            </a>
            <a className="topbar-help" href="mailto:hey@otovaagency.com">
              <CircleHelp size={15} /> Need a hand? <ArrowUpRight size={13} />
            </a>
          </div>
        </header>
        <main id="main-content">
          <section className="hero" id="welcome" aria-labelledby="hero-title">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="status-dot" /> WELCOME TO THE GET BOOKED KIT
              </span>
              <h1 id="hero-title">
                You Just Took Getting Booked <em>Into Your Own Hands.</em>
              </h1>
              <p>
                Everything below is built on the Profit Pipeline, the same four
                steps my team runs for our clients. Start with the walkthrough
                video, then make your copies and work through the assets in
                order.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#walkthrough">
                  Let’s get you started <ArrowDown size={16} />
                </a>
                <a
                  className="button button-outline hero-secondary"
                  href="#resources"
                >
                  Explore 8 resources <ArrowRight size={15} />
                </a>
              </div>
              <div className="hero-metrics" aria-label="Kit highlights">
                <div>
                  <strong>04</strong>
                  <span>Pipeline stages</span>
                </div>
                <i aria-hidden="true" />
                <div>
                  <strong>08</strong>
                  <span>Ready-to-copy templates</span>
                </div>
                <i aria-hidden="true" />
                <div>
                  <strong>100+</strong>
                  <span>Vetted speaking rooms</span>
                </div>
              </div>
              <span className="hero-footnote">
                A clear path from your next talk to your next client.
              </span>
            </div>
            <KitArtwork />
          </section>
          <div
            className="pipeline-strip"
            aria-label="The four steps of the Profit Pipeline"
          >
            {[
              { icon: Search, label: "Research", href: "research" },
              { icon: Send, label: "Reach", href: "reach" },
              { icon: Users, label: "Relationship", href: "relationship" },
              { icon: TrendingUp, label: "Revenue", href: "revenue" },
            ].map((step, index) => (
              <a key={step.href} href={`#${step.href}`}>
                <step.icon size={18} strokeWidth={1.5} />
                <span>
                  <small>0{index + 1}</small>
                  {step.label}
                </span>
                {index < 3 && (
                  <ArrowRight className="pipeline-arrow" size={14} />
                )}
              </a>
            ))}
          </div>
          <section
            className="walkthrough section-space"
            id="walkthrough"
            aria-labelledby="walkthrough-title"
          >
            <div className="walkthrough-copy">
              <span className="eyebrow">FIRST THINGS FIRST</span>
              <h2 id="walkthrough-title">
                A little direction.
                <br />
                <em>A lot of possibility.</em>
              </h2>
              <p>
                Watch this first. It shows you where to start and how to get the
                most out of the kit to see results.
              </p>
              <div className="small-note">
                <span className="circle-icon">
                  <AudioLines size={17} />
                </span>
                <span>
                  Your kit walkthrough
                  <br />
                  <small>
                    {process.env.NEXT_PUBLIC_WALKTHROUGH_EMBED_URL
                      ? "Press play, then make it yours."
                      : "Your new walkthrough is coming soon."}
                  </small>
                </span>
              </div>
            </div>
            <VSLPlayer />
          </section>
          <section
            id="resources"
            className="resources-section"
            aria-labelledby="resources-title"
          >
            <div className="section-heading">
              <div>
                <span className="eyebrow">THE PROFIT PIPELINE</span>
                <h2 id="resources-title">Your Resources</h2>
              </div>
              <span className="resource-count">
                8 resources. One clear path.
              </span>
            </div>
            <div className="copy-note">
              <FileText size={17} />
              <p>
                Make it yours. Open each resource and save a copy to your own
                Google Drive.
              </p>
              <span>
                GOOGLE DOCS & SHEETS <ArrowUpRight size={12} />
              </span>
            </div>
            {steps.map((step) => (
              <section
                className={`resource-step step-${step.number}`}
                id={step.id}
                key={step.id}
                aria-labelledby={`${step.id}-title`}
              >
                <div className="step-heading">
                  <span className="step-number">{step.number}</span>
                  <div>
                    <span className="eyebrow">STEP {Number(step.number)}</span>
                    <h3 id={`${step.id}-title`}>{step.title}</h3>
                  </div>
                  <p>{step.note}</p>
                </div>
                <div
                  className={`resource-grid ${step.resources.length === 2 ? "two-columns" : ""}`}
                >
                  {step.resources.map((resource) => (
                    <a
                      className="resource-card"
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${resource.title} — opens in a new tab`}
                    >
                      <ResourcePreview kind={resource.preview} />
                      <span className="card-type">{resource.type}</span>
                      <h4>{resource.title}</h4>
                      <p>{resource.description}</p>
                      <div className="card-footer">
                        <span>
                          {resource.title === "The Speaker's Vault"
                            ? "Explore the vault"
                            : "Make a copy"}
                        </span>
                        <ArrowRight size={15} />
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
            <section
              className="revenue-panel"
              id="revenue"
              aria-labelledby="revenue-title"
            >
              <div className="revenue-title">
                <span className="step-number">04</span>
                <span className="eyebrow">STEP 4 · THE PAYOFF</span>
                <h3 id="revenue-title">
                  Generate
                  <br />
                  <em>Revenue</em>
                </h3>
                <TrendingUp
                  className="revenue-art"
                  size={95}
                  strokeWidth={0.8}
                />
              </div>
              <div className="revenue-copy">
                <p>
                  This is where the first three steps pay off. The last email in
                  your welcome sequence invites your subscribers to work with
                  you, and every talk you give adds new subscribers who get that
                  same invitation.
                </p>
                <div className="revenue-flow">
                  <span>Your talk</span>
                  <ArrowRight size={15} />
                  <span>Your subscribers</span>
                  <ArrowRight size={15} />
                  <span>Your next clients</span>
                </div>
              </div>
            </section>
          </section>
          <section
            className="how-to section-space"
            id="how-to"
            aria-labelledby="how-to-title"
          >
            <div className="how-to-intro">
              <span className="eyebrow">
                FROM OPENING THE KIT TO TAKING THE STAGE
              </span>
              <h2 id="how-to-title">
                How to Use
                <br />
                <em>This Kit</em>
              </h2>
              <p>
                You don’t need to do everything today. Just take the next step.
              </p>
              <div className="beyond-note">
                <Clock3 size={21} strokeWidth={1.5} />
                <h3>Beyond the Steps</h3>
                <p>
                  Once your assets are built, your 2 hours a week mostly go to
                  two things: adding new opportunities to your tracker and
                  sending your pitches and follow-ups.
                </p>
              </div>
            </div>
            <KitChecklist />
          </section>
          <section
            className="support-section"
            id="support"
            aria-labelledby="support-title"
          >
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  YOU DON’T HAVE TO FIGURE IT OUT ALONE
                </span>
                <h2 id="support-title">Questions? I’ve Got You.</h2>
              </div>
              <a className="email-link" href="mailto:hey@otovaagency.com">
                Email me anytime <ArrowUpRight size={15} />
                <span>hey@otovaagency.com</span>
              </a>
            </div>
            <div className="support-grid">
              <article className="support-card office-hours">
                <span className="support-stamp" aria-hidden="true">
                  <small>FIRST</small><span>TUE</span>
                </span>
                <span className="eyebrow">LET’S WORK THROUGH IT TOGETHER</span>
                <h3>
                  Stuck Somewhere?
                  <br />
                  Bring It to Office Hours.
                </h3>
                <p>
                  As you work through the kit, questions will come up. On the
                  first Tuesday of every month, from 2 to 3 PM ET, you can join
                  me live to ask anything about the kit and get my feedback on
                  your own strategy. It’s the closest thing to having me look
                  over your shoulder without hiring my team.
                </p>
                <div className="schedule">
                  <span className="status-dot" /> First Tuesday of every month{" "}
                  <span>2–3 PM ET</span>
                </div>
                <a
                  className="button button-outline"
                  href="https://us06web.zoom.us/meeting/register/D-O8M8zgTiOQ2nkVoC0XZg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Office Hours <ArrowUpRight size={16} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
              <article className="support-card team-support">
                <span className="support-monogram" aria-hidden="true">
                  o.
                </span>
                <span className="eyebrow">YOUR VISION. OUR TEAM.</span>
                <h3>
                  Want My Team
                  <br />
                  to Run It for You?
                </h3>
                <p>
                  When you’re ready to stop being the one responsible for every
                  pitch and follow-up, my team can run the Profit Pipeline for
                  you, from getting you booked to running your email marketing
                  and social media.
                </p>
                <blockquote>
                  <strong>Signature Visibility Support</strong> is our
                  done-for-you monthly retainer for entrepreneurs who speak,
                  starting at <strong>$2,500 a month.</strong>
                </blockquote>
                <a
                  className="button button-dark"
                  href="https://otovaagency.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply to Work With Us <ArrowUpRight size={16} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            </div>
          </section>
          <footer className="footer">
            <a
              className="wordmark"
              href="#welcome"
              aria-label="Otova — back to top"
            >
              otova
            </a>
            <p>Your expertise deserves a bigger room.</p>
            <span>THE GET BOOKED KIT</span>
            <a href="#welcome">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
