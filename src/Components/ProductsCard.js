/**
 * The ProductCard component renders product information with an image, name, description, price, and
 * an "Add to Cart" button.
 * @returns The `ProductCard` component is being returned, which is a React functional component that
 * displays product information such as image, name, description, price, and an "Add to Cart" button.
 */
import React from "react";
import '../styles/ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard;