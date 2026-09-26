"use client";

import { contact, site } from "@/content/site";
import { PillButton } from "@/components/PillButton";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionFrame } from "@/components/SectionFrame";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";
import { socials } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-[var(--nav-total)]">
      <SectionFrame>
        <Reveal>
          <p className="font-display text-5xl text-white md:text-7xl">
            {contact.eyebrow}
          </p>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div>
                <h2 className="font-display text-3xl">{contact.heading}</h2>
                <p className="mt-4 max-w-xl text-muted">
                  Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
                </p>
              </div>
            </div>
            <PillButton href={`mailto:${site.email}`} variant="light" dot>
              {contact.scheduleCta}
            </PillButton>
          </div>
        </Reveal>
      </SectionFrame>

      <SectionFrame innerClassName="py-8">
        <div className="grid gap-8 md:grid-cols-[180px_1fr_1fr]">
          <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl">
            <PlaceholderImage video="/videos/footer-avatar.mp4" label="AVATAR" />
          </div>
          <div className="space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["Contact Me", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between border-b border-white/10 pb-3 text-white"
              >
                {label}
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </a>
            ))}
          </div>
          <div className="text-sm text-muted">
            <p>{site.copyright}</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block text-white">
              {site.email}
            </a>
            <div className="mt-5 flex gap-2" aria-label="Social links">
              {socials.map((social) => (
                <SocialIcon key={social.name} name={social.icon} href={social.href} />
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>
    </footer>
  );
}
