"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "light" | "dark";

export function PillButton({
  children,
  href,
  onClick,
  variant = "light",
  dot = false,
  className,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  dot?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "pill-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-150 will-change-transform hover:scale-[1.03] hover:shadow-lift",
    variant === "light"
      ? "bg-white text-black"
      : "border border-white/15 bg-surface text-white",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {dot ? (
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full"
            style={{
              background: "var(--accent-glow)",
              boxShadow: "0 0 10px var(--accent-glow)",
            }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "var(--accent-glow)" }}
          />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {inner}
    </motion.button>
  );
}
