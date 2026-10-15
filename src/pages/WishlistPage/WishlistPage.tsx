import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../features/wishlist/context/WishlistContext';
import './WishlistPage.css';

export function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <main className="wishlist-page">
        <div className="wishlist-empty">
          <div className="wishlist-empty__icon">
            <Heart size={32} />
          </div>

          <p className="wishlist-eyebrow">YOUR COLLECTION</p>
          <h1>Your wishlist is waiting</h1>
          <p>
            Save the products you love and find them here whenever
            you need them.
          </p>

          <Link to="/products" className="wishlist-shop-button">
            <ShoppingBag size={18} />
            Explore Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="wishlist-page">
      <header className="wishlist-header">
        <div>
          <p className="wishlist-eyebrow">YOUR COLLECTION</p>
          <h1>My Wishlist</h1>
          <p>
            {items.length} {items.length === 1 ? 'product' : 'products'} saved
          </p>
        </div>

        <button
          type="button"
          className="wishlist-clear-button"
          onClick={clearWishlist}
        >
          <Trash2 size={17} />
          Clear All
        </button>
      </header>

      <section className="wishlist-grid" aria-label="Saved products">
        {items.map((product) => (
          <article className="wishlist-card" key={product.id}>
            <Link
              to={`/products/${product.slug}`}
              className="wishlist-card__image-link"
            >
              <img
                src={product.image}
                alt={product.name}
                className="wishlist-card__image"
              />
            </Link>

            <div className="wishlist-card__content">
              <p className="wishlist-card__brand">{product.brand}</p>

              <Link
                to={`/products/${product.slug}`}
                className="wishlist-card__name"
              >
                {product.name}
              </Link>

              <p className="wishlist-card__price">
                ${product.price.toFixed(2)}
              </p>

              <div className="wishlist-card__actions">
                <Link
                  to={`/products/${product.slug}`}
                  className="wishlist-view-button"
                >
                  View Product
                </Link>

                <button
                  type="button"
                  className="wishlist-remove-button"
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label={`Remove ${product.name} from wishlist`}
                  title="Remove from wishlist"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}