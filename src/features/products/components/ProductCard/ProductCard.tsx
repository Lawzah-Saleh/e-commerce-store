import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../../cart/context/CartContext';
import type { Product } from '../../types/product.types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addToCart(product);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

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

        <h2 className="product-card__name">{product.name}</h2>

        <div className="product-card__rating">
          <Star size={16} fill="currentColor" />
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
          <ShoppingBag size={18} />
          <span>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </span>
        </button>
      </div>
    </article>
  );
}