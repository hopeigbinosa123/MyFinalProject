import React from "react";
import '../styles/Success.css';

const Success = () => {
    return (
        <div className="success-page">
            <h1>Thank you for your purchase!</h1>
            <p>Your order has been successfully placed.</p>
            <p>You can track your order status on your <a href="">Order History</a> page.</p>
        </div>
    );
}

export default Success;