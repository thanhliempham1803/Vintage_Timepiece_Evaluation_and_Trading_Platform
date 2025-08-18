import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import SellerDashboard from './pages/SellerDashboard';
import './App.css';
export default function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';
  const hideHeader = location.pathname === '/SellerDashboard'  ;
  return (
    <>
      {!hideHeader && !hideLayout && <Header />}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/SellerDashboard" element={<SellerDashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}
