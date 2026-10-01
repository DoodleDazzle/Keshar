import { cn } from "@/lib/cn";

function Star() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="text-white"
    >
      <path
        d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SectionFrame({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[5%] right-[5%] z-20"
      >
        <div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-white/15" />
        <div className="absolute inset-y-0 right-0 w-px border-r border-dashed border-white/15" />
        <div className="absolute left-0 right-0 top-0 border-t border-dashed border-white/15" />
        <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-white/15" />
        <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
          <Star />
        </span>
        <span className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
          <Star />
        </span>
        <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
          <Star />
        </span>
        <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <Star />
        </span>
      </div>
      <div className={cn("relative z-10 px-[5vw] py-8 sm:px-[6vw] sm:py-10 lg:px-[7vw] md:py-14", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
