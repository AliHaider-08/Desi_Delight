import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const orderItems = [
    { name: 'Special Chicken Biryani', quantity: 1, price: 850, notes: 'Regular, Extra Spicy' },
    { name: 'Garlic Naan', quantity: 2, price: 120 },
    { name: 'Mint Margarita', quantity: 1, price: 350 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = orderType === 'delivery' ? 150 : 0;
  const gst = (subtotal + deliveryFee) * 0.16;
  const total = subtotal + deliveryFee + gst;

  const handlePlaceOrder = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
          <Link to="/cart" className="hover:text-primary transition-colors">Cart</Link>
          <span className="mx-2 material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-primary">Checkout</span>
          <span className="mx-2 material-symbols-outlined text-[16px]">chevron_right</span>
          <span>Confirmation</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">Secure Checkout</h1>
              <p className="text-slate-500 dark:text-slate-400">Complete your order details below.</p>
            </div>
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Order Type & Time
              </h2>
              <div className="space-y-6">
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <label className="flex-1 cursor-pointer">
                    <input checked={orderType === 'delivery'} onChange={() => setOrderType('delivery')} className="peer sr-only" name="order_type" type="radio" value="delivery"/>
                    <div className="flex items-center justify-center gap-2 py-2.5 rounded-md transition-all text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                      Delivery
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input checked={orderType === 'pickup'} onChange={() => setOrderType('pickup')} className="peer sr-only" name="order_type" type="radio" value="pickup"/>
                    <div className="flex items-center justify-center gap-2 py-2.5 rounded-md transition-all text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">storefront</span>
                      Pickup
                    </div>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Date</label>
                    <select className="w-full h-11 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                      <option>Today, Oct 24</option>
                      <option>Tomorrow, Oct 25</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Time</label>
                    <select className="w-full h-11 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                      <option>ASAP (30-45 mins)</option>
                      <option>18:00 - 18:30</option>
                      <option>18:30 - 19:00</option>
                      <option>19:00 - 19:30</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person_pin</span>
                Customer Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input className="w-full h-11 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" placeholder="e.g. Ali Khan" type="text"/>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">+92</span>
                    <input className="w-full h-11 pl-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" placeholder="300 1234567" type="tel"/>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Delivery Address</label>
                  <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary resize-none" placeholder="House #, Street, Area/Sector..." rows="2"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">City</label>
                    <select className="w-full h-11 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Karachi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Nearby Landmark (Optional)</label>
                    <input className="w-full h-11 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" placeholder="e.g. Near Liberty Market" type="text"/>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">payments</span>
                Payment Method
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="cursor-pointer relative group">
                  <input checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="peer sr-only" name="payment" type="radio" value="cod"/>
                  <div className="h-full p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary flex flex-col items-center justify-center text-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-slate-400 peer-checked:text-primary">payments</span>
                    <span className="text-sm font-medium">Cash on Delivery</span>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary">
                    <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
                  </div>
                </label>
                <label className="cursor-pointer relative group">
                  <input checked={paymentMethod === 'mobile_money'} onChange={() => setPaymentMethod('mobile_money')} className="peer sr-only" name="payment" type="radio" value="mobile_money"/>
                  <div className="h-full p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary flex flex-col items-center justify-center text-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-slate-400 peer-checked:text-primary">phone_iphone</span>
                    <span className="text-sm font-medium">JazzCash / EasyPaisa</span>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary">
                    <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
                  </div>
                </label>
                <label className="cursor-pointer relative group">
                  <input checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="peer sr-only" name="payment" type="radio" value="bank"/>
                  <div className="h-full p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary flex flex-col items-center justify-center text-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-slate-400 peer-checked:text-primary">account_balance</span>
                    <span className="text-sm font-medium">Bank Transfer</span>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary">
                    <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
                  </div>
                </label>
              </div>
            </section>
          </div>
          <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-bold text-lg">Your Order</h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-3">
                  {orderItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                      <div className="flex gap-2">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded px-1.5 py-0.5 text-xs font-semibold h-fit">{item.quantity}x</div>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.name}</span>
                          {item.notes && <span className="text-xs text-slate-500">{item.notes}</span>}
                        </div>
                      </div>
                      <span className="font-medium">Rs. {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <hr className="border-dashed border-slate-300 dark:border-slate-700 my-4"/>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Delivery Fee</span>
                    <span>Rs. {deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>GST (16%)</span>
                    <span>Rs. {Math.round(gst)}</span>
                  </div>
                </div>
                <hr className="border-slate-200 dark:border-slate-700 my-4"/>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-black text-xl text-primary">Rs. {Math.round(total).toLocaleString()}</span>
                </div>
                <button onClick={handlePlaceOrder} className="w-full bg-primary hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <span>Place Order</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span>Secure Checkout with SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
