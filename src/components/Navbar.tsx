"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { pageAccent, type PageKey } from "@/content/site";
import { ChatOrb } from "@/components/ChatOrb";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/cn";

function routeKey(pathname: string): PageKey {
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/services")) return "services";
  return "home";
}

export function Navbar() {
  const pathname = usePathname();
  const key = routeKey(pathname);
  const accent = pageAccent[key];
  const reducedMotion = useReducedMotion();
  const [chatOpen, setChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => setChatOpen(false), [pathname]);

  const links = [
    { label: "Home", href: "/", active: key === "home" },
    { label: "Projects", href: "/projects", active: key === "projects" },
    { label: "Services", href: "/services", active: key === "services" },
  ];

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-0 pt-4 pb-4">
      <nav
        aria-label="Main"
        className={cn(
          "pointer-events-auto mx-[5%] grid h-[var(--nav-h)] grid-cols-[1fr_auto_1fr] items-center rounded-full border px-[10px] transition-[background-color,box-shadow,backdrop-filter] duration-200",
          scrolled && "backdrop-blur-md"
        )}
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--nav-bg) var(--nav-scrolled-mix), transparent)"
            : "var(--nav-bg)",
          borderColor: "var(--nav-border)",
          boxShadow: scrolled ? "var(--nav-shadow-scrolled)" : "var(--nav-shadow)",
        }}
      >
        <div className="relative h-9 w-9">
          <ChatOrb accent={accent.glow} onOpenChange={setChatOpen} />
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: chatOpen ? 0 : 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.35, delay: 0.1 }}
          className="flex items-center justify-center gap-1 max-md:pointer-events-none"
        >
          {/* LayoutGroup keeps the shared pill's position tracking scoped to just this nav,
              so it isn't affected by anything else on the page animating. */}
          <LayoutGroup id="navbar">
            {links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                // scroll={false} stops Next.js from jumping the page to the top on click.
                // That scroll-reset was racing with the pill's move animation, which is
                // what caused it to briefly appear in the wrong spot.
                scroll={false}
                className={cn(
                  "relative rounded-full px-2.5 py-2 text-[13px] font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] sm:px-3.5 sm:text-sm",
                  link.active ? "text-[var(--accent-glow)]" : "text-[var(--nav-muted)] hover:text-[var(--nav-fg)]"
                )}
                style={{ zIndex: 1 }}
              >
                {link.active && (
                  <motion.span
                    layoutId="nav-active"
                    // "position" only animates x/y, not width/height — there's nothing to
                    // remeasure here since every pill is the same size, and skipping the
                    // size remeasurement removes one more source of timing jitter.
                    layout="position"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ backgroundColor: "var(--nav-active-bg)" }}
                    transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <motion.span
                  initial={reducedMotion ? false : { opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { delay: 0.15 + index * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </LayoutGroup>
        </motion.div>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}