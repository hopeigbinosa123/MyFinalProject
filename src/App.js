import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from '../src/Pages/Home';
import ProductList from '../src/Pages/ProductsList';
import ProductDetail from '../src/Pages/ProductsDetail';
import Login from '../src/Pages/Login';
import Register from '../src/Pages/Register';
import UserProfile from '../src/Pages/UserProfile';
import SellProduct from '../src/Pages/SellProduct';
import Checkout from './Pages/checkout';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import { UserProvider } from './UserContext';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({ name: "John Doe" });
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Update the URL to match your backend server's URL
        const res = await fetch('http://localhost:5000/api/products');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Navbar products={products} />
          {loading && <p>Loading products...</p>}
          {error && <p>Error: {error}</p>}
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products" element={<ProductList products={products} />} />
            <Route path="/products/:id" element={<ProductDetail products={products} />} />
            <Route path="/login" element={<Login updateUser={updateUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile user={user} purchaseHistory={purchaseHistory} />} />
            <Route path="/sell-product" element={<SellProduct setPurchaseHistory={setPurchaseHistory} />} />
            <Route path="/checkout" element={<Checkout purchaseHistory={purchaseHistory} />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
