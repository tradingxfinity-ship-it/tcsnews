import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "backdoor-syndicate-million-dollar-trading-card-scam",
    title:
      "The Backdoor Syndicate: How a Multi-Million Dollar Con Is Destroying the Trading Card Hobby and Stealing From Real Collectors",
    excerpt:
      "Leaked chats expose a multi-million-dollar pipeline of stolen, backdoored case hits — coordinated by a Mexico-based ring leader, escorted across the US card-show circuit by Javier Chaves, and laundered through ALT by an internal pricing analyst.",
    content: "",
    image: "/posts/garcia-featured.png",
    category: "market-news",
    publishedAt: "2026-06-21",
    readingTime: 10,
    tags: ["Investigation", "Fraud", "ALT", "Card Shows", "Backdoor Hits"],
    featured: true,
    editorsNote:
      "This investigation is based on community reporting circulating within high-end collector circles, leaked private communications, and publicly available information about the named individuals and businesses. Allegations described herein have not been adjudicated. We have invited every named party to respond and will update this article with any statements received.",
    body: [
      {
        type: "paragraph",
        text: "The sports and trading card hobby has always thrived on the thrill of the chase. Collectors shell out thousands of dollars for sealed boxes, dreaming of pulling a legendary “case hit” — a Downtown, a Kaboom, a Manga, or a coveted 1/1 masterpiece.",
      },
      {
        type: "paragraph",
        text: "But what happens when the deck is stacked against the consumer before the boxes are even sealed? A massive, unfolding scandal has exposed a **multi-million-dollar pipeline** of stolen, backdoored cards that has left the community reeling — proving that real collectors are being systematically robbed of their hard-earned money.",
      },
      { type: "heading", text: "The Supply Chain: The School Teacher Ring Leader" },
      {
        type: "paragraph",
        text: "Every major scam needs a source, and this one begins across the border. According to intelligence circulating within the high-end collector community, the true ring leader of the operation is **Jordan Barrera Aldape**.",
      },
      {
        type: "paragraph",
        text: "While maintaining a public front working for a school in Mexico, Jordan acts as the primary orchestrator buying up stolen and backdoored case hits and rare parallels straight from production facilities. By intercepting these ultra-rare grails completely isolated from the public's reach, Jordan has successfully managed a border-smuggling operation, moving hundreds upon thousands of dollars in illicit inventory across the Mexican border.",
      },
      {
        type: "paragraph",
        text: "Through this pipeline, Jordan has amassed well over **$1,000,000** by funneling these stolen goods through multiple hobby shops north of the Mexican border and dominating high-profile card shows. Concerningly, this isn't an isolated incident — reports indicate that a number of exclusively Spanish-speaking groups are currently running this exact same scam across the industry, flooding the market with backdoored case hits and low serial number items.",
      },
      {
        type: "image",
        src: "/posts/jordan-barrera-aldape.jpg",
        alt: "Jordan Barrera Aldape, identified as the Mexico-based ring leader of the alleged operation",
        caption:
          "Jordan Barrera Aldape — identified as the Mexico-based ring leader of the alleged operation.",
      },
      { type: "heading", text: "The Operations Network: Javier Chaves & The Mule" },
      {
        type: "paragraph",
        text: "Once the stolen cards cross the border, distribution and logistics are handled by a tight-knit cell. Jordan's primary co-conspirator is **Javier Chaves** (previously identified under the online alias **thewoksays** and tied to the business front **Llaves Talent Booking** via [llavestalent.com](https://llavestalent.com/)). Inside this scheme, Javier Chaves acts as Jordan's translator and personal escort, navigating the US hobby landscape.",
      },
      {
        type: "image",
        src: "/posts/javier-garcia.jpg",
        alt: "Javier Chaves, identified as Jordan's translator and US escort inside the alleged ring",
        caption:
          "Javier Chaves — alias “thewoksays” — allegedly acts as Jordan's translator and personal escort across the US card-show circuit.",
      },
      {
        type: "image",
        src: "/posts/llaves-talent-booking.jpg",
        alt: "Screenshot of the Llaves Talent Booking Instagram profile",
        aspect: "landscape",
        caption:
          "Llaves Talent Booking — the corporate front allegedly used to mask the operation and project legitimacy at conventions.",
      },
      {
        type: "paragraph",
        text: "To keep the operation rolling, the group utilizes **Javier's younger brother**, forcing him into a grueling role to launder the proceeds and act as a cash mule.",
      },
      { type: "heading", text: "The Cash-and-Smuggle Operation" },
      {
        type: "paragraph",
        text: "To keep the operation completely off the grid, the group relies heavily on high-pressure financial tactics. They frequent the major Texas card show circuits — including the **Dallas Card Show**, **Austin Card Show**, and **Htown Card Show** — selling directly to vendors and a select few.",
      },
      {
        type: "paragraph",
        text: "Because demand for high-end case hits is at an all-time high, the group forces their buyers to pay solely in cash. Racking in massive, untraceable amounts of paper currency at these conventions due to high demand, the cash is handed down to the younger brother to mule and smuggle right back across the Mexican border, funding the operation's source.",
      },
      {
        type: "diagram",
        caption:
          "The alleged pipeline: Mexico source → US escort & mule → Texas show circuits → ALT auction house.",
        text: `   [ Mexico School / Factory Source — Jordan Barrera Aldape ]
                              │
                    (Stolen Backdoor Hits)
                              │
                              ▼
        [ US Distribution Escort: Javier Chaves ]
              (Masked by Llaves Talent Booking)
                              │
                  (Younger Brother / Cash Mule)
                              │
        (Texas Show Circuits: Dallas / Austin / Htown)
                              │
        ┌─────────────────────┴─────────────────────┐
        ▼                                           ▼
[ Cash Smuggled Back ]                  [ ALT Auction House ]
 (Across the Border)        (Drew Weinheimer contacts boss “Roman”)`,
      },
      { type: "heading", text: "Leaked Chats and Institutional Laundering via ALT" },
      {
        type: "paragraph",
        text: "Moving a multi-million-dollar supply of stolen cardboard requires more than just cash handshakes at convention tables; it requires institutional exit ramps and massive corporate financing. Recently, leaked images of conversations between members of this group have surfaced, exposing the explicit organization and connection networks used to coordinate the sale of thousands of these backdoored case hits.",
      },
      {
        type: "paragraph",
        text: "The most disturbing revelation from these leaks is that the syndicate has been selling directly to one of the largest companies in the hobby: **ALT**, an auction house platform that moves hundreds of millions in rare collectibles.",
      },
      {
        type: "image",
        src: "/posts/alt-marketplace.jpg",
        alt: "Screenshot of the verified ALT Trading Card Marketplace Instagram profile",
        aspect: "landscape",
        caption:
          "ALT — “The modern way to buy and sell trading cards.” The platform is allegedly the largest institutional exit ramp for the syndicate.",
      },
      {
        type: "paragraph",
        text: "The allegations and leaked communication suggest a deeply compromised system where backdoor cards are being knowingly bought up by an internal employee: **Drew Weinheimer**, a Pricing Analyst for ALT.",
      },
      {
        type: "image",
        src: "/posts/drew-weinheimer.jpg",
        alt: "Drew Weinheimer, ALT Pricing Analyst, identified in social video with on-screen title card",
        caption:
          "Drew Weinheimer — identified as a Pricing Analyst at ALT and the syndicate's primary corporate buyer.",
      },
      {
        type: "image",
        src: "/posts/drew-ig-tx-graphs32.jpg",
        alt: "Screenshot of Drew's Instagram profile @tx.graphs32 listing affiliations with @altxyzofficial and @venturecards",
        aspect: "landscape",
        caption:
          "Drew's Instagram (@tx.graphs32) publicly lists @altxyzofficial and @venturecards alongside Dallas-based sports card buying and selling activity.",
      },
      {
        type: "paragraph",
        text: "For over three months, Drew Weinheimer has been spending hundreds of thousands of dollars fueled by ALT's buying power. According to insiders, Drew frequently contacts his boss, **Roman at ALT**, to secure the funds necessary to purchase these stolen Kabooms, Downtowns, and rare parallels. The greed has escalated to a highly sophisticated corporate level:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Sourcing:** Drew Weinheimer coordinates directly with Jordan and Javier Chaves using corporate financing approved through his boss, Roman, to buy the stolen raw hits.",
          "**Grading:** The stolen items are sent to top-tier grading companies to receive pristine certifications, artificially driving up the “ultra-premium” value.",
          "**Liquidation:** The graded, stolen items are actively listed and flipped through the ALT auction platform, as well as sold physically at table-tops at major events like the Dallas Card Show, effectively using the institutional marketplace to launder the items into legitimate financial transactions.",
        ],
      },
      { type: "heading", text: "Anatomy of the Fraud" },
      {
        type: "table",
        headers: ["Element", "Case Details"],
        rows: [
          [
            "The Ring Leader",
            "**Jordan Barrera Aldape**, coordinating via multiple shops north of the border and a network of Spanish-speaking groups while working at a school in Mexico.",
          ],
          [
            "The Logistics",
            "**Javier Chaves** (translator / escort) and his **younger brother** (forced cash mule).",
          ],
          [
            "Evidence Base",
            "Leaked message images organizing and connecting the illicit sale of thousands of hits.",
          ],
          [
            "The Corporate Link",
            "**Drew Weinheimer** (Pricing Analyst at ALT) contacting his boss **Roman** to secure hundreds of thousands in platform funding.",
          ],
          [
            "The Strategy",
            "Strict cash-only show transactions combined with table-top sales and ALT digital auctions using premium grading to maximize margins.",
          ],
        ],
      },
      { type: "heading", text: "Why This Matters: Destroying the Hobby" },
      {
        type: "paragraph",
        text: "This is not a victimless crime. When factory insiders, fraudulent dealers, and corrupt platform analysts siphon off the top 1% of hits, they are directly stealing from every everyday collector who buys a box. The odds advertised by manufacturers become fraudulent fabrications; consumers are spending billions collectively chasing rare cards that were never actually placed inside the packs to begin with.",
      },
      {
        type: "quote",
        text: "It's time to stop these thieves and criminals from destroying our hobby.",
      },
      {
        type: "paragraph",
        text: "As local authorities begin looking into the operation and compiling formal records, the community is taking matters into its own hands. Sunlight is the best disinfectant. By identifying the faces, the storefronts, the corporate entities like Llaves Talent Booking, and the rogue insiders like Drew Weinheimer and leadership oversight at ALT, collectors can protect their investments and demand the accountability that the hobby desperately needs to survive.",
      },
    ],
  },
  {
    slug: "best-rookie-sports-cards-to-buy-2026",
    title: "The Best Rookie Sports Cards to Buy in 2026",
    excerpt:
      "From NFL first-rounders to NBA lottery picks, here are the rookie cards smart collectors are stacking before the season tips off.",
    content:
      "Every collector loves a rookie card with room to run, and 2026 is shaping up to be one of the deepest classes in recent memory. We break down the players whose on-field production should match the hype, the parallels worth chasing, and the print runs to watch.\n\nWe spoke with three full-time breakers and a handful of long-time investors to put together a watch list that balances upside, liquidity, and grading potential. Whether you have a $200 budget or $20,000 to deploy, there is a rookie card on this list for you.\n\nWe also look at where the market got it wrong in 2025 — and how those lessons should shape the way you buy this year.",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
    category: "sports-cards",
    publishedAt: "2026-06-18",
    readingTime: 8,
    tags: ["NFL", "NBA", "Rookies", "Investing"],
    featured: true,
  },
  {
    slug: "pokemon-card-prices-continue-to-rise",
    title: "Pokémon Card Prices Continue to Rise Across Every Era",
    excerpt:
      "Vintage WOTC, modern alt arts, and even bulk commons are gaining steam. Here is what is driving the latest Pokémon TCG surge.",
    content:
      "It is not just first-edition Charizard anymore. Modern alt-art chase cards from Scarlet & Violet sets are doubling in three months, and even rough-condition WOTC commons are clearing on eBay at multiples of last year's prices.\n\nWe analyzed twelve months of sales data across PSA, CGC, and raw markets to find the patterns: Japanese exclusives outperforming, sealed product compression, and a new wave of buyers entering from outside the hobby.\n\nIf you have been waiting on the sidelines, this guide explains where the smart entry points are right now — and where prices look stretched.",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1200&q=80",
    category: "pokemon",
    publishedAt: "2026-06-15",
    readingTime: 6,
    tags: ["Pokemon", "Market", "Vintage"],
  },
  {
    slug: "one-piece-op-12-set-review",
    title: "One Piece OP-12 Set Review: Chase Cards, Meta Shifts & Value Picks",
    excerpt:
      "Bandai's latest One Piece TCG release is a banger. Here is our full breakdown of the chase cards, sleeper SRs, and tournament implications.",
    content:
      "OP-12 lands with a strong lineup of alternate arts, a reworked Whitebeard leader, and the long-awaited debut of a key Wano-era cast. Pack EVs are running hot in week one and singles are surprisingly liquid for a fresh release.\n\nWe pulled and reviewed three cases, tracked the first 72 hours of TCGplayer sales, and consulted with two of the top players from the most recent Bandai Card Game Championship to assess what is going to define the post-OP-12 format.\n\nInside: full pull rate analysis, our top 10 chase cards, value picks under $20, and a verdict on whether to crack or hold sealed.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
    category: "one-piece",
    publishedAt: "2026-06-12",
    readingTime: 9,
    tags: ["One Piece", "Set Review", "TCG"],
  },
  {
    slug: "psa-vs-bgs-vs-cgc-which-grading-company-is-best",
    title: "PSA vs BGS vs CGC: Which Grading Company is Best in 2026?",
    excerpt:
      "Turnaround times, resale premiums, slab design, and customer service — we compare the big three so you can pick the right grader for your cards.",
    content:
      "Choosing a grading company is one of the most consequential decisions a collector makes. The wrong submission can cost hundreds in fees and months of waiting, and the resale premium can vary by 2-3x depending on which slab your card ends up in.\n\nWe submitted matched lots to PSA, BGS, and CGC across vintage Pokémon, modern sports, and One Piece to compare grading consistency, turnaround, and ultimately resale price. The results may surprise you.\n\nWe also break down which company is best for each category, when to skip grading entirely, and how to think about cross-grading.",
    image:
      "https://images.unsplash.com/photo-1606166187734-a4cb74079037?auto=format&fit=crop&w=1200&q=80",
    category: "grading",
    publishedAt: "2026-06-10",
    readingTime: 11,
    tags: ["PSA", "BGS", "CGC", "Grading"],
  },
  {
    slug: "top-nfl-rookie-cards-worth-collecting",
    title: "Top NFL Rookie Cards Worth Collecting Right Now",
    excerpt:
      "From Prizm to National Treasures, here are the NFL rookies whose cards belong in every long-term portfolio.",
    content:
      "The NFL rookie card market is one of the most active corners of the hobby, and choosing the right players and products matters more than ever. We focus on rookies with elite landing spots, strong print runs, and meaningful parallels worth chasing.\n\nThis guide ranks the current crop by floor, ceiling, and liquidity — three metrics that matter far more than hype-driven price discovery. We also flag a few names where the market has gotten ahead of itself.",
    image:
      "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=1200&q=80",
    category: "sports-cards",
    publishedAt: "2026-06-08",
    readingTime: 7,
    tags: ["NFL", "Rookies", "Panini"],
  },
  {
    slug: "rare-charizard-cards-breaking-auction-records",
    title: "Rare Charizard Cards Keep Breaking Auction Records",
    excerpt:
      "PSA 10 base-set Charizards, trophy Pikachus, and pre-release holos are setting new ceilings. Here is what the latest auction data tells us.",
    content:
      "Charizard remains the king of the Pokémon TCG market, and the last six months of auction results have only widened the gap between the iconic chase cards and everything else.\n\nWe pulled results from Heritage, Goldin, PWCC, and eBay's high-end sales to map out where Charizard premiums are growing, where they are softening, and which adjacent cards are riding the same wave.",
    image:
      "https://images.unsplash.com/photo-1609743522653-52354461eb27?auto=format&fit=crop&w=1200&q=80",
    category: "pokemon",
    publishedAt: "2026-06-05",
    readingTime: 6,
    tags: ["Charizard", "Auctions", "Pokemon"],
  },
  {
    slug: "investing-in-vintage-basketball-cards",
    title: "Investing in Vintage Basketball Cards: A Modern Playbook",
    excerpt:
      "From Topps 1957 to Star Company Jordans, vintage hoops is having a moment. Here is how to approach it without getting burned.",
    content:
      "Vintage basketball was, until recently, a backwater compared to vintage baseball. That has changed: the Star Company era, 86-87 Fleer, and pre-rookie inserts have all seen meaningful re-pricing.\n\nThis guide explains how to identify legitimate scarcity, how to spot trimmed and altered cards, and which grades represent the best risk-adjusted entry points across the most important vintage basketball years.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    category: "market-news",
    publishedAt: "2026-06-02",
    readingTime: 10,
    tags: ["Vintage", "NBA", "Investing"],
  },
  {
    slug: "beginners-guide-to-trading-card-collecting",
    title: "A Beginner's Guide to Trading Card Collecting in 2026",
    excerpt:
      "New to the hobby? Start here. Storage, grading, pricing tools, and the mistakes every collector wishes they had avoided.",
    content:
      "Trading card collecting is one of the most rewarding hobbies you can pick up, but the on-ramp has gotten steeper. There are more games, more products, and more ways to lose money than ever before.\n\nThis guide walks you through the fundamentals: choosing a game, building a budget, understanding pricing tools, protecting your cards, and knowing when (and when not) to grade. By the end, you will have a clear plan to start collecting with confidence.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
    category: "market-news",
    publishedAt: "2026-05-29",
    readingTime: 8,
    tags: ["Beginner", "Guide", "Collecting"],
  },
  {
    slug: "best-card-storage-products-2026",
    title: "Best Card Storage Products in 2026",
    excerpt:
      "Penny sleeves, toploaders, semi-rigid holders, binders, and storage boxes — our tested picks across every price point.",
    content:
      "Storage is the most under-discussed part of collecting, and the wrong choice can quietly cost you thousands over the years. PVC damage, edge wear, and surface scratches are all preventable with the right gear.\n\nWe tested the top sleeves, toploaders, binders, and long-term storage boxes from Dragon Shield, Ultra Pro, Cardsavers, Vault X, and more. Inside: our verdict on each product, the ones to skip, and a system that scales from a starter collection to a six-figure portfolio.",
    image:
      "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&fit=crop&w=1200&q=80",
    category: "reviews",
    publishedAt: "2026-05-26",
    readingTime: 7,
    tags: ["Storage", "Reviews", "Gear"],
  },
  {
    slug: "hidden-gems-in-pokemon-tcg-market",
    title: "Hidden Gems in the Pokémon TCG Market Worth Watching",
    excerpt:
      "Beyond Charizard: undervalued promos, sleeper SIRs, and Japanese exclusives that look like the next leg of the Pokémon market.",
    content:
      "The headline cards in Pokémon are well-covered. The real alpha is in the cards that have not yet been discovered by the mainstream market — limited promos, regional exclusives, and modern alt arts with thin float.\n\nWe surface ten cards that meet our criteria for sleeper status: limited print run, growing demand signals, and a clear catalyst on the horizon.",
    image:
      "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=1200&q=80",
    category: "pokemon",
    publishedAt: "2026-05-22",
    readingTime: 6,
    tags: ["Pokemon", "Hidden Gems", "Investing"],
  },
  {
    slug: "one-piece-cards-every-collector-wants",
    title: "One Piece Cards Every Collector Wants Right Now",
    excerpt:
      "From the OP-01 Luffy alt art to the latest manga-style parallels — the chase cards defining the One Piece TCG collector market.",
    content:
      "The One Piece TCG has gone from new kid on the block to a top-five global trading card game in under two years. With that growth, a recognizable canon of must-have cards has formed.\n\nWe rank the most desired cards across leaders, characters, and parallels, with current pricing benchmarks and our outlook on each. If you are building a OP TCG showpiece, start here.",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80",
    category: "one-piece",
    publishedAt: "2026-05-19",
    readingTime: 8,
    tags: ["One Piece", "Chase Cards", "Collecting"],
  },
  {
    slug: "how-to-spot-fake-trading-cards",
    title: "How to Spot Fake Trading Cards: A Practical Guide",
    excerpt:
      "Counterfeits are getting better. Here are the tells, tools, and techniques every collector should know before buying high-end singles.",
    content:
      "Fake cards have gotten dramatically better in the last 24 months, and they are no longer confined to vintage Pokémon. Modern sports cards, high-end MTG, and even Yu-Gi-Oh! tournament staples are now showing up in counterfeit form.\n\nThis guide walks through the most reliable authentication techniques — print line analysis, light tests, weight comparison, and texture checks — plus the red flags to watch for when buying online. Read this before your next $500+ purchase.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=1200&q=80",
    category: "grading",
    publishedAt: "2026-05-16",
    readingTime: 9,
    tags: ["Authentication", "Fakes", "Buying"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit)
    .concat(
      posts
        .filter((p) => p.slug !== slug && p.category !== current.category)
        .slice(0, Math.max(0, limit - getPostsByCategory(current.category).length + 1)),
    )
    .slice(0, limit);
}

export function getAdjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? sorted[idx - 1] : undefined,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : undefined,
  };
}

export function getPopularPosts(limit = 5): Post[] {
  return [...posts].sort((a, b) => b.readingTime - a.readingTime).slice(0, limit);
}

export function getRecentPosts(limit = 5): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
