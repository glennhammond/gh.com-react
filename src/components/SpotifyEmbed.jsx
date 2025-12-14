// src/components/SpotifyEmbed.jsx
export default function SpotifyEmbed({ src, height = 352, title = "Spotify playlist" }) {
  if (!src) return null;

  return (
    <div className="panel overflow-hidden">
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}