import { useState } from "react";
import { Link, useParams } from "wouter";
import {
  Search,
  ArrowRight,
  Download,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { digitalProducts, getDigital } from "../../api/data/digital";
import { concepts, getConcept, goals, bundles } from "../../api/data/catalogue";
import {
  DigitalCard,
  ConceptCard,
  PageIntro,
  SectionHead,
  GuideCover,
  Faq,
  Disclaimer,
  Newsletter,
  EmptyReviews,
  money,
} from "../components/shared";
import { useCart } from "../components/cart";
export function Shop() {
  const [filter, setFilter] = useState("All digital");
  const [search, setSearch] = useState("");
  const filtered = digitalProducts.filter(
    (p) =>
      (filter === "All digital" ||
        p.kind === filter ||
        (filter === "Educational Resources" && p.kind === "Guide")) &&
      p.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <PageIntro
        eyebrow="THE NOURISH & HEAL COLLECTION"
        title="A little knowledge. A better everyday."
        description="Digital guides, planners and trackers—thoughtful tools for a more informed wellness routine."
      />
      <section className="container-nh section-pad">
        <div className="shop-toolbar">
          <div className="filter-tabs">
            {[
              "All digital",
              "Guide",
              "Tracker",
              "Planner",
              "Programme",
              "Educational Resources",
            ].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Search size={17} />
            <input
              aria-label="Find your wellness tool"
              placeholder="Find your wellness tool"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
        <div className="demo-note mb-8">
          Digital products are the launch-first range. Prices are illustrative;
          checkout does not take payment or release final paid files.
        </div>
        <div className="products-grid">
          {filtered.map((p) => (
            <DigitalCard key={p.slug} product={p} />
          ))}
        </div>
        {!filtered.length && (
          <p className="py-12">
            No products match that search. Try a broader term.
          </p>
        )}
        <div className="shop-coming-links">
          <Link to="/coming-soon">
            Herbal Wellness <span>COMING SOON</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link to="/coming-soon">
            Beauty & Botanical Care <span>COMING SOON</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link to="/bundles">
            Wellness Bundles
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const p = getDigital(slug);
  const cart = useCart();
  if (!p)
    return (
      <PageIntro
        eyebrow="PRODUCT NOT FOUND"
        title="Let’s find your next step."
      />
    );
  return (
    <>
      <section className="container-nh product-detail">
        <div>
          <p className="breadcrumb">
            <Link to="/shop">Collection</Link> / Digital wellness
          </p>
          <GuideCover product={p} />
          <p className="image-caption">
            Cover concept · final product files pending release
          </p>
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow text-gold mb-5">
            {p.coverLabel} · {p.kind}
          </p>
          <h1>{p.title}</h1>
          <p className="lede mt-6">{p.tagline}</p>
          <div className="product-format">
            <span>
              <Download size={17} />
              {p.formats}
            </span>
            <span>Planned scope: {p.pages}</span>
          </div>
          <p className="detail-price">
            {money(p.price)}
            <span>Illustrative launch price</span>
          </p>
          <button
            className="btn btn-primary w-full"
            onClick={() => cart.add(p.slug)}
          >
            Buy Now — preview checkout
            <ArrowRight size={17} />
          </button>
          <p className="purchase-note">
            Instant Digital Download after launch. Current checkout is a demo;
            no payment is taken and final paid files are not yet released.
          </p>
          <div className="product-small-trust">
            <span>
              <Check size={15} />
              Thoughtful education
            </span>
            <span>
              <Check size={15} />
              No miracle promises
            </span>
          </div>
        </div>
      </section>
      <section className="container-nh section-pad detail-body">
        <div>
          <SectionHead
            eyebrow="WHY THIS GUIDE?"
            title="Clarity before change."
          />
          {p.intro.map((s) => (
            <p key={s}>{s}</p>
          ))}
          <h2>What you’ll take away</h2>
          <ul>
            {p.benefits.map((s) => (
              <li key={s}>
                <Check size={17} />
                {s}
              </li>
            ))}
          </ul>
          <h2>What’s included</h2>
          <p className="demo-note">
            The following is the planned product scope. Final content requires
            founder approval before sale.
          </p>
          <ul>
            {p.includes.map((s) => (
              <li key={s}>
                <span className="list-dot" />
                {s}
              </li>
            ))}
          </ul>
          <h2>Who it’s for</h2>
          <ul>
            {p.whoFor.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h2>What to know</h2>
          <ul>
            {p.notFor.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h2>Frequently asked questions</h2>
          <Faq items={p.faq} />
          <EmptyReviews />
          <Disclaimer />
        </div>
        <aside className="detail-aside">
          <h3>Your next small step.</h3>
          <p>
            A practical companion for everyday wellness. Take what helps, go at
            your own pace, and keep your healthcare team involved.
          </p>
          <Link to="/quality" className="link-underline">
            Quality & transparency
            <ArrowUpRight size={15} />
          </Link>
          <Link to="/bundles" className="link-underline">
            Explore bundle suggestions
            <ArrowUpRight size={15} />
          </Link>
        </aside>
      </section>
      <section className="container-nh pb-24">
        <SectionHead
          eyebrow="KEEP BUILDING YOUR FOUNDATIONS"
          title="Thoughtfully paired."
        />
        <div className="products-grid">
          {digitalProducts
            .filter(
              (x) =>
                x.slug !== p.slug && x.goals.some((g) => p.goals.includes(g)),
            )
            .slice(0, 3)
            .map((x) => (
              <DigitalCard key={x.slug} product={x} />
            ))}
        </div>
      </section>
    </>
  );
}
export function ComingSoon() {
  return (
    <>
      <PageIntro
        eyebrow="THE FUTURE BOTANICAL COLLECTION"
        title="Something thoughtful is growing."
        description="Seven botanical wellness and packaging concepts. Not manufactured, approved or commercially available. No pre-orders, no promised launch dates."
      />
      <section className="container-nh section-pad">
        <div className="products-grid">
          {concepts.map((p) => (
            <ConceptCard key={p.slug} product={p} />
          ))}
        </div>
        <Disclaimer />
      </section>
      <Newsletter
        title="Be the first to hear what’s growing."
        source="concept-interest"
      />
    </>
  );
}
export function ConceptDetail() {
  const { slug } = useParams<{ slug: string }>();
  const p = getConcept(slug);
  if (!p)
    return (
      <PageIntro eyebrow="CONCEPT NOT FOUND" title="Explore what’s growing." />
    );
  return (
    <>
      <section className="container-nh product-detail">
        <div>
          <p className="breadcrumb">
            <Link to="/coming-soon">Coming soon</Link> / Botanical collection
          </p>
          <div className="concept-detail-image">
            <img src={p.image} alt={`${p.name} packaging concept`} />
            <span>COMING SOON · CONCEPT PRODUCT</span>
          </div>
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow text-gold mb-5">{p.descriptor}</p>
          <h1>{p.name}</h1>
          <p className="lede mt-6">{p.positioning}</p>
          <div className="concept-status">COMING SOON</div>
          <p>{p.labelNote}</p>
          <Link to="#notify" className="btn btn-primary mt-6">
            Join the interest list
            <ArrowRight size={17} />
          </Link>
          <p className="purchase-note">
            Not an order or pre-order. Joining does not guarantee availability.
          </p>
        </div>
      </section>
      <section className="container-nh section-pad detail-body">
        <div>
          <h2>Why this formula?</h2>
          {p.why.map((s) => (
            <p key={s}>{s}</p>
          ))}
          <h2>What’s inside?</h2>
          <p>
            No ingredients or quantities are confirmed. Botanical illustrations
            are design inspiration only.
          </p>
          <div className="ingredient-grid">
            {p.ingredients.map((i) => (
              <div key={i.name}>
                <h3>{i.name}</h3>
                <p>{i.source}</p>
                <p>{i.purpose}</p>
                <small>{i.evidence}</small>
              </div>
            ))}
          </div>
          <h2>How it fits into your routine</h2>
          <div className="routine-grid">
            {p.routine.map((r, i) => (
              <div key={r.step}>
                <span>0{i + 1}</span>
                <h3>{r.step}</h3>
                <p>{r.detail}</p>
              </div>
            ))}
          </div>
          <h2>Who is it for?</h2>
          {p.whoFor.map((s) => (
            <p key={s}>{s}</p>
          ))}
          <h2>What to know</h2>
          <ul>
            {p.whatToKnow.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h2>Quality & transparency</h2>
          <div className="transparency-table">
            {p.transparency.map((t) => (
              <div key={t.label}>
                <strong>{t.label}</strong>
                <span className={t.placeholder ? "placeholder" : ""}>
                  {t.value}
                </span>
              </div>
            ))}
          </div>
          <h2>Frequently asked questions</h2>
          <Faq items={p.faq} />
          <EmptyReviews />
          <Disclaimer />
        </div>
        <aside className="detail-aside">
          <h3>Education first.</h3>
          <p>
            You do not need to wait for a bottle to begin understanding your
            wellness.
          </p>
          <Link to="/shop" className="link-underline">
            Explore digital tools
            <ArrowUpRight size={16} />
          </Link>
          <Link to="/bundles" className="link-underline">
            Future bundle suggestions
            <ArrowUpRight size={16} />
          </Link>
        </aside>
      </section>
      <section className="container-nh pb-24">
        <SectionHead
          eyebrow="A PRACTICAL STARTING POINT"
          title="Explore the related guides."
        />
        <div className="products-grid">
          {p.relatedDigital.map((s) => {
            const d = getDigital(s);
            return d && <DigitalCard key={s} product={d} />;
          })}
        </div>
      </section>
      <div id="notify">
        <Newsletter title="Follow this concept’s journey." source={p.slug} />
      </div>
    </>
  );
}
export function Wellness() {
  const { slug } = useParams<{ slug?: string }>();
  const g = goals.find((g) => g.key === slug);
  return (
    <>
      <PageIntro
        eyebrow="SHOP BY GOAL"
        title={g ? g.title : "Start with you. Build from there."}
        description={
          g
            ? g.short
            : "A connected wellness ecosystem: education, practical tools and a thoughtful future botanical collection."
        }
      />
      <section className="container-nh section-pad">
        {g ? (
          <>
            <div className="intro-prose">
              {g.intro.map((s) => (
                <p key={s}>{s}</p>
              ))}
              <ul>
                {g.learn.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <SectionHead
              eyebrow="EDUCATION FIRST"
              title="Your practical starting points."
            />
            <div className="products-grid">
              {g.digital.map((s) => {
                const p = getDigital(s);
                return p && <DigitalCard key={s} product={p} />;
              })}
            </div>
            {g.concepts.length > 0 && (
              <div className="mt-20">
                <SectionHead
                  eyebrow="FUTURE BOTANICAL WELLNESS"
                  title="Concepts for this pathway."
                />
                <div className="products-grid">
                  {g.concepts.map((s) => {
                    const p = getConcept(s);
                    return p && <ConceptCard key={s} product={p} />;
                  })}
                </div>
              </div>
            )}
            <Disclaimer />
          </>
        ) : (
          <div className="wellness-goals-grid">
            {goals.map((goal) => (
              <Link to={`/wellness/${goal.key}`} key={goal.key}>
                <p className="eyebrow text-gold">YOUR WELLNESS PATHWAY</p>
                <h2>{goal.title}</h2>
                <p>{goal.short}</p>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        )}
      </section>
      <Newsletter />
    </>
  );
}
export function Bundles() {
  const cart = useCart();
  return (
    <>
      <PageIntro
        eyebrow="THOUGHTFULLY PAIRED"
        title="Better foundations, together."
        description="Connected tools and future botanical concepts. Physical-product bundles are coming soon—not available to order."
      />
      <section className="container-nh section-pad">
        <div className="bundle-grid">
          {bundles.map((b) => (
            <article key={b.slug}>
              <p className="eyebrow text-gold">
                {b.status === "available"
                  ? "DIGITAL BUNDLE · PREVIEW"
                  : "COMING SOON · CONCEPT BUNDLE"}
              </p>
              <h2>{b.title}</h2>
              <p>{b.tagline}</p>
              <ul>
                {b.items.map((i) => (
                  <li key={i.label}>
                    <Check size={15} />
                    <Link
                      to={
                        i.type === "digital"
                          ? `/shop/digital/${i.slug}`
                          : `/coming-soon/${i.slug}`
                      }
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="bundle-note">{b.note}</p>
              {b.status === "available" ? (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    b.items.forEach((i) => i.slug && cart.add(i.slug))
                  }
                >
                  Add digital tools to bag
                  <ArrowRight size={16} />
                </button>
              ) : (
                <Link to="/coming-soon" className="link-underline">
                  Explore the concepts
                  <ArrowUpRight size={16} />
                </Link>
              )}
              {b.status === "available" && (
                <small>
                  Individual illustrative prices apply. Bundle discounts
                  activate after pricing is finalised.
                </small>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
