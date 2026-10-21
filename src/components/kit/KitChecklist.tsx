"use client";

import { useSyncExternalStore } from "react";
import { Check } from "lucide-react";

const tasks = [
  <>Watch the walkthrough video, then make a copy of each asset.</>,
  <>
    Write your positioning statement and talk titles using the{" "}
    <strong>Speaker One-Sheet Guides.</strong> The research prompt asks for
    both.
  </>,
  <>
    Find your rooms with the research prompt and{" "}
    <strong>The Speaker’s Vault,</strong> and add the ones that fit to your
    tracker.
  </>,
  <>Finish the one-sheet that matches the rooms you want most.</>,
  <>
    Reach out with the <strong>Pitch Email Templates</strong> or the{" "}
    <strong>Conference Proposal Guide,</strong> and follow up using the timing
    inside.
  </>,
  <>
    Before your next talk, set up your lead magnet and welcome sequence so the
    room comes with you.
  </>,
];
const storageKey = "otova-kit-checklist-v1";
const fallback = { value: "", active: false };
function getSnapshot() {
  if (fallback.active) return fallback.value;
  try {
    return localStorage.getItem(storageKey) ?? "";
  } catch {
    return fallback.value;
  }
}
function saveProgress(value: string) {
  fallback.value = value;
  try {
    localStorage.setItem(storageKey, value);
    fallback.active = false;
  } catch {
    fallback.active = true;
  }
  window.dispatchEvent(new Event("kit-progress"));
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("kit-progress", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("kit-progress", callback);
  };
}

export function KitChecklist() {
  const saved = useSyncExternalStore(subscribe, getSnapshot, () => "");
  const completed = new Set(
    saved
      .split(",")
      .filter((value) => /^[0-5]$/.test(value))
      .map(Number),
  );
  const toggle = (index: number) => {
    if (completed.has(index)) completed.delete(index);
    else completed.add(index);
    saveProgress([...completed].join(","));
  };
  return (
    <div className="checklist">
      <div className="checklist-heading">
        <span>YOUR GET-STARTED CHECKLIST</span>
        <span aria-live="polite">{completed.size} of 6 complete</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Kit setup progress"
        aria-valuenow={completed.size}
        aria-valuemin={0}
        aria-valuemax={6}
      >
        <span style={{ width: `${(completed.size / 6) * 100}%` }} />
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className={completed.has(index) ? "is-complete" : ""}>
            <label>
              <input
                type="checkbox"
                checked={completed.has(index)}
                onChange={() => toggle(index)}
              />
              <span className="task-check" aria-hidden="true">
                {completed.has(index) ? (
                  <Check size={15} />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}
              </span>
              <span className="task-text">{task}</span>
            </label>
          </li>
        ))}
      </ol>
      <p className="checklist-note">
        Make a little progress. Check it off. Pick up where you left off.
        <br />
        Your checklist is saved in this browser when storage is available.
      </p>
    </div>
  );
}
