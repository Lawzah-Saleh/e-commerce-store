
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../features/cart/context/CartContext';
import './CartPage.css';

const formatPrice = (price: number) =>
  `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">
          <div className="cart-empty__icon">
            <ShoppingBag size={34} strokeWidth={1.5} />
          </div>

          <span className="cart-page__eyebrow">
            YOUR VELORA BAG
          </span>

          <h1>Your cart is empty</h1>

          <p>
            Looks like you haven't added anything to your cart yet.
            Explore our collection and find something you love.
          </p>

          <Link to="/products" className="cart-primary-button">
            Explore products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <header className="cart-page__header">
        <span className="cart-page__eyebrow">
          YOUR VELORA BAG
        </span>

        <h1>Shopping Cart</h1>

        <p>
          Review your items and get everything ready for checkout.
        </p>
      </header>

      <div className="cart-layout">
        <section className="cart-items-section">
          <div className="cart-items-section__heading">
            <h2>Your items</h2>

            <span>
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>

          <div className="cart-items">
            {items.map(({ product, quantity }) => (
              <article
                className="cart-item"
                key={product.id}
              >
            <Link
              to={`/products/${product.slug}`}
              className="cart-item__image-link"
              aria-label={`View details for ${product.name}`}
            >
                  <img
                    className="cart-item__image"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>

                <div className="cart-item__details">
                  <span className="cart-item__brand">
                    {product.brand}
                  </span>

                  <h3>{product.name}</h3>

                  <p className="cart-item__unit-price">
                    {formatPrice(product.price)} each
                  </p>

                  <div className="cart-item__actions">
                    <div
                      className="cart-quantity"
                      aria-label={`Quantity for ${product.name}`}
                    >
                      <button
                        type="button"
                        aria-label={`Decrease ${product.name} quantity`}
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                      >
                        <Minus size={15} />
                      </button>

                      <span aria-live="polite">{quantity}</span>

                      <button
                        type="button"
                        aria-label={`Increase ${product.name} quantity`}
                        disabled={!product.inStock}
          
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-item__remove"
                      aria-label={`Remove ${product.name} from cart`}
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Trash2 size={15} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                <strong className="cart-item__total">
                  {formatPrice(product.price * quantity)}
                </strong>
              </article>
            ))}
          </div>

          <div className="cart-items-section__footer">
            <Link
              to="/products"
              className="cart-back-link"
            >
              <ArrowLeft size={17} />
              Continue shopping
            </Link>

            <button
              type="button"
              className="cart-clear-button"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        </section>

        <aside className="cart-summary">
          <h2>Order summary</h2>

          <div className="cart-summary__row">
            <span>Items ({itemCount})</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="cart-summary__row">
            <span>Shipping</span>
            <span className="cart-summary__shipping">
              Calculated at checkout
            </span>
          </div>

          <div className="cart-summary__divider" />

          <div className="cart-summary__total">
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>

          <p className="cart-summary__note">
            Shipping and any applicable taxes are not included.
          </p>

          <button
            type="button"
            className="cart-checkout-button"
            disabled
            title="Checkout will be implemented in a later step"
          >
            Checkout coming soon
          </button>

          <p className="cart-summary__secure">
            <ShoppingBag size={15} />
            Your items are waiting for you
          </p>
        </aside>
      </div>
    </main>
  );
}
