import type { ConceptProduct, Goal, Bundle } from "./types";
import { digitalProducts } from "./digital";

const specs = [
  [
    "bloat-ease",
    "Bloat Ease",
    "Digestive support",
    "peach",
    "digestive",
    "fennel",
  ],
  [
    "herbalance",
    "HerBalance",
    "Women’s daily wellness",
    "blush",
    "womens",
    "pomegranate",
  ],
  [
    "herbal-hydration",
    "Herbal Hydration",
    "Botanical hydration",
    "dusty",
    "energy",
    "mint",
  ],
  [
    "keto-hydration",
    "Low-Carb / Keto Hydration",
    "Hydration for low-carbohydrate lifestyles",
    "clay",
    "metabolic",
    "citrus",
  ],
  [
    "hair-and-glow",
    "Hair & Glow",
    "Beauty from within",
    "sage",
    "hair-skin",
    "rosemary",
  ],
  [
    "herbal-glow-water",
    "Herbal Glow Water",
    "Beauty & hydration",
    "gold",
    "hair-skin",
    "rose",
  ],
  [
    "pcos-wellness",
    "PCOS Wellness",
    "Women’s wellness concept",
    "blush",
    "womens",
    "mint",
  ],
] as const;

export const concepts: ConceptProduct[] = specs.map(
  ([slug, name, descriptor, accent, goal, botanical]) => ({
    slug,
    name,
    descriptor,
    accent,
    goals: [goal],
    image: `/images/bottle-${slug}.png`,
    positioning: `A nature-inspired ${descriptor.toLowerCase()} concept, being explored for the future Nourish & Heal collection.`,
    labelNote:
      "COMING SOON • Concept product. Packaging is illustrative; no commercial formula, manufacture or approval is implied.",
    why: [
      `We are exploring a thoughtful botanical approach to ${descriptor.toLowerCase()}, alongside—not instead of—nutrition, lifestyle and medical care.`,
      "Development begins with a clearly defined purpose, ingredient assessment and a responsible safety review. A beautiful bottle is not evidence of effectiveness. No outcomes are promised.",
    ],
    ingredients: [
      {
        name:
          botanical[0].toUpperCase() +
          botanical.slice(1) +
          " — visual inspiration only",
        source: "[Ingredient source to be confirmed]",
        purpose:
          "Shown as packaging inspiration, not a confirmed formula ingredient.",
        evidence:
          "[Ingredient evidence/reference to be added after formula review]",
      },
      {
        name: "Final formulation pending",
        source: "[Supplier and source to be added]",
        purpose:
          "Ingredient selection and concentration have not been finalised.",
        evidence: "[Safety and evidence review to be added]",
      },
    ],
    routine: [
      {
        step: "Understand",
        detail:
          "Explore the related educational guide and your own wellness goals.",
      },
      {
        step: "Review",
        detail:
          "Final directions, dose and precautions will be published only after development and safety review.",
      },
      {
        step: "Keep it practical",
        detail:
          "Any future product would complement ordinary routines, not replace medical treatment.",
      },
    ],
    whoFor: [
      "The intended audience will be confirmed after formula and safety assessment.",
      `People interested in learning about ${descriptor.toLowerCase()} can explore our digital resources now.`,
    ],
    whatToKnow: [
      "This product is not available to purchase or use.",
      "No dosing, pregnancy, breastfeeding or age suitability has been established.",
      "Natural does not automatically mean safe. Herbs can interact with medicines.",
      "Anyone pregnant, breastfeeding, managing a health condition or taking medicines should consult their own clinician before using a future product.",
    ],
    transparency: [
      {
        label: "Development status",
        value: "Concept stage — not commercially available",
      },
      {
        label: "Final ingredients",
        value: "[Formula and quantities to be added]",
        placeholder: true,
      },
      {
        label: "Manufacture",
        value: "[Manufacturer and location to be added]",
        placeholder: true,
      },
      {
        label: "Testing",
        value: "[Laboratory testing information to be added]",
        placeholder: true,
      },
      {
        label: "Registration",
        value: "[Registration number to be added]",
        placeholder: true,
      },
    ],
    faq: [
      {
        q: "Can I order this now?",
        a: "No. This is an early product and packaging concept. Joining the interest list does not create an order or guarantee a launch date.",
      },
      {
        q: "Is the formula approved or tested?",
        a: "No such claim is being made. The final formulation, testing information and any legitimate regulatory status will be published before sale.",
      },
      {
        q: "Does it treat a health condition?",
        a: "No treatment, cure, prevention or diagnostic claims are made. This concept is framed around general wellness, subject to appropriate future review.",
      },
    ],
    relatedDigital: digitalProducts
      .filter((p) => p.goals.includes(goal))
      .slice(0, 3)
      .map((p) => p.slug),
  }),
);

