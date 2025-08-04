import { Link } from 'react-router-dom';
export default function Footer() {
  return (
<footer id="contact" className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-logo">
                                <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span className="font-serif">VintageTime</span>
                            </div>
                            <p>The premier marketplace for authentic vintage timepieces, connecting collectors worldwide.</p>
                            <div className="social-links">
                                <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                                <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a>
                                <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                            </div>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Platform</h3>
                            <ul>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Sell Your Watch</a></li>
                                <li><a href="#">Buy Watches</a></li>
                                <li><a href="#">Become an Appraiser</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Authentication Guide</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Contact</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="contact-item">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="m4 4 16 0 0 16-16 0z"/>
                                        <path d="m22 6-10 7L2 6"/>
                                    </svg>
                                    <span>support@vintagetime.com</span>
                                </div>
                                <div className="contact-item">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    <span>New York, NY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; 2024 VintageTime. All rights reserved. | Privacy Policy | Terms of Service</p>
                    </div>
                </div>
            </footer>
    );
}