"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import type { Post } from "@/types";

interface ArticleGridProps {
  posts: Post[];
  initial?: number;
  step?: number;
}

export default function ArticleGrid({ posts, initial = 9, step = 6 }: ArticleGridProps) {
  const [visible, setVisible] = useState(Math.min(initial, posts.length));
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {shown.map((post, i) => (
          <ArticleCard key={post.slug} post={post} priority={i < 3} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + step, posts.length))}
            className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
          >
            Load More
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
