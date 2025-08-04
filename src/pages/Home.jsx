export default function Home() {
  return (
    <>
{/* Hero Section */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="font-serif">
                            Your Trusted
                            <span className="highlight">Vintage Watch</span>
                            Marketplace
                        </h1>
                        <p>
                            Connect with certified appraisers, secure buyers, and authentic vintage timepieces. 
                            The premier platform for luxury watch trading with complete peace of mind.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-large btn-hero-primary">
                                Start Selling
                                <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                                </svg>
                            </button>
                            <button className="btn btn-large btn-hero-secondary">Browse Watches</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-image-container">
                            <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                 alt="Luxury vintage watch"/>
                            <div className="hero-badge">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2 className="font-serif">How It Works</h2>
                        <p>Our streamlined process ensures secure, authenticated transactions for vintage timepieces</p>
                    </div>
                    
                    <div className="steps">
                        <div className="step">
                            <div className="step-card">
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
                                    </svg>
                                </div>
                                <div className="step-number">1</div>
                                <h3 className="font-serif">Sell</h3>
                                <p>List your vintage timepiece with detailed photos and documentation. Our platform guides you through the process.</p>
                            </div>
                        </div>
                        
                        <div className="step">
                            <div className="step-card">
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div className="step-number">2</div>
                                <h3 className="font-serif">Appraise</h3>
                                <p>Certified experts evaluate authenticity, condition, and market value using advanced authentication methods.</p>
                            </div>
                        </div>
                        
                        <div className="step">
                            <div className="step-card">
                                <div className="step-icon">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <div className="step-number">3</div>
                                <h3 className="font-serif">Buy Securely</h3>
                                <p>Complete transactions with confidence using our escrow service and authenticity guarantee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="font-serif">Why Choose VintageTime</h2>
                        <p>Industry-leading security and expertise for luxury watch transactions</p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2 3h20l-2 7H4L2 3zM6 14a2 2 0 100 4 2 2 0 000-4zM16 14a2 2 0 100 4 2 2 0 000-4z"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Escrow Payments</h3>
                            <p>Secure payment protection until both parties are satisfied with the transaction.</p>
                        </div>
                        
                        <div className="feature">
                            <div className="feature-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Verified Appraisers</h3>
                            <p>Only certified professionals with proven expertise in vintage timepieces.</p>
                        </div>
                        
                        <div className="feature">
                            <div className="feature-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Authenticity Reports</h3>
                            <p>Comprehensive documentation and certification for every timepiece.</p>
                        </div>
                        
                        <div className="feature">
                            <div className="feature-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Secure Transactions</h3>
                            <p>End-to-end encryption and fraud protection for complete peace of mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Roles */}
            <section className="user-roles">
                <div className="container">
                    <div className="section-header">
                        <h2 className="font-serif">Built For Everyone</h2>
                        <p>Whether you're selling, buying, or appraising, our platform serves your needs</p>
                    </div>
                    
                    <div className="roles-grid">
                        <div className="role">
                            <div className="role-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Sellers</h3>
                            <p>Maximize your watch's value with professional appraisals and access to serious collectors. Our platform ensures fair pricing and secure transactions.</p>
                        </div>
                        
                        <div className="role">
                            <div className="role-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="m22 21-3-3m0 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Buyers</h3>
                            <p>Discover authentic vintage timepieces with complete documentation. Every purchase comes with authenticity guarantees and detailed provenance.</p>
                        </div>
                        
                        <div className="role">
                            <div className="role-icon">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="font-serif">Appraisers</h3>
                            <p>Join our network of certified professionals. Offer your expertise to collectors and earn competitive fees for authentication services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2 className="font-serif">What Our Users Say</h2>
                        <p>Trusted by collectors and dealers worldwide</p>
                    </div>
                    
                    <div className="testimonials-grid">
                        <div className="testimonial">
                            <div className="stars">
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                            </div>
                            <p>"The authentication process gave me complete confidence in my purchase. The 1960s Omega I bought exceeded all expectations."</p>
                            <div className="testimonial-author">
                                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Michael Chen"/>
                                <div>
                                    <h4>Michael Chen</h4>
                                    <span>Watch Collector</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial">
                            <div className="stars">
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                            </div>
                            <p>"Sold my father's vintage Rolex collection here. The appraisal was thorough and I got exactly what it was worth. Exceptional service."</p>
                            <div className="testimonial-author">
                                <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Sarah Williams"/>
                                <div>
                                    <h4>Sarah Williams</h4>
                                    <span>Estate Seller</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial">
                            <div className="stars">
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                                <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                            </div>
                            <p>"As a certified appraiser, this platform connects me with serious collectors. The tools and support make my work more efficient."</p>
                            <div className="testimonial-author">
                                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150" alt="David Rodriguez"/>
                                <div>
                                    <h4>David Rodriguez</h4>
                                    <span>Certified Appraiser</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="font-serif">Ready to Start Trading?</h2>
                        <p>Join thousands of collectors, sellers, and appraisers in the world's most trusted vintage watch marketplace</p>
                        <div className="cta-buttons">
                            <button className="btn btn-large btn-cta-primary">Start Selling Today</button>
                            <button className="btn btn-large btn-cta-secondary">Browse Premium Watches</button>
                        </div>
                    </div>
                </div>
            </section>
             </>
    );
}