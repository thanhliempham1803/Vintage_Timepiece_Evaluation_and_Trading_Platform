import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                  <Link to="/" >
                     <div className="logo">
                        <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                         <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span className="font-serif">VintageTime</span>
                    </div>
                 </Link>
                  
                    
                    <h1 className="auth-title font-serif">Welcome Back</h1>
                    <p className="auth-subtitle">Sign in to your account to continue trading vintage timepieces</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <span className="checkbox-custom"></span>
                            Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn-primary">
                        Sign In
                        <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14m-7-7 7 7-7 7"/>
                        </svg>
                    </button>

                    
                </form>

                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/register" className="auth-link">Sign up</Link></p>
                </div>
            </div>

            <div className="auth-image">
                <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Luxury vintage watch" />
                <div className="image-overlay">
                    <h3 className="font-serif">Discover Authentic Vintage Timepieces</h3>
                    <p>Join thousands of collectors in the world's most trusted watch marketplace</p>
                </div>
            </div>
        </div>
    );
};

export default Login;