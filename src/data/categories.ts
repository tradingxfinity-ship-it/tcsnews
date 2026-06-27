import type { Category, CategorySlug } from "@/types";

export const categories: Category[] = [
  {
    slug: "sports-cards",
    name: "Sports Cards",
    description:
      "Rookie cards, vintage finds, and the latest movement in NFL, NBA, MLB, and soccer card markets.",
  },
  {
    slug: "pokemon",
    name: "Pokémon",
    description:
      "Set reviews, pull rates, vintage WOTC analysis, and Pokémon TCG investment news.",
  },
  {
    slug: "one-piece",
    name: "One Piece",
    description:
      "Coverage of every One Piece TCG set release, meta decks, and chase cards worth tracking.",
  },
  {
    slug: "yu-gi-oh",
    name: "Yu-Gi-Oh!",
    description:
      "Classic and modern Yu-Gi-Oh! card values, tournament news, and collector spotlights.",
  },
  {
    slug: "magic",
    name: "Magic: The Gathering",
    description:
      "Reserved list movement, set reviews, and high-end MTG market intelligence.",
  },
  {
    slug: "grading",
    name: "Grading",
    description: "Submission guides, PSA vs BGS vs CGC comparisons, and grading turnaround news.",
  },
  {
    slug: "market-news",
    name: "Market News",
    description:
      "Auction results, hobby industry headlines, and macro analysis for trading card investors.",
  },
  {
    slug: "reviews",
    name: "Reviews",
    description: "Honest reviews of new products, storage gear, and collector accessories.",
  },
];

export const categoryMap: Record<CategorySlug, Category> = categories.reduce(
  (acc, category) => {
    acc[category.slug] = category;
    return acc;
  },
  {} as Record<CategorySlug, Category>,
);

export function getCategory(slug: CategorySlug): Category {
  return categoryMap[slug];
}
