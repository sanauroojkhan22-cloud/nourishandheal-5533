import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  House,
  UserRound,
  Mail,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";
import { Logo, money } from "./shared";
import { Seo } from "./seo";
import { useCart } from "./cart";
import { getDigital } from "../../api/data/digital";
import { authClient } from "../lib/auth";
const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Wellness", "/wellness"],
  ["Shop", "/shop"],
  ["Coming Soon", "/coming-soon"],
  ["Journal", "/journal"],
  ["Resources", "/resources"],
  ["Quality", "/quality"],
  ["Contact", "/contact"],
];
export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menu, setMenu] = useState(false);
  const cart = useCart();
  const count = cart.items.reduce((s, i) => s + i.quantity, 0);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
  }, [location]);
  useEffect(() => {
    void authClient.managedAuth.handleRedirect();
  }, []);
  useEffect(() => {
    document.body.style.overflow = menu || cart.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, cart.open]);
  return (
    <>
      <Seo />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span>Science-informed wellness. Inspired by nature.</span>
        <Link to="/shop">
          Explore the digital collection
          <ArrowRight size={12} />
        </Link>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, url]) => (
              <Link
                key={url}
                to={url}
                className={
                  (url === "/" ? location === "/" : location.startsWith(url))
                    ? "active"
                    : ""
                }
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link to="/shop" className="header-shop">
              Shop Now
              <ArrowUp />
            </Link>
            <Link
              to="/account"
              className="account-icon"
              aria-label="Customer account"
            >
              <UserRound size={19} />
            </Link>
            <button
              onClick={() => cart.setOpen(true)}
              className="bag-button"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag size={21} />
              {count > 0 && <span>{count}</span>}
            </button>
            <button
              className="menu-button"
              onClick={() => setMenu(true)}
              aria-label="Open navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      {menu && (
        <div className="mobile-menu">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button onClick={() => setMenu(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          {nav.map(([label, url]) => (
            <Link key={url} to={url}>
              {label}
              <ArrowRight size={18} />
            </Link>
          ))}
          <Link to="/account">
            My account
            <UserRound size={18} />
          </Link>
          <p className="eyebrow text-gold mt-8">UNDERSTAND. NOURISH. HEAL.</p>
        </div>
      )}
      <main id="main" key={location} className="nh-fade">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container-nh">
          <div className="footer-top">
            <div>
              <Logo light />
              <p>
                Science-informed wellness.
                <br />
                Inspired by nature.
                <br />
                Made for everyday life.
              </p>
              <a
                href="mailto:nourishandhealbysana@gmail.com"
                className="footer-mail"
              >
                nourishandhealbysana@gmail.com
              </a>
            </div>
            <div>
              <h3>Explore</h3>
              {[
                ["Our story", "/about"],
                ["Meet Dr. Sana", "/founder"],
                ["Shop by goal", "/wellness"],
                ["Digital collection", "/shop"],
                ["Coming soon", "/coming-soon"],
                ["Wellness bundles", "/bundles"],
              ].map(([l, u]) => (
                <Link to={u} key={u}>
                  {l}
                </Link>
              ))}
            </div>
            <div>
              <h3>Learn & connect</h3>
              {[
                ["The Journal", "/journal"],
                ["Free resources", "/resources"],
                ["Quality & transparency", "/quality"],
                ["Frequently asked questions", "/faq"],
                ["Contact us", "/contact"],
                ["My account", "/account"],
              ].map(([l, u]) => (
                <Link to={u} key={u}>
                  {l}
                </Link>
              ))}
            </div>
            <div className="footer-note">
              <h3>A note on wellness</h3>
              <p>
                Educational content is not medical advice. Our founder holds a
                Pharm-D and MS Clinical Pharmacology. Physical products shown
                are concepts, not commercially available products.
              </p>
              <Link to="/legal/disclaimer">
                Read our disclaimer
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="footer-legal">
            {[
              ["Privacy", "privacy"],
              ["Terms", "terms"],
              ["Shipping", "shipping"],
              ["Returns & refunds", "refunds"],
              ["Disclaimer", "disclaimer"],
              ["Product safety", "product-safety"],
            ].map(([l, u]) => (
              <Link to={`/legal/${u}`} key={u}>
                {l}
              </Link>
            ))}
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Nourish & Heal by Dr. Sana.
            </span>
            <span>Understand. Nourish. Heal.</span>
            <Link to="/contact">
              Instagram · Facebook · WhatsApp — details pending
            </Link>
          </div>
        </div>
      </footer>
      <a
        href="mailto:nourishandhealbysana@gmail.com"
        className="contact-float"
        aria-label="Email Nourish and Heal"
      >
        <Mail size={20} />
      </a>
      <nav className="mobile-tabs" aria-label="Mobile navigation">
        <Link to="/">
          <House size={20} />
          Home
        </Link>
        <Link to="/shop">
          <ShoppingBag size={20} />
          Shop
        </Link>
        <Link to="/journal">
          <BookOpen size={20} />
          Learn
        </Link>
        <Link to="/account">
          <UserRound size={20} />
          Account
        </Link>
      </nav>
      {cart.open && (
        <div className="drawer-overlay">
          <button
            className="modal-backdrop-button"
            aria-label="Close cart dialog"
            onClick={() => cart.setOpen(false)}
          />
          <dialog
            open
            className="cart-drawer"
            aria-modal="true"
            aria-label="Your cart"
          >
            <div className="drawer-header">
              <h2>
                Your wellness bag <small>({count})</small>
              </h2>
              <button
                onClick={() => cart.setOpen(false)}
                aria-label="Close cart"
              >
                <X />
              </button>
            </div>
            <p className="demo-note">
              Preview checkout · no payments collected
            </p>
            {cart.items.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={40} strokeWidth={1} />
                <h3>Your next step starts here.</h3>
                <p>Explore practical guides and everyday wellness tools.</p>
                <Link
                  to="/shop"
                  onClick={() => cart.setOpen(false)}
                  className="btn btn-primary"
                >
                  Explore the collection
                </Link>
              </div>
            ) : (
              <>
                <div className="drawer-items">
                  {cart.items.map((i) => {
                    const p = getDigital(i.slug);
                    if (!p) return null;
                    return (
                      <div className="cart-item" key={i.slug}>
                        <div>
                          <h3>{p.title}</h3>
                          <p>{money(p.price)}</p>
                          <div className="quantity">
                            <button
                              onClick={() =>
                                cart.change(i.slug, i.quantity - 1)
                              }
                              aria-label={`Decrease ${p.title}`}
                            >
                              <Minus size={13} />
                            </button>
                            {i.quantity}
                            <button
                              onClick={() =>
                                cart.change(i.slug, i.quantity + 1)
                              }
                              aria-label={`Increase ${p.title}`}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => cart.change(i.slug, 0)}
                          aria-label={`Remove ${p.title}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="drawer-bottom">
                  <div className="flex justify-between mb-4">
                    <span>Subtotal</span>
                    <strong>
                      {money(
                        cart.items.reduce(
                          (s, i) =>
                            s + (getDigital(i.slug)?.price || 0) * i.quantity,
                          0,
                        ),
                      )}
                    </strong>
                  </div>
                  <Link
                    to="/checkout"
                    onClick={() => cart.setOpen(false)}
                    className="btn btn-primary w-full"
                  >
                    Continue to demo checkout
                    <ArrowRight size={17} />
                  </Link>
                  <p>
                    No shipping needed. Final downloads release after live
                    payment integration.
                  </p>
                </div>
              </>
            )}
          </dialog>
        </div>
      )}
    </>
  );
}
function ArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 10 10 2M2 2h8v8" stroke="currentColor" />
    </svg>
  );
}
