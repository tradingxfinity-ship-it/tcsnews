"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-brand-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <div className="mt-4">
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-dark-gray">
          Subject
        </label>
        <select
          name="subject"
          className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none"
        >
          <option>Story tip</option>
          <option>Advertising / Partnership</option>
          <option>Feedback or correction</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-dark-gray">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-md border border-brand-border bg-white px-4 py-3 text-sm placeholder:text-brand-mid-gray focus:border-brand-orange focus:outline-none"
          placeholder="Tell us what's on your mind..."
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-card-hover sm:w-auto"
      >
        Send Message
      </button>
      {status === "sent" && (
        <p className="mt-4 text-sm text-brand-orange">
          Thanks! We&rsquo;ll get back to you within two business days.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-dark-gray">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 text-sm placeholder:text-brand-mid-gray focus:border-brand-orange focus:outline-none"
      />
    </div>
  );
}
