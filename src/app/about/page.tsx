import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "TCS News is an independent publication covering the trading card industry — sports cards, Pokémon, One Piece, Yu-Gi-Oh!, Magic, grading, and the markets that move them.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "12+", label: "Categories tracked" },
  { value: "350k", label: "Monthly readers" },
  { value: "Daily", label: "Market updates" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="The independent voice in trading cards"
        subtitle="We started TCS News because the trading card world deserves serious, honest reporting — not hype cycles and gut takes. Today we cover every major game, the markets that move them, and the collectors keeping the hobby alive."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-brand-dark-gray sm:text-lg">
            <p>
              TCS News is a small, independent publication built by collectors for collectors.
              Our editorial team covers sports cards, Pokémon, One Piece, Yu-Gi-Oh!, Magic: The
              Gathering, grading, and the secondary market that connects them all.
            </p>
            <p>
              We don&rsquo;t take payment in exchange for coverage and we don&rsquo;t publish sponsored content
              disguised as reporting. Our reviews are independent. When we recommend a product, a
              card, or a strategy, it&rsquo;s because we&rsquo;ve done the work to back it up.
            </p>
            <p>
              If you&rsquo;ve got a tip, a correction, or a story we should be telling, our inbox is
              always open.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 rounded-xl border border-brand-border bg-brand-light-gray p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-brand-orange sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-mid-gray">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
