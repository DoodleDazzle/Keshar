"use client";

import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { bubbles, images, serviceQualities, services } from "@/content/site";
import { cn } from "@/lib/cn";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="SERVICES"
        bubble={bubbles.services}
        image={images.servicesHero}
        reverse
      />
      <div className="border-y border-white/10 py-3">
        <Marquee>
          {serviceQualities.map((item) => (
            <span
              key={item.label}
              className="mx-6 inline-flex items-center gap-2 text-sm text-white"
            >
              <item.icon aria-hidden className="h-4 w-4 text-muted" strokeWidth={1.8} />
              {item.label}
            </span>
          ))}
        </Marquee>
      </div>
      <SectionFrame>
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <article
                className={cn(
                  "grid items-center gap-8 border-b border-white/10 pb-16 lg:grid-cols-[140px_1fr_280px]",
                  i % 2 === 1 && "lg:grid-cols-[280px_140px_1fr]"
                )}
              >
                <p
                  className={cn(
                    "font-display text-4xl text-white/30",
                    i % 2 === 1 && "lg:order-2"
                  )}
                >
                  {s.id}
                </p>
                <div className={cn(i % 2 === 1 && "lg:order-3")}>
                  <h2 className="font-display text-4xl md:text-5xl">{s.title}</h2>
                  <p className="mt-4 max-w-xl text-muted">{s.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={cn(
                    "w-full max-w-md overflow-hidden rounded-2xl aspect-[4/3]",
                    i % 2 === 1 && "lg:order-1"
                  )}
                >
                  <PlaceholderImage src={s.image} label={s.title} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionFrame>
      <Footer />
    </main>
  );
}
