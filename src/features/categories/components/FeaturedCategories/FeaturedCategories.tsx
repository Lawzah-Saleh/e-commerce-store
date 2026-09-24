import { PageContainer } from '../../../../components/layout/PageContainer/PageContainer';
import {
  CategoryCard,
  type CategoryCardProps,
} from '../CategoryCard/CategoryCard';
import './FeaturedCategories.css';

const categories: CategoryCardProps[] = [
  {
    name: 'Smartphones',
    description: 'Discover the latest smartphones.',
    slug: 'smartphones',
    icon: '📱',
  },
  {
    name: 'Laptops',
    description: 'Powerful laptops for work and play.',
    slug: 'laptops',
    icon: '💻',
  },
  {
    name: 'Tablets',
    description: 'Portable devices for every need.',
    slug: 'tablets',
    icon: '📱',
  },
  {
    name: 'Audio',
    description: 'Headphones, speakers and more.',
    slug: 'audio',
    icon: '🎧',
  },
  {
    name: 'Gaming',
    description: 'Level up your gaming setup.',
    slug: 'gaming',
    icon: '🎮',
  },
  {
    name: 'Smart Watches',
    description: 'Stay connected wherever you go.',
    slug: 'smart-watches',
    icon: '⌚',
  },
];

export function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <PageContainer>
        <div className="featured-categories__header">
          <div>
            <span className="featured-categories__eyebrow">
              Explore
            </span>

            <h2>Shop by Category</h2>

            <p>
              Find the technology that fits your lifestyle.
            </p>
          </div>
        </div>

        <div className="featured-categories__grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              {...category}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}