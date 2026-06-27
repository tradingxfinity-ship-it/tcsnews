"use client";

import { useState } from "react";

interface NewsletterProps {
  variant?: "footer" | "card";
}

export default function Newsletter({ variant = "footer" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  if (variant === "card") {
    return (
      <div className="rounded-xl bg-brand-black p-6 text-white shadow-card">
        <h3 className="font-display text-lg font-bold">Stay in the loop</h3>
        <p className="mt-1.5 text-sm text-white/70">
          Trading card news delivered weekly. No spam — ever.
        </p>
        <form onSubmit={onSubmit} className="mt-4 space-y-2">
          <label htmlFor="newsletter-card-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-card-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-brand-orange px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-dark"
          >
            Subscribe
          </button>
          {status === "success" && (
            <p className="text-xs text-brand-orange">Thanks! Check your inbox.</p>
          )}
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-md bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-dark"
      >
        Sign Up
      </button>
      {status === "success" && (
        <p className="text-xs text-brand-orange sm:absolute sm:mt-14">
          Thanks for subscribing!
        </p>
      )}
    </form>
  );
}
