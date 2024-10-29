/**
 * The `Login` function in this code snippet handles user login functionality, including form
 * validation, login with email and password, and login with Google.
 * @returns The `Login` component is being returned. It is a functional component in React that handles
 * user login functionality. The component includes a form for users to input their email and password
 * to log in, with validation for the form fields. It also provides an option to sign in with Google.
 * The component displays error messages if there are any issues during the login process.
 */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Auth.css';
import { signInWithGoogle } from '../auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = '';
        if (!email) {
            formErrors += 'Email is required. ';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors += 'Invalid email format. ';
        }
        if (!password) {
            formErrors += 'Password is required. ';
        }
        setErrors(formErrors);
        return formErrors === '';
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors(''); // Clear previous errors
        if (!validateForm()) return; // Validate the form

        setLoading(true);
        try {
            await axios.post('/api/login', { email, password });
            setEmail('');
            setPassword('');
            localStorage.setItem('loginCount', (parseInt(localStorage.getItem('loginCount')) || 0) + 1);
            navigate('/profile');
        } catch (error) {
            console.error('Login Error', error);
            setErrors('Invalid email or password. Please try again.'); // Unified error message
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate('/profile'); // Redirect after successful Google sign-in
        } catch (error) {
            console.error('Google Sign-In Error', error);
            setErrors('Failed to sign in with Google. Please try again.');
        }
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                {errors && <div className="error-message" role="alert">{errors}</div>}
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" disabled={loading}> 
                    {loading ? 'Logging in...' : 'Login'} 
                </button>

                <p>Or</p>

                <div>
                    <button type="button" onClick={handleGoogleSignIn}>
                        Sign in with Google
                    </button>
                </div>

                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    );
};

export default Login;