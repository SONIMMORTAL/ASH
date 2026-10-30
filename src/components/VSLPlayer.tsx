import { Video } from "lucide-react";

// Set to the walkthrough's Vimeo player URL (https://player.vimeo.com/video/VIDEO_ID)
// once it's recorded. Until then the section shows a coming-soon placeholder.
export const WALKTHROUGH_EMBED_URL: string | null = null;

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
