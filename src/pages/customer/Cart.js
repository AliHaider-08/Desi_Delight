import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chicken Biryani (Family Size)', price: 18.00, quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCtk4xLyafR-SZfvRCpQelhgtoaWnRKU608ZFtKXoHz_x33FGxs-O41PPO54UEjwyaYAPoFsJvENeXo2CXofi8O7JVhaToNOy0H3I5OD1lS9eZ7H46bPCKlzzF5KMfWeaCqULq3Te0L_zlTW-Up2dK54-Yi5VC5hXFQnQAj4N0dnEpsGYr33ezGxhAJKFotmLZ3ZNAX01kzT7YyiIIRLE1LDnF3H_TXxrHEdPMnl5YaDmHzWlu7A3ccwSGBD4JZSFn2ludiDXBRcc', notes: 'Extra Spicy, No Onions' },
    { id: 2, name: 'Garlic Naan', price: 3.50, quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuWyIrKAtX19K2R8HhnKGvBmaJ_lXrTQ0M9A_IyY1x8Avwn5ILTZsSrGXwZN-bl_-iO4R_tVO5fPscHSYhQriWDnANSyrZdgOV_W8vMES8u09-7EYis7Z9NFmrNtAHn_XGyiNU9veryvNuA9-FMXmDoTKkeNLyunX6cWNoJMf9_wCnRyQgRT0XHM78JF_xZJ2SucYnRdOGFA0SPmGlgEW_KknmZLfYkvPE9dELZnbTJHNu7n1DyC-BjQVsh4N819aIo24LwBh2-f8', notes: 'Butter Glazed' },
    { id: 3, name: 'Mango Lassi', price: 4.50, quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHakfqSX71LSMNI6-fEBil6KBaAKSZBuE_lCTOaJZIgNKGtr5D0wsOC6cbzqir17MDn4sR2ewoAbncQnTBgE08Ax-AV9KIV2jeSTKmUW5SrlPJ0YWp4H5j4j9bKgDC3x1oVkHF9-wvSwDjlwtgMo880U1jQs0o4SgUe_2R06sU3pxebSJoMtVWBzP4nxqs-WENStoVxDJLVgjejK59bK5-3k41xHXcwgQHk5lDjMLh7k0QWeCbUhmg8Y7rYZq5eFADVPcVjOv-8OI', notes: 'Chilled' },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07;
  const deliveryFee = 3.99;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 min-h-screen flex flex-col font-display selection:bg-primary/30">
      <Header />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-40 py-8 lg:py-12 mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-text-main dark:text-white mb-2">Your Cart</h1>
          <p className="text-text-secondary dark:text-gray-400">Review your selected items before checking out.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          <div className="flex-1 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-[#1a3326] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="shrink-0 size-[80px] rounded-lg bg-gray-100 overflow-hidden relative">
                      <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url('${item.image}')`}}></div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-text-main dark:text-white leading-tight">{item.name}</h3>
                      <p className="text-primary font-semibold mt-1">${item.price.toFixed(2)}</p>
                      <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">{item.notes}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 mt-2 sm:mt-0 pl-[96px] sm:pl-0">
                    <div className="flex items-center bg-[#f6f8f7] dark:bg-gray-800 rounded-lg p-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-700 text-text-main dark:text-gray-300 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <input className="w-8 bg-transparent text-center font-semibold text-text-main dark:text-white border-none p-0 focus:ring-0 text-sm" readOnly value={item.quantity} type="number"/>
                      <button onClick={() => updateQuantity(item.id, 1)} className="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-700 text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20" title="Remove item">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <Link to="/menu" className="inline-flex items-center gap-2 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium transition-colors">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="lg:w-[380px] shrink-0">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-[#1a3326] rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-black/20 overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-text-main dark:text-white mb-6">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-text-secondary dark:text-gray-400">
                      <span>Subtotal</span>
                      <span className="font-medium text-text-main dark:text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        Tax (7%)
                        <span className="material-symbols-outlined text-[14px] cursor-help text-gray-400" title="State and local taxes">info</span>
                      </span>
                      <span className="font-medium text-text-main dark:text-white">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary dark:text-gray-400">
                      <span>Delivery Fee</span>
                      <span className="font-medium text-text-main dark:text-white">${deliveryFee.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="mb-6 pt-6 border-t border-dashed border-gray-200 dark:border-gray-700">
                    <label className="block text-xs font-bold text-text-secondary dark:text-gray-400 uppercase tracking-wider mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <input className="flex-1 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm px-3 py-2.5 text-text-main dark:text-white focus:ring-2 focus:ring-primary placeholder-gray-400" placeholder="Enter code" type="text"/>
                      <button className="bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary font-bold px-4 rounded-lg text-sm transition-colors">Apply</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-lg font-bold text-text-main dark:text-white">Total</span>
                    <span className="text-2xl font-black text-text-main dark:text-white">${total.toFixed(2)}</span>
                  </div>
                  <Link to="/checkout" className="w-full bg-primary hover:bg-green-500 text-text-main font-bold py-3.5 px-4 rounded-lg shadow-md shadow-primary/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group">
                    Proceed to Checkout
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-4 text-gray-400 dark:text-gray-500">
                    <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wide">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                      Secure
                    </div>
                    <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wide">
                      <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                      Fast
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 p-3 rounded-lg flex gap-3 items-start">
                <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-[20px] shrink-0 mt-0.5">info</span>
                <p className="text-xs text-yellow-800 dark:text-yellow-200 leading-relaxed">
                  <span className="font-bold">Free Delivery</span> on orders over $50. You are ${(50 - total).toFixed(2)} away!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
