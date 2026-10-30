import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Leaf,
  Download,
} from "lucide-react";
import { digitalProducts } from "../../api/data/digital";
import { concepts, goals } from "../../api/data/catalogue";
import { articles, faqs } from "../../api/data/editorial";
import {
  SectionHead,
  DigitalCard,
  ConceptCard,
  GoalCard,
  Newsletter,
  TrustRow,
  Faq,
  Sprig,
  EmptyReviews,
} from "../components/shared";
export default function Home() {
  return (
    <>
      <section className="hero paper">
        <div className="container-nh hero-grid">
          <div className="hero-copy">
            <p className="eyebrow text-gold nh-rise">
              SCIENCE-INFORMED. NATURE-INSPIRED.
            </p>
            <h1 className="h-hero nh-rise" style={{ animationDelay: "100ms" }}>
              Nourish your body.
              <br />
              Understand your health.
              <br />
              <em>Live better.</em>
            </h1>
            <p
              className="hero-description nh-rise"
              style={{ animationDelay: "200ms" }}
            >
              Science-informed wellness, practical health education and
              thoughtfully developed products inspired by nature.
            </p>
            <div
              className="hero-buttons nh-rise"
              style={{ animationDelay: "300ms" }}
            >
              <Link to="/wellness" className="btn btn-primary">
                Explore Wellness
                <ArrowRight size={17} />
              </Link>
              <Link to="/founder" className="hero-secondary">
                Meet Dr. Sana
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div
              className="hero-proof nh-rise"
              style={{ animationDelay: "400ms" }}
            >
              <span>
                <FlaskConical size={16} strokeWidth={1.2} />
                Science-informed
              </span>
              <span>
                <Leaf size={16} strokeWidth={1.2} />
                Nature-inspired
              </span>
              <span>
                <Download size={16} strokeWidth={1.2} />
                Digital-first wellness
              </span>
            </div>
          </div>
          <div className="hero-visual nh-fade">
            <img
              src="/images/hero-still-life.png"
              alt="Botanical ingredients, glass bottles and laboratory glassware in a warm ivory editorial still life"
              fetchPriority="high"
            />
            <div className="hero-image-note">
              BOTANICAL WELLNESS, THOUGHTFULLY EXPLORED
            </div>
            <span className="hero-concept">
              Editorial concept imagery · physical products coming soon
            </span>
          </div>
        </div>
      </section>
      <div className="brand-ticker">
        <div className="nh-marquee">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              UNDERSTAND YOUR HEALTH <i /> NOURISH YOUR EVERYDAY <i /> WELLNESS,
              WITHOUT THE NOISE <i /> SCIENCE MEETS NATURE <i />
            </span>
          ))}
        </div>
      </div>
      <section className="section-pad container-nh">
        <SectionHead
          eyebrow="YOUR JOURNEY. YOUR STARTING POINT."
          title={
            <>
              Start with what you
              <br />
              <em>want to improve.</em>
            </>
          }
          description="Wellness isn’t one-size-fits-all. Find your starting point, then build from there."
          link="Explore all wellness goals"
          href="/wellness"
        />
        <div className="goals-grid">
          {goals.slice(0, 5).map((g) => (
            <GoalCard key={g.key} goal={g} />
          ))}
        </div>
        <div className="goal-secondary-links">
          {goals.slice(5).map((g) => (
            <Link to={`/wellness/${g.key}`} key={g.key}>
              {g.title}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>
      </section>
      <section className="collection-section section-pad">
        <div className="container-nh">
          <SectionHead
            eyebrow="SMALL STEPS. LASTING FOUNDATIONS."
            title={
              <>
                The Nourish & Heal
                <br />
                <em>Collection.</em>
              </>
            }
            description="Practical tools for a more informed, intentional everyday. Start with our digital wellness companions."
            link="Shop the collection"
            href="/shop"
          />
          <div className="collection-tabs">
            <Link to="/shop" className="active">
              Digital Wellness<span>LAUNCH-FIRST</span>
            </Link>
            <Link to="/coming-soon">
              Herbal Wellness<span>COMING SOON</span>
            </Link>
            <Link to="/coming-soon">
              Beauty & Botanical Care<span>COMING SOON</span>
            </Link>
            <Link to="/bundles">Wellness Bundles</Link>
          </div>
          <div className="products-grid home-products">
            {digitalProducts.slice(0, 4).map((p) => (
              <DigitalCard product={p} key={p.slug} />
            ))}
          </div>
          <p className="collection-footnote">
            Illustrative prices · checkout is a demo until payment and final
            files are connected.
          </p>
        </div>
      </section>
      <section className="founder-section section-pad container-nh">
        <div className="founder-visual founder-visual-with-photo">
          <img
            src="/images/dr-sana-portrait.jpg"
            alt="Dr. Sana Urooj Khan, founder of Nourish & Heal"
            loading="lazy"
          />
          <div className="founder-quote">
            “Making health information easier to understand—and wellness more
            practical to follow.”
          </div>
        </div>
        <div className="founder-copy">
          <p className="eyebrow text-gold mb-5">
            A SCIENTIFIC MIND. A HUMAN APPROACH.
          </p>
          <h2 className="h-section">Meet Dr. Sana.</h2>
          <h3>Dr. Sana Urooj Khan</h3>
          <p className="founder-credentials">
            Pharm-D <span /> MS Clinical Pharmacology
          </p>
          <p>
            Nourish & Heal was born from a simple belief: you deserve to
            understand your health, not feel overwhelmed by it.
          </p>
          <p>
            With a background in clinical pharmacology, scientific information
            and medical/scientific publishing, Dr. Sana brings a thoughtful,
            evidence-informed perspective to everyday wellness.
          </p>
          <p>
            Not quick fixes. Not miracle promises. Just clear education,
            responsible choices and practical support.
          </p>
          <Link to="/founder" className="link-underline mt-5">
            Read my story
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="future-section section-pad">
        <div className="container-nh">
          <SectionHead
            eyebrow="ROOTED IN NATURE. DEVELOPED WITH INTENTION."
            title={
              <>
                A glimpse of
                <br />
                <em>what’s growing.</em>
              </>
            }
            description="Our future botanical wellness collection. Thoughtful concepts today, transparent development at every step."
            link="Discover what’s coming"
            href="/coming-soon"
          />
          <div className="future-grid">
            {concepts.slice(0, 3).map((p) => (
              <ConceptCard product={p} key={p.slug} />
            ))}
          </div>
          <div className="future-disclaimer">
            <Leaf size={18} strokeWidth={1.2} />
            <p>
              Concept products only. Not manufactured, approved or available for
              purchase. Final formulas, safety information and quality
              documentation will be shared before launch.
            </p>
          </div>
        </div>
      </section>
      <TrustRow />
      <section className="section-pad container-nh journal-home">
        <SectionHead
          eyebrow="CLARITY IS A KIND OF CARE."
          title={
            <>
              The Nourish & Heal
              <br />
              <em>Journal.</em>
            </>
          }
          description="Plain-language explanations. Practical takeaways. A little less noise around your health."
          link="Visit the Journal"
          href="/journal"
        />
        <div className="journal-home-grid">
          <Link to={`/journal/${articles[0].slug}`} className="journal-feature">
            <img
              src="/images/journal-editorial.png"
              alt="Herbal tea, textured paper and botanical ingredients"
              loading="lazy"
            />
            <div>
              <p className="eyebrow text-gold">
                {articles[0].category} · {articles[0].readTime}
              </p>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].excerpt}</p>
              <span className="link-underline">
                Read the article
                <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
          <div className="journal-list">
            {articles.slice(1, 4).map((a, i) => (
              <Link to={`/journal/${a.slug}`} key={a.slug}>
                <span className="journal-number">0{i + 2}</span>
                <div>
                  <p className="eyebrow text-stone">
                    {a.category} · {a.readTime}
                  </p>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="resource-band">
        <div className="container-nh">
          <Sprig />
          <div>
            <p className="eyebrow text-gold mb-3">
              SOMETHING SMALL. SOMETHING USEFUL.
            </p>
            <h2 className="h-section">
              Good habits start with
              <br />
              the right little tools.
            </h2>
            <p>
              Free trackers, checklists and practical resources for your
              everyday wellness.
            </p>
          </div>
          <Link to="/resources" className="btn btn-ghost">
            Explore free resources
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section-pad container-nh">
        <div className="home-faq">
          <div>
            <p className="eyebrow text-gold mb-5">
              A FEW THINGS YOU MIGHT BE WONDERING
            </p>
            <h2 className="h-section">
              Wellness, with
              <br />
              <em>nothing to hide.</em>
            </h2>
            <Link to="/faq" className="link-underline mt-7">
              View all questions
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <Faq items={faqs.slice(0, 4)} />
        </div>
        <EmptyReviews />
      </section>
      <Newsletter />
    </>
  );
}
