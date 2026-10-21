import { Video } from "lucide-react";

export function VSLPlayer() {
  const videoUrl = process.env.NEXT_PUBLIC_WALKTHROUGH_EMBED_URL;
  return (
    <div className="video-frame">
      {videoUrl ? (
        <iframe
          src={videoUrl}
          title="The Get Booked Kit — walkthrough"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
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
