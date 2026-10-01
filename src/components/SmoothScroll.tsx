"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      if (motionPreference.matches) {
        lenisRef.current?.destroy();
        lenisRef.current = null;
        return;
      }

      if (!lenisRef.current) {
        lenisRef.current = new Lenis({
          anchors: true,
          autoRaf: true,
          lerp: 0.1,
          smoothWheel: true,
          syncTouch: true,
        });
      }
    };

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);

    return () => {
      motionPreference.removeEventListener("change", syncMotionPreference);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}