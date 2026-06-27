import Link from "next/link";
import Newsletter from "./Newsletter";
import TcsLogo from "./TcsLogo";

const socials = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.969l-5.46-7.139L3.75 22H.49l8.02-9.166L1.5 2h7.137l4.93 6.518L18.244 2Zm-1.22 18.107h1.85L7.05 3.79H5.066l11.957 16.317Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M23 12s0-3.6-.5-5.3a2.7 2.7 0 0 0-1.9-1.9C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 6.7C1 8.4 1 12 1 12s0 3.6.5 5.3c.3 1 1 1.6 1.9 1.9 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9C23 15.6 23 12 23 12Zm-13.3 3.4V8.6L15.6 12l-5.9 3.4Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="w-[200px]">
              <TcsLogo />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Your source for trading card and sports card news, market analysis, and collecting
              insights — covering sports cards, Pokémon, One Piece, and every game in between.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand-orange hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 border-b-2 border-brand-orange pb-2 font-display text-base font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/about" className="transition-colors hover:text-brand-orange">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-brand-orange">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-brand-orange">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-brand-orange">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 border-b-2 border-brand-orange pb-2 font-display text-base font-bold uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link
                  href="/category/sports-cards"
                  className="transition-colors hover:text-brand-orange"
                >
                  Sports Cards
                </Link>
              </li>
              <li>
                <Link href="/category/pokemon" className="transition-colors hover:text-brand-orange">
                  Pokémon
                </Link>
              </li>
              <li>
                <Link
                  href="/category/one-piece"
                  className="transition-colors hover:text-brand-orange"
                >
                  One Piece
                </Link>
              </li>
              <li>
                <Link href="/category/reviews" className="transition-colors hover:text-brand-orange">
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/category/market-news"
                  className="transition-colors hover:text-brand-orange"
                >
                  Market News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 border-b-2 border-brand-orange pb-2 font-display text-base font-bold uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-white/70">
              Get the latest trading card news delivered to your inbox.
            </p>
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 TCS News. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-brand-orange">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-brand-orange">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-brand-orange">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
