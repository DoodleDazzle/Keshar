import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { cn } from "@/lib/cn";

export function PageHero({
  title,
  bubble,
  image,
  reverse = false,
}: {
  title: string;
  bubble: string;
  image?: string;
  reverse?: boolean;
}) {
  return (
    <SectionFrame innerClassName="pb-6 md:pb-8">
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal className="min-w-0">
          <h1
            className="min-w-0 break-words font-display leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 10vw, 5.5rem)" }}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="relative w-full justify-self-end">
          <div
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            )}
          >
            <div className="aspect-video">
              <PlaceholderImage src={image} label={title} />
            </div>
            <span
              className={cn(
                "absolute bottom-3 w-fit max-w-[min(65%,13rem)] rounded-2xl bg-black/90 px-3 py-2 text-xs text-white shadow-lg backdrop-blur-sm sm:text-[13px] lg:bottom-auto lg:top-6 lg:max-w-[200px] lg:px-4 lg:py-2 lg:text-sm",
                reverse ? "right-3 lg:right-0" : "left-3 lg:left-6"
              )}
            >
              {bubble}
            </span>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
