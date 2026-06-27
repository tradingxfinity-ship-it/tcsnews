"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { posts } from "@/data/posts";
import { categoryMap } from "@/data/categories";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return posts
      .filter((p) => {
        const hay =
          `${p.title} ${p.excerpt} ${p.tags.join(" ")} ${categoryMap[p.category].name}`.toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search articles"
      className="fixed inset-0 z-50 flex items-start justify-center bg-brand-black/60 px-4 pt-24 sm:pt-32 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-brand-border px-5 py-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-brand-mid-gray"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, categories, or tags..."
            className="w-full bg-transparent text-base text-brand-black placeholder:text-brand-mid-gray focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wide text-brand-mid-gray hover:text-brand-orange"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="px-5 py-8 text-center text-sm text-brand-mid-gray">
              Try &ldquo;Charizard&rdquo;, &ldquo;rookie cards&rdquo;, or &ldquo;PSA&rdquo;.
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-brand-mid-gray">
              No results for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <ul className="divide-y divide-brand-border">
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    onClick={onClose}
                    className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-brand-light-gray"
                  >
                    <span className="mt-0.5 inline-flex items-center rounded-full bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
                      {categoryMap[p.category].name}
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-brand-black">{p.title}</span>
                      <span className="mt-0.5 line-clamp-1 block text-sm text-brand-mid-gray">
                        {p.excerpt}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
