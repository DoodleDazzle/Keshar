import { hero, images, site } from "@/content/site";
import { PillButton } from "@/components/PillButton";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";

export function Hero() {
  return (
    <SectionFrame innerClassName="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <Reveal>
        <span className="inline-flex rounded-full border border-white/15 bg-black px-4 py-1 text-sm text-white">
          {hero.greeting}
        </span>
        <h1 className="mt-8 flex flex-wrap items-center justify-center gap-3 font-display leading-[0.85] tracking-tight md:gap-6 lg:flex-nowrap">
          <span
            className="text-white"
            style={{ fontSize: "clamp(2.2rem, 7.5vw, 6.5rem)" }}
          >
            {site.roleLeft}
          </span>
          <span className="relative aspect-[714/720] h-[clamp(4.67rem,12vw,10rem)] w-[clamp(4.67rem,12vw,10rem)] overflow-hidden rounded-3xl bg-white">
            <PlaceholderImage
              src={images.heroAvatar}
              video={images.heroAvatarVideo}
              label="AVATAR"
              className="object-contain"
            />
          </span>
          <span
            className="text-white"
            style={{ fontSize: "clamp(2.2rem, 7.5vw, 6.5rem)" }}
          >
            {site.roleRight}
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-muted">{hero.subheading}</p>
        <div className="mt-8 flex justify-center">
          <PillButton href="#contact" variant="light" dot>
            {hero.chatCta}
          </PillButton>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
