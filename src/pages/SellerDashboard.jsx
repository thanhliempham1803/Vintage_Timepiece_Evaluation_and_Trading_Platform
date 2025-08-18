import React, { useState } from 'react';
import './SellerDashboard.css';

const SellerDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Rolex Submariner 1965',
            brand: 'Rolex',
            model: 'Submariner',
            year: 1965,
            price: 15000,
            status: 'active',
            appraisalStatus: 'completed',
            image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=400',
            datePosted: '2024-01-15',
            views: 245,
            inquiries: 8
        },
       {
    id: 2,
    name: 'Omega Speedmaster 1970',
    brand: 'Omega',
    model: 'Speedmaster',
    year: 1970,
    price: 12000,
    status: 'active',
    appraisalStatus: 'pending',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    datePosted: '2024-02-10',
    views: 180,
    inquiries: 5
},
{
    id: 3,
    name: 'Patek Philippe Nautilus 1980',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    year: 1980,
    price: 35000,
    status: 'sold',
    appraisalStatus: 'completed',
    image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=400',
    datePosted: '2024-03-05',
    views: 320,
    inquiries: 12
},
{
    id: 4,
    name: 'Tag Heuer Monaco 1995',
    brand: 'Tag Heuer',
    model: 'Monaco',
    year: 1995,
    price: 9000,
    status: 'active',
    appraisalStatus: 'in_review',
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=400',
    datePosted: '2024-04-12',
    views: 95,
    inquiries: 2
},
{
    id: 5,
    name: 'Seiko Diver 1975',
    brand: 'Seiko',
    model: 'Diver',
    year: 1975,
    price: 3500,
    status: 'active',
    appraisalStatus: 'completed',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    datePosted: '2024-05-20',
    views: 60,
    inquiries: 1
}
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        brand: '',
        model: '',
        year: '',
        price: '',
        condition: 'excellent',
        description: '',
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitProduct = (e) => {
        e.preventDefault();
        console.log('New product:', newProduct);
        // Reset form
        setNewProduct({
            name: '',
            brand: '',
            model: '',
            year: '',
            price: '',
            condition: 'excellent',
            description: '',
            images: []
        });
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const renderOverview = () => (
        <div className="dashboard-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>12</h3>
                        <p>Active Listings</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2v20m8-10H4"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>$125,000</h3>
                        <p>Total Value</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2 3h20l-2 7H4L2 3zM6 14a2 2 0 100 4 2 2 0 000-4zM16 14a2 2 0 100 4 2 2 0 000-4z"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>8</h3>
                        <p>Sold This Month</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div className="stat-info">
                        <h3>5</h3>
                        <p>Pending Appraisals</p>
                    </div>
                </div>
            </div>

            <div className="recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                    <div className="activity-item">
                        <div className="activity-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div className="activity-content">
                            <p><strong>Appraisal completed</strong> for Rolex Submariner 1965</p>
                            <span className="activity-time">2 hours ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                            </svg>
                        </div>
                        <div className="activity-content">
                            <p><strong>New inquiry</strong> on Omega Speedmaster 1969</p>
                            <span className="activity-time">5 hours ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2v20m8-10H4"/>
                            </svg>
                        </div>
                        <div className="activity-content">
                            <p><strong>Price updated</strong> for Cartier Tank 1970</p>
                            <span className="activity-time">1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAddProduct = () => (
        <div className="dashboard-content">
            <div className="form-container">
                <h2>List New Watch</h2>
                <form onSubmit={handleSubmitProduct} className="product-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Watch Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newProduct.name}
                                onChange={handleInputChange}
                                placeholder="e.g., Rolex Submariner 1965"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Brand</label>
                            <select
                                name="brand"
                                value={newProduct.brand}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Brand</option>
                                <option value="Rolex">Rolex</option>
                                <option value="Omega">Omega</option>
                                <option value="Cartier">Cartier</option>
                                <option value="Patek Philippe">Patek Philippe</option>
                                <option value="Audemars Piguet">Audemars Piguet</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Model</label>
                            <input
                                type="text"
                                name="model"
                                value={newProduct.model}
                                onChange={handleInputChange}
                                placeholder="e.g., Submariner"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <input
                                type="number"
                                name="year"
                                value={newProduct.year}
                                onChange={handleInputChange}
                                placeholder="e.g., 1965"
                                min="1900"
                                max="2024"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                                placeholder="e.g., 15000"
                                min="0"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Condition</label>
                            <select
                                name="condition"
                                value={newProduct.condition}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="mint">Mint</option>
                                <option value="excellent">Excellent</option>
                                <option value="very-good">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                            placeholder="Describe the watch's history, condition, and any special features..."
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Images</label>
                        <div className="image-upload">
                            <div className="upload-area">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2v20m8-10H4"/>
                                </svg>
                                <p>Click to upload images or drag and drop</p>
                                <span>PNG, JPG up to 10MB each</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-secondary">Save as Draft</button>
                        <button type="submit" className="btn-primary">List Watch</button>
                    </div>
                </form>
            </div>
        </div>
    );

    const renderProductList = () => (
        <div className="dashboard-content">
            <div className="products-header">
                <h2>My Listings</h2>
                <div className="filter-controls">
                    <select className="filter-select">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="sold">Sold</option>
                    </select>
                </div>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            <div className={`status-badge ${product.status}`}>
                                {product.status}
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="product-price">${product.price.toLocaleString()}</p>
                            <div className="product-stats">
                                <span>{product.views} views</span>
                                <span>{product.inquiries} inquiries</span>
                            </div>
                            <div className="product-actions">
                                <button className="btn-edit">Edit</button>
                                <button 
                                    className="btn-delete"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderAppraisalRequest = () => (
        <div className="dashboard-content">
            <div className="appraisal-section">
                <h2>Request Appraisal</h2>
                <div className="appraisal-grid">
                    {products.map(product => (
                        <div key={product.id} className="appraisal-card">
                            <div className="appraisal-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="appraisal-info">
                                <h3>{product.name}</h3>
                                <p>Current Price: ${product.price.toLocaleString()}</p>
                                <div className={`appraisal-status ${product.appraisalStatus}`}>
                                    {product.appraisalStatus === 'completed' && 'Appraisal Complete'}
                                    {product.appraisalStatus === 'in-progress' && 'In Progress'}
                                    {product.appraisalStatus === 'pending' && 'Pending'}
                                </div>
                                <div className="appraisal-actions">
                                    {product.appraisalStatus === 'completed' ? (
                                        <button className="btn-view">View Report</button>
                                    ) : product.appraisalStatus === 'in-progress' ? (
                                        <button className="btn-secondary" disabled>In Progress</button>
                                    ) : (
                                        <button className="btn-primary">Request Appraisal</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderAppraisalReports = () => (
        <div className="dashboard-content">
            <div className="reports-section">
                <h2>Appraisal Reports</h2>
                <div className="reports-list">
                    <div className="report-card">
                        <div className="report-header">
                            <div className="report-watch">
                                <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Watch" />
                                <div>
                                    <h3>Rolex Submariner 1965</h3>
                                    <p>Appraised on Jan 15, 2024</p>
                                </div>
                            </div>
                            <div className="report-status completed">Completed</div>
                        </div>
                        <div className="report-content">
                            <div className="appraisal-details">
                                <div className="detail-item">
                                    <span>Appraised Value:</span>
                                    <strong>$18,500</strong>
                                </div>
                                <div className="detail-item">
                                    <span>Your Listed Price:</span>
                                    <strong>$15,000</strong>
                                </div>
                                <div className="detail-item">
                                    <span>Market Position:</span>
                                    <strong className="underpriced">Underpriced by 19%</strong>
                                </div>
                            </div>
                            <div className="recommendations">
                                <h4>Appraiser Recommendations:</h4>
                                <ul>
                                    <li>Consider increasing price to $17,500-$18,500 range</li>
                                    <li>Highlight the original bracelet and papers</li>
                                    <li>Emphasize the excellent case condition</li>
                                </ul>
                            </div>
                            <div className="report-actions">
                                <button className="btn-primary">Update Price</button>
                                <button className="btn-secondary">Download Report</button>
                            </div>
                        </div>
                    </div>

                    <div className="report-card">
                        <div className="report-header">
                            <div className="report-watch">
                                <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Watch" />
                                <div>
                                    <h3>Omega Speedmaster 1969</h3>
                                    <p>In progress since Jan 20, 2024</p>
                                </div>
                            </div>
                            <div className="report-status in-progress">In Progress</div>
                        </div>
                        <div className="report-content">
                            <div className="progress-info">
                                <p>Your watch is currently being evaluated by our certified appraiser. Expected completion: Jan 25, 2024</p>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '60%'}}></div>
                                </div>
                                <span className="progress-text">60% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="seller-dashboard">
            <div className="dashboard-header">
                <div className="header-content">
                    <div className="user-info">
                        <div className="user-avatar">
                            <img src="https://tse3.mm.bing.net/th/id/OIP.ZWdI7ywVal8olwt5bRtuAQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="User" />
                        </div>
                        <div>
                            <h1>Welcome back,Pep Guardiola</h1>
                            <p>Manage your vintage watch collection</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="dashboard-nav">
                <nav className="nav-tabs">
                    <button 
                        className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="7" height="7"/>
                            <rect x="14" y="3" width="7" height="7"/>
                            <rect x="14" y="14" width="7" height="7"/>
                            <rect x="3" y="14" width="7" height="7"/>
                        </svg>
                        Overview
                    </button>
                    <button 
                        className={`nav-tab ${activeTab === 'add-product' ? 'active' : ''}`}
                        onClick={() => setActiveTab('add-product')}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2v20m8-10H4"/>
                        </svg>
                        List Watch
                    </button>
                    <button 
                        className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`}
                        onClick={() => setActiveTab('products')}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        My Listings
                    </button>
                    <button 
                        className={`nav-tab ${activeTab === 'appraisal-request' ? 'active' : ''}`}
                        onClick={() => setActiveTab('appraisal-request')}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Request Appraisal
                    </button>
                    <button 
                        className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reports')}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                        </svg>
                        Reports
                    </button>
                </nav>
            </div>

            <div className="dashboard-main">
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'add-product' && renderAddProduct()}
                {activeTab === 'products' && renderProductList()}
                {activeTab === 'appraisal-request' && renderAppraisalRequest()}
                {activeTab === 'reports' && renderAppraisalReports()}
            </div>
        </div>
    );
};

export default SellerDashboard;