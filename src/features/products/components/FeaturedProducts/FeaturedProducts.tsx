import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ProductGrid } from '../ProductGrid/ProductGrid';
import './FeaturedProducts.css';

export function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-products__container">
        <div className="featured-products__header">
          <div>
            <span className="featured-products__eyebrow">
              Featured
            </span>

            <h2>Popular products</h2>

            <p>
              Discover some of the products our customers love.
            </p>
          </div>

          <Link
            to="/products"
            className="featured-products__view-all"
          >
            <span>View all</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}   