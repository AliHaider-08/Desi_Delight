import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = ({ variant = 'default' }) => {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#e7f3ec] dark:border-[#1e3b2b]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">restaurant</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#0d1b13] dark:text-white">Desi Delight</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/menu" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
            <Link to="/book-table" className="text-sm font-medium hover:text-primary transition-colors">Book Table</Link>
            <Link to="/blog/1" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/our-story" className="text-sm font-medium hover:text-primary transition-colors">Our Story</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-[#0d1b13] dark:text-white">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold">2</span>
            </Link>
            
            {!loading && isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 rounded-lg text-[#0d1b13] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <span className="material-symbols-outlined">account_circle</span>
                  <span className="hidden sm:block text-sm font-medium">{user?.fullName?.split(' ')[0] || 'User'}</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                    <Link
                      to="/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="material-symbols-outlined">person</span>
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="material-symbols-outlined">receipt_long</span>
                      My Orders
                    </Link>
                    <hr className="my-1 border-gray-200 dark:border-gray-700" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="material-symbols-outlined">logout</span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/admin/login" className="hidden sm:flex text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  Admin
                </Link>
                <Link to="/login" className="hidden sm:flex text-sm font-medium hover:text-primary transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="hidden sm:flex bg-primary hover:bg-primary/90 text-white dark:text-[#0d1b13] px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/25">
                  Sign Up
                </Link>
              </>
            )}
            
            <button className="md:hidden p-2 rounded-lg text-[#0d1b13] dark:text-white hover:bg-black/5 dark:hover:bg-white/10">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
