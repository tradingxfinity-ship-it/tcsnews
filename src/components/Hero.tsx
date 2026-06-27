interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function Hero({ title, subtitle, eyebrow }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-border bg-brand-light-gray">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(229,35,44,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(17,17,17,0.05), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-container px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-card">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          </span>
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {eyebrow && (
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-mid-gray">
            {eyebrow}
          </p>
        )}
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-mid-gray sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
