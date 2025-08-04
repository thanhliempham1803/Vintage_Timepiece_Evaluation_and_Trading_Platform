import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'buyer',
        agreeTerms: false
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
        console.log('Register data:', formData);
    };

    return (
        <div className="auth-container">
            <div className="auth-card register-card">
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
                    <h1 className="auth-title font-serif">Create Account</h1>
                    <p className="auth-subtitle">Join the premier marketplace for vintage timepieces</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-input"
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-input"
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

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
                        <label htmlFor="userType" className="form-label">I want to</label>
                        <select
                            id="userType"
                            name="userType"
                            className="form-select"
                            value={formData.userType}
                            onChange={handleChange}
                        >
                            <option value="buyer">Buy vintage watches</option>
                            <option value="seller">Sell vintage watches</option>
                            <option value="appraiser">Become an appraiser</option>
                            <option value="both">Both buy and sell</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="Create password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-input"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                   
                    <button type="submit" className="btn-primary">
                        Create Account
                        <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14m-7-7 7 7-7 7"/>
                        </svg>
                    </button>

                   
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
                </div>
            </div>

            <div className="auth-image">
                <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Luxury vintage watch collection" />
                <div className="image-overlay">
                    <h3 className="font-serif">Start Your Watch Trading Journey</h3>
                    <p>Connect with collectors, appraisers, and authentic vintage timepieces worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default Register;