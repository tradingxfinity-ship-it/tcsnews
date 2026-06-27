export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export type InlineSegment =
  | { kind: "text"; value: string }
  | { kind: "bold"; value: string }
  | { kind: "link"; value: string; href: string };

/**
 * Tiny markdown-lite tokenizer for inline runs.
 * Supports **bold** and [text](url). Anything else is plain text.
 */
export function parseInline(input: string): InlineSegment[] {
  const out: InlineSegment[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(input)) !== null) {
    if (match.index > lastIndex) {
      out.push({ kind: "text", value: input.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      out.push({ kind: "bold", value: match[1] });
    } else if (match[2] !== undefined && match[3] !== undefined) {
      out.push({ kind: "link", value: match[2], href: match[3] });
    }
    lastIndex = re.lastIndex;
  }
  if (lastIndex < input.length) {
    out.push({ kind: "text", value: input.slice(lastIndex) });
  }
  return out;
}
