"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState<{ x: number; width: number } | null>(null);

  const links = [
    { label: "Home", href: "/", active: key === "home" },
    { label: "Projects", href: "/projects", active: key === "projects" },
    { label: "Services", href: "/services", active: key === "services" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setChatOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    const container = navItemsRef.current;
    const activeIndex = key === "projects" ? 1 : key === "services" ? 2 : 0;
    const activeLink = navLinksRef.current[activeIndex];
    if (!container || !activeLink) return;

    const measureIndicator = () => {
      const containerRect = container.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const x = linkRect.left - containerRect.left;
      const width = linkRect.width;

      setIndicator((current) =>
        current?.x === x && current.width === width ? current : { x, width }
      );
    };

    measureIndicator();
    const resizeObserver = new ResizeObserver(measureIndicator);
    resizeObserver.observe(container);
    navLinksRef.current.forEach((link) => {
      if (link) resizeObserver.observe(link);
    });

    return () => resizeObserver.disconnect();
  }, [key]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-0 pt-6 pb-4 md:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "pointer-events-auto mx-[4%] grid min-h-[var(--nav-h)] grid-cols-[1fr_auto] items-center rounded-[24px] border px-[10px] transition-[background-color,box-shadow,backdrop-filter] duration-200 md:mx-[5%] md:h-[var(--nav-h)] md:grid-cols-[1fr_auto_1fr] md:rounded-full",
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
          ref={navItemsRef}
          initial={reducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: chatOpen ? 0 : 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.35, delay: 0.1 }}
          className="relative hidden items-center justify-center gap-1 md:flex"
        >
          {indicator && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-0 h-full rounded-full"
              style={{ backgroundColor: "var(--nav-active-bg)" }}
              initial={false}
              animate={{ x: indicator.x, width: indicator.width }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 380, damping: 32 }
              }
            />
          )}
          {links.map((link, index) => (
            <Link
              key={link.label}
              ref={(element) => {
                navLinksRef.current[index] = element;
              }}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              scroll={false}
              className={cn(
                "relative rounded-full px-2.5 py-2 text-[13px] font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] sm:px-3.5 sm:text-sm",
                link.active ? "text-[var(--accent-glow)]" : "text-[var(--nav-muted)] hover:text-[var(--nav-fg)]"
              )}
              style={{ zIndex: 1 }}
            >
              <motion.span
                initial={reducedMotion ? false : { opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.15 + index * 0.05, duration: 0.3 }}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </motion.div>

        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--nav-border)] text-[var(--nav-fg)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] md:hidden"
          >
            {menuOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="col-span-2 mt-2 grid gap-1 border-t border-[var(--nav-border)] pt-2 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                scroll={false}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  link.active
                    ? "bg-[var(--nav-active-bg)] text-[var(--accent-glow)]"
                    : "text-[var(--nav-muted)] hover:bg-[var(--nav-active-bg)] hover:text-[var(--nav-fg)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}