import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { CartContext } from '../cartcontext';
import './nav.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchText.trim())}`);
      setSearchText('');
      setIsSearchVisible(false);
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/images/logo (2).png" alt="logo" />
        </Link>
      </div>

      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/products', label: 'Products' },
          { path: '/contact', label: 'Contact' },
          { path: '/enquiry', label: 'Enquiry' },
        ].map(({ path, label }) => (
          <li key={label}>
            <Link to={path} onClick={closeMenu}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <form
          className={`search-container ${isSearchVisible ? 'active' : ''}`}
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>

        <div className="search-icon mobile-only" onClick={toggleSearch}>
          <FaSearch />
        </div>

        <Link to="/cart" className="cart-icon" onClick={closeMenu}>
          <FaShoppingCart />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
