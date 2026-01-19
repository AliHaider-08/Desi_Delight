import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import MenuManagement from './pages/admin/MenuManagement';
import OrderManagement from './pages/admin/OrderManagement';
import UserManagement from './pages/admin/UserManagement';

// Customer Pages
import Homepage from './pages/customer/Homepage';
import Menu from './pages/customer/Menu';
import FullMenu from './pages/customer/FullMenu';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
import OrderConfirmation from './pages/customer/OrderConfirmation';
import OurStory from './pages/customer/OurStory';
import Contact from './pages/customer/Contact';
import BlogPost from './pages/customer/BlogPost';
import BookTable from './pages/customer/BookTable';

// Auth Pages
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

// User Pages
import UserProfile from './pages/customer/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<MenuManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/users" element={<UserManagement />} />

        {/* Customer Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/full" element={<FullMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/book-table" element={<BookTable />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
