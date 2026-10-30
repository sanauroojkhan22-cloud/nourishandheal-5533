import { Route, Switch } from "wouter";
import Home from "./pages/home";
import {
  Shop,
  ProductDetail,
  ComingSoon,
  ConceptDetail,
  Wellness,
  Bundles,
} from "./pages/shop";
import {
  About,
  Founder,
  Quality,
  Journal,
  Article,
  Resources,
  FaqPage,
  Contact,
  Legal,
} from "./pages/content";
import { CartPage, Checkout, Confirmation, Account } from "./pages/commerce";
import { CartProvider } from "./components/cart";
import { Layout } from "./components/layout";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <CartProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/shop/digital/:slug" component={ProductDetail} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/coming-soon/:slug" component={ConceptDetail} />
            <Route path="/shop/coming-soon/:slug" component={ConceptDetail} />
            <Route path="/wellness" component={Wellness} />
            <Route path="/wellness/:slug" component={Wellness} />
            <Route path="/bundles" component={Bundles} />
            <Route path="/about" component={About} />
            <Route path="/founder" component={Founder} />
            <Route path="/quality" component={Quality} />
            <Route path="/journal" component={Journal} />
            <Route path="/journal/:slug" component={Article} />
            <Route path="/resources" component={Resources} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order/:id" component={Confirmation} />
            <Route path="/account" component={Account} />
            <Route path="/orders" component={Account} />
            <Route path="/legal/:slug" component={Legal} />
            <Route>
              <div className="container-nh section-pad">
                <h1 className="h-section">This page isn’t here yet.</h1>
                <a className="btn btn-primary mt-6" href="/">
                  Back to home
                </a>
              </div>
            </Route>
          </Switch>
        </Layout>
      </CartProvider>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
