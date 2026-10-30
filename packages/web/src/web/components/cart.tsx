import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
type Item = { slug: string; quantity: number };
const CartContext = createContext<{
  items: Item[];
  add: (slug: string) => void;
  change: (slug: string, n: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
}>({
  items: [],
  add: () => {},
  change: () => {},
  clear: () => {},
  open: false,
  setOpen: () => {},
});
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("nh-cart") || "[]");
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("nh-cart", JSON.stringify(items));
  }, [items]);
  const add = (slug: string) => {
    setItems((old) =>
      old.some((i) => i.slug === slug)
        ? old.map((i) =>
            i.slug === slug
              ? { ...i, quantity: Math.min(10, i.quantity + 1) }
              : i,
          )
        : [...old, { slug, quantity: 1 }],
    );
    setOpen(true);
  };
  return (
    <CartContext.Provider
      value={{
        items,
        add,
        change: (slug, n) =>
          setItems((old) =>
            n <= 0
              ? old.filter((i) => i.slug !== slug)
              : old.map((i) =>
                  i.slug === slug ? { ...i, quantity: Math.min(n, 10) } : i,
                ),
          ),
        clear: () => setItems([]),
        open,
        setOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
