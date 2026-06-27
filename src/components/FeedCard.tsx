import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";
import { categoryMap } from "@/data/categories";
import { formatDate } from "@/lib/utils";

interface FeedCardProps {
  post: Post;
  priority?: boolean;
}

export default function FeedCard({ post, priority = false }: FeedCardProps) {
  const category = categoryMap[post.category];
  const articleUrl = `/blog/${post.slug}`;
  const shareUrl = `https://tcsnews.com${articleUrl}`;
  const shareText = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <article className="border-[3px] border-brand-orange bg-black">
      <div className="p-5 sm:p-8 lg:p-10">
        <Link
          href={`/category/${category.slug}`}
          className="inline-block text-xs font-black uppercase tracking-wider text-brand-orange transition-colors hover:text-brand-orange-light sm:text-sm"
        >
          {category.name}
        </Link>

        <Link href={articleUrl} className="block group">
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white underline decoration-white decoration-[3px] underline-offset-[6px] transition-colors group-hover:text-brand-orange group-hover:decoration-brand-orange sm:mt-4 sm:text-5xl sm:underline-offset-[8px] lg:text-6xl">
            {post.title}
          </h2>
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {post.featured && (
            <span className="inline-flex items-center bg-brand-orange px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white">
              Breaking
            </span>
          )}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="flex h-8 w-8 items-center justify-center bg-[#1877F2] text-white transition-opacity hover:opacity-80"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.7c0-.9.2-1.5 1.5-1.5H17V4.6a23 23 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 4v2.3H8.3v3h2.6V21h2.6Z" />
            </svg>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="flex h-8 w-8 items-center justify-center bg-white text-black transition-opacity hover:opacity-80"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.969l-5.46-7.139L3.75 22H.49l8.02-9.166L1.5 2h7.137l4.93 6.518L18.244 2Z" />
            </svg>
          </a>
          <Link
            href={`${articleUrl}#comments`}
            aria-label="Comments"
            className="flex h-8 w-8 items-center justify-center bg-brand-orange text-white transition-opacity hover:opacity-80"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2Z" />
            </svg>
          </Link>
        </div>

        <p className="mt-5 text-xs italic text-white/55">
          Published {formatDate(post.publishedAt)} · {post.readingTime} min read
        </p>

        <Link href={articleUrl} className="mt-6 block group">
          <div className="relative aspect-[16/10] overflow-hidden bg-white/5 sm:aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
