const WALKTHROUGH_EMBED_URL =
  "https://player.vimeo.com/video/1238609750?badge=0&autopause=0&player_id=0&app_id=58479";

export function VSLPlayer() {
  return (
    <div className="video-frame">
      <iframe
        src={WALKTHROUGH_EMBED_URL}
        title="The Get Booked Kit — walkthrough"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
      <div className="video-caption">
        <span className="status-dot" />
        <span>THE GET BOOKED KIT</span>
        <span>YOUR STARTING POINT ↗</span>
      </div>
    </div>
  );
}
