"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav, type NavEntry } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/format";

function DropdownMenu({ items }: { items: NonNullable<NavEntry["dropdown"]> }) {
  return (
    <div className="absolute left-0 top-full z-50 mt-1.5 w-60 rounded-[var(--radius-panel)] border border-line bg-surface p-1.5 shadow-[var(--shadow-float)]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col rounded-[6px] px-3 py-2.5 transition-colors hover:bg-paper"
        >
          <span className="text-sm font-medium text-ink-900">{item.label}</span>
          {item.description && (
            <span className="mt-0.5 text-xs text-text-subtle">{item.description}</span>
          )}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ item }: { item: NavEntry }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!item.dropdown) {
    return (
      <li>
        <Link
          href={item.href}
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-ink-900"
        >
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
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-ink-900"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <DropdownMenu items={item.dropdown} />}
    </li>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-surface/95 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[var(--container-page)] items-center justify-between px-[var(--spacing-gutter)]"
      >
        <Link href="/" aria-label="NexaFin home" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={site.links.signIn} variant="ghost">Sign in</Button>
          <Button href={site.links.getStarted}>Get started</Button>
        </div>

        <button
          type="button"
          className="-mr-2 grid h-10 w-10 place-items-center rounded-md text-ink-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-surface lg:hidden"
      >
        <ul className="px-[var(--spacing-gutter)] py-4">
          {primaryNav.map((item) => (
            <li key={item.label} className="border-b border-line">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center text-lg font-medium text-ink-900"
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <ul className="pb-3 pl-3">
                  {item.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="flex h-10 items-center text-sm text-text-muted"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 px-[var(--spacing-gutter)] pb-10 pt-4">
          <Button href={site.links.getStarted} size="lg" onClick={() => setOpen(false)}>Get started</Button>
          <Button href={site.links.signIn} variant="secondary" size="lg" onClick={() => setOpen(false)}>Sign in</Button>
        </div>
      </div>
    </header>
  );
}
