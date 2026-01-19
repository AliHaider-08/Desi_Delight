import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const OrderConfirmation = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-light min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm border border-border-light dark:border-border-dark flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-3">Order Confirmed!</h1>
              <p className="text-text-sub dark:text-gray-400 text-lg max-w-md">Thank you for dining with Spice of Lahore. We've received your order and the kitchen has started preparing your meal.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 w-full">
                <button className="flex-1 min-w-[200px] max-w-xs h-12 bg-primary hover:bg-green-500 text-background-dark font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">location_on</span>
                  Track Order
                </button>
                <Link to="/" className="flex-1 min-w-[200px] max-w-xs h-12 border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                  Return to Home
                </Link>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMtu81DBKFZDCnGX0DJceIP3hvZWuXeInPFSayiBVdWgQNRusKrn0i8Pm0-Y4ccpCchj5goCmYTy8j-Jr5EdXJRXRvW-dE_sI1SKxycg1qX7YRbs3yLe5AVPuvXzkYM4conEjEXXSuqr98cIUc0y_Tbd5gC18I_4rgyxWg6hBuCLKXeI9Hh5GD_Es5PJvzg63YxxviG59ni7sEUunfMY3rofePsKEKAcJOp1jYZgYLXrQiChUAaVVL0Xp35eCReQSgxC89djSD4UQ')"}}>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-400 mb-0.5">Order ID</p>
                  <p className="text-lg font-bold text-text-main dark:text-white font-mono">#ORD-7829</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Estimated Delivery</h3>
                    <div className="flex items-center gap-2 justify-center md:justify-start text-primary">
                      <span className="material-symbols-outlined">schedule</span>
                      <span className="text-2xl font-bold">35 - 45 mins</span>
                    </div>
                    <p className="text-sm text-text-sub dark:text-gray-400 mt-2">Arriving around 7:45 PM</p>
                  </div>
                  <div className="flex-1 w-full max-w-sm">
                    <div className="flex items-center justify-between relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full -z-10"></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1 bg-primary rounded-full -z-10"></div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-background-dark flex items-center justify-center shadow-md ring-4 ring-white dark:ring-card-dark">
                          <span className="material-symbols-outlined text-sm font-bold">receipt_long</span>
                        </div>
                        <span className="text-xs font-semibold text-primary">Confirmed</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card-dark border-2 border-primary text-primary flex items-center justify-center shadow-md">
                          <span className="material-symbols-outlined text-sm">skillet</span>
                        </div>
                        <span className="text-xs font-medium text-text-main dark:text-white">Cooking</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-400 flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm">local_shipping</span>
                        </div>
                        <span className="text-xs text-gray-400">On Way</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-400 flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm">home</span>
                        </div>
                        <span className="text-xs text-gray-400">Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-sm border border-border-light dark:border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-text-sub dark:text-gray-300">
                  <span className="material-symbols-outlined">home_pin</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white text-base">Delivery Address</h4>
                  <p className="text-text-sub dark:text-gray-400 mt-1 text-sm">Home • 123 Main Street, Apt 4B<br/>Lahore, Punjab, 54000</p>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:text-green-600 dark:hover:text-green-400 whitespace-nowrap">Edit Instructions</button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark sticky top-24">
              <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/30">
                <h3 className="text-lg font-bold text-text-main dark:text-white">Order Summary</h3>
                <button className="text-xs font-medium bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">print</span> Print
                </button>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-text-main dark:text-white shrink-0">2x</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-text-main dark:text-white text-sm">Chicken Biryani</h4>
                      <span className="font-medium text-text-main dark:text-white text-sm">$24.00</span>
                    </div>
                    <p className="text-xs text-text-sub dark:text-gray-400 mt-0.5">Extra spicy, Raita included</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-text-main dark:text-white shrink-0">1x</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-text-main dark:text-white text-sm">Garlic Naan</h4>
                      <span className="font-medium text-text-main dark:text-white text-sm">$3.50</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-text-main dark:text-white shrink-0">1x</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-text-main dark:text-white text-sm">Seekh Kebab Platter</h4>
                      <span className="font-medium text-text-main dark:text-white text-sm">$12.00</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border-light dark:border-border-dark my-2"></div>
                <div className="flex justify-between items-center text-sm text-text-sub dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>$39.50</span>
                </div>
                <div className="flex justify-between items-center text-sm text-text-sub dark:text-gray-400">
                  <span>Delivery Fee</span>
                  <span>$3.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-text-sub dark:text-gray-400">
                  <span>Tax (10%)</span>
                  <span>$3.95</span>
                </div>
                <div className="border-t border-dashed border-border-light dark:border-border-dark my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-text-main dark:text-white">Total</span>
                  <span className="text-xl font-bold text-primary">$46.45</span>
                </div>
              </div>
              <div className="p-4 bg-primary/10 dark:bg-primary/5 rounded-b-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-card-dark rounded-full shadow-sm text-primary">
                    <span className="material-symbols-outlined text-lg">support_agent</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-main dark:text-white">Need Help?</p>
                    <p className="text-xs text-text-sub dark:text-gray-400">Call (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button aria-label="Share on Facebook" className="w-8 h-8 rounded-full bg-white dark:bg-card-dark flex items-center justify-center text-gray-500 hover:text-primary hover:bg-green-50 dark:hover:text-white dark:hover:bg-primary/20 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">share</span>
                  </button>
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

export default OrderConfirmation;
