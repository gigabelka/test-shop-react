import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { CartItem } from '../types';
import { products } from '../data/products';

interface CartContextValue {
  items: CartItem[];
  add: (productId: string) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  has: (productId: string) => boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'shop.cart';

function loadInitial(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadInitial);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const add = (productId: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { productId, qty: 1 }];
    });
  };

  const remove = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const setQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      remove(productId);
      return;
    }
    setItems((prev) => prev.map((i) => (i.productId === productId ? { ...i, qty } : i)));
  };

  const clear = () => setItems([]);

  const has = (productId: string) => items.some((i) => i.productId === productId);

  const count = items.reduce((acc, i) => acc + i.qty, 0);

  const total = items.reduce((acc, i) => {
    const p = products.find((pr) => pr.id === i.productId);
    return acc + (p ? p.price * i.qty : 0);
  }, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, setQty, clear, count, total, has }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
