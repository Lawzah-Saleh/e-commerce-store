import { Hero } from '../../features/home/components/Hero/Hero';
import { FeaturedCategories } from '../../features/categories/components/FeaturedCategories/FeaturedCategories';

export function HomePage() {
  return (
    <>
      <Hero />

      <FeaturedCategories />
    </>
  );
}