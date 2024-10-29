/**
 * The Home component in React renders a page displaying featured products with their images, names,
 * descriptions, and prices.
 * @returns The `Home` component is being returned, which is a functional component in React. It
 * displays a welcome message and a section for featured products based on the `products` array passed
 * as a prop. The featured products are displayed in a grid format with their image, name, description,
 * and price.
 */
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = ({ products }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [products.length]); // Added dependency array

  return (
    <div className="home-page">
      <header>
        <h1>Welcome to My Marketplace!</h1>
        <p>Find the best deals on used products from sellers</p>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;