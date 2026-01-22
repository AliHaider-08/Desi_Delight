import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import { menuAPI } from '../../services/api';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const categories = ['All Items', 'Biryani & Rice', 'BBQ & Karahi', 'Breads', 'Beverages'];

  // Fetch menu items from API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await menuAPI.getMenuItems();
        setMenuItems(response.data);
      } catch (err) {
        setError('Failed to load menu items');
        console.error('Error fetching menu items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  // Dynamic search functionality
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    // Filter items based on search query and active category
    let filtered = menuItems;
    
    // Filter by category first
    if (activeCategory !== 'All Items') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Then filter by search query
    if (query.trim() !== '') {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.spicy && query.includes('spicy')) ||
        (item.rating && query.includes('rated') && query.includes(item.rating.toString()))
      );
    }
    
    setFilteredItems(filtered);
  };

  // Update filtered items when category changes
  React.useEffect(() => {
    handleSearchChange({ target: { value: searchQuery } });
  }, [activeCategory]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d1b13] dark:text-white font-display min-h-screen flex flex-col">
      <Header />
      
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2311d4b13' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Enhanced Hero Section */}
          <div className="relative overflow-hidden rounded-xl bg-[#102218] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-gold/20 animate-pulse"></div>
            <div className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-10 md:px-10 relative z-10" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuArexxcMX6iPws4llXKAKFSnvpHYW9qUt83Slxv_WPXDFZyaltBPa7VE_vgPbfegfIm_WVjURMgKsd363t83S1b3cRqN7MV0N81MHFRlxqu685pj-sF2gKvymVLEtfJGHzCAI4Mqgoq0qY5q8-RjeNauWpPgZYi3pcNQt8wbvFSpnEZPp_hYobzrsbmfVb5FTg6LkJ34zKNOo_sZl9jCdsEbqYpbrmIh3gg5xtishD84jNN8LDsPqK01W5U0a0qqpAwo0NeZj-0QIA')"}}>
              <div className="flex flex-col gap-2 text-left z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-accent-gold text-[#0d1b13] text-xs font-bold rounded-full animate-bounce">NEW</span>
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">LIMITED TIME</span>
                </div>
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-lg">
                  Free Delivery on orders over $50
                </h1>
                <h2 className="text-gray-200 text-sm md:text-base font-medium">Use code <span className="text-accent-gold font-bold text-lg">FRESH50</span> at checkout</h2>
              </div>
              <Link to="/cart" className="z-10 flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-accent-gold text-[#0d1b13] text-base font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/30 transform hover:scale-105">
                Order Now
              </Link>
            </div>
          </div>
          <div className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pb-2 pt-2 -mx-2 px-2 rounded-xl shadow-lg border border-[#e7f3ec] dark:border-[#1e3a2b]">
            <div className="flex flex-col gap-4">
              {/* Enhanced Search Bar */}
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#4c9a6c] group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="w-full h-12 rounded-lg bg-[#e7f3ec] dark:bg-[#1e3a2b] border border-[#cfe7d9] dark:border-[#2a4d3b] pl-12 pr-4 text-[#0d1b13] dark:text-white placeholder-[#4c9a6c] focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary transition-all" 
                  placeholder="Search menu items (e.g., Biryani, Naan, spicy)..." 
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#4c9a6c] hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">clear</span>
                  </button>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-gold transform scale-x-0 group-focus-within:scale-x-100 transition-transform"></div>
              </div>
              
              {/* Enhanced Category Tabs */}
              <div className="flex flex-col gap-3">
                <div className="flex overflow-x-auto pb-1 border-b border-[#cfe7d9] dark:border-[#1e3a2b] no-scrollbar">
                  <div className="flex gap-8 min-w-max px-2">
                    {categories.map((cat) => (
                      <button 
                        key={cat} 
                        onClick={() => setActiveCategory(cat)} 
                        className={`group flex flex-col items-center pb-3 border-b-[3px] transition-all relative ${
                          activeCategory === cat 
                            ? 'border-primary text-[#0d1b13] dark:text-white' 
                            : 'border-transparent text-[#4c9a6c] hover:text-primary'
                        }`}
                      >
                        <span className="text-sm font-bold">{cat}</span>
                        {activeCategory === cat && (
                          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-gold rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                {activeCategory === 'All Items' && 'restaurant_menu'}
                {activeCategory === 'Biryani & Rice' && 'rice_bowl'}
                {activeCategory === 'BBQ & Karahi' && 'outdoor_grill'}
                {activeCategory === 'Breads' && 'bakery_dining'}
                {activeCategory === 'Beverages' && 'local_cafe'}
              </span>
              {activeCategory === 'All Items' && 'All Menu Items'}
              {activeCategory === 'Biryani & Rice' && 'Biryani & Rice Specials'}
              {activeCategory === 'BBQ & Karahi' && 'BBQ & Karahi Delights'}
              {activeCategory === 'Breads' && 'Fresh Breads'}
              {activeCategory === 'Beverages' && 'Refreshing Beverages'}
              {searchQuery && (
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  ({filteredItems.length} results)
                </span>
              )}
            </h3>
            
            {loading && (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-primary animate-spin mb-4">refresh</span>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Loading menu items...</p>
              </div>
            )}
            
            {error && (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
                <p className="text-red-500 text-lg mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
            
            {!loading && !error && (
              <>
                {filteredItems.length === 0 ? (
                  <div className="text-center py-12">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 animate-bounce">search_off</span>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      No items found for "{searchQuery}"
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                      Try searching for different keywords or browse categories
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="group flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3ec] dark:border-[#1e3a2b] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Enhanced Image Container */}
                        <div className="h-48 w-full bg-gray-200 overflow-hidden relative">
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          {/* Rating Badge */}
                          {item.rating && (
                            <div className="absolute top-3 right-3 bg-white/95 dark:bg-black/90 backdrop-blur px-2 py-1 rounded-full text-xs font-bold text-[#0d1b13] dark:text-white flex items-center gap-1 shadow-lg border border-primary/20">
                              <span className="material-symbols-outlined text-amber-500 text-sm">star</span> {item.rating}
                            </div>
                          )}
                          
                          {/* Spicy Badge */}
                          {item.spicy && (
                            <div className="absolute top-3 left-3 bg-red-500/95 backdrop-blur px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg animate-pulse">
                              <span className="material-symbols-outlined text-sm">local_fire_department</span> Spicy
                            </div>
                          )}
                          
                          {/* New Badge */}
                          {item.id <= 6 && (
                            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-accent-gold text-[#0d1b13] px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                              NEW
                            </div>
                          )}
                          
                          <img alt={item.name} className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110" src={item.image} />
                        </div>
                        
                        {/* Enhanced Content */}
                        <div className="p-4 flex flex-col flex-grow relative">
                          {/* Decorative Element */}
                          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                          
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-[#0d1b13] dark:text-white group-hover:text-primary transition-colors">{item.name}</h4>
                            <span className="text-lg font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">{item.price}</span>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">{item.description}</p>
                          
                          {/* Enhanced Add to Cart Button */}
                          <button onClick={() => addToCart(item)} className="w-full mt-auto flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent-gold/10 border border-primary/30 py-2.5 text-sm font-bold text-primary hover:from-primary hover:to-accent-gold hover:text-[#0d1b13] transition-all duration-300 transform hover:scale-105">
                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-[100px] flex flex-col h-[calc(100vh-120px)] rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3ec] dark:border-[#1e3a2b] shadow-2xl overflow-hidden">
            {/* Enhanced Header */}
            <div className="p-5 border-b border-[#e7f3ec] dark:border-[#1e3a2b] bg-gradient-to-r from-[#f8fcfa] to-[#e7f3ec] dark:from-[#102218] dark:to-[#1e3a2b] flex justify-between items-center relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-gold"></div>
              <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_cart</span>
                Your Order
              </h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-xs font-bold text-primary animate-pulse">Pickup in 20m</span>
                <span className="px-2 py-1 bg-accent-gold/20 rounded text-xs font-bold text-accent-gold">{cart.length} items</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">shopping_cart_empty</span>
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                  <Link to="/menu" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80">
                    <span className="material-symbols-outlined">restaurant_menu</span>
                    Browse Menu
                  </Link>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-[#f8fcfa] dark:bg-[#102218] rounded-lg border border-[#e7f3ec] dark:border-[#1e3a2b] hover:shadow-md transition-all">
                    <div className="size-16 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 relative overflow-hidden" style={{backgroundImage: `url('${item.image}')`}}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-bold text-[#0d1b13] dark:text-white line-clamp-1">{item.name}</p>
                        <p className="text-sm font-bold text-primary">{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center rounded-md border border-[#e7f3ec] dark:border-[#2a4d3b]">
                          <button className="size-6 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-[#e7f3ec] dark:hover:bg-[#2a4d3b] rounded-l-md transition-colors">
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#0d1b13] dark:text-white">1</span>
                          <button className="size-6 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-[#e7f3ec] dark:hover:bg-[#2a4d3b] rounded-r-md transition-colors">
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>
                        <button className="text-red-500 hover:text-red-600 transition-colors">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Enhanced Footer */}
            <div className="p-5 border-t border-[#e7f3ec] dark:border-[#1e3a2b] bg-gradient-to-r from-[#f8fcfa] to-[#e7f3ec] dark:from-[#102218] dark:to-[#1e3a2b]">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Tax (8%)</span>
                  <span>${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Delivery</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#0d1b13] dark:text-white mt-2 pt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
                  <span>Total</span>
                  <span className="text-primary">${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 bg-gradient-to-r from-primary to-accent-gold text-[#0d1b13] text-sm font-bold hover:brightness-110 transition-all shadow-lg transform hover:scale-105">
                <span className="material-symbols-outlined">lock</span>
                Secure Checkout
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <Link to="/cart" className="w-full shadow-2xl flex items-center justify-between rounded-xl bg-gradient-to-r from-[#0d1b13] to-[#1a2a1f] text-white p-4 h-16 border border-primary/30">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary text-[#0d1b13] font-bold text-sm animate-pulse">{cart.length}</div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-300">Total</span>
              <span className="text-sm font-bold text-white">${(cartTotal * 1.08).toFixed(2)}</span>
            </div>
          </div>
          <span className="font-bold text-sm flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-lg">
            View Cart <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