const goalSpecs = [
  [
    "digestive",
    "Bloating & Digestive Wellness",
    "Understand your digestion",
    "peach",
    "fennel",
  ],
  [
    "womens",
    "PCOS & Women’s Wellness",
    "Support through every season",
    "blush",
    "pomegranate",
  ],
  [
    "metabolic",
    "Metabolic Wellness",
    "Make sense of insulin and energy",
    "clay",
    "citrus",
  ],
  [
    "weight",
    "Healthy Weight Management",
    "Balanced, sustainable routines",
    "gold",
    "seed",
  ],
  [
    "energy",
    "Energy & Daily Wellness",
    "Small habits. Better days.",
    "sage",
    "leaf",
  ],
  [
    "sleep-stress",
    "Sleep & Stress",
    "Find a calmer daily rhythm",
    "dusty",
    "mint",
  ],
  [
    "hair-skin",
    "Hair & Skin Wellness",
    "A whole-person perspective",
    "sage",
    "rosemary",
  ],
  [
    "fitness",
    "Fitness & Active Lifestyle",
    "Movement without extremes",
    "clay",
    "seed",
  ],
  [
    "mens",
    "Men’s Wellness",
    "Everyday foundations, explained",
    "forest",
    "leaf",
  ],
  [
    "nutrition-education",
    "Nutrition & Supplement Education",
    "Learn before you buy",
    "gold",
    "rose",
  ],
] as const;
export const goals: Goal[] = goalSpecs.map(
  ([key, title, short, accent, motif]) => ({
    key,
    title,
    short,
    accent,
    motif,
    intro: [
      `${short}. Start with clear information, then choose practical tools that fit your own life.`,
      `Our ${title.toLowerCase()} pathway is educational and lifestyle-focused. It is not a diagnosis, treatment plan or substitute for your own healthcare team.`,
    ],
    learn: [
      "Understand the foundations before changing your routine.",
      "Choose one or two achievable habits, rather than changing everything.",
      "Track patterns over time and take persistent concerns to your clinician.",
    ],
    digital: (key === "mens"
      ? digitalProducts.filter((p) =>
          [
            "daily-wellness-planner",
            "healthy-meal-planner",
            "supplement-education-guide",
          ].includes(p.slug),
        )
      : digitalProducts.filter((p) => p.goals.includes(key))
    ).map((p) => p.slug),
    concepts: concepts.filter((p) => p.goals.includes(key)).map((p) => p.slug),
    journal: [],
  }),
);

export const bundles: Bundle[] = [
  {
    slug: "daily-foundations",
    title: "Daily Foundations",
    tagline: "A planner and tracker for consistent, everyday habits.",
    accent: "sage",
    status: "available",
    items: [
      {
        label: "Daily Wellness Planner",
        type: "digital",
        slug: "daily-wellness-planner",
      },
      {
        label: "Wellness Habit Tracker",
        type: "digital",
        slug: "wellness-habit-tracker",
      },
    ],
    price: 1290,
    note: "Digital bundle • illustrative pricing • files pending final release.",
  },
  ...(["digestive", "womens", "metabolic", "hair-skin"] as const).map((key) => {
    const goal = goals.find((g) => g.key === key)!;
    return {
      slug: `${key}-bundle`,
      title: `${key === "womens" ? "Women’s" : key === "hair-skin" ? "Hair & Skin" : key[0].toUpperCase() + key.slice(1)} Wellness Bundle`,
      tagline: "Education and future botanical wellness, thoughtfully paired.",
      accent: goal.accent,
      status: "coming-soon" as const,
      items: [
        ...goal.digital
          .slice(0, 2)
          .map((slug) => ({
            label: digitalProducts.find((p) => p.slug === slug)!.title,
            type: "digital" as const,
            slug,
          })),
        ...goal.concepts
          .slice(0, 2)
          .map((slug) => ({
            label: concepts.find((p) => p.slug === slug)!.name,
            type: "concept" as const,
            slug,
          })),
      ],
      note: "Contains physical product concepts. No purchase or pre-order available.",
    };
  }),
];
export const getConcept = (slug: string) =>
  concepts.find((p) => p.slug === slug);
