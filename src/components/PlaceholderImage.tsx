import { cn } from "@/lib/cn";

export function PlaceholderImage({
  label = "IMAGE",
  className,
  src,
  video,
  alt,
  showLabel = true,
}: {
  label?: string;
  className?: string;
  src?: string;
  video?: string;
  alt?: string;
  showLabel?: boolean;
}) {
  const mediaSrc = video ?? src;

  if (mediaSrc && /\.(mp4|webm|mov)(?:[?#].*)?$/i.test(mediaSrc)) {
    return (
      <video
        src={mediaSrc}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
        aria-label={alt ?? label}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? label}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-[var(--card-surface)] text-xs font-medium tracking-[0.2em] text-muted",
        className
      )}
      aria-label={label}
    >
      {showLabel && <span>{label}</span>}
    </div>
  );
}
