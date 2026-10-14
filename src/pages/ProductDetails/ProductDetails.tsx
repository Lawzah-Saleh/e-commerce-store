import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star } from 'lucide-react';

import { products } from '../../features/products/data/products';
import { useCart } from '../../features/cart/context/CartContext';

import './ProductDetails.css';

export function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((item) => item.slug === slug);
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="product-details__not-found">
        <h1>Product not found</h1>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products" className="product-details__back">
          <ArrowLeft size={18} />
          Back to Shop
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addToCart(product);
    setAdded(true);
  };

  return (
    <main className="product-details">
      <nav className="product-details__breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <section className="product-details__layout">
        <div className="product-details__image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-details__image"
          />

          {product.badge && (
            <span className="product-details__badge">
              {product.badge}
            </span>
          )}
        </div>

        <div className="product-details__info">
          <p className="product-details__brand">{product.brand}</p>

          <h1>{product.name}</h1>

          <div
            className="product-details__rating"
            aria-label={`Rated ${product.rating} out of 5`}
          >
            <Star size={18} fill="currentColor" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="product-details__reviews">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="product-details__price">
            <span>
              ${product.price.toLocaleString('en-US')}
            </span>

            {product.compareAtPrice !== undefined &&
              product.compareAtPrice > product.price && (
                <del>
                  ${product.compareAtPrice.toLocaleString('en-US')}
                </del>
              )}
          </div>

          <div
            className={`product-details__stock ${
              product.inStock ? 'is-available' : 'is-unavailable'
            }`}
          >
            <span aria-hidden="true">●</span>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </div>

          <p className="product-details__description">
            Discover quality, thoughtful design, and everyday
            performance with {product.name}. A great addition to
            your collection.
          </p>

          <button
            type="button"
            className="product-details__add-button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingBag size={19} />
            {!product.inStock
              ? 'Out of Stock'
              : added
                ? 'Add Again'
                : 'Add to Cart'}
          </button>

          {added && (
            <p className="product-details__success" role="status">
              Product added to your cart successfully.
              {' '}
              <Link to="/cart">View Cart</Link>
            </p>
          )}

          <Link to="/products" className="product-details__continue">
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}