"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("theme-light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !light;
    document.documentElement.classList.toggle("theme-light", next);
    localStorage.setItem("theme-v2", next ? "light" : "dark");
    setLight(next);
  };

  return (
    <motion.button
      type="button"
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={light}
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--nav-fg)] text-[var(--nav-bg)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted && light ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {mounted && light ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}