import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* Content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <Sparkles size={15} strokeWidth={2} />
            <span>Smart Tech & Lifestyle</span>
          </div>

          <h1 className="hero__title">
            Technology
            <span>made for your life.</span>
          </h1>

          <p className="hero__description">
            Discover modern technology, smart devices, and lifestyle
            essentials designed to make everyday life simpler.
          </p>


          <div className="hero__actions">
            <Link
              to="/products"
              className="hero__primary-link"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="hero__secondary-link"
            >
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </div>


          <div className="hero__trust">
            <div className="hero__trust-item">
              <strong>100+</strong>
              <span>Products</span>
            </div>

            <div className="hero__trust-divider" />

            <div className="hero__trust-item">
              <strong>8</strong>
              <span>Categories</span>
            </div>

            <div className="hero__trust-divider" />

            <div className="hero__trust-item">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero__visual">
          <div className="hero__glow" />

          <div className="hero__card hero__card--main">
            <div className="hero__card-label">
              Featured
            </div>

 
            <div className="hero__product">
              <img
                className="hero__product-image"
                src="https://apiua.icoola.ua/aimeos/images/products/b-u-apple-iphone-11-pro-max-512gb-space-gray-smart_1746708627/1746708627_2103456901_681ca89342b0d_b-u-apple-iphone-11-pro-max-512gb-space-gray-smart-nova-batareya.webp"
                alt="Graphite smartphone with a turquoise display"
                loading="eager"
              />
            </div>


            <div className="hero__product-info">
              <div>
                <span>VELORA</span>
                <h2>Future Collection</h2>
              </div>

              <span className="hero__product-price">
                Explore
              </span>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__floating-icon">✦</span>
            <div>
              <strong>Smart Choice</strong>
              <span>Modern technology</span>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-dot" />
            <div>
              <strong>New Arrivals</strong>
              <span>Explore what's new</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}