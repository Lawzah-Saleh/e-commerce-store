import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal } from 'lucide-react';

import { products } from '../../features/products/data/products';
import { ProductCard } from '../../features/products/components/ProductCard/ProductCard';
import './Products.css';

const categories = [
  { label: 'All categories', value: '' },
  { label: 'Smartphones', value: 'smartphones' },
  { label: 'Laptops', value: 'laptops' },
  { label: 'Tablets', value: 'tablets' },
  { label: 'Audio', value: 'audio' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Smart Watches', value: 'smart-watches' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('search') ?? '';
  const selectedCategory = searchParams.get('category') ?? '';
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.brand.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const selectedCategoryLabel =
    categories.find((category) => category.value === selectedCategory)
      ?.label ?? 'All categories';
  function handleSearchChange(value: string) {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      if (value) {
        nextParams.set('search', value);
      } else {
        nextParams.delete('search');
      }

      return nextParams;
    });
  }
  function handleCategoryChange(value: string) {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      if (value) {
        nextParams.set('category', value);
      } else {
        nextParams.delete('category');
      }

      return nextParams;
    });
  }

  function clearFilters() {
    setSearchParams({});
  }

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero__content">
          <span className="products-hero__eyebrow">
            THE VELORA COLLECTION
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
          <span className="products-hero__label">V / 01</span>
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

            <h2>
              {selectedCategory
                ? selectedCategoryLabel
                : 'Explore Products'}
            </h2>

            <p>
              {selectedCategory
                ? `Explore our ${selectedCategoryLabel.toLowerCase()} collection.`
                : 'Find something that fits your lifestyle.'}
            </p>
          </div>

          <span className="products-catalog__total">
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
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
              onChange={(event) => handleSearchChange(event.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="products-search__clear"
                aria-label="Clear search"
                onClick={() => handleSearchChange('')}
              >
                <X size={17} />
              </button>
            )}
          </label>

          <label className="products-category-filter">
            <SlidersHorizontal size={17} aria-hidden="true" />

            <span className="products-category-filter__label">
              Category
            </span>

            <select
              aria-label="Filter products by category"
              value={selectedCategory}
              onChange={(event) =>
                handleCategoryChange(event.target.value)
              }
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>
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
              We couldn’t find a match. Try another search
              or choose a different category.
            </p>

            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
