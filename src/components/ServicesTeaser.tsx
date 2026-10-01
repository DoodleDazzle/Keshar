"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";
import { AccordionItem } from "@/components/AccordionItem";

export function ServicesTeaser() {
  const [open, setOpen] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionFrame>
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.08}>
            <div
              className="relative grid items-center gap-6 md:grid-cols-[1fr_220px]"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((current) => (current === i ? null : current))}
            >
              <AccordionItem
                index={s.id}
                title={s.title}
                subtitle={s.tagline}
                open={open === i}
                onToggle={() => setOpen((current) => (current === i ? -1 : i))}
              >
                {s.description}
              </AccordionItem>
              {open === i ? (
                <div className="hidden md:block" />
              ) : (
                <div className="hidden md:block" />
              )}

              <div className="pointer-events-none absolute right-16 top-1/2 hidden h-24 w-24 -translate-y-1/2 md:block">
                <AnimatePresence>
                  {hovered === i && s.icon ? (
                    <motion.img
                      key={s.icon}
                      src={s.icon}
                      alt=""
                      aria-hidden
                      initial={{ opacity: 0, scale: 0.6, y: 24, rotate: -10 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: -6,
                        y: [0, -6, 0],
                      }}
                      exit={{ opacity: 0, scale: 0.6, y: 24, rotate: -10 }}
                      transition={{
                        opacity: { duration: 0.25 },
                        scale: { type: "spring", stiffness: 260, damping: 20 },
                        rotate: { type: "spring", stiffness: 260, damping: 20 },
                        y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                      }}
                      className="absolute inset-0 h-full w-full object-contain drop-shadow-xl"
                    />
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        ))}
    </SectionFrame>
  );
}
