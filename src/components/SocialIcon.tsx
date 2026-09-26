import { cn } from "@/lib/cn";

type IconName =
  | "dribbble"
  | "x"
  | "instagram"
  | "linkedin"
  | "facebook";

const paths: Record<IconName, React.ReactNode> = {
  dribbble: (
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 5.2c1.1 1.4 1.8 3.2 1.9 5.1-.5-.1-3.1-.6-5.9-.3-.1-.2-.2-.4-.3-.6 1.8-1.4 3.4-3.1 4.3-4.2zM12 4c1.8 0 3.5.6 4.8 1.6-.8 1-2.3 2.6-4.1 4-1.3-2.4-2.7-4.4-3.4-5.3C10.3 4.1 11.1 4 12 4zM8.2 5.1c.7.9 2.1 2.9 3.4 5.3-3 .9-5.8 1-6.9 1C5.3 8.7 6.5 6.5 8.2 5.1zM4 12.1v-.2c1.3 0 4.6-.1 7.9-1.2.2.4.4.8.6 1.2-2.6.8-4.6 2.7-5.6 4.6C5.4 15.3 4.5 13.8 4 12.1zm8 7.9c-1.6 0-3.1-.5-4.3-1.3.9-1.8 2.7-3.5 5.2-4.3.9 2.4 1.6 4.6 1.9 5.4-.9.1-1.8.2-2.8.2zm4.2-1.3c-.3-.8-1-2.8-1.9-5.1 2.5-.3 4.8.2 5.2.3-.4 2-1.6 3.7-3.3 4.8z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      d="M17.5 4h2.3l-5.1 5.8L21 20h-4.7l-3.7-4.8L8.1 20H5.8l5.5-6.2L4 4h4.8l3.3 4.4L17.5 4zm-.8 14.4h1.3L8.4 5.5H7.1l9.6 12.9z"
    />
  ),
  instagram: (
    <path
      fill="currentColor"
      d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm10 1.8H7A2.2 2.2 0 004.8 7v10A2.2 2.2 0 007 19.2h10a2.2 2.2 0 002.2-2.2V7A2.2 2.2 0 0017 4.8zM12 8.2A3.8 3.8 0 1112 15.8 3.8 3.8 0 0112 8.2zm0 1.7a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2zM17.4 6.4a1 1 0 110 2 1 1 0 010-2z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M6.5 9.3H4V20h2.5V9.3zM5.2 4A1.5 1.5 0 103.7 5.5 1.5 1.5 0 005.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6a2.1 2.1 0 00-2 1.5 2.6 2.6 0 00-.1.9V20H11V9.3h2.4v1.5a3.4 3.4 0 013.1-1.7c2.3 0 3.5 1.5 3.5 4.6V20z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 20v-7.2h2.4l.4-2.8h-2.8V8.3c0-.8.2-1.3 1.4-1.3H16.5V4.5A19 19 0 0014.3 4c-2.2 0-3.7 1.3-3.7 3.8v2.2H8v2.8h2.6V20h2.9z"
    />
  ),
};

export function SocialIcon({
  name,
  href,
  className,
}: {
  name: IconName;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[var(--card-surface)] text-white transition-transform duration-150 hover:scale-105",
        className
      )}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
        {paths[name]}
      </svg>
    </a>
  );
}
