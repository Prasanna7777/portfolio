import type { Video } from "../data";

export default function VideoPlayer({ video, title }: { video: Video; title: string }) {
  if (!video.src && !video.embed) return null;

  return (
    <figure className="video">
      {video.embed ? (
        <iframe
          src={video.embed}
          title={`Video: ${title}`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video controls muted preload="metadata" poster={video.poster} aria-label={`Video: ${title}`}>
          <source src={video.src} type="video/mp4" />
          Your browser cannot play this video.
        </video>
      )}
      <figcaption className="muted small">{video.caption}</figcaption>
    </figure>
  );
}