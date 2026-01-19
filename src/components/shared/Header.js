import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ variant = 'default' }) => {
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
            <Link to="/login" className="hidden sm:flex bg-primary hover:bg-primary/90 text-white dark:text-[#0d1b13] px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/25">
              Order Now
            </Link>
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
