import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  ArrowRight,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Heart,
  Eye,
  Download,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { useSubscribe } from "../queries/wellness";
import { useCart } from "./cart";
import type {
  DigitalProduct,
  ConceptProduct,
  Goal,
} from "../../api/data/types";
import { wellnessDisclaimer } from "../../api/data/editorial";
export const accentColors: Record<string, string> = {
  sage: "#94ad89",
  peach: "#d4a284",
  blush: "#c88f88",
  dusty: "#7794a5",
  clay: "#b77f5c",
  gold: "#b69557",
  forest: "#365443",
};
export const money = (n: number) => `PKR ${n.toLocaleString()}`;
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M74 190C69 143 91 103 100 34M78 159L38 133M82 137l38-22M87 109L48 85M94 78l34-23" />
        <path d="M38 133C13 137 10 109 9 102c29-1 37 13 29 31Zm82-18c-8-23 17-32 28-33 1 25-10 39-28 33ZM48 85C20 87 19 62 20 54c24 2 35 12 28 31Zm80-30c-8-22 13-37 24-40 6 26-2 42-24 40ZM100 34C89 22 100 8 112 2c5 19 2 30-12 32Z" />
      </g>
    </svg>
  );
}
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand-lockup ${light ? "brand-light" : ""}`}
      aria-label="Nourish and Heal home"
    >
      <img src="/images/brand-mark.png" alt="" />
      <span>
        <span className="brand-title">
          Nourish<span className="brand-amp">&</span>Heal
        </span>
        <span className="brand-sub">WELLNESS · LIFESTYLE · DR. SANA</span>
      </span>
    </Link>
  );
}
export function SectionHead({
  eyebrow,
  title,
  description,
  link,
  href,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  link?: string;
  href?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <div>
        <p className="eyebrow text-gold mb-4">{eyebrow}</p>
        <h2 className="h-section">{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {link && href && (
        <Link to={href} className="link-underline">
          {link}
          <ArrowUpRight size={16} />
        </Link>
      )}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-intro paper">
      <div className="container-nh">
        <p className="eyebrow text-gold mb-5">{eyebrow}</p>
        <h1 className="h-hero max-w-4xl">{title}</h1>
        {description && <p className="lede max-w-2xl mt-6">{description}</p>}
      </div>
      <Sprig className="intro-sprig" />
    </section>
  );
}
export function GuideCover({
  product,
  compact = false,
}: {
  product: DigitalProduct;
  compact?: boolean;
}) {
  const color = accentColors[product.accent];
  return (
    <div
      className={`guide-scene ${compact ? "compact" : ""}`}
      style={{ "--cover-accent": color } as React.CSSProperties}
    >
      <div className="guide-paper behind" />
      <div className="guide-paper front">
        <div className="cover-top">
          NOURISH & HEAL<span>BY DR. SANA</span>
        </div>
        <div className="cover-line" />
        <div className="cover-category">{product.coverLabel}</div>
        <h3>{product.title}</h3>
        <Sprig className="cover-sprig" />
        <div className="cover-bottom">
          UNDERSTAND. NOURISH. HEAL.<span>A practical wellness companion</span>
        </div>
      </div>
      <span className="guide-scene-label">DIGITAL WELLNESS COLLECTION</span>
    </div>
  );
}
export function DigitalCard({ product }: { product: DigitalProduct }) {
  const cart = useCart();
  return (
    <article className="product-card">
      <Link to={`/shop/digital/${product.slug}`} className="product-image">
        <GuideCover product={product} />
        <span className="product-tag">
          <Download size={11} /> DIGITAL {product.kind.toUpperCase()}
        </span>
      </Link>
      <div className="product-content">
        <p className="eyebrow text-stone mb-2">{product.coverLabel}</p>
        <Link to={`/shop/digital/${product.slug}`}>
          <h3 className="h-card">{product.title}</h3>
        </Link>
        <p className="product-desc">{product.tagline}</p>
        <div className="product-bottom">
          <span>
            {money(product.price)}
            <small>Illustrative price</small>
          </span>
          <button
            className="circle-button"
            onClick={() => cart.add(product.slug)}
            aria-label={`Add ${product.title} to cart`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
export function ConceptCard({ product }: { product: ConceptProduct }) {
  return (
    <article className="product-card">
      <Link to={`/coming-soon/${product.slug}`} className="product-image">
        <img
          src={product.image}
          alt={`${product.name} illustrative botanical bottle concept`}
          loading="lazy"
        />
        <span className="product-tag">COMING SOON · CONCEPT</span>
      </Link>
      <div className="product-content">
        <p className="eyebrow text-stone mb-2">{product.descriptor}</p>
        <h3 className="h-card">
          <Link to={`/coming-soon/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-desc">
          Not manufactured or available for purchase.
        </p>
        <Link to={`/coming-soon/${product.slug}`} className="link-underline">
          Explore the concept
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
export function GoalCard({ goal }: { goal: Goal }) {
  return (
    <Link
      to={`/wellness/${goal.key}`}
      className="goal-card"
      style={
        { "--goal-accent": accentColors[goal.accent] } as React.CSSProperties
      }
    >
      <div className="goal-art">
        <Sprig />
        <span className="goal-dot" />
      </div>
      <h3>{goal.title}</h3>
      <p>{goal.short}</p>
      <ArrowUpRight className="goal-arrow" size={20} />
    </Link>
  );
}
export function TrustRow() {
  const items = [
    {
      icon: FlaskConical,
      title: "Science-Informed",
      text: "Clear information. Thoughtful choices.",
    },
    {
      icon: Leaf,
      title: "Nature-Inspired",
      text: "Botanical curiosity, without the hype.",
    },
    {
      icon: Eye,
      title: "Transparent",
      text: "Honest about what we know—and don’t.",
    },
    {
      icon: ShieldCheck,
      title: "Quality-Focused",
      text: "Standards before shortcuts.",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      text: "Built for real, everyday lives.",
    },
  ];
  return (
    <div className="trust-row container-nh">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <Icon strokeWidth={1.1} size={27} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
export function Newsletter({
  title = "Your health journey starts here.",
  source = "community",
  small = false,
}: {
  title?: string;
  source?: string;
  small?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const sub = useSubscribe();
  return (
    <section className={`newsletter ${small ? "small" : ""}`}>
      <Sprig className="newsletter-sprig" />
      <div className="container-nh newsletter-inner">
        <div>
          <p className="eyebrow mb-5">THE NOURISH & HEAL COMMUNITY</p>
          <h2 className="h-section">{title}</h2>
          <p>
            Practical wellness education, new resources and first access to our
            future launches. A little clarity, delivered.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sub.mutate({ email, source, consent: true });
          }}
        >
          {sub.isSuccess ? (
            <div className="signup-success">
              <Check />
              You’re on the list. Thank you for joining.
            </div>
          ) : (
            <>
              <div className="signup-fields">
                <label className="sr-only" htmlFor={`email-${source}`}>
                  Email address
                </label>
                <input
                  aria-label="Your email address"
                  id={`email-${source}`}
                  className="field"
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" disabled={!consent || sub.isPending}>
                  {sub.isPending ? (
                    "Joining…"
                  ) : (
                    <>
                      Join Nourish & Heal
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
              <label className="consent">
                <input
                  aria-label="I agree to the stated terms and consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                I agree to receive wellness emails. See our{" "}
                <Link to="/legal/privacy">Privacy Policy</Link>.
              </label>
              {sub.isError && (
                <p role="alert">Could not save your email. Please try again.</p>
              )}
            </>
          )}
        </form>
      </div>
    </section>
  );
}
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <Plus className="faq-plus" size={18} />
            <Minus className="faq-minus" size={18} />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
export function Disclaimer() {
  return (
    <div className="disclaimer">
      <ShieldCheck size={19} />
      <p>{wellnessDisclaimer}</p>
    </div>
  );
}
export function EmptyReviews() {
  return (
    <div className="empty-reviews">
      <p className="eyebrow text-gold mb-3">REAL PEOPLE. REAL EXPERIENCES.</p>
      <h3 className="h-card">Trust is earned. Not invented.</h3>
      <p>
        There are no customer reviews yet. Only genuine experiences will appear
        here after launch. Verified-purchase labels will be used only when
        supported by order records.
      </p>
    </div>
  );
}
