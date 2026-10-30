import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowUpRight, Mail, Check, Download } from "lucide-react";
import {
  articles,
  journalCategories,
  resources,
  faqs,
} from "../../api/data/editorial";
import {
  PageIntro,
  Newsletter,
  TrustRow,
  Faq,
  Disclaimer,
  Sprig,
} from "../components/shared";
import { useContact, useSubscribe } from "../queries/wellness";
export function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT NOURISH & HEAL"
        title="The space between knowing and living well."
        description="Created to bridge complicated health information and everyday wellness—with science, nature and a deeply practical approach."
      />
      <section className="container-nh section-pad story-grid">
        <div>
          <img
            src="/images/founder-desk.png"
            alt="Illustrative science-informed wellness workspace"
          />
          <p className="image-caption">Editorial concept image</p>
        </div>
        <div className="prose-nh">
          <h2>Understand. Nourish. Heal.</h2>
          <p>
            Health information can be complicated. Following it in an ordinary
            life can be harder still. Nourish & Heal was created to make that
            gap smaller.
          </p>
          <p>
            Our starting point is understanding: what a term means, what
            evidence can—and cannot—tell you, and which questions belong with
            your own healthcare team.
          </p>
          <p>
            From there, we focus on nourishment in the broadest sense: food,
            movement, rest, small habits and clear information. Healing is our
            philosophy of care, not a product promise or disease-treatment
            claim.
          </p>
          <p>
            Scientific understanding, practical education, nature-inspired
            curiosity and responsible product development belong together. No
            fear-based marketing. No manufactured certainty.
          </p>
          <Link to="/founder" className="link-underline">
            Meet the founder
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="vision-band">
        <div className="container-nh vision-grid">
          <div>
            <p className="eyebrow text-gold">OUR VISION</p>
            <h2>A trusted wellness ecosystem.</h2>
            <p>
              To build a trusted wellness ecosystem where science, nature and
              practical health education come together to help people make
              better everyday health decisions.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold">OUR MISSION</p>
            <h2>Make wellness simpler.</h2>
            <p>
              To make wellness simpler, more transparent and more accessible
              through evidence-informed education, thoughtfully developed
              products and practical tools for everyday life.
            </p>
          </div>
        </div>
      </section>
      <TrustRow />
      <Newsletter />
    </>
  );
}
export function Founder() {
  return (
    <>
      <PageIntro
        eyebrow="MEET THE FOUNDER"
        title="Dr. Sana Urooj Khan"
        description="Pharm-D | MS Clinical Pharmacology. A science-trained professional with a practical, human-centered approach to wellness education."
      />
      <section className="container-nh section-pad founder-full">
        <div className="founder-portrait-frame">
          <img
            src="/images/dr-sana-portrait.jpg"
            alt="Dr. Sana Urooj Khan, Pharm-D and MS Clinical Pharmacology"
          />
          <p className="eyebrow">DR. SANA UROOJ KHAN</p>
          <p className="portrait-credentials">Pharm-D | MS Clinical Pharmacology</p>
        </div>
        <div className="prose-nh">
          <h2>Professional introduction</h2>
          <p>
            Dr. Sana Urooj Khan brings experience in clinical pharmacology,
            scientific information and medical/scientific publishing to Nourish
            & Heal.
          </p>
          <h2>Qualifications</h2>
          <p>
            <strong>Pharm-D</strong>
            <br />
            <strong>MS Clinical Pharmacology</strong>
          </p>
          <p>
            These qualifications are presented accurately. Dr. Sana is not
            described on this site as an MBBS physician or a medical
            practitioner.
          </p>
          <h2>Why Nourish & Heal?</h2>
          <p>
            The philosophy is simple: make health information easier to
            understand and wellness more practical to follow. Education should
            leave people better informed—not more frightened or dependent on a
            product.
          </p>
          <h2>Experience</h2>
          <p>
            Clinical pharmacology, scientific information and medical/scientific
            publishing.
          </p>
          <p className="placeholder">
            [Detailed roles, institutions and dates to be added by the founder]
          </p>
          <h2>Philosophy</h2>
          <p>
            Understand first. Nourish your everyday. Treat health decisions with
            care. Nature can inspire a product; evidence and safety must guide
            its development.
          </p>
          <h2>Vision & mission</h2>
          <p>
            A trusted, accessible wellness ecosystem where science and nature
            meet practical education. Clear information, responsible products
            and useful everyday tools are the foundation.
          </p>
          <h2>Commitment to evidence-informed wellness</h2>
          <p>
            Claims should be proportionate to evidence. Uncertainty should be
            stated clearly. People should know when information is general, when
            a product is still a concept and when individual medical advice is
            needed.
          </p>
          <h2>Professional profile</h2>
          {[
            "Professional achievements",
            "Certifications",
            "Memberships",
            "Publications",
            "Professional profile links",
          ].map((s) => (
            <p className="placeholder" key={s}>
              [{s} to be added and verified]
            </p>
          ))}
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
export function Quality() {
  const sections = [
    [
      "Our philosophy",
      "Science-informed. Nature-inspired. Transparent. We distinguish intentions from completed work and concepts from commercially available products.",
    ],
    [
      "Ingredient transparency",
      "Final ingredient names, sources, quantities and relevant evidence will be disclosed after formulation and review.",
    ],
    [
      "Product development",
      "The botanical range is at concept stage. Formula, safety review, packaging suitability and regulatory assessment must precede sale.",
    ],
    [
      "Quality testing",
      "Appropriate identity, contamination, stability and other relevant checks must be specified for each final product. No completed tests are claimed here.",
    ],
    ["Manufacturing standards", "[Manufacturing certification to be added]"],
    ["Regulatory compliance", "[Registration number to be added]"],
    ["Certifications", "[Certification to be added]"],
    ["Laboratory testing", "[Laboratory testing information to be added]"],
    [
      "Packaging & storage",
      "Final packaging compatibility, storage conditions and shelf life will be published only after appropriate assessment.",
    ],
  ];
  return (
    <>
      <PageIntro
        eyebrow="QUALITY, SAFETY & TRANSPARENCY"
        title="Trust needs more than a beautiful label."
        description="Clear information about where we are today—and what must be in place before a physical product launches."
      />
      <section className="container-nh section-pad quality-layout">
        <div>
          <img
            src="/images/quality-science.png"
            alt="Illustrative laboratory glassware with botanical infusions"
          />
          <p className="image-caption">
            Editorial concept imagery—not proof of completed product testing.
          </p>
          <div className="quality-status">
            <h3>Current status</h3>
            <p>
              Digital content: planned launch-first collection; final files
              pending review.
            </p>
            <p>
              Botanical range: concepts only, not manufactured, approved or
              commercially available.
            </p>
            <p>No certification or laboratory approval is claimed.</p>
          </div>
        </div>
        <div>
          {sections.map(([title, text]) => (
            <article className="quality-item" key={title}>
              <h2>{title}</h2>
              <p className={text.startsWith("[") ? "placeholder" : ""}>
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <TrustRow />
      <Disclaimer />
    </>
  );
}
export function Journal() {
  const [category, setCategory] = useState("All");
  const list = articles.filter(
    (a) => category === "All" || a.category === category,
  );
  return (
    <>
      <PageIntro
        eyebrow="THE NOURISH & HEAL JOURNAL"
        title="Clarity is a kind of care."
        description="Plain-language education, practical takeaways and references. Draft articles are clearly marked for founder review, not attributed as reviewed medical advice."
      />
      <section className="container-nh section-pad">
        <div className="filter-tabs journal-filters">
          {["All", ...journalCategories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={c === category ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="article-grid">
          {list.map((a, i) => (
            <Link
              to={`/journal/${a.slug}`}
              key={a.slug}
              className="article-card"
            >
              <div className="article-art">
                <Sprig />
                <span>0{i + 1}</span>
              </div>
              <div>
                <p className="eyebrow text-gold">
                  {a.category} · {a.readTime}
                </p>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <span className="link-underline">
                  Read the article
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <div className="editorial-empty">
            <h2>More clarity is on the way.</h2>
            <p>
              No articles in this category yet. We’ll add content after
              appropriate review—not fill the space with invented expertise.
            </p>
            <button
              className="btn btn-ghost"
              onClick={() => setCategory("All")}
            >
              Browse article drafts
            </button>
          </div>
        )}
      </section>
      <Newsletter />
    </>
  );
}
export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const a = articles.find((a) => a.slug === slug);
  if (!a)
    return (
      <PageIntro eyebrow="JOURNAL" title="This article is not available." />
    );
  return (
    <>
      <PageIntro
        eyebrow={`${a.category} · ${a.readTime}`}
        title={a.title}
        description={a.excerpt}
      />
      <article className="container-nh article-body prose-nh">
        <p className="demo-note">
          {a.published} · general education, not individual medical advice.
        </p>
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
        <div className="takeaway-box">
          <h2>What this means for you</h2>
          {a.meansForYou.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
        <h2>Practical takeaways</h2>
        <ul>
          {a.takeaways.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <h2>References & further reading</h2>
        {a.references.map((r) => (
          <p key={r}>
            <a
              href={r}
              target="_blank"
              rel="noreferrer"
              className="reference-link"
            >
              {r}
            </a>
          </p>
        ))}
        <p className="text-sm text-stone">
          Sources are general background references, not evidence for the
          effectiveness of any Nourish & Heal concept product.
        </p>
        <Disclaimer />
        <Link to="/journal" className="link-underline">
          Back to the Journal
          <ArrowUpRight size={16} />
        </Link>
      </article>
    </>
  );
}
export function Resources() {
  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const sub = useSubscribe();
  return (
    <>
      <PageIntro
        eyebrow="FREE WELLNESS RESOURCES"
        title="Small tools. A useful starting point."
        description="Practical, printable templates to notice patterns, prepare questions and build everyday habits. Free to download—email subscription is optional."
      />
      <section className="container-nh section-pad">
        <div className="resources-grid">
          {resources.map((r) => (
            <article key={r.slug}>
              <div className="resource-icon">
                <Download size={25} strokeWidth={1} />
              </div>
              <p className="eyebrow text-gold">FREE · {r.format}</p>
              <h2>{r.title}</h2>
              <p>{r.blurb}</p>
              <button
                onClick={() => {
                  setSelected(r.slug);
                  sub.reset();
                }}
                className="link-underline"
              >
                Get the free resource
                <ArrowUpRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>
      {selected && (
        <div className="resource-modal-backdrop">
          <button
            className="modal-backdrop-button"
            aria-label="Close resource dialog"
            onClick={() => setSelected(null)}
          />
          <dialog
            open
            className="resource-modal"
            aria-modal="true"
            aria-label="Download free resource"
          >
            <button className="modal-close" aria-label="Close">
              ×
            </button>
            <p className="eyebrow text-gold">A LITTLE CLARITY, FOR FREE</p>
            <h2>{resources.find((r) => r.slug === selected)?.title}</h2>
            <p>
              Your printable resource is ready. You can also join the wellness
              community below.
            </p>
            <a
              href={`/downloads/${selected}.pdf`}
              download
              className="btn btn-primary w-full"
            >
              <Download size={17} />
              Download free PDF
            </a>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sub.mutate({
                  email,
                  source: `resource-${selected}`,
                  consent: true,
                });
              }}
            >
              <input
                aria-label="Email address (for community signup)"
                className="field mt-5"
                type="email"
                placeholder="Email address (for community signup)"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="consent">
                <input
                  aria-label="I agree to the stated terms and consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                I’d like wellness emails and agree to the{" "}
                <Link to="/legal/privacy">Privacy Policy</Link>.
              </label>
              <button
                className="btn btn-ghost w-full"
                disabled={!consent || sub.isPending}
              >
                {sub.isPending
                  ? "Joining…"
                  : sub.isSuccess
                    ? "You’re on the list"
                    : "Join the wellness community"}
              </button>
              {sub.isError && (
                <p role="alert">
                  Signup failed. Your free download still works.
                </p>
              )}
            </form>
            <Disclaimer />
          </dialog>
        </div>
      )}
      <Newsletter />
    </>
  );
}
export function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Wellness, with nothing to hide."
      />
      <section className="container-nh section-pad max-w-4xl">
        <Faq items={faqs} />
        <Disclaimer />
      </section>
    </>
  );
}
export function Contact() {
  const contact = useContact();
  return (
    <>
      <PageIntro
        eyebrow="CONTACT NOURISH & HEAL"
        title="Let’s connect."
        description="A question about our educational tools, future launches or a collaboration? We’d love to hear from you."
      />
      <section className="container-nh section-pad contact-grid">
        <div>
          <Mail size={30} strokeWidth={1} />
          <h2>Email us</h2>
          <a
            className="link-underline break-all"
            href="mailto:nourishandhealbysana@gmail.com"
          >
            nourishandhealbysana@gmail.com
          </a>
          <div className="contact-socials">
            {["Instagram", "Facebook", "WhatsApp"].map((s) => (
              <div key={s}>
                <h3>{s}</h3>
                <p className="placeholder">
                  [{s} {s === "WhatsApp" ? "number" : "profile link"} to be
                  added]
                </p>
              </div>
            ))}
          </div>
          <p className="text-stone">
            No phone number or address is listed until verified details are
            provided. Please do not send sensitive medical records through this
            form.
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            contact.mutate({
              name: String(f.get("name")),
              email: String(f.get("email")),
              message: String(f.get("message")),
            });
          }}
        >
          {contact.isSuccess ? (
            <div className="form-success">
              <Check size={30} />
              <h2>Your message has been saved.</h2>
              <p>
                Thank you. It has been stored for the Nourish & Heal team; email
                notification is not yet configured. For a direct reply, use the
                email address above.
              </p>
            </div>
          ) : (
            <>
              <h2>Drop us a note.</h2>
              <label>
                Your name
                <input
                  aria-label="Name"
                  name="name"
                  className="field"
                  required
                  minLength={2}
                />
              </label>
              <label>
                Email address
                <input
                  aria-label="Email"
                  name="email"
                  className="field"
                  required
                  type="email"
                />
              </label>
              <label>
                How can we help?
                <textarea
                  aria-label="Message"
                  name="message"
                  className="field"
                  required
                  minLength={10}
                  rows={6}
                />
              </label>
              <label className="consent">
                <input
                  aria-label="I agree to the stated terms and consent"
                  type="checkbox"
                  required
                />
                I agree to the <Link to="/legal/privacy">Privacy Policy</Link>.
              </label>
              <button className="btn btn-primary" disabled={contact.isPending}>
                {contact.isPending ? "Saving…" : "Send message"}
                <ArrowUpRight size={16} />
              </button>
              {contact.isError && (
                <p role="alert">
                  Could not save your message. Please try again or email us
                  directly.
                </p>
              )}
            </>
          )}
        </form>
      </section>
    </>
  );
}
const legalTitles: Record<string, string> = {
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
  shipping: "Shipping Policy",
  refunds: "Returns & Refund Policy",
  disclaimer: "Wellness Disclaimer",
  "product-safety": "Product Safety Information",
};
const legalContent: Record<string, { h: string; p: string }[]> = {
  privacy: [
    {
      h: "Information we collect",
      p: "We collect the name, email and message you submit through forms, community signup preferences, and account and demo-order information. Cart preferences are stored locally in your browser. Do not submit sensitive medical information.",
    },
    {
      h: "How information is used",
      p: "Information supports account access, requested resources, enquiry handling and order records. Marketing signup requires your consent. Platform analytics may collect usage and device information; confirm the deployed configuration before commercial launch.",
    },
    {
      h: "Your choices",
      p: "Email nourishandhealbysana@gmail.com to request access, correction, deletion or removal from the community list. Automated campaign and unsubscribe tooling will be required before marketing email begins.",
    },
    {
      h: "Storage and service providers",
      p: "The site uses managed database, hosting and authentication infrastructure. [Data retention periods, processor list and applicable jurisdiction to be confirmed before launch]. We do not claim a specific compliance certification.",
    },
  ],
  terms: [
    {
      h: "Using this site",
      p: "This site provides general wellness education, digital product concepts and future botanical product previews. Content is not a substitute for professional medical advice.",
    },
    {
      h: "Demo checkout",
      p: "Current pricing is illustrative. Demo orders are saved without collecting payment, creating a paid purchase entitlement or releasing final guide files. Physical concepts cannot be purchased or pre-ordered.",
    },
    {
      h: "Personal use and intellectual property",
      p: "Released resources are for personal use unless a separate licence is agreed. Do not redistribute, resell or falsely attribute the materials.",
    },
    {
      h: "Before live sales",
      p: "[Seller legal identity, governing law, dispute terms, payment provider and final prices to be confirmed]. Applicable consumer rights are not excluded.",
    },
  ],
  shipping: [
    {
      h: "Digital products",
      p: "Digital resources require no physical shipping. Free PDFs are available directly. Paid delivery will be tied to confirmed orders after live checkout and final files are configured.",
    },
    {
      h: "Physical products",
      p: "All physical products are concepts. No shipping service is offered for them. [Delivery regions, charges, fulfilment times and courier partners to be added before launch].",
    },
  ],
  refunds: [
    {
      h: "Current demo",
      p: "No payment is collected, so there is nothing to refund in the current checkout preview.",
    },
    {
      h: "Digital purchases after launch",
      p: "[Final digital cancellation and refund terms to be confirmed before live payments]. Duplicate charges, defective files and access problems should be reported to nourishandhealbysana@gmail.com. Applicable consumer rights remain unaffected.",
    },
    {
      h: "Physical returns",
      p: "[Return eligibility, time limits, damaged-product process and return address to be added before physical products launch]. No physical orders are currently accepted.",
    },
  ],
  disclaimer: [
    {
      h: "General education only",
      p: "Content provides general wellness information. It does not establish a professional care relationship, diagnose you or provide individual medical advice. Seek advice from your own appropriately qualified healthcare professional.",
    },
    {
      h: "Founder qualifications",
      p: "Dr. Sana Urooj Khan holds a Pharm-D and MS Clinical Pharmacology. She is not represented as an MBBS physician.",
    },
    {
      h: "No treatment claims",
      p: "Products are not intended to diagnose, treat, cure or prevent disease unless a future product is legitimately classified and authorised for such claims. No such authorisation is claimed here.",
    },
    {
      h: "Concepts and evidence",
      p: "Packaging renders are illustrative, not proof of manufacture, safety testing or approval. References in educational articles do not establish effectiveness for our product concepts. Draft articles require founder review.",
    },
  ],
  "product-safety": [
    {
      h: "Concept products are not for use",
      p: "No final dose, ingredients, safety profile, shelf life, storage requirements or suitability has been established for the physical concepts. They cannot be ordered or used.",
    },
    {
      h: "Natural is not automatically safe",
      p: "Herbs and supplements can interact with medicines. Pregnancy, breastfeeding, allergies, age and health conditions require individual advice. Do not stop or change prescribed treatment based on website content.",
    },
    {
      h: "Final information",
      p: "[Ingredients and quantities, allergen information, precautions, age restrictions, storage, batch identification and adverse-event reporting process to be added after appropriate review].",
    },
  ],
};
export function Legal() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <PageIntro
        eyebrow="RESPONSIBLE WELLNESS"
        title={legalTitles[slug] || "Policy not found"}
      />
      <section className="container-nh article-body prose-nh">
        <p className="demo-note">
          Draft policy · final business details and legal review required before
          live commercial launch.
        </p>
        {(legalContent[slug] || []).map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
        <p>
          Questions?{" "}
          <a
            className="link-underline"
            href="mailto:nourishandhealbysana@gmail.com"
          >
            Contact Nourish & Heal
          </a>
          .
        </p>
      </section>
    </>
  );
}
