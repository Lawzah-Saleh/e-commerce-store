import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { Product } from '../../products/types/product.types';
import type {
  CartContextValue,
  CartItem,
} from '../types/cart.types';

const CartContext = createContext<
  CartContextValue | undefined
>(undefined);

interface CartProviderProps {
  children: ReactNode;
}
function isValidCartItem(item: unknown): item is CartItem {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const candidate = item as Partial<CartItem>;

  return (
    typeof candidate.quantity === 'number' &&
    Number.isInteger(candidate.quantity) &&
    candidate.quantity > 0 &&
    typeof candidate.product === 'object' &&
    candidate.product !== null &&
    typeof candidate.product.id === 'number' &&
    typeof candidate.product.name === 'string' &&
    typeof candidate.product.price === 'number' &&
    Number.isFinite(candidate.product.price) &&
    candidate.product.price >= 0
  );
}
export function CartProvider({
  children,
}: CartProviderProps) {
const [items, setItems] = useState<CartItem[]>(() => {
  try {
    const savedCart =
      localStorage.getItem('velora-cart') ??
      localStorage.getItem('nexora-cart');

    if (!savedCart) return [];

    const parsed: unknown = JSON.parse(savedCart);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isValidCartItem);
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
});
useEffect(() => {
  try {
    localStorage.setItem('velora-cart', JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
}, [items]);

const addToCart = (product: Product) => {
  if (!product.inStock) return;

  setItems((currentItems) => {
    const existingItem = currentItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      return currentItems.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...currentItems,
      {
        product,
        quantity: 1,
      },
    ];
  });
};

  const removeFromCart = (productId: number) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.product.id !== productId
      )
    );
  };

const updateQuantity = (
  productId: number,
  quantity: number
) => {
  if (!Number.isFinite(quantity)) return;

  const safeQuantity = Math.floor(quantity);

  if (safeQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  setItems((currentItems) =>
    currentItems.map((item) => {
      if (item.product.id !== productId) {
        return item;
      }

      if (!item.product.inStock) {
        return item;
      }

      return {
        ...item,
        quantity: safeQuantity,
      };
    })
  );
};
  const clearCart = () => {
    setItems([]);
  };
  
const itemCount = useMemo(
  () =>
    items.reduce(
      (total, item) => total + item.quantity,
      0
    ),
  [items]
);


const subtotal = useMemo(
  () =>
    items.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    ),
  [items]
);

const value = useMemo(
  () => ({
    items,
    itemCount,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }),
  [items, itemCount, subtotal]
);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
}