import { Link } from 'react-router-dom';
import {
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Gamepad2,
  Watch,
} from 'lucide-react';

import './CategoriesPage.css';

const categories = [
  { name: 'Smartphones', slug: 'smartphones', icon: Smartphone },
  { name: 'Laptops', slug: 'laptops', icon: Laptop },
  { name: 'Tablets', slug: 'tablets', icon: Tablet },
  { name: 'Audio', slug: 'audio', icon: Headphones },
  { name: 'Gaming', slug: 'gaming', icon: Gamepad2 },
  { name: 'Smart Watches', slug: 'smart-watches', icon: Watch },
];

export function CategoriesPage() {
  return (
    <main className="categories-page">
      <header className="categories-page__header">
        <span>EXPLORE VELORA</span>
        <h1>Shop by Category</h1>
        <p>
          Discover the right technology for your everyday life.
        </p>
      </header>

      <section
        className="categories-page__grid"
        aria-label="Product categories"
      >
        {categories.map(({ name, slug, icon: Icon }) => (
          <Link
            key={slug}
            to={`/categories/${slug}`}
            className="categories-page__card"
          >
            <span className="categories-page__icon">
              <Icon size={28} strokeWidth={1.7} />
            </span>

            <h2>{name}</h2>
            <span className="categories-page__link">
              Explore products →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
