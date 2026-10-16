import { Hero } from '../../features/home/components/Hero/Hero';
import { Benefits } from '../../features/home/components/Benefits/Benefits';

import { FeaturedCategories } from '../../features/categories/components/FeaturedCategories/FeaturedCategories';
import { FeaturedProducts } from '../../features/products/components/FeaturedProducts/FeaturedProducts';
export function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedCategories />
      <FeaturedProducts />
    </>
  );
}