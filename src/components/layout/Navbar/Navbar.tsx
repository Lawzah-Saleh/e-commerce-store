import { Heart, Menu, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchInput } from '../../common/SearchInput/SearchInput';
import './Navbar.css';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (value: string) => {
    console.log('Search:', value);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/products' },
    { label: 'Categories', path: '/categories' },
    { label: 'Deals', path: '/deals' },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar__menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand */}
        <Link
          to="/"
          className="navbar__brand"
          aria-label="VELORA Home"
          onClick={closeMenu}
        >
          <span className="navbar__brand-mark">V</span>
          <span className="navbar__brand-name">VELORA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive ? 'navbar__link--active' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Search */}
        <div className="navbar__search">
          <SearchInput
            onSearch={handleSearch}
            placeholder="Search products..."
          />
        </div>

        {/* Actions */}
        <div className="navbar__actions">

          <Link
            to="/wishlist"
            className="navbar__action"
            aria-label="Wishlist"
          >
            <Heart size={19} strokeWidth={1.8} />
          </Link>

          <Link
            to="/cart"
            className="navbar__action navbar__cart"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={19} strokeWidth={1.8} />
            <span className="navbar__badge">0</span>
          </Link>

          <Link
            to="/account"
            className="navbar__action navbar__account"
            aria-label="Account"
          >
            <User size={19} strokeWidth={1.8} />
          </Link>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile-menu ${
          isMenuOpen ? 'navbar__mobile-menu--open' : ''
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${
                  isActive ? 'navbar__mobile-link--active' : ''
                }`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__mobile-divider" />

        <Link
          to="/wishlist"
          className="navbar__mobile-action"
          onClick={closeMenu}
        >
          <Heart size={19} />
          <span>Wishlist</span>
        </Link>

        <Link
          to="/cart"
          className="navbar__mobile-action"
          onClick={closeMenu}
        >
          <ShoppingBag size={19} />
          <span>Cart</span>
          <span className="navbar__mobile-badge">0</span>
        </Link>

        <Link
          to="/account"
          className="navbar__mobile-action"
          onClick={closeMenu}
        >
          <User size={19} />
          <span>Account</span>
        </Link>
      </div>
    </header>
  );
}