import type { JournalArticle, FreeResource, FaqItem } from "./types";
export const journalCategories = [
  "PCOS",
  "Periods & Women’s Wellness",
  "Fertility Education",
  "Digestive Health",
  "Metabolic Health",
  "Nutrition",
  "Supplements",
  "Sleep",
  "Stress",
  "Fitness",
  "Hair & Skin",
  "Herbal Wellness",
];
const seeds = [
  [
    "pcos-without-the-noise",
    "PCOS, without the noise",
    "PCOS",
    "A clearer starting point for understanding a complex, individual condition.",
    "PCOS is a hormonal condition with a varied presentation. Irregular cycles, androgen-related symptoms and metabolic concerns can occur, but no single symptom confirms a diagnosis. Assessment belongs with a qualified clinician.",
    "Healthy eating and physical activity matter even when weight does not change. A sustainable routine is more useful than a restrictive plan advertised as a cure.",
    "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome",
    "pcos-wellness-guide",
  ],
  [
    "bloating-a-pattern-not-a-verdict",
    "Bloating: a pattern, not a verdict",
    "Digestive Health",
    "Why observation is a better first step than cutting out everything.",
    "Gas is a normal part of digestion. Swallowed air and bacterial breakdown of carbohydrates can contribute to it. A sensation of bloating is not the same as visible abdominal distension, and neither identifies a single cause.",
    "Record timing, meals, bowel habits and symptoms briefly, without starting a broad elimination diet. Persistent symptoms, worsening pain, blood in stool, unintentional weight loss or sudden changes deserve medical assessment.",
    "https://www.niddk.nih.gov/health-information/digestive-diseases/gas-digestive-tract",
    "bloating-digestive-wellness-guide",
  ],
  [
    "insulin-in-plain-language",
    "Insulin resistance, in plain language",
    "Metabolic Health",
    "What this much-used term actually means—and what it does not.",
    "Insulin helps glucose enter cells. In insulin resistance, muscle, fat and liver cells do not respond as readily, so the pancreas may produce more insulin. Insulin resistance and prediabetes often have no obvious symptoms; fatigue alone is not a diagnosis.",
    "Ask your clinician which tests are appropriate for your history. Meal composition, regular activity and adequate sleep can be useful foundations, but medication decisions should remain with your prescriber.",
    "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance",
    "insulin-resistance-lifestyle-guide",
  ],
  [
    "read-the-label-before-the-claim",
    "Read the label before the claim",
    "Supplements",
    "Five questions to bring to a pharmacist before buying a supplement.",
    "Supplements can contain vitamins, minerals, herbs or other substances. A label and a convincing testimonial are not proof that a product will help you. Quality, safety and effectiveness are different questions.",
    "Ask about the exact ingredient, quantity, reason for taking it, possible medicine interactions and independent testing. Pregnant or breastfeeding people and people taking prescription medicines should seek individual advice.",
    "https://ods.od.nih.gov/factsheets/WYNTK-Consumer/",
    "supplement-education-guide",
  ],
  [
    "balanced-plates-familiar-food",
    "Balanced plates. Familiar food.",
    "Nutrition",
    "Your kitchen does not need a makeover to support better nutrition.",
    "A varied eating pattern can include familiar foods: pulses, vegetables, fruit, whole grains and suitable sources of protein. Balance is a pattern across meals, not a judgement about a single roti or bowl of rice.",
    "Start by noticing what is missing from your usual plate. Add vegetables or a protein source when possible, and choose changes that fit your budget, preferences and household. Therapeutic diets require individual advice.",
    "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    "healthy-meal-planner",
  ],
  [
    "a-wind-down-that-fits",
    "A wind-down that fits your life",
    "Sleep",
    "A few repeatable cues are more practical than a perfect evening routine.",
    "Sleep is influenced by timing, environment, stress, health conditions and daily habits. A consistent routine can help, but persistent insomnia or marked daytime sleepiness should not be dismissed as a failure of willpower.",
    "Choose a realistic bedtime window, reduce stimulating activities close to bed and make the sleeping space comfortable. If poor sleep persists, speak to a clinician rather than relying on herbal sleep products.",
    "https://www.nhlbi.nih.gov/health/sleep/healthy-sleep",
    "daily-wellness-planner",
  ],
  [
    "movement-not-punishment",
    "Movement, not punishment",
    "Fitness",
    "Build activity around your starting point, not someone else’s routine.",
    "Physical activity supports general health. Walking, strength work and everyday movement can all contribute. The right starting point depends on ability, medical history and what is safe and accessible for you.",
    "Start with manageable sessions and build gradually. Seek individual guidance if you have symptoms, injuries, pregnancy-related concerns or a health condition that affects exercise. Stop and seek help for chest pain, fainting or severe breathlessness.",
    "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
    "wellness-habit-tracker",
  ],
  [
    "natural-does-not-mean-risk-free",
    "Natural does not mean risk-free",
    "Herbal Wellness",
    "The questions that belong beside every botanical wellness claim.",
    "Herbs contain biologically active compounds. Origin in nature does not guarantee safety or establish an effective dose. Medicines, pregnancy, allergies and existing health conditions can change the risk picture.",
    "Treat botanical claims with the same scrutiny as other health claims. Ask for the complete formula, quantities, safety information and real test documentation. Concept packaging is not a verified commercial product.",
    "https://ods.od.nih.gov/factsheets/WYNTK-Consumer/",
    "supplement-education-guide",
  ],
] as const;
export const articles: JournalArticle[] = seeds.map(
  ([slug, title, category, excerpt, body, practical, ref, related]) => ({
    slug,
    title,
    category,
    excerpt,
    readTime: "4 min read",
    published: "Draft • pending founder review",
    sections: [
      { heading: "Start with the explanation", body: [body] },
      { heading: "Put it in context", body: [practical] },
    ],
    meansForYou: [
      "You do not have to change everything at once. Clear information can help you choose a realistic starting point.",
      "These are general educational points—not an individual medical recommendation.",
    ],
    takeaways: [
      "Choose a small, achievable action.",
      "Observe patterns without self-diagnosing.",
      "Discuss persistent concerns with an appropriately qualified clinician.",
    ],
    references: [ref],
    related: [related],
  }),
);
export const resources: FreeResource[] = [
  [
    "pcos-symptom-tracker",
    "PCOS Symptom Tracker",
    "blush",
    "Cycle dates, symptoms and questions for your next appointment.",
  ],
  [
    "bloating-trigger-tracker",
    "Bloating Trigger Tracker",
    "peach",
    "A simple daily log to notice food, timing and digestive patterns.",
  ],
  [
    "hydration-tracker",
    "Hydration Tracker",
    "dusty",
    "A gentle daily water check-in, without a one-size-fits-all target.",
  ],
  [
    "daily-wellness-checklist",
    "Daily Wellness Checklist",
    "sage",
    "Food, movement, rest and one manageable daily intention.",
  ],
  [
    "cycle-tracker",
    "Cycle Tracker",
    "blush",
    "Record cycle patterns for discussion—not fertility prediction.",
  ],
  [
    "healthy-habit-tracker",
    "Healthy Habit Tracker",
    "gold",
    "Choose three small habits and track consistency for a week.",
  ],
  [
    "supplement-questions-checklist",
    "Supplement Questions Checklist",
    "forest",
    "Seven questions to ask your pharmacist before buying.",
  ],
].map(([slug, title, accent, blurb]) => ({
  slug,
  title,
  accent: accent as FreeResource["accent"],
  blurb,
  format: "Printable A4 PDF",
  includes: [
    "One-page reusable template",
    "Plain-language instructions",
    "Responsible-use reminder",
  ],
}));

