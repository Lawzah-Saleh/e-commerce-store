import { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

import { useCart } from '../../../cart/context/CartContext';
import type { Product } from '../../types/product.types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addToCart(product);
  };

  return (
    <article className="product-card">
        <div className="product-card__image-wrapper">
            <Link
              to={`/products/${product.slug}`}
              className="product-card__image-link"
              aria-label={`View details for ${product.name}`}
            >
              {!imageError ? (
                <img
                  className="product-card__image"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span
                  className="product-card__image-fallback"
                  role="img"
                  aria-label={`Image unavailable for ${product.name}`}
                >
                  Image unavailable
                </span>
              )}
            </Link>

          {product.badge && (
            <span
              className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}
            >
              {product.badge}
            </span>
          )}

          {product.discount !== undefined && product.discount > 0 && (
            <span className="product-card__discount">
              -{product.discount}%
            </span>
          )}
        </div>

      <div className="product-card__content">
        <p className="product-card__brand">{product.brand}</p>

        <h2 className="product-card__name">
          <Link to={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h2>
        <div
          className="product-card__rating"
          aria-label={`Rated ${product.rating} out of 5, based on ${product.reviewCount} reviews`}
        >
          <Star size={16} fill="currentColor" aria-hidden="true" />

          <span>{product.rating.toFixed(1)}</span>

          <span className="product-card__reviews">
            ({product.reviewCount} reviews)
          </span>
        </div>

        <div className="product-card__pricing">
          <span className="product-card__price">
            ${product.price.toLocaleString('en-US')}
          </span>

          {product.compareAtPrice !== undefined &&
            product.compareAtPrice > product.price && (
              <span className="product-card__original-price">
                ${product.compareAtPrice.toLocaleString('en-US')}
              </span>
            )}
        </div>

        <button
          type="button"
          className="product-card__add-button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingBag size={18} aria-hidden="true" />

          <span>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </span>
        </button>
      </div>
    </article>
  );
}