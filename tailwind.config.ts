import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        border: "rgba(255,255,255,0.12)",
        foreground: "var(--foreground)",
        muted: "var(--muted-foreground)",
        accentGlow: "var(--accent-glow)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(255,255,255,0.35)",
        lift: "0 18px 40px rgba(0,0,0,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.35)" },
        },
        spinSlow: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        marqueeSlow: "marquee 48s linear infinite",
        pulseGlow: "pulseGlow 1.8s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
