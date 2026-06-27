export type CategorySlug =
  | "sports-cards"
  | "pokemon"
  | "one-piece"
  | "yu-gi-oh"
  | "magic"
  | "grading"
  | "market-news"
  | "reviews";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "diagram"; text: string; caption?: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      /** "portrait" (default) crops tall and anchors at the face area; "landscape" uses a wide 16:10 frame for screenshots. */
      aspect?: "portrait" | "landscape";
    }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** Plain-text content split on \n\n into paragraphs. Used when `body` is not provided. */
  content: string;
  /** Structured content blocks. When provided, takes precedence over `content`. */
  body?: ContentBlock[];
  image: string;
  category: CategorySlug;
  author: Author;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  featured?: boolean;
  /** Optional editor's note rendered at top of the article. */
  editorsNote?: string;
}
