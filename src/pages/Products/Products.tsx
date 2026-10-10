
import { useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { products } from '../../features/products/data/products';
import { ProductCard } from '../../features/products/components/ProductCard/ProductCard';
import './Products.css';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.brand.toLowerCase().includes(normalizedSearch)
    );
  });

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero__content">
          <span className="products-hero__eyebrow">
            THE NEXORA COLLECTION
          </span>

          <h1>
            Find Your Next
            <span> Favorite Thing.</span>
          </h1>

          <p>
            Discover thoughtfully selected technology and
            accessories designed for your everyday life.
          </p>

          <a href="#product-list" className="products-hero__link">
            Explore collection <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="products-hero__decoration" aria-hidden="true">
          <span className="products-hero__orb" />
          <span className="products-hero__label">N / 01</span>
        </div>
      </section>

      <section
        className="products-catalog"
        id="product-list"
        aria-label="Product catalog"
      >
        <div className="products-catalog__heading">
          <div>
            <span className="products-catalog__eyebrow">
              OUR SELECTION
            </span>
            <h2>Explore Products</h2>
            <p>Find something that fits your lifestyle.</p>
          </div>

          <span className="products-catalog__total">
            {filteredProducts.length} products
          </span>
        </div>

        <div className="products-toolbar">
          <label className="products-search">
            <Search size={19} aria-hidden="true" />

            <input
              type="search"
              placeholder="Search products or brands..."
              aria-label="Search products or brands"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            {searchTerm && (
              <button
                type="button"
                className="products-search__clear"
                aria-label="Clear search"
                onClick={() => setSearchTerm('')}
              >
                <X size={17} />
              </button>
            )}
          </label>

          <div className="products-toolbar__status">
            <SlidersHorizontal size={17} aria-hidden="true" />
            <span>All products</span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="products-empty">
            <div className="products-empty__icon">
              <Search size={28} />
            </div>

            <h3>No products found</h3>

            <p>
              We couldn’t find a match. Try another product name
              or brand.
            </p>

            <button
              type="button"
              onClick={() => setSearchTerm('')}
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
