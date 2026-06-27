import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";
import { categoryMap } from "@/data/categories";
import { formatDate, formatReadingTime } from "@/lib/utils";

interface ArticleCardProps {
  post: Post;
  priority?: boolean;
}

export default function ArticleCard({ post, priority = false }: ArticleCardProps) {
  const category = categoryMap[post.category];
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <Link href={`/blog/${post.slug}`} className="block focus:outline-none">
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-light-gray">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 inline-flex items-center rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-card">
            {category.name}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-display text-xl font-bold leading-snug text-brand-black transition-colors group-hover:text-brand-orange">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-brand-mid-gray">
            {post.excerpt}
          </p>
        </div>
      </Link>

      <div className="mt-auto flex items-center justify-between border-t border-brand-border px-6 py-4 text-xs text-brand-mid-gray">
        <time dateTime={post.publishedAt} className="font-medium">
          {formatDate(post.publishedAt)}
        </time>
        <span className="flex items-center gap-1.5">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {formatReadingTime(post.readingTime)}
        </span>
      </div>
    </article>
  );
}
