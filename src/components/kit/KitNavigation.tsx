"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CircleHelp,
  LayoutGrid,
  Play,
} from "lucide-react";

const links = [
  { id: "welcome", label: "Welcome", icon: LayoutGrid },
  { id: "walkthrough", label: "Watch the walkthrough", icon: Play },
  { id: "research", label: "Research Opportunities", number: "01" },
  { id: "reach", label: "Reach Your Audience", number: "02" },
  { id: "relationship", label: "Build the Relationship", number: "03" },
  { id: "revenue", label: "Generate Revenue", number: "04" },
  { id: "how-to", label: "How to Use This Kit", icon: BookOpen },
  { id: "support", label: "Support & Office Hours", icon: CircleHelp },
];

export function KitNavigation() {
  const [active, setActive] = useState("welcome");
  useEffect(() => {
    let scheduled = false;
    const update = () => {
      const threshold = window.innerWidth <= 760 ? 160 : 140;
      let current = "welcome";
      for (const link of links) {
        if (
          (document.getElementById(link.id)?.getBoundingClientRect().top ??
            Infinity) <= threshold
        )
          current = link.id;
      }
      setActive(current);
      scheduled = false;
    };
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <aside className="sidebar">
      <a className="wordmark" href="#welcome" aria-label="Otova — home">
        otova<small>VISIBILITY WITH INTENTION</small>
      </a>
      <div className="sidebar-kit">
        <span className="eyebrow">YOUR SPEAKING TOOLKIT</span>
        <p>
          The Get
          <br />
          <em>Booked Kit</em>
          <span>↗</span>
        </p>
      </div>
      <nav aria-label="Kit navigation">
        {links.map((link, index) => (
          <div
            key={link.id}
            className={index === 2 || index === 6 ? "nav-group" : undefined}
          >
            {index === 2 && (
              <span className="nav-label">THE PROFIT PIPELINE</span>
            )}
            <a
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? "active" : ""}`}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.icon ? (
                <link.icon size={16} strokeWidth={1.5} />
              ) : (
                <span className="nav-number">{link.number}</span>
              )}
              <span>{link.label}</span>
              {active === link.id && <i />}
            </a>
          </div>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <span className="sidebar-signature" aria-hidden="true">
          o.
        </span>
        <p>
          Big things start
          <br />
          with one small step.
        </p>
        <a href="mailto:hey@otovaagency.com">
          We’re here to help <ArrowUpRight size={13} />
        </a>
      </div>
    </aside>
  );
}
