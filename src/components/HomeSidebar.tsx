"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getPopularPosts, getRecentPosts } from "@/data/posts";
import { categoryMap } from "@/data/categories";
import { formatDate } from "@/lib/utils";

export default function HomeSidebar() {
  const hot = getPopularPosts(4);
  const trending = getRecentPosts(5);

  return (
    <aside className="space-y-8" aria-label="Sidebar">
      <ReaderPoll />
      <HotStories posts={hot} />
      <TrendingNow posts={trending} />
    </aside>
  );
}

function SectionHeader({ label, action }: { label: string; action?: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-end justify-between border-b border-white/15 pb-2">
      <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-white">
        {label}
      </h3>
      {action && (
        <div className="text-[10px] font-bold uppercase tracking-wider text-white/55">
          {action}
        </div>
      )}
    </div>
  );
}

function ReaderPoll() {
  const [voted, setVoted] = useState<null | "yes" | "no">(null);
  const totalVotes = 142;
  return (
    <div>
      <SectionHeader label="We Gotta Ask..." action={<span>Powered by TCS</span>} />
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <Image
          src="https://images.unsplash.com/photo-1606503153255-59d8b8b3a496?auto=format&fit=crop&w=900&q=80"
          alt="Storage products on a desk"
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <p className="absolute inset-x-4 bottom-4 font-display text-base font-black leading-tight text-white sm:text-lg">
          Will sealed Pokémon product be a better hold than vintage by year-end?
        </p>
      </div>
      <div className="bg-white/5 px-4 py-4">
        {voted === null ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setVoted("yes")}
              className="flex-1 bg-brand-orange py-2.5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-dark"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setVoted("no")}
              className="flex-1 border border-white/20 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              No
            </button>
          </div>
        ) : (
          <div className="text-center text-xs text-white/70">
            Thanks for voting{" "}
            <span className="font-bold uppercase text-brand-orange">{voted}</span>!
          </div>
        )}
        <p className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-white/50">
          <span>Asked by TCS News</span>
          <span>{totalVotes} Votes</span>
        </p>
      </div>
    </div>
  );
}

interface CarouselPost {
  slug: string;
  title: string;
  image: string;
  category: string;
}

function HotStories({ posts }: { posts: ReturnType<typeof getPopularPosts> }) {
  const [idx, setIdx] = useState(0);
  const items: CarouselPost[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    image: p.image,
    category: categoryMap[p.category].name,
  }));
  if (items.length === 0) return null;
  const current = items[idx];

  return (
    <div>
      <SectionHeader
        label="Hot Stories"
        action={
          <Link href="/" className="hover:text-brand-orange">
            View All
          </Link>
        }
      />
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <Link href={`/blog/${current.slug}`} className="absolute inset-0">
          <Image
            src={current.image}
            alt={current.title}
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-x-4 bottom-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
              {current.category}
            </p>
            <p className="mt-1 font-display text-base font-black uppercase leading-tight text-white line-clamp-3 sm:text-lg">
              {current.title}
            </p>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Previous story"
          onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
          className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-brand-orange"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next story"
          onClick={() => setIdx((i) => (i + 1) % items.length)}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-brand-orange"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Story ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === idx ? "bg-brand-orange" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TrendingNow({ posts }: { posts: ReturnType<typeof getRecentPosts> }) {
  return (
    <div>
      <SectionHeader label="↗ Trending Now" />
      <ul className="divide-y divide-white/10">
        {posts.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex items-start gap-3 py-3 transition-colors hover:bg-white/5"
            >
              <span className="font-display text-xl font-black text-brand-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">
                  {categoryMap[p.category].name}
                </p>
                <p className="mt-0.5 font-display text-sm font-bold leading-snug text-white transition-colors group-hover:text-brand-orange line-clamp-2">
                  {p.title}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                  {formatDate(p.publishedAt)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
