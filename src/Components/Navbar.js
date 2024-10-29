/**
 * The Navbar component in this code snippet renders a navigation bar with links to different sections
 * of a marketplace website.
 * @returns The Navbar component is being returned. It is a functional component that renders a
 * navigation bar with links to different sections of a marketplace website such as Home, Products,
 * Profile, Cart, Login, and Register. The component uses FontAwesome icons for visual representation
 * and allows users to navigate to different paths within the website using the useNavigate hook from
 * react-router-dom.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHome, faList, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <h1>My Marketplace</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
      </div>
      <ul>
        <li>
          <button onClick={() => handleNavigation("/")}>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/products")}>
            <FontAwesomeIcon icon={faList} /> <span>Products</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/profile")}>
            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/cart")}>
            <FontAwesomeIcon icon={faShoppingCart} /> <span>Cart</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/login")}>
            <FontAwesomeIcon icon={faSignInAlt} /> <span>Login</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/register")}>
            <FontAwesomeIcon icon={faUserPlus} /> <span>Register</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
