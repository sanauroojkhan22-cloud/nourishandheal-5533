/** Shared content types for the Nourish & Heal catalogue, journal and resources. */

export type AccentKey =
  "sage" | "peach" | "blush" | "dusty" | "clay" | "gold" | "forest";

export type GoalKey =
  | "digestive"
  | "womens"
  | "metabolic"
  | "weight"
  | "energy"
  | "sleep-stress"
  | "hair-skin"
  | "fitness"
  | "mens"
  | "nutrition-education";

export interface FaqItem {
  q: string;
  a: string;
}

/** A digital product — available to buy today. */
export interface DigitalProduct {
  slug: string;
  title: string;
  kind: "Guide" | "Tracker" | "Planner" | "Programme";
  tagline: string;
  accent: AccentKey;
  goals: GoalKey[];
  price: number;
  /** Optional reference price, shown struck through. Placeholder pricing. */
  compareAt?: number;
  pages: string;
  formats: string;
  intro: string[];
  benefits: string[];
  includes: string[];
  whoFor: string[];
  notFor: string[];
  faq: FaqItem[];
  /** Botanical motif key used by the rendered cover. */
  motif:
    | "fennel"
    | "pomegranate"
    | "mint"
    | "citrus"
    | "rosemary"
    | "rose"
    | "seed"
    | "leaf";
  coverLabel: string;
}

export interface ConceptIngredient {
  name: string;
  source: string;
  purpose: string;
  /** Deliberately a placeholder — no invented studies. */
  evidence: string;
}

/** A future herbal product — concept only, never purchasable. */
export interface ConceptProduct {
  slug: string;
  name: string;
  descriptor: string;
  positioning: string;
  accent: AccentKey;
  goals: GoalKey[];
  image: string;
  labelNote: string;
  why: string[];
  ingredients: ConceptIngredient[];
  routine: { step: string; detail: string }[];
  whoFor: string[];
  whatToKnow: string[];
  transparency: { label: string; value: string; placeholder?: boolean }[];
  faq: FaqItem[];
  relatedDigital: string[];
}

export interface Bundle {
  slug: string;
  title: string;
  tagline: string;
  accent: AccentKey;
  status: "available" | "coming-soon";
  items: { label: string; type: "digital" | "concept"; slug?: string }[];
  price?: number;
  compareAt?: number;
  note: string;
}

export interface Goal {
  key: GoalKey;
  title: string;
  short: string;
  accent: AccentKey;
  motif:
    | "fennel"
    | "pomegranate"
    | "mint"
    | "citrus"
    | "rosemary"
    | "rose"
    | "seed"
    | "leaf";
  intro: string[];
  learn: string[];
  digital: string[];
  concepts: string[];
  journal: string[];
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  published: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  meansForYou: string[];
  takeaways: string[];
  references: string[];
  related: string[];
}

export interface FreeResource {
  slug: string;
  title: string;
  format: string;
  blurb: string;
  accent: AccentKey;
  includes: string[];
}
