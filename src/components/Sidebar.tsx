"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";
import { getPopularPosts, getRecentPosts, posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import Newsletter from "./Newsletter";

export default function Sidebar() {
  const popular = getPopularPosts(4);
  const recent = getRecentPosts(4);
  const [query, setQuery] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const match = posts.find((p) => p.title.toLowerCase().includes(q));
    if (match) window.location.href = `/blog/${match.slug}`;
  };

  return (
    <aside className="space-y-8" aria-label="Sidebar">
      <SidebarBlock title="Search">
        <form onSubmit={onSearch} className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 pr-10 text-sm placeholder:text-brand-mid-gray focus:border-brand-orange focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-brand-mid-gray hover:text-brand-orange"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>
      </SidebarBlock>

      <SidebarBlock title="Popular Posts">
        <ul className="space-y-4">
          {popular.map((p, i) => (
            <li key={p.slug} className="flex gap-3">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold uppercase text-brand-orange">
                  0{i + 1}
                </span>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-0.5 line-clamp-2 block text-sm font-semibold leading-snug text-brand-black hover:text-brand-orange"
                >
                  {p.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </SidebarBlock>

      <SidebarBlock title="Recent Posts">
        <ul className="space-y-3">
          {recent.map((p) => (
            <li key={p.slug} className="border-b border-brand-border pb-3 last:border-0 last:pb-0">
              <Link
                href={`/blog/${p.slug}`}
                className="block text-sm font-semibold leading-snug text-brand-black hover:text-brand-orange"
              >
                {p.title}
              </Link>
              <time
                dateTime={p.publishedAt}
                className="mt-1 block text-xs text-brand-mid-gray"
              >
                {formatDate(p.publishedAt)}
              </time>
            </li>
          ))}
        </ul>
      </SidebarBlock>

      <SidebarBlock title="Categories">
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/category/${c.slug}`}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-brand-dark-gray transition-colors hover:bg-brand-light-gray hover:text-brand-orange"
              >
                <span>{c.name}</span>
                <span className="text-xs text-brand-mid-gray">
                  {posts.filter((p) => p.category === c.slug).length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarBlock>

      <Newsletter variant="card" />
    </aside>
  );
}

function SidebarBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 border-b-2 border-brand-orange pb-2 font-display text-base font-bold uppercase tracking-wider text-brand-black">
        {title}
      </h3>
      {children}
    </div>
  );
}
