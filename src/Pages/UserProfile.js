/**
 * The UserProfile component displays user information, purchase history, and a button to sell products
 * based on login count.
 * @returns The `UserProfile` component is being returned. It displays the user's profile information
 * including their name, purchase history, and an option to sell products if the login count is greater
 * than or equal to 3.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = ({ user, purchaseHistory }) => {
  // Use state to manage login count and retrieve it from localStorage
  const loginCount = parseInt(localStorage.getItem('loginCount')) || 0;
  const navigate = useNavigate();

  const handleSellButtonClick = () => {
    navigate('/sell-product');
  };

  return (
    <div className="user-profile">
      <h2>Welcome, {user.name}</h2>
      <div className="profile-section">
        <h3>Purchase History</h3>
        {purchaseHistory && purchaseHistory.length > 0 ? (
          <ul>
            {purchaseHistory.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No purchase history available.</p>
        )}
      </div>
      {loginCount >= 3 && (
        <div className="sell-section">
          <h3>Sell Your Products</h3>
          <button className='sell-button' onClick={handleSellButtonClick}>Start Selling</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;