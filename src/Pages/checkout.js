import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/checkout.css';
import qrCode from '../Components/MyMarketPlace-qrcode.png'

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=hosted-buttons&disable-funding=venmo&currency=USD";
        script.async = true;
        script.onload = () => {
            if (window.paypal) {
                window.paypal.HostedButtons({
                    hostedButtonId: "YFF72S725ARH8",
                    onApprove: async (data) => {
                        // Call your backend to create an order
                        const response = await axios.post('/api/orders', {
                            orderId: data.orderID,
                            // Add additional order details if necessary
                        });
                        setOrderId(response.data.orderId);
                    },
                    onError: (err) => {
                        console.error("PayPal Button Rendering Error:", err);
                    }
                }).render("#paypal-container-YFF72S725ARH8");
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="checkout-page">
            <div id="paypal-container-YFF72S725ARH8"></div>
            {orderId && <div>Order ID: {orderId}</div>}
            <img src={qrCode} alt="Pay with PayPal" className='qr-code'/>
        </div>
    );
}

export default Checkout;