import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import ContentRenderer from "@/components/ContentRenderer";
import ShareButtons from "@/components/ShareButtons";
import Sidebar from "@/components/Sidebar";
import { categoryMap } from "@/data/categories";
import { getAdjacentPosts, getPostBySlug, getRelatedPosts, posts } from "@/data/posts";
import { formatDate, formatReadingTime } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = categoryMap[post.category];
  const related = getRelatedPosts(post.slug, 3);
  const { prev, next } = getAdjacentPosts(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "TCS News",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="border-b border-brand-border bg-brand-light-gray">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-dark"
            >
              {category.name}
            </Link>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-mid-gray sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-brand-mid-gray">
              <time dateTime={post.publishedAt} className="font-medium">
                {formatDate(post.publishedAt)}
              </time>
              <span className="hidden h-6 w-px bg-brand-border sm:block" />
              <span className="flex items-center gap-1.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {formatReadingTime(post.readingTime)}
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-brand-light-gray shadow-card">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:gap-16 lg:px-8">
            <div className="min-w-0">
              {post.editorsNote && (
                <aside className="mb-8 rounded-lg border-l-4 border-brand-orange bg-brand-light-gray p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Editor&rsquo;s Note
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark-gray">
                    {post.editorsNote}
                  </p>
                </aside>
              )}

              {post.body ? (
                <ContentRenderer blocks={post.body} />
              ) : (
                <div className="space-y-6">
                  {post.content.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-brand-dark-gray sm:text-lg"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {post.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-brand-border pt-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-mid-gray">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-border px-3 py-1 text-xs font-medium text-brand-dark-gray"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border pt-8">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>

              {/* Prev / Next */}
              <nav
                aria-label="Article navigation"
                className="mt-12 grid grid-cols-1 gap-4 border-t border-brand-border pt-8 sm:grid-cols-2"
              >
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group rounded-xl border border-brand-border p-5 transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:shadow-card"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-mid-gray">
                      ← Previous
                    </span>
                    <p className="mt-2 line-clamp-2 font-semibold text-brand-black transition-colors group-hover:text-brand-orange">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group rounded-xl border border-brand-border p-5 text-right transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:shadow-card"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-mid-gray">
                      Next →
                    </span>
                    <p className="mt-2 line-clamp-2 font-semibold text-brand-black transition-colors group-hover:text-brand-orange">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            </div>

            <Sidebar />
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-brand-border bg-brand-light-gray py-16 sm:py-20">
            <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                    Keep Reading
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-brand-black sm:text-4xl">
                    Related Articles
                  </h2>
                </div>
                <Link
                  href="/"
                  className="hidden text-sm font-semibold uppercase tracking-wider text-brand-orange hover:text-brand-orange-dark sm:inline-block"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {related.map((p) => (
                  <ArticleCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
