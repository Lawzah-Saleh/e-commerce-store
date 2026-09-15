import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <span className="hero-eyebrow">
            NEW SEASON · 2026 COLLECTION
          </span>

          <h1 className="hero-title">
            Everything you need,
            <span> beautifully curated.</span>
          </h1>

          <p className="hero-description">
            Discover carefully selected products, modern essentials,
            and everyday favorites — all in one place.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="hero-primary-button">
              Shop Collection
              <span>→</span>
            </Link>

            <Link to="/products" className="hero-secondary-button">
              Explore Products
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span>Secure Shopping</span>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span>Fast Delivery</span>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-visual-background" />

          <div className="hero-product-card">
            <span className="product-badge">FEATURED</span>

            <div className="product-placeholder">
              <span>N</span>
            </div>

            <div className="product-info">
              <div>
                <span className="product-category">NEXORA ESSENTIAL</span>
                <h2>Modern Collection</h2>
              </div>

              <strong>$129</strong>
            </div>
          </div>

          <div className="hero-floating-card">
            <span>★★★★★</span>
            <strong>4.9</strong>
            <small>Customer rating</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;