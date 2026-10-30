import type { DigitalProduct } from "./types";

/**
 * Digital wellness products — the first revenue stream, available now.
 * Pricing is placeholder pricing in PKR and can be edited freely.
 * Language is educational and lifestyle-focused: nothing here diagnoses or treats disease.
 */
export const digitalProducts: DigitalProduct[] = [
  {
    slug: "pcos-wellness-guide",
    title: "PCOS Wellness Guide",
    kind: "Guide",
    tagline:
      "Understand PCOS in plain language — and build a daily routine you can actually keep.",
    accent: "blush",
    goals: ["womens", "metabolic"],
    price: 1499,
    pages: "78 pages",
    formats: "PDF + printable worksheets",
    motif: "pomegranate",
    coverLabel: "Women's Wellness",
    intro: [
      "Most PCOS information sits at two extremes: dense clinical papers you need a science degree to read, or social media promises of a 30-day cure. Neither helps you decide what to eat on a Tuesday.",
      "The PCOS Wellness Guide sits in between. It explains what PCOS is, what is happening with insulin, androgens and the menstrual cycle, and how nutrition, movement, sleep and stress fit into a realistic daily routine — written by a Pharm-D with a master's in clinical pharmacology, in language you do not need to translate.",
    ],
    benefits: [
      "Understand the mechanisms behind common PCOS symptoms without the jargon",
      "Build a plate structure that supports steadier energy through the day",
      "Know which questions to take to your own doctor or dietitian",
      "Track symptoms and habits in a way that shows patterns over weeks, not days",
    ],
    includes: [
      "Chapter 1 — PCOS explained: hormones, insulin and the cycle",
      "Chapter 2 — Why symptoms differ so much between people",
      "Chapter 3 — Nutrition foundations: plate structure, fibre, protein, carbohydrate quality",
      "Chapter 4 — Movement that supports insulin sensitivity, without punishment",
      "Chapter 5 — Sleep, stress and the overlooked levers",
      "Chapter 6 — Supplements: what is commonly discussed, and what to ask before using any",
      "Chapter 7 — Working with your healthcare team: tests, terminology, appointment prep",
      "Printable 8-week symptom and habit tracker",
      "Grocery framework with South Asian and Pakistani kitchen staples",
      "Glossary of every medical term used in the guide",
    ],
    whoFor: [
      "Anyone who has been told they have PCOS and left the appointment with more questions than answers",
      "People who want lifestyle and nutrition education alongside their medical care",
      "Readers who prefer evidence-informed explanations over trend-driven advice",
    ],
    notFor: [
      "Anyone looking for a cure, a guaranteed result, or a replacement for medical care",
      "People wanting a rigid, restrictive diet plan",
    ],
    faq: [
      {
        q: "Is this a treatment plan?",
        a: "No. It is an educational and lifestyle guide. It does not diagnose, treat, cure or prevent any condition, and it is not a substitute for advice from your own healthcare provider.",
      },
      {
        q: "Do I need a PCOS diagnosis to find it useful?",
        a: "No, though it is written with diagnosed readers in mind. If you are still investigating symptoms, the appointment-preparation chapter is designed to help you have a more productive consultation.",
      },
      {
        q: "How do I get it after purchase?",
        a: "Instantly. Your download links appear on the order confirmation page and can be retrieved any time from the order lookup page using your email and order number.",
      },
    ],
  },
  {
    slug: "bloating-digestive-wellness-guide",
    title: "Bloating & Digestive Wellness Guide",
    kind: "Guide",
    tagline:
      "Find your own triggers with a structured method instead of eliminating everything.",
    accent: "peach",
    goals: ["digestive", "nutrition-education"],
    price: 1299,
    pages: "64 pages",
    formats: "PDF + printable trigger log",
    motif: "fennel",
    coverLabel: "Digestive Wellness",
    intro: [
      "Bloating is one of the most common reasons people start changing their diet — and one of the most common reasons they end up eating a very short list of foods with no idea why.",
      "This guide gives you a structured, time-boxed method for observing your own digestion: what to log, for how long, how to read the pattern, and when the sensible next step is a conversation with a doctor rather than another elimination.",
    ],
    benefits: [
      "Learn how normal digestion actually works, so you can tell habit from symptom",
      "Run a 3-week structured trigger log instead of guessing",
      "Understand meal timing, fibre types, hydration and eating pace",
      "Recognise the signs that mean you should be assessed by a clinician",
    ],
    includes: [
      "Chapter 1 — How digestion works, start to finish",
      "Chapter 2 — What bloating is, and the many reasons it happens",
      "Chapter 3 — The 21-day structured observation method",
      "Chapter 4 — Fibre, fermentation and the foods most often involved",
      "Chapter 5 — Meal rhythm, pace, hydration and movement after eating",
      "Chapter 6 — Herbal traditions around digestion, and how to read those claims critically",
      "Chapter 7 — Red flags: when to stop self-managing and get assessed",
      "Printable 21-day trigger and symptom log",
      "Reintroduction planner",
      "Question sheet for your clinician appointment",
    ],
    whoFor: [
      "People with recurring bloating who want a method rather than a rumour",
      "Anyone who has cut out foods without knowing whether it helped",
      "Readers who want to understand digestion before changing it",
    ],
    notFor: [
      "Anyone with diagnosed gastrointestinal disease looking for a treatment protocol — follow your clinician's plan",
      "People wanting an instant fix",
    ],
    faq: [
      {
        q: "Will this tell me which foods to stop eating?",
        a: "No. It gives you a structured method to observe your own responses, because triggers are individual. It deliberately avoids blanket elimination advice.",
      },
      {
        q: "Is it suitable if I have IBS or another diagnosis?",
        a: "It can be useful background education, but it is not a treatment protocol. Please follow the plan your own clinician has given you and discuss changes with them first.",
      },
    ],
  },
  {
    slug: "insulin-resistance-lifestyle-guide",
    title: "Insulin Resistance Lifestyle Guide",
    kind: "Guide",
    tagline:
      "The science of insulin, translated — and what it means for your plate and your day.",
    accent: "clay",
    goals: ["metabolic", "weight"],
    price: 1499,
    pages: "72 pages",
    formats: "PDF + printable planner pages",
    motif: "citrus",
    coverLabel: "Metabolic Wellness",
    intro: [
      "Insulin resistance is discussed constantly and explained rarely. It gets used to sell products far more often than it gets taught.",
      "This guide explains what insulin does, what changes when cells respond to it less readily, and which everyday levers — food composition, movement timing, sleep, stress, meal rhythm — are genuinely worth your attention.",
    ],
    benefits: [
      "Understand insulin, glucose and metabolic flexibility in plain language",
      "Build meals around protein, fibre and carbohydrate quality rather than fear",
      "Use movement timing and daily steps as practical tools",
      "Interpret common lab terminology before your next appointment",
    ],
    includes: [
      "Chapter 1 — Insulin, glucose and what 'resistance' means",
      "Chapter 2 — Why it matters beyond weight",
      "Chapter 3 — Plate architecture: protein, fibre, fat, carbohydrate quality",
      "Chapter 4 — Meal rhythm and the case for fewer, better-built meals",
      "Chapter 5 — Movement: resistance training, walking and post-meal activity",
      "Chapter 6 — Sleep and stress as metabolic levers",
      "Chapter 7 — Understanding common tests and terminology",
      "Chapter 8 — Sustainable change: habits that survive a hard week",
      "Printable weekly planner and habit tracker",
      "Reference sheet for South Asian carbohydrate staples",
    ],
    whoFor: [
      "People told they have insulin resistance, prediabetes risk or metabolic concerns",
      "Readers with PCOS who want the metabolic side explained properly",
      "Anyone who wants to understand the mechanism before changing their diet",
    ],
    notFor: [
      "People with diagnosed diabetes seeking medication or dosing guidance — that belongs with your prescriber",
      "Anyone wanting a rapid weight-loss protocol",
    ],
    faq: [
      {
        q: "Does this replace advice from my doctor?",
        a: "No. It is educational material designed to make your appointments more productive, not to replace them. Never change prescribed medication based on a guide.",
      },
      {
        q: "Is it a low-carb plan?",
        a: "No. It teaches carbohydrate quality, portion structure and meal composition, and explains the trade-offs of different approaches rather than prescribing one.",
      },
    ],
  },
  {
    slug: "womens-wellness-tracker",
    title: "Women's Wellness Tracker",
    kind: "Tracker",
    tagline:
      "Cycle, symptoms, energy and habits in one calm, printable system.",
    accent: "blush",
    goals: ["womens", "sleep-stress"],
    price: 999,
    pages: "34 printable pages",
    formats: "PDF (A4 + A5) + digital tablet version",
    motif: "rose",
    coverLabel: "Women's Wellness",
    intro: [
      "Patterns in women's health show up over months, not days — which is exactly the timescale memory is worst at.",
      "This tracker gives you a consistent place to record your cycle, symptoms, energy, sleep and daily habits, designed so that three months of entries become a page you can actually hand to a clinician.",
    ],
    benefits: [
      "Track cycle length, flow and symptoms without a subscription app",
      "Connect energy, sleep and mood to cycle phase over time",
      "Arrive at appointments with organised information",
      "Print at A4 or A5, or annotate on a tablet",
    ],
    includes: [
      "12 monthly cycle spreads",
      "Daily symptom and energy logs",
      "Sleep and stress check-ins",
      "Habit grid with a gentle 5-habit maximum",
      "Quarterly review pages with prompts",
      "Appointment summary sheet",
      "Guidance on what each field means and why it is tracked",
    ],
    whoFor: [
      "Anyone tracking cycle-related patterns over several months",
      "Readers of the PCOS Wellness Guide who want a companion system",
      "People who prefer paper to apps, or want their data to stay on their own device",
    ],
    notFor: [
      "Anyone expecting fertility prediction or contraceptive guidance — this is not that tool",
    ],
    faq: [
      {
        q: "Can I use it as a fertility or contraception tool?",
        a: "No. It is an observation and education tool only. It makes no fertility predictions and must not be used for contraception decisions.",
      },
      {
        q: "Is it reusable?",
        a: "Yes — it covers twelve months and you can reprint any page as often as you like for personal use.",
      },
    ],
  },
  {
    slug: "daily-wellness-planner",
    title: "Daily Wellness Planner",
    kind: "Planner",
    tagline:
      "A single page a day: food, movement, water, sleep, and one honest note.",
    accent: "sage",
    goals: ["energy", "sleep-stress"],
    price: 999,
    pages: "40 printable pages",
    formats: "PDF (A4 + A5) + digital tablet version",
    motif: "leaf",
    coverLabel: "Daily Wellness",
    intro: [
      "Most planners fail because they ask for too much. This one asks for one page, and fits in the margins of a real day.",
      "It is built around five things that reliably move how you feel — meals, movement, hydration, sleep and stress — with space for the one note that explains the day.",
    ],
    benefits: [
      "Keep a low-effort daily record you will actually maintain",
      "See weekly patterns without scoring or streak pressure",
      "Plan the next day in under three minutes",
      "Works alongside any guide in the collection",
    ],
    includes: [
      "Daily one-page spreads",
      "Weekly planning and reflection pages",
      "Hydration and movement trackers",
      "Evening wind-down checklist",
      "Monthly overview grid",
      "Short how-to-use guide",
    ],
    whoFor: [
      "Anyone rebuilding basic routines after a busy or difficult period",
      "People who find habit apps noisy",
      "Readers wanting a companion to a wellness guide",
    ],
    notFor: [
      "Anyone looking for calorie counting or macro tracking — this planner intentionally omits both",
    ],
    faq: [
      {
        q: "Does it count calories?",
        a: "No. It records meal structure and how you felt, not numbers. That is a deliberate design choice.",
      },
    ],
  },
  {
    slug: "healthy-meal-planner",
    title: "Healthy Meal Planner",
    kind: "Planner",
    tagline:
      "Balanced plates built from a Pakistani kitchen, not an imported grocery list.",
    accent: "clay",
    goals: ["weight", "metabolic", "nutrition-education"],
    price: 1199,
    pages: "56 pages",
    formats: "PDF + printable weekly sheets",
    motif: "seed",
    coverLabel: "Nutrition",
    intro: [
      "Meal plans usually fail at the shop. They assume ingredients that are expensive, unfamiliar, or simply not sold nearby.",
      "This planner teaches plate architecture — protein, fibre, carbohydrate quality, fats — and then applies it to daal, roti, rice, seasonal sabzi, yoghurt and the food you already cook.",
    ],
    benefits: [
      "Build balanced meals from familiar, affordable ingredients",
      "Plan a week in one sitting with reusable templates",
      "Shop from a structured list instead of improvising",
      "Adapt the same framework for a family, not just yourself",
    ],
    includes: [
      "Plate architecture explained with visual examples",
      "Protein, fibre and carbohydrate reference tables for local staples",
      "4 example weeks (vegetarian and mixed)",
      "Blank weekly planning sheets",
      "Grocery list templates by category",
      "Batch-cooking and leftover strategies",
      "Eating out and travel section",
    ],
    whoFor: [
      "Anyone who wants structure without imported ingredients",
      "People cooking for a household",
      "Readers of the Insulin Resistance or PCOS guides who want the food side built out",
    ],
    notFor: [
      "Anyone needing a medically prescribed therapeutic diet — that must come from your own dietitian",
    ],
    faq: [
      {
        q: "Are the meals vegetarian?",
        a: "Both are covered. Two example weeks are vegetarian and two are mixed, and every template can be adapted either way.",
      },
      {
        q: "Is it a weight-loss plan?",
        a: "It is a meal-planning education tool. It supports balanced eating; it does not promise a specific weight outcome.",
      },
    ],
  },
  {
    slug: "supplement-education-guide",
    title: "Supplement Education Guide",
    kind: "Guide",
    tagline:
      "How to read a supplement label, a claim, and a study — before you spend money.",
    accent: "forest",
    goals: ["nutrition-education", "energy"],
    price: 1299,
    pages: "68 pages",
    formats: "PDF + printable checklists",
    motif: "leaf",
    coverLabel: "Education",
    intro: [
      "This is the guide a clinical pharmacologist wants you to read before your next supplement purchase — and it is the most sceptical thing in the collection.",
      "It does not recommend products. It teaches you how labels are constructed, what dose and form actually mean, where interactions with prescription medicines arise, and how to tell a genuine reference from marketing dressed up as science.",
    ],
    benefits: [
      "Decode a supplement label line by line",
      "Understand dose, form, bioavailability and why they are not interchangeable",
      "Spot the interaction risks worth asking a pharmacist about",
      "Evaluate a claim, a citation and a testimonial critically",
    ],
    includes: [
      "Chapter 1 — What a supplement is, legally and practically",
      "Chapter 2 — Reading the label: ingredients, dose, form, excipients",
      "Chapter 3 — Quality and testing: what claims mean and what they do not",
      "Chapter 4 — Interactions with prescription medicines",
      "Chapter 5 — Groups who should be especially cautious",
      "Chapter 6 — How to read a study abstract without a science degree",
      "Chapter 7 — Marketing patterns that should make you pause",
      "Printable 'questions to ask before buying' checklist",
      "Printable pharmacist and prescriber consultation sheet",
    ],
    whoFor: [
      "Anyone who takes or is considering supplements",
      "People taking prescription medicines who want to ask better questions",
      "Readers who want to evaluate wellness marketing for themselves",
    ],
    notFor: [
      "Anyone looking for product recommendations or a supplement stack — this guide deliberately gives neither",
    ],
    faq: [
      {
        q: "Does it recommend specific supplements or brands?",
        a: "No, and that is the point. It teaches you how to assess any product and any claim, including ours.",
      },
      {
        q: "Is it safe to rely on for my own medicines?",
        a: "It is educational. Always confirm anything about your own prescriptions with your pharmacist or prescriber.",
      },
    ],
  },
  {
    slug: "hair-skin-wellness-guide",
    title: "Hair & Skin Wellness Guide",
    kind: "Guide",
    tagline:
      "What actually sits underneath hair and skin concerns — nutrition, sleep, stress, routine.",
    accent: "sage",
    goals: ["hair-skin", "nutrition-education"],
    price: 1199,
    pages: "60 pages",
    formats: "PDF + printable routine sheets",
    motif: "rosemary",
    coverLabel: "Hair & Skin",
    intro: [
      "Hair and skin are where internal patterns become visible, which is why they attract the most aggressive marketing in wellness.",
      "This guide takes the slower route: hair and skin biology, the nutrition and sleep factors that matter, the limits of what a topical routine can do, and when a dermatologist is the right answer rather than another serum.",
    ],
    benefits: [
      "Understand hair growth cycles and skin barrier function",
      "See which nutrition and lifestyle factors are genuinely relevant",
      "Build a simple routine and give it a fair trial period",
      "Recognise when to see a dermatologist instead of buying again",
    ],
    includes: [
      "Chapter 1 — Hair growth cycles in plain language",
      "Chapter 2 — Skin barrier basics",
      "Chapter 3 — Nutrition factors that matter, and the ones oversold",
      "Chapter 4 — Sleep, stress and hormonal influences",
      "Chapter 5 — Building a routine, and how long to give it",
      "Chapter 6 — Reading cosmetic and supplement claims",
      "Chapter 7 — When to see a dermatologist",
      "Printable routine and photo-tracking sheets",
    ],
    whoFor: [
      "Anyone tired of buying products without understanding the underlying picture",
      "Readers wanting the nutrition and lifestyle side explained honestly",
    ],
    notFor: [
      "Anyone with a diagnosed dermatological condition looking for a treatment protocol",
      "Readers wanting before-and-after transformation promises — you will not find them here",
    ],
    faq: [
      {
        q: "Will it fix hair fall?",
        a: "No guide can promise that. Hair fall has many causes, several of which need clinical assessment. This guide explains the possibilities and helps you get properly assessed.",
      },
    ],
  },
  {
    slug: "30-day-wellness-reset",
    title: "30-Day Wellness Reset",
    kind: "Programme",
    tagline:
      "Four weeks, four focuses, one habit at a time — no detoxes, no restriction.",
    accent: "dusty",
    goals: ["energy", "weight", "sleep-stress", "fitness"],
    price: 1499,
    pages: "94 pages",
    formats: "PDF + 30 daily sheets + weekly audio notes",
    motif: "mint",
    coverLabel: "30-Day Programme",
    intro: [
      "A reset that removes nothing. No detox, no cleanse, no elimination — because none of those are what your body needs and none of them last past week two.",
      "Instead, four weeks with one focus each: hydration and meal rhythm, movement, sleep, then stress and consolidation. One small habit added at a time, with a daily page that takes two minutes.",
    ],
    benefits: [
      "Add habits in a sequence designed to hold",
      "Spend a full week on each focus instead of changing everything at once",
      "Finish with a written plan for the following three months",
      "Short weekly audio notes to keep you oriented",
    ],
    includes: [
      "Week 1 — Hydration and meal rhythm",
      "Week 2 — Movement you can repeat",
      "Week 3 — Sleep and evening routine",
      "Week 4 — Stress, consolidation and your next 90 days",
      "30 daily two-minute sheets",
      "4 weekly review spreads",
      "4 short audio notes (approx. 6 minutes each)",
      "Day 31 planning workbook",
    ],
    whoFor: [
      "Anyone who wants a structured, gentle restart",
      "People who have tried intense programmes and stopped by week two",
      "Readers who want education alongside the routine",
    ],
    notFor: [
      "Anyone looking for a rapid weight-loss or detox challenge",
      "People wanting a fixed calorie prescription",
    ],
    faq: [
      {
        q: "Is there a diet to follow?",
        a: "No. There is meal structure guidance and no calorie prescription, no banned foods and no detox phase.",
      },
      {
        q: "What if I miss days?",
        a: "The programme is written expecting you to. Each week includes a catch-up page and guidance on continuing rather than restarting.",
      },
    ],
  },
  {
    slug: "wellness-habit-tracker",
    title: "Wellness Habit Tracker",
    kind: "Tracker",
    tagline: "Five habits, ninety days, zero guilt mechanics.",
    accent: "gold",
    goals: ["energy", "fitness", "sleep-stress"],
    price: 999,
    pages: "26 printable pages",
    formats: "PDF (A4 + A5) + digital tablet version",
    motif: "seed",
    coverLabel: "Habits",
    intro: [
      "Habit trackers usually fail in one of two ways: too many habits, or streak mechanics that make one missed day feel like failure.",
      "This one caps you at five habits, runs in 90-day blocks, and replaces streaks with a simple consistency view — because 22 out of 30 days is a success, not a broken chain.",
    ],
    benefits: [
      "Track up to five habits over a 90-day block",
      "See consistency instead of streaks",
      "Review every 30 days with structured prompts",
      "Pair with any guide or planner in the collection",
    ],
    includes: [
      "3 monthly habit grids",
      "Habit selection worksheet with guidance",
      "30-day review pages",
      "90-day reflection spread",
      "Printable A4 and A5 layouts",
    ],
    whoFor: [
      "Anyone building a small number of habits deliberately",
      "People who have abandoned streak-based apps",
    ],
    notFor: [
      "Anyone wanting to track fifteen habits at once — the cap is intentional",
    ],
    faq: [
      {
        q: "Why only five habits?",
        a: "Because adding more is the most common reason habit systems collapse. The cap is a design decision, and the selection worksheet helps you choose well.",
      },
    ],
  },
];

export function getDigital(slug: string) {
  return digitalProducts.find((p) => p.slug === slug);
}
