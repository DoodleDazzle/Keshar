"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    const syncMotionPreference = () => {
      if (motionPreference.matches) {
        lenis?.destroy();
        lenis = undefined;
        return;
      }

      if (!lenis) {
        lenis = new Lenis({
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
      lenis?.destroy();
    };
  }, []);

  return null;
}