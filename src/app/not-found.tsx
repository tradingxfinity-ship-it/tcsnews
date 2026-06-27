import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-7xl font-bold text-brand-orange sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-brand-black sm:text-4xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 text-base text-brand-mid-gray">
          The article or page you were looking for might have been moved, renamed, or never
          existed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-orange px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-card-hover"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
