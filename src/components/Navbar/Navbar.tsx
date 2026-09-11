import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

type NavbarProps = {
  storeName: string
}

function Navbar({ storeName }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          {storeName}
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>

          <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
            Wishlist
          </Link>

          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
            Cart
          </Link>

          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar