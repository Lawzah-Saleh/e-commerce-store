import { Link } from 'react-router-dom';
import { SearchInput } from '../../common/SearchInput/SearchInput';
import './Navbar.css';

export function Navbar() {
  const handleSearch = (value: string) => {
    console.log('Search:', value);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Brand */}
        <Link to="/" className="navbar__brand">
          VELORA
        </Link>

        {/* Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/deals">Deals</Link>
        </nav>

        {/* Search */}
        <div className="navbar__search">
          <SearchInput onSearch={handleSearch} />
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <Link to="/wishlist" aria-label="Wishlist">
            ♡
          </Link>

          <Link to="/cart" aria-label="Shopping cart">
            🛒
          </Link>

          <Link to="/account" aria-label="Account">
            👤
          </Link>
        </div>
      </div>
    </header>
  );
}