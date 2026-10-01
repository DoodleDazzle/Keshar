"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export function ChatOrb({
  accent,
  onOpenChange,
}: {
  accent: string;
  onOpenChange?: (open: boolean) => void;
}) {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [touchMode, setTouchMode] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateOpen = useCallback((value: boolean) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(value);
    onOpenChange?.(value);
  }, [onOpenChange]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => updateOpen(false), 2500);
  };

  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest("[data-chat-orb]")) updateOpen(false);
    };
    const closeOnScroll = () => updateOpen(false);
    document.addEventListener("pointerdown", closeOnOutside);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      window.removeEventListener("scroll", closeOnScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [updateOpen]);

  return (
    <motion.button
      type="button"
      data-chat-orb
      aria-label="Chat with Keshar (go to contact)"
      onPointerEnter={(event) => event.pointerType === "mouse" && updateOpen(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && updateOpen(false)}
      onFocus={() => updateOpen(true)}
      onBlur={() => !touchMode && updateOpen(false)}
      onClick={(event) => {
        if (touchMode && !open) {
          event.preventDefault();
          updateOpen(true);
          scheduleClose();
          return;
        }
        const contact = document.getElementById("contact");
        if (contact) contact.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        else window.location.href = "/#contact";
        updateOpen(false);
      }}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") {
          setTouchMode(true);
          if (!open) event.preventDefault();
        }
      }}
      animate={{ backgroundColor: open ? "var(--nav-fg)" : accent, width: open ? 148 : 36 }}
      transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
      className="absolute left-0 top-0 z-20 flex h-9 min-w-9 items-center overflow-visible rounded-full px-3 text-[13px] font-medium text-[var(--nav-bg)] outline-none before:absolute before:-inset-1 before:rounded-full focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)]"
      style={{ borderRadius: 9999, boxShadow: `0 0 14px color-mix(in srgb, ${accent} 45%, transparent)`, willChange: "transform" }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,.55), rgba(255,255,255,0) 60%)" }} />
      <span className="relative z-10 flex w-full items-center justify-center gap-2 whitespace-nowrap">
        <motion.span
          initial={false}
          animate={{ opacity: open ? 1 : 0, x: open ? 0 : -6 }}
          transition={reducedMotion ? { duration: 0 } : { delay: open ? 0.06 : 0, duration: 0.16 }}
        >
          I Want to Chat
        </motion.span>
        <motion.span
          className="h-2 w-2 shrink-0 rounded-full"
          animate={{ backgroundColor: accent, scale: reducedMotion ? 1 : [1, 1.25, 1] }}
          transition={reducedMotion ? { duration: 0 } : { scale: { duration: 1.8, repeat: Infinity } }}
        />
      </span>
    </motion.button>
  );
}