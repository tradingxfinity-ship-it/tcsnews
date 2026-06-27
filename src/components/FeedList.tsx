"use client";

import { useState } from "react";
import FeedCard from "./FeedCard";
import type { Post } from "@/types";

interface FeedListProps {
  posts: Post[];
  initial?: number;
  step?: number;
}

export default function FeedList({ posts, initial = 6, step = 6 }: FeedListProps) {
  const [visible, setVisible] = useState(Math.min(initial, posts.length));
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <div>
      <div className="space-y-8 sm:space-y-10">
        {shown.map((p, i) => (
          <FeedCard key={p.slug} post={p} priority={i < 2} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + step, posts.length))}
            className="inline-flex items-center gap-2 bg-brand-black px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
