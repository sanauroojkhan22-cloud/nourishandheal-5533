import { useState } from "react";
import { Link, useLocation, useParams } from "wouter";
import {
  ArrowRight,
  Check,
  ShoppingBag,
  LockKeyhole,
  Plus,
  Minus,
} from "lucide-react";
import { useCart } from "../components/cart";
import { getDigital } from "../../api/data/digital";
import { PageIntro, money } from "../components/shared";
import { useCreateOrder, useHistory } from "../queries/wellness";
import { authClient } from "../lib/auth";
export function CartPage() {
  const cart = useCart();
  const total = cart.items.reduce(
    (s, i) => s + (getDigital(i.slug)?.price || 0) * i.quantity,
    0,
  );
  return (
    <>
      <PageIntro eyebrow="YOUR WELLNESS BAG" title="Your next small steps." />
      <section className="container-nh section-pad commerce-container">
        {cart.items.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={40} />
            <h2>Your bag is empty.</h2>
            <Link to="/shop" className="btn btn-primary">
              Explore the collection
            </Link>
          </div>
        ) : (
          <>
            <div>
              {cart.items.map((i) => (
                <div className="cart-page-item" key={i.slug}>
                  <h3>{getDigital(i.slug)?.title}</h3>
                  <div className="quantity">
                    <button
                      onClick={() => cart.change(i.slug, i.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => cart.change(i.slug, i.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <strong>
                    {money((getDigital(i.slug)?.price || 0) * i.quantity)}
                  </strong>
                </div>
              ))}
            </div>
            <p className="cart-total">
              Subtotal <strong>{money(total)}</strong>
            </p>
            <p className="demo-note">
              Illustrative prices. No payment will be collected in demo
              checkout.
            </p>
            <Link to="/checkout" className="btn btn-primary mt-6">
              Continue to demo checkout
              <ArrowRight size={17} />
            </Link>
          </>
        )}
      </section>
    </>
  );
}
export function Checkout() {
  const cart = useCart();
  const order = useCreateOrder();
  const [, navigate] = useLocation();
  const [code, setCode] = useState("");
  const [codeMessage, setCodeMessage] = useState("");
  const total = cart.items.reduce(
    (s, i) => s + (getDigital(i.slug)?.price || 0) * i.quantity,
    0,
  );
  return (
    <>
      <PageIntro
        eyebrow="DIGITAL WELLNESS CHECKOUT"
        title="One thoughtful step closer."
        description="Preview the complete order flow. No card details or payment are collected."
      />
      <section className="container-nh section-pad checkout-grid">
        {cart.items.length === 0 ? (
          <div>
            <h2>Your bag is empty.</h2>
            <Link to="/shop" className="btn btn-primary mt-5">
              Explore the collection
            </Link>
          </div>
        ) : (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                order.mutate(
                  {
                    name: String(f.get("name")),
                    email: String(f.get("email")),
                    items: cart.items,
                  },
                  {
                    onSuccess: (o) => {
                      sessionStorage.setItem(
                        o.id,
                        JSON.stringify({
                          ...o,
                          items: cart.items.map((i) => ({
                            ...i,
                            title: getDigital(i.slug)?.title,
                          })),
                        }),
                      );
                      cart.clear();
                      navigate(`/order/${o.id}`);
                    },
                  },
                );
              }}
            >
              <div className="checkout-step">
                <span>01</span>
                <h2>Your details</h2>
              </div>
              <label>
                Full name
                <input
                  aria-label="Name"
                  className="field"
                  name="name"
                  required
                  minLength={2}
                />
              </label>
              <label>
                Email address
                <input
                  aria-label="Email"
                  className="field"
                  name="email"
                  type="email"
                  required
                />
              </label>
              <p className="text-sm text-stone">
                No shipping address is needed for digital products. Sign in
                before placing a demo order if you want it in your account
                history.
              </p>
              <Link to="/account" className="link-underline mt-4">
                Sign in / create an account
                <ArrowRight size={14} />
              </Link>
              <div className="checkout-step mt-10">
                <span>02</span>
                <h2>Payment & delivery</h2>
              </div>
              <div className="demo-payment">
                <LockKeyhole size={24} />
                <div>
                  <strong>Demo mode — no payment gateway connected</strong>
                  <p>
                    There is no charge and no paid file entitlement. Final
                    digital downloads will become available only after live
                    payments, approved pricing and finished files are connected.
                  </p>
                </div>
              </div>
              <label className="consent mt-6">
                <input
                  aria-label="I agree to the stated terms and consent"
                  type="checkbox"
                  required
                />
                I understand this is a demo and agree to the{" "}
                <Link to="/legal/terms">Terms</Link> and{" "}
                <Link to="/legal/privacy">Privacy Policy</Link>.
              </label>
              <button
                className="btn btn-primary w-full mt-4"
                disabled={order.isPending}
              >
                {order.isPending
                  ? "Saving demo order…"
                  : "Place demo order — no payment"}
                <ArrowRight size={17} />
              </button>
              {order.isError && (
                <p role="alert" className="error-message">
                  Could not save your order. Your bag is unchanged. Please try
                  again.
                </p>
              )}
            </form>
            <aside className="order-summary">
              <h2>Order summary</h2>
              {cart.items.map((i) => (
                <div key={i.slug}>
                  <span>
                    {getDigital(i.slug)?.title}
                    <small>Digital product · quantity {i.quantity}</small>
                  </span>
                  <strong>
                    {money((getDigital(i.slug)?.price || 0) * i.quantity)}
                  </strong>
                </div>
              ))}
              <div className="discount-form">
                <input
                  aria-label="Email address"
                  className="field"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Discount code"
                />
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() =>
                    setCodeMessage(
                      code
                        ? "No active discount codes yet. Promotions will be configured before live checkout."
                        : "Enter a discount code.",
                    )
                  }
                >
                  Apply
                </button>
              </div>
              {codeMessage && (
                <output className="text-sm">{codeMessage}</output>
              )}
              <div className="order-total">
                <span>Illustrative total</span>
                <strong>{money(total)}</strong>
              </div>
              <div>
                <span>Amount charged today</span>
                <strong>PKR 0</strong>
              </div>
              <p className="text-xs text-stone">
                Pricing is a placeholder, not a live offer. Physical concepts
                cannot enter checkout.
              </p>
            </aside>
          </>
        )}
      </section>
    </>
  );
}
export function Confirmation() {
  const { id } = useParams<{ id: string }>();
  let order: {
    total: number;
    items: { title: string; slug: string; quantity: number }[];
  } | null = null;
  try {
    order = JSON.parse(sessionStorage.getItem(id) || "null");
  } catch {
    /* missing browser receipt */
  }
  return (
    <>
      <PageIntro
        eyebrow="DEMO ORDER CONFIRMATION"
        title="Your preview order is saved."
        description="No payment was taken. This is an order-flow preview, not a completed paid purchase."
      />
      <section className="container-nh section-pad confirmation">
        <div className="confirmation-check">
          <Check size={34} />
        </div>
        <h2>Thank you for exploring Nourish & Heal.</h2>
        <p className="order-id">{id}</p>
        {order && (
          <>
            <div className="confirmation-items">
              {order.items.map((i) => (
                <p key={i.slug}>
                  {i.title} × {i.quantity}
                </p>
              ))}
            </div>
            <p>Illustrative total: {money(order.total)} · Charged: PKR 0</p>
          </>
        )}
        <div className="demo-note">
          Paid downloads are not released in demo mode. Final files and payment
          confirmation must be connected before commercial launch. No order
          confirmation email was sent.
        </div>
        <div className="flex gap-4 justify-center flex-wrap mt-8">
          <Link to="/account" className="btn btn-primary">
            View account history
          </Link>
          <Link to="/resources" className="btn btn-ghost">
            Get free resources
          </Link>
        </div>
      </section>
    </>
  );
}
export function Account() {
  const { data: session, isPending } = authClient.useSession();
  const [signup, setSignup] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory(!!session);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = new FormData(e.currentTarget);
    try {
      const result = signup
        ? await authClient.signUp.email({
            name: String(f.get("name")),
            email: String(f.get("email")),
            password: String(f.get("password")),
          })
        : await authClient.signIn.email({
            email: String(f.get("email")),
            password: String(f.get("password")),
          });
      if (result.error) setError(result.error.message || "Could not sign in.");
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <PageIntro
        eyebrow="YOUR NOURISH & HEAL ACCOUNT"
        title={session ? "Welcome back." : "Your wellness, in one place."}
        description={
          session
            ? "Your saved demo orders and future digital library."
            : "Sign in or create an account to keep your order history together."
        }
      />
      <section className="container-nh section-pad account-page">
        {isPending ? (
          <p>Loading your account…</p>
        ) : session ? (
          <>
            <div className="account-heading">
              <h2>Hello, {session.user.name}.</h2>
              <button
                className="btn btn-ghost"
                onClick={() => authClient.signOut()}
              >
                Sign out
              </button>
            </div>
            <h3 className="h-card mb-6">Your orders</h3>
            {history.isLoading ? (
              <p>Loading order history…</p>
            ) : history.isError ? (
              <p role="alert">Could not load orders. Please refresh.</p>
            ) : history.data?.length ? (
              history.data.map((o) => (
                <div className="account-order" key={o.id}>
                  <strong>{o.id}</strong>
                  <p>
                    {new Date(o.createdAt).toLocaleDateString()} ·{" "}
                    {money(o.total)} illustrative total
                  </p>
                  <p>
                    Demo order · payment not collected · downloads pending
                    release
                  </p>
                  <Link to={`/order/${o.id}`} className="link-underline">
                    View confirmation
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                <h3>No orders yet.</h3>
                <Link to="/shop" className="btn btn-primary">
                  Explore digital wellness
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="auth-box">
            <div className="auth-tabs">
              <button
                className={!signup ? "active" : ""}
                onClick={() => setSignup(false)}
              >
                Sign in
              </button>
              <button
                className={signup ? "active" : ""}
                onClick={() => setSignup(true)}
              >
                Create account
              </button>
            </div>
            <form onSubmit={submit}>
              {signup && (
                <label>
                  Your name
                  <input
                    aria-label="Name"
                    className="field"
                    name="name"
                    required
                    minLength={2}
                  />
                </label>
              )}
              <label>
                Email address
                <input
                  aria-label="Email"
                  className="field"
                  name="email"
                  type="email"
                  required
                />
              </label>
              <label>
                Password
                <input
                  aria-label="Password"
                  className="field"
                  name="password"
                  type="password"
                  minLength={8}
                  required
                  autoComplete={signup ? "new-password" : "current-password"}
                />
              </label>
              <button className="btn btn-primary w-full" disabled={busy}>
                {busy ? "Please wait…" : signup ? "Create account" : "Sign in"}
                <ArrowRight size={17} />
              </button>
              {error && (
                <p className="error-message" role="alert">
                  {error}
                </p>
              )}
            </form>
            <div className="auth-divider">or</div>
            <button
              className="btn btn-ghost w-full"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                setError("");
                try {
                  const r = await authClient.managedAuth.signIn({
                    provider: "google",
                  });
                  if (r.error && r.error.code !== "POPUP_CLOSED")
                    setError(r.error.message || "Google sign-in failed.");
                } catch {
                  setError(
                    "Google sign-in could not complete. Try email/password.",
                  );
                } finally {
                  setBusy(false);
                }
              }}
            >
              Continue with Google
            </button>
            <p className="text-xs text-stone mt-6">
              By continuing, you agree to the{" "}
              <Link to="/legal/terms">Terms</Link> and{" "}
              <Link to="/legal/privacy">Privacy Policy</Link>. Never reuse a
              password from another service.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
