import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the TCS News team about story tips, advertising, partnerships, or feedback.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Editorial & Tips",
    value: "tips@tcsnews.com",
    description: "Got a scoop on a market move, set release, or auction record? Send it our way.",
  },
  {
    label: "Advertising",
    value: "partners@tcsnews.com",
    description: "Sponsorships, banner placements, and newsletter takeovers.",
  },
  {
    label: "General",
    value: "hello@tcsnews.com",
    description: "Everything else — feedback, corrections, or just to say hi.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title="Contact TCS News"
        subtitle="We love hearing from collectors, breakers, shop owners, and brands. Reach the team using one of the channels below or send us a note directly."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="space-y-6">
            {channels.map((c) => (
              <div
                key={c.value}
                className="rounded-xl border border-brand-border p-6 transition-all hover:border-brand-orange hover:shadow-card"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  {c.label}
                </p>
                <a
                  href={`mailto:${c.value}`}
                  className="mt-2 block font-display text-xl font-bold text-brand-black hover:text-brand-orange"
                >
                  {c.value}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-brand-mid-gray">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
