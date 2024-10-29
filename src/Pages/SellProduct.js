/**
 * The `SellProduct` component in React allows users to input details of a product, including name,
 * description, price, and image, and then submit this information for listing a product.
 * @returns The `SellProduct` component is being returned. It is a functional component that contains a
 * form for selling a product. The form includes input fields for product name, description, price, and
 * an image upload field. The component uses state variables to manage the form data and error
 * messages. When the form is submitted, it validates the input fields and sends a POST request to
 * '/api/sell-product'
 */

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SellProduct.css';

const SellProduct = () => {
    const [productName, setproduct] = useState('');
        const [productDescription, setProductDescription] = useState('');
        const [productPrice, setProductPrice] = useState('');
        const [productImage, setProductImage] = useState(null);
        const [error, setError] = useState({});
        const [successMessage, setSuccessMessage] = useState('');

        const validateForm = () => {
            let formIsValid = true;
            let error = {};
            if(!productName){
                formIsValid = false;
                error['productName'] = 'Product Name is required.';
            }
            if (!productDescription){
                formIsValid = false;
                error['productDescription'] = 'Product Description is required.';
            }
            if(isNaN(productPrice)|| !productPrice){
                formIsValid = false;
                error['productPrice'] = 'Invalid price';
            }

            if(!productImage){
                formIsValid = false;
                error['productImage'] = 'Product Image is required.';
            }
            setError(error);
            return formIsValid;
        }

        const handleSellProduct = async (e) =>{
            e.preventDefault();
            if(!productName||!productDescription||!productPrice||!productImage){
                setError('All fields are required.');
                return;
            }
            if(isNaN(productPrice)||productPrice <= 0){
                setError('Invalid price');
                return;
            }
            const formData = new FormData();
            formData.append('name', productName);
            formData.append('description', productDescription);
            formData.append('price', productPrice);
            formData.append('image', productImage);

            try{
                await axios.post('/api/sell-product', formData);
                //Handle successful product listing
            } catch (error){
                console.error('Error listing product', error);
            }
        };

        return (
            <div className='sell-product'>
                <h2>Sell a Product</h2>
                <form onSubmit={handleSellProduct}>
                    <input type='text' placeholder='Product Name' value={productName} onChange={(e) => setproduct(e.target.value)} required/>
                    {error.productName && <div className='error-message'>{error.productName}</div>}
                    <input type='text' placeholder='Product Description' value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required/>
                    {error.productDescription && <div className='error-message'>{error.productDescription}</div>}
                    <input type='number' placeholder='Product Price' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required/>
                    {error.productPrice && <div className='error-message'>{error.productPrice}</div>}
                    <input type='file' onChange={(e) => setProductImage(e.target.files[0])} required/>
                    {error.productImage && <div className='error-message'>{error.productImage}</div>}
                    <button type='submit'>Sell Product</button>
                </form>
                <p>Note: Images should be at least 500x500 pixels and under 2MB in size.</p>
            </div>
        );
}

export default SellProduct;