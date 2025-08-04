import { Link } from 'react-router-dom';

export default function Header() {
  return (
       <nav className="navbar">
                <div className="nav-container">
                         <a href="#">
<div className="logo">
                   
                        <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span  className="font-serif"> VintageTime </span>
                    </div>
                         </a>
                    
                    <ul className="nav-links">
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="nav-buttons">
                           <Link to="/login" ><a className="btn btn-secondary" >Sign In</a> </Link>
                           <Link to="/register" ><a className="btn btn-primary" >Get Started</a> </Link>
                    </div>
                </div>
            </nav>
  );
}
