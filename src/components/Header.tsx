"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchOverlay from "./SearchOverlay";
import TcsLogo from "./TcsLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sports Cards", href: "/category/sports-cards" },
  { label: "Pokémon", href: "/category/pokemon" },
  { label: "One Piece", href: "/category/one-piece" },
  { label: "Grading", href: "/category/grading" },
  { label: "Market News", href: "/category/market-news" },
  { label: "Reviews", href: "/category/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black text-white">
        <div className="mx-auto flex h-16 max-w-container items-center gap-6 px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo top-left */}
          <div className="w-[120px] flex-shrink-0 sm:w-[140px] lg:w-[160px]">
            <TcsLogo priority />
          </div>

          {/* Inline nav (desktop) */}
          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center gap-6 overflow-x-auto lg:flex"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap py-2 font-display text-sm font-black uppercase tracking-wide transition-colors hover:text-brand-orange lg:text-base ${
                    active ? "text-white" : "text-white/85"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-brand-orange" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Spacer on mobile to push search/hamburger right */}
          <div className="flex-1 lg:hidden" />

          {/* Search (desktop inline pill) */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="hidden h-10 w-[220px] items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-left text-xs text-white/55 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange lg:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Search...</span>
          </button>

          {/* Mobile: search + hamburger */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="flex h-10 w-10 items-center justify-center text-white/85 hover:text-brand-orange lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center text-white hover:text-brand-orange lg:hidden"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-black lg:hidden ${
            mobileOpen ? "max-h-[80vh]" : "max-h-0"
          } transition-[max-height] duration-300 ease-out`}
        >
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-white/10 py-3 font-display text-base font-black uppercase tracking-tight ${
                    active ? "text-brand-orange" : "text-white hover:text-brand-orange"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
