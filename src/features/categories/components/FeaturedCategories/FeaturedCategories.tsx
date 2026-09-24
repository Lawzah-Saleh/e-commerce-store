import {
  AudioLines,
  Gamepad2,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
} from 'lucide-react';

import { CategoryCard } from '../CategoryCard/CategoryCard';
import './FeaturedCategories.css';

const categories = [
  {
    name: 'Smartphones',
    description: 'Latest devices for everyday life.',
    slug: 'smartphones',
    icon: <Smartphone size={23} strokeWidth={1.8} />,
    productCount: 40,
  },
  {
    name: 'Laptops',
    description: 'Powerful machines for work and play.',
    slug: 'laptops',
    icon: <Laptop size={23} strokeWidth={1.8} />,
    productCount: 28,
  },
  {
    name: 'Tablets',
    description: 'Portable technology for every moment.',
    slug: 'tablets',
    icon: <Tablet size={23} strokeWidth={1.8} />,
    productCount: 22,
  },
  {
    name: 'Audio',
    description: 'Immersive sound for your lifestyle.',
    slug: 'audio',
    icon: <AudioLines size={23} strokeWidth={1.8} />,
    productCount: 35,
  },
  {
    name: 'Gaming',
    description: 'Gear built for your next level.',
    slug: 'gaming',
    icon: <Gamepad2 size={23} strokeWidth={1.8} />,
    productCount: 31,
  },
  {
    name: 'Smart Watches',
    description: 'Stay connected wherever you go.',
    slug: 'smart-watches',
    icon: <Watch size={23} strokeWidth={1.8} />,
    productCount: 18,
  },
];

export function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <div className="featured-categories__container">

        <div className="featured-categories__header">
          <div>
            <span className="featured-categories__eyebrow">
              Explore
            </span>

            <h2>
              Shop by category
            </h2>

            <p>
              Find the technology that fits your world.
            </p>
          </div>

          <a
            href="/categories"
            className="featured-categories__view-all"
          >
            View all
          </a>
        </div>

        <div className="featured-categories__grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              {...category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}