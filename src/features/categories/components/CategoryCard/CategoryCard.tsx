import { Link } from 'react-router-dom';
import './CategoryCard.css';

export interface CategoryCardProps {
  name: string;
  description: string;
  slug: string;
  icon: string;
}

export function CategoryCard({
  name,
  description,
  slug,
  icon,
}: CategoryCardProps) {
  return (
    <Link
      to={`/categories/${slug}`}
      className="category-card"
    >
      <div className="category-card__icon" aria-hidden="true">
        {icon}
      </div>

      <div className="category-card__content">
        <h3>{name}</h3>

        <p>{description}</p>
      </div>

      <span className="category-card__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}