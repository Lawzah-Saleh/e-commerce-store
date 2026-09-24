export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: 'New' | 'Sale';
  discount?: number;
  inStock: boolean;
}