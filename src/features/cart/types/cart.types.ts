import type { Product } from '../../products/types/product.types';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (
    productId: number,
    quantity: number
  ) => void;
  clearCart: () => void;
}