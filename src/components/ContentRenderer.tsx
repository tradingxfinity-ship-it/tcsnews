import Image from "next/image";
import type { ContentBlock } from "@/types";
import { parseInline, type InlineSegment } from "@/lib/utils";

interface ContentRendererProps {
  blocks: ContentBlock[];
}

export default function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 font-display text-2xl font-bold leading-tight text-brand-black sm:text-3xl">
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-base leading-relaxed text-brand-dark-gray sm:text-lg">
          <Inline segments={parseInline(block.text)} />
        </p>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      const listClass = block.ordered
        ? "list-decimal space-y-2 pl-6"
        : "list-disc space-y-2 pl-6 marker:text-brand-orange";
      return (
        <Tag className={`${listClass} text-base leading-relaxed text-brand-dark-gray sm:text-lg`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline segments={parseInline(item)} />
            </li>
          ))}
        </Tag>
      );
    }

    case "quote":
      return (
        <blockquote className="border-l-4 border-brand-orange bg-brand-light-gray px-6 py-5">
          <p className="font-display text-lg italic leading-relaxed text-brand-black sm:text-xl">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.cite && (
            <footer className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-mid-gray">
              — {block.cite}
            </footer>
          )}
        </blockquote>
      );

    case "diagram":
      return (
        <figure className="my-4">
          <pre className="overflow-x-auto rounded-lg bg-brand-black p-5 text-[11px] leading-snug text-white sm:text-xs">
            <code>{block.text}</code>
          </pre>
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs italic text-brand-mid-gray">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "image": {
      const isLandscape = block.aspect === "landscape";
      const frame = isLandscape
        ? "aspect-[4/3] sm:aspect-[16/10]"
        : "aspect-[4/5] sm:aspect-[3/4]";
      const fit = isLandscape ? "object-cover object-center" : "object-cover object-[center_30%]";
      return (
        <figure className="my-4">
          <div className={`relative overflow-hidden rounded-xl bg-brand-light-gray shadow-card ${frame}`}>
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className={fit}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm italic text-brand-mid-gray">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-brand-black text-white">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-xs font-bold uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-brand-border align-top">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 text-brand-dark-gray ${
                        ci === 0 ? "font-semibold text-brand-black" : ""
                      }`}
                    >
                      <Inline segments={parseInline(cell)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function Inline({ segments }: { segments: InlineSegment[] }) {
  return (
    <>
      {segments.map((s, i) => {
        if (s.kind === "text") return <span key={i}>{s.value}</span>;
        if (s.kind === "bold")
          return (
            <strong key={i} className="font-semibold text-brand-black">
              {s.value}
            </strong>
          );
        const external = /^https?:\/\//.test(s.href);
        return (
          <a
            key={i}
            href={s.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="font-medium text-brand-orange underline-offset-2 hover:underline"
          >
            {s.value}
          </a>
        );
      })}
    </>
  );
}
