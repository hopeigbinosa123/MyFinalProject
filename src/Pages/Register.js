/**
 * The Register component in this code snippet handles user registration by capturing user input for
 * name, email, and password, validating the input, and making a POST request to a specified API
 * endpoint.
 * @returns The `Register` component is being returned. It is a functional component that contains a
 * form for user registration with fields for name, email, and password. The component also includes
 * error handling for required fields and email format validation. The form submission is handled by
 * the `handleRegister` function, which makes a POST request to a local API endpoint for user
 * registration.
 */

import React, {useState} from "react";
import axios from "axios";
import '../styles/Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let formErrors = {};
        let valid = true;
        if(!name){
            formErrors.name = "Name is required";
            valid = false;
        }
        if(!email){
            formErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)){
            formErrors.email = "Invalid email format";
            valid = false;
        }
        if(!password){
            formErrors.password = "Password is required";
            valid = false;
        } else if(password.length < 6){
            formErrors.password = "Password must be at least 6 characters long";
            valid = false;
        }
        setErrors(formErrors);
        return valid;
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        if(!validateForm()){
            return;
        }

        try{
            const response = await axios.post('/api/register', {email, password, name});
            setSuccessMessage('User registered successfully');
            setEmail('');
            setPassword('');
            setName('');
            setErrors({});
            console.log(response.data);
        }catch{
            console.error('Error registering user');
            setErrors({...errors, form: 'Failed to register, Please try again.'});
        }
    }
    return(
        <div className="auth-form">
            <h2>Register</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errors.form && <div className="error-message">{errors.form}</div>}
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <div className="error-message">{errors.name}</div>}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <div className="error-message">{errors.email}</div>}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {errors.password && <div className="error-message">{errors.password}</div>}
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    )
}

export default Register;