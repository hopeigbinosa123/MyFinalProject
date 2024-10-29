/**
 * The ProductDetail component displays details of a product based on the provided products array and
 * the id parameter from the URL.
 * @returns The `ProductDetail` component is being returned. It displays the details of a product based
 * on the `id` parameter from the URL. If the product with the specified `id` is found in the
 * `products` array, it renders the product's image, name, description, price, and an "Add to Cart"
 * button. If the product is not found, it displays a message "
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
