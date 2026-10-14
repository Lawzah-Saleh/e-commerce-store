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
          <div className="featured-products__heading">
            <span className="featured-products__eyebrow">
              <span className="featured-products__eyebrow-line" />
              OUR SELECTION
              <span className="featured-products__eyebrow-line" />
            </span>

            <h2>Featured Products</h2>

            <p>
              Discover the technology that makes everyday life better.
            </p>
          </div>

          <Link
            to="/products"
            className="featured-products__view-all"
          >
            <span>View all products</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}   