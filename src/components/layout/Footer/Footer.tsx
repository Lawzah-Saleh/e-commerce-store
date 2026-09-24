import { Link } from 'react-router-dom';
import { PageContainer } from '../PageContainer/PageContainer';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <PageContainer>
        <div className="footer__content">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              VELORA
            </Link>

            <p>
              Smart technology and lifestyle products,
              made simple.
            </p>
          </div>

          <div className="footer__column">
            <h3>Shop</h3>

            <Link to="/products">All Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/deals">Deals</Link>
          </div>

          <div className="footer__column">
            <h3>Support</h3>

            <Link to="/support">Help Center</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shipping">Shipping</Link>
          </div>

          <div className="footer__column">
            <h3>Company</h3>

            <Link to="/about">About VELORA</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 VELORA. All rights reserved.</p>
        </div>
      </PageContainer>
    </footer>
  );
}