import FeedList from "@/components/FeedList";
import HomeSidebar from "@/components/HomeSidebar";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <div className="bg-black py-8 sm:py-10 lg:py-12">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <FeedList posts={posts} initial={6} step={6} />
        </div>
        <HomeSidebar />
      </div>
    </div>
  );
}
