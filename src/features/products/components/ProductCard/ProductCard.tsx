import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product.types';
import './ProductCard.css';
import { useCart } from '../../../cart/context/CartContext';
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
    const { addToCart } = useCart();
    const handleAddToCart = () => {
    addToCart(product);
    onAddToCart?.(product);
    };

  const handleToggleWishlist = () => {
    setIsWishlisted((current) => !current);
    onToggleWishlist?.(product);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        {product.badge && (
          <span
            className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}
          >
            {product.badge}
          </span>
        )}

        {product.discount && (
          <span className="product-card__discount">
            -{product.discount}%
          </span>
        )}

        <button
          type="button"
          className={`product-card__wishlist ${
            isWishlisted
              ? 'product-card__wishlist--active'
              : ''
          }`}
          onClick={handleToggleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            fill={isWishlisted ? 'currentColor' : 'none'}
          />
        </button>

        <Link
          to={`/products/${product.slug}`}
          className="product-card__image-link"
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
          />
        </Link>
      </div>

      <div className="product-card__content">
        <span className="product-card__brand">
          {product.brand}
        </span>

        <Link
          to={`/products/${product.slug}`}
          className="product-card__name"
        >
          {product.name}
        </Link>

        <div className="product-card__rating">
          <Star
            size={14}
            fill="currentColor"
            strokeWidth={1.5}
          />

          <span>{product.rating}</span>

          <span className="product-card__reviews">
            ({product.reviewCount})
          </span>
        </div>

        <div className="product-card__pricing">
          <span className="product-card__price">
            ${product.price.toFixed(2)}
          </span>

          {product.compareAtPrice && (
            <span className="product-card__compare-price">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          type="button"
          className="product-card__cart-button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingBag size={17} strokeWidth={1.8} />

          <span>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </span>
        </button>
      </div>
    </article>
  );
}