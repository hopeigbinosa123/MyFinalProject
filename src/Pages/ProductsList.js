import React, { useState } from 'react';
import ProductCard from '../Components/ProductsCard';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="product-list-page">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Filter products..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
