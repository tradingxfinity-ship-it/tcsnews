import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FeedList from "@/components/FeedList";
import HomeSidebar from "@/components/HomeSidebar";
import { categories, categoryMap } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import type { CategorySlug } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMap[slug as CategorySlug];
  if (!category) return { title: "Not found" };
  return {
    title: `${category.name} News & Articles`,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categoryMap[slug as CategorySlug];
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <div className="bg-black py-8 sm:py-10 lg:py-12">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <div className="mb-6 border-l-[6px] border-brand-orange pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">
              Category
            </p>
            <h1 className="mt-1 font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              {category.name}
            </h1>
          </div>

          {posts.length === 0 ? (
            <p className="text-white/60">No articles in this category yet — check back soon.</p>
          ) : (
            <FeedList posts={posts} initial={6} step={6} />
          )}
        </div>
        <HomeSidebar />
      </div>
    </div>
  );
}
