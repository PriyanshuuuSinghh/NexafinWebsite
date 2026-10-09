"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { primaryNav, type NavEntry } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/format";

/* ── Dropdown menu ───────────────────────────────────────────────────────── */

function DropdownMenu({
  items,
  currentPath,
  onSelect,
}: {
  items: NonNullable<NavEntry["dropdown"]>;
  currentPath: string;
  onSelect: () => void;
}) {
  return (
    <div className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-white/15 bg-[#07131F]/95 p-1.5 shadow-2xl backdrop-blur-xl">
      {items.map((item) => {
        const isItemActive =
          currentPath === item.href ||
          (item.href !== "/" && currentPath.startsWith(item.href.split("#")[0]));
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onSelect}
            className={cn(
              "flex flex-col rounded-xl px-3 py-2 transition-colors",
              isItemActive ? "bg-white/10 text-[#D4FF65]" : "hover:bg-white/5 text-white/90",
            )}
          >
            <span className="text-xs font-semibold">{item.label}</span>
            {item.description && (
              <span className="mt-0.5 text-[11px] text-white/50">{item.description}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}

/* ── Single nav item ─────────────────────────────────────────────────────── */

function NavItem({
  item,
  active,
  currentPath,
}: {
  item: NavEntry;
  active: boolean;
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const baseClass = cn(
    "flex items-center text-xs font-medium transition-colors select-none",
    active
      ? "text-white font-semibold"
      : "text-white/80 hover:text-white",
  );

  if (!item.dropdown) {
    return (
      <li>
        <Link href={item.href} className={baseClass}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn(baseClass, "gap-0.5")}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn("h-3 w-3 text-white/50 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      {open && (
        <DropdownMenu
          items={item.dropdown}
          currentPath={currentPath}
          onSelect={() => setOpen(false)}
        />
      )}
    </li>
  );
}

/* ── Mobile nav item ─────────────────────────────────────────────────────── */

function MobileNavItem({
  item,
  active,
  onNavigate,
}: {
  item: NavEntry;
  active: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.dropdown) {
    return (
      <li className="border-b border-white/10">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "flex h-12 items-center text-base font-medium",
            active ? "text-[#D4FF65]" : "text-white",
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          "flex h-12 w-full items-center justify-between text-base font-medium",
          active ? "text-[#D4FF65]" : "text-white",
        )}
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 text-white/60 transition-transform duration-200", expanded && "rotate-180")}
        />
      </button>
      {expanded && (
        <ul className="pb-3 pl-3">
          {item.dropdown.map((sub) => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                onClick={onNavigate}
                className="flex flex-col py-2 text-sm text-white/70"
              >
                <span className="font-medium text-white">{sub.label}</span>
                {sub.description && (
                  <span className="mt-0.5 text-xs text-white/50">{sub.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* ── Main Navbar ─────────────────────────────────────────────────────────── */

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  /** Check if a nav entry matches active route */
  const isActive = useCallback(
    (item: NavEntry) => {
      if (pathname === item.href) return true;
      if (item.href !== "/" && pathname.startsWith(item.href)) return true;
      if (item.dropdown) {
        return item.dropdown.some(
          (d) =>
            pathname === d.href ||
            (d.href !== "/" && pathname.startsWith(d.href.split("#")[0])),
        );
      }
      return false;
    },
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-[#07131F]/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[var(--container-page)] items-center justify-between px-[var(--spacing-gutter)]">
        {/* Left: Official Nixafin logo (~110-130px wide, maintaining proportions) */}
        <Link href="/" aria-label="Nixafin home" className="flex shrink-0 items-center">
          <Logo tone="dark" height={42} className="w-auto" />
        </Link>

        {/* Center: Compact, thin-bordered, pill-shaped navigation container (matches reference) */}
        <div className="hidden items-center justify-center lg:flex">
          <nav
            aria-label="Primary"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 backdrop-blur-md shadow-sm"
          >
            <ul className="flex items-center gap-6">
              {primaryNav.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  active={isActive(item)}
                  currentPath={pathname}
                />
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: Bright lime-green pill CTA (#D4FF65) with a small circular arrow element */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={site.links.getStarted}
            className="group flex items-center gap-2 rounded-full bg-[#D4FF65] px-4 py-2 text-xs font-bold text-[#07131F] transition-all hover:bg-[#c5f449] hover:shadow-lg hover:shadow-[#D4FF65]/25"
          >
            <span>Get started</span>
            <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-[#07131F] text-[#D4FF65] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          className="-mr-2 grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-[#07131F] lg:hidden"
      >
        <ul className="px-[var(--spacing-gutter)] py-4">
          {primaryNav.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              active={isActive(item)}
              onNavigate={closeMenu}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-3 px-[var(--spacing-gutter)] pb-10 pt-4">
          <Link
            href={site.links.getStarted}
            onClick={closeMenu}
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#D4FF65] font-bold text-[#07131F]"
          >
            <span>Get started</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
