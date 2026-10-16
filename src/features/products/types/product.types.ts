export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: 'New' | 'Sale';
  discount?: number;
  inStock: boolean;
  isFeatured?: boolean;
}