export const faqs: FaqItem[] = [
  {
    q: "What is Nourish & Heal?",
    a: "A science-informed, nature-inspired wellness brand built around education, practical tools and responsible future product development. Our philosophy is Understand. Nourish. Heal.",
  },
  {
    q: "Who is Dr. Sana?",
    a: "Dr. Sana Urooj Khan holds a Pharm-D and MS Clinical Pharmacology. Her work encompasses clinical pharmacology, scientific information and medical/scientific publishing. She is not presented here as an MBBS physician.",
  },
  {
    q: "Are products available yet?",
    a: "The digital collection is the launch-first offering. This site currently uses illustrative prices and a demo checkout, so no payments are taken. Final paid guide files are pending release. All physical products are clearly marked Coming Soon.",
  },
  {
    q: "Are the products herbal?",
    a: "The future physical collection explores botanical wellness concepts. Digital products are educational guides and practical tools—not herbal products.",
  },
  {
    q: "How are products developed?",
    a: "The intended approach is purpose definition, evidence and ingredient review, safety assessment and appropriate quality and regulatory review. The concept range has not completed that process.",
  },
  {
    q: "Where are products manufactured?",
    a: "[Manufacturer and location to be added]. No manufacturing or commercial availability claim is made at this stage.",
  },
  {
    q: "How will quality be tested?",
    a: "[Laboratory testing information to be added]. Appropriate specifications, independent testing and transparent documentation are intended; completed tests will be shown only when verified.",
  },
  {
    q: "Are these medicines?",
    a: "The current offering is educational. The botanical concepts are not advertised as medicines. Any future classification, approved use or regulatory status must be verified before sale.",
  },
  {
    q: "Can products replace medical treatment?",
    a: "No. Educational materials and general wellness products must not replace diagnosis, prescribed treatment or advice from your own clinician.",
  },
  {
    q: "Can pregnant or breastfeeding people use them?",
    a: "No suitability has been established for the concept products. Seek individual advice before using herbs or supplements during pregnancy or breastfeeding. Digital resources provide general education only.",
  },
  {
    q: "How does shipping work?",
    a: "Digital files do not require shipping. Physical shipping locations, fees and timing will be confirmed before physical products launch.",
  },
  {
    q: "How do digital downloads work?",
    a: "After live payments and final files are connected, paid downloads will be linked to confirmed orders. Demo checkout does not unlock a paid guide. Free resources can be downloaded now.",
  },
  {
    q: "What is the refund policy?",
    a: "No payment is collected in the current demo. Final digital refund terms will be confirmed before live checkout. Contact us about duplicate charges or file-access issues once payments launch; applicable consumer rights remain unaffected.",
  },
  {
    q: "How can I contact you?",
    a: "Email nourishandhealbysana@gmail.com or use the contact form. Social profiles and a WhatsApp number will be added only when provided.",
  },
];
export const wellnessDisclaimer =
  "For general education and wellness information only. Not a diagnosis, personalised treatment or substitute for professional care. Products are not intended to diagnose, treat, cure or prevent disease unless a future product is legitimately classified and authorised for such claims.";
