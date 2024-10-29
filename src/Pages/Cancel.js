import React from "react";
import '../styles/Cancel.css'

const Cancel = () => {
    return (
        <div className="cancel-page">
            <h1>Order Cancelled</h1>
            <p>Your order has been cancelled. Thank you for your understanding.</p>
            <button onClick={() => window.history.back()}>Go back</button>
        </div>
    )
}

export default Cancel;