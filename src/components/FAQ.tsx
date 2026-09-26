"use client";

import { useState } from "react";
import { faqs } from "@/content/site";
import { AccordionItem } from "@/components/AccordionItem";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { bubbles } from "@/content/site";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <SectionFrame>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-white">
            <div className="aspect-[4/3]">
              <video
                className="h-full w-full object-cover"
                src="/videos/faq.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Frequently asked questions"
              />
            </div>
           <span className="absolute right-6 top-2 max-w-[160px] rounded-2xl bg-black px-4 py-2 text-sm text-white">
              {bubbles.faq}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Frequently Answered Questions
          </p>
          <div className="mt-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                title={item.q}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              >
                {item.a}
              </AccordionItem>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
