import React, { useState } from 'react';
import './register.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'buyer',
    });
 const navigate = useNavigate(); // Hook để điều hướng
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu
    if (formData.password.length < 6 || formData.password.length > 20) {
        toast.error('Password must be between 6 and 20 characters');
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        toast.error('Password and confirm password do not match');
        return;
    }

    // Lấy danh sách email đã tồn tại từ localStorage
    const existingEmails = JSON.parse(localStorage.getItem('emails')) || [];

    // Kiểm tra xem email đã tồn tại chưa
    if (existingEmails.includes(formData.email)) {
        toast.error('Email already exists');
        return;
    }

    // Thêm email mới vào danh sách và lưu lại vào localStorage
    existingEmails.push(formData.email);
    localStorage.setItem('emails', JSON.stringify(existingEmails));

    // Lấy dữ liệu người dùng đã đăng ký từ localStorage (nếu có)
    const registeredUsers = JSON.parse(localStorage.getItem('registerData')) || []; 

    // Kiểm tra nếu email đã tồn tại trong mảng người dùng
    const emailExists = registeredUsers.some(user => user.email === formData.email);
    if (emailExists) {
        toast.error('Email already registered');
        return;
    }

    // Thêm người dùng mới vào danh sách
    registeredUsers.push(formData);

    // Lưu lại danh sách người dùng vào localStorage
    localStorage.setItem('registerData', JSON.stringify(registeredUsers));

    // Thông báo thành công
    toast.success('Account created successfully!');

    // Điều hướng người dùng dựa trên userType
    if (formData.userType === 'buyer') {
        navigate('/product');
    } else if (formData.userType === 'seller') {
        navigate('/SellerDashboard');
    } else if (formData.userType === 'appraiser') {
        navigate('/appraiser');
    } else if (formData.userType === 'both') {
        navigate('/both');
    }
};





    return (
        <div className="auth-container">
            <div className="auth-card register-card">
                <div className="auth-header">
                    <Link to="/">
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
                                placeholder="Enter 6-20 characters"
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
  <ToastContainer />
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
