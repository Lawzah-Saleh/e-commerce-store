import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { Product } from '../../products/types/product.types';

interface WishlistContextValue {
  items: Product[];
  itemCount: number;
  isFavorite: (productId: Product['id']) => boolean;
  toggleFavorite: (product: Product) => void;
  removeFromWishlist: (productId: Product['id']) => void;
  clearWishlist: () => void;
}

interface WishlistProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'velora-wishlist';

const WishlistContext = createContext<
  WishlistContextValue | undefined
>(undefined);

function getInitialWishlist(): Product[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed as Product[];
  } catch {
    return [];
  }
}

export function WishlistProvider({
  children,
}: WishlistProviderProps) {
  const [items, setItems] = useState<Product[]>(getInitialWishlist);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // The wishlist remains usable if storage is unavailable.
    }
  }, [items]);

  const isFavorite = (productId: Product['id']) =>
    items.some((item) => item.id === productId);

  const toggleFavorite = (product: Product) => {
    setItems((currentItems) =>
      currentItems.some((item) => item.id === product.id)
        ? currentItems.filter((item) => item.id !== product.id)
        : [...currentItems, product],
    );
  };

  const removeFromWishlist = (productId: Product['id']) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      isFavorite,
      toggleFavorite,
      removeFromWishlist,
      clearWishlist,
    }),
    [items],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      'useWishlist must be used within a WishlistProvider',
    );
  }

  return context;
}
