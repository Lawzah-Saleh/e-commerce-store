import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

export interface CategoryCardProps {
  name: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
  productCount: number;
}

export function CategoryCard({
  name,
  description,
  slug,
  icon,
  productCount,
}: CategoryCardProps) {
  return (
    <Link
      to={`/categories/${slug}`}
      className="category-card"
    >
      <div className="category-card__top">
        <div className="category-card__icon">
          {icon}
        </div>

        <div className="category-card__arrow">
          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
          />
        </div>
      </div>

      <div className="category-card__content">
        <h3>{name}</h3>

        <p>{description}</p>

        <span className="category-card__count">
          {productCount}+ products
        </span>
      </div>
    </Link>
  );
}