import { Video } from "lucide-react";

// The walkthrough's Vimeo player URL (https://player.vimeo.com/video/VIDEO_ID).
// Set to null to show the coming-soon placeholder instead.
export const WALKTHROUGH_EMBED_URL: string | null =
  "https://player.vimeo.com/video/1243103915?badge=0&autopause=0&player_id=0&app_id=58479";

export function VSLPlayer() {
  return (
    <div className="video-frame">
      {WALKTHROUGH_EMBED_URL ? (
        <iframe
          src={WALKTHROUGH_EMBED_URL}
          title="The Get Booked Kit — walkthrough"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="video-placeholder">
          <Video size={31} strokeWidth={1.25} aria-hidden="true" />
          <h3>Your kit walkthrough</h3>
          <p>A personal tour of your toolkit is on its way.</p>
          <span className="coming-soon">NEW VIDEO COMING SOON</span>
        </div>
      )}
      <div className="video-caption">
        <span className="status-dot" />
        <span>THE GET BOOKED KIT</span>
        <span>YOUR STARTING POINT ↗</span>
      </div>
    </div>
  );
}
