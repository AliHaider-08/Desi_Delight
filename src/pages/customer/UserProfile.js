import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    firstName: 'Aisha',
    lastName: 'Khan',
    email: 'aisha.khan@example.com',
    phone: '+1 (555) 123-4567'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Account Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Manage your profile details, orders, and preferences.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 sticky top-24">
              <div className="flex items-center gap-3 mb-6 p-2">
                <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2boMjNatnUWiSQ6iGV3BN3qOkGNuee3aIkNg-utTVJrzFYMiVRJWuOjm3xkhHaqX7n6dhsJIRhxtDc9O6FXKMRBch3IC94-4ACkPwTzbrU3s7V5t0PqC10tMi_3u1E2m9gvmaweXpxjQlaripVud3bRyHNzuM36Z0cf9KDJsxxWXBRzJExgF3mE9lNo4sbY_O3ukDtWjtQSXl4hKAYEprCOnnHLMUbQTeKaGR0t59k1mmNrEAYxtlLFHEzznZ0JGQcXVQ0N4Kw2s')"}}></div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold leading-tight">Aisha Khan</span>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wide">Gold Member</span>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                <button 
                  onClick={() => setActiveTab('personal')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'personal' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">person</span>
                  Personal Info
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'orders' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">receipt_long</span>
                  Order History
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'addresses' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">location_on</span>
                  Saved Addresses
                </button>
                <button 
                  onClick={() => setActiveTab('payment')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'payment' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">credit_card</span>
                  Payment Methods
                </button>
                <button 
                  onClick={() => setActiveTab('preferences')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'preferences' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">settings</span>
                  Preferences
                </button>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2 mx-4"></div>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors">
                  <span className="material-symbols-outlined">logout</span>
                  Log Out
                </button>
              </nav>
            </div>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-8">
            {activeTab === 'personal' && (
              <>
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-cover bg-center border-4 border-slate-50 dark:border-slate-700 shadow-md shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqWdfki0OK65OVrjZttGVN0L5t5oxqFFuRw2F8JtS_DWXmEsVRMV0smF739Z5TwNebvoOdrbzTMbIJ2AuQMyOSPVXihjKrdzMhKRJqFKwW6Lv6Q-IN5As4koNNqGDP-MF8kMRzGiOFgdVudwZvJfCokZk1f0m1g80h97cpbdQyLbwh3j-MneN5ydX_OYF4dc2X7TTKFMmEZZjiih4MrADe34BfiI94TULDDcR_3I-GGSFHRGXbhwsTFW3i-lkAA1406TJ50i6UWfI')"}}></div>
                    <div className="flex flex-col items-center sm:items-start flex-1 text-center sm:text-left pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Aisha Khan</h2>
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider border border-yellow-200 dark:border-yellow-800">Gold Member</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 mb-4">Member since 2021 • <span className="text-primary font-medium">1,250 Points</span></p>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 mb-2 overflow-hidden">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 w-full text-right">250 points to Platinum Status</p>
                    </div>
                  </div>
                </div>
                <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">badge</span>
                      Personal Information
                    </h3>
                    <button className="text-primary hover:text-primary-dark text-sm font-medium">Edit</button>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                      <input 
                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5" 
                        type="text" 
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                      <input 
                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5" 
                        type="text" 
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                      <input 
                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5" 
                        type="email" 
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input 
                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5" 
                        type="tel" 
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
                    <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm shadow-primary/30">Save Changes</button>
                  </div>
                </section>
              </>
            )}
            {activeTab === 'addresses' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">home_pin</span>
                    Saved Addresses
                  </h3>
                  <button className="flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add New
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group rounded-lg border border-primary bg-primary/5 p-4 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">home</span>
                        <span className="font-bold text-slate-900 dark:text-white">Home</span>
                        <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Default</span>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                        <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      123 Maple Avenue, Apt 4B<br/>
                      Springfield, IL 62704
                    </p>
                  </div>
                  <div className="relative group rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 bg-white dark:bg-slate-900/50 p-4 flex flex-col gap-2 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">work</span>
                        <span className="font-bold text-slate-900 dark:text-white">Work</span>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                        <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      456 Business Park Dr, Suite 200<br/>
                      Springfield, IL 62701
                    </p>
                  </div>
                </div>
              </section>
            )}
            {activeTab === 'orders' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">history</span>
                    Recent Orders
                  </h3>
                  <Link to="/orders" className="text-primary hover:text-primary-dark text-sm font-medium">View All</Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th className="px-6 py-3 font-medium" scope="col">Order ID</th>
                        <th className="px-6 py-3 font-medium" scope="col">Date</th>
                        <th className="px-6 py-3 font-medium" scope="col">Items</th>
                        <th className="px-6 py-3 font-medium" scope="col">Total</th>
                        <th className="px-6 py-3 font-medium" scope="col">Status</th>
                        <th className="px-6 py-3 font-medium text-right" scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr className="bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#SR-2984</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Oct 24, 2023</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400 max-w-xs truncate">Chicken Biryani, Garlic Naan, Mango Lassi</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">$32.50</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            <span className="size-1.5 rounded-full bg-green-500"></span>
                            Delivered
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary hover:text-primary-dark font-medium text-xs border border-primary hover:bg-primary/5 px-3 py-1.5 rounded transition-colors">Reorder</button>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#SR-2890</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Oct 15, 2023</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400 max-w-xs truncate">Butter Chicken, Basmati Rice, 2x Samosa</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">$28.00</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            <span className="size-1.5 rounded-full bg-green-500"></span>
                            Delivered
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary hover:text-primary-dark font-medium text-xs border border-primary hover:bg-primary/5 px-3 py-1.5 rounded transition-colors">Reorder</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}
            {activeTab === 'payment' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                    Payment Methods
                  </h3>
                  <button className="text-primary hover:text-primary-dark text-sm font-medium">Manage</button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-700 rounded-lg max-w-md bg-white dark:bg-slate-900/50">
                    <div className="h-10 w-16 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                      <img alt="Mastercard Logo" className="h-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6OgcBuPXPX2XcWPZ1kJWJwS8bHJ15B2-21-somrH5S-TtHsGpqUJkZ9oEqRW0c4gGMM_hYbYWc1ryEz5tnjvaZCZ78RT_eZgzpdEpaJE4hOVWQ_uiEVXa5FMeQW32pqUtm0SWVL82gUMXZ1IiuPtKc8xpor1FRezDxNd8J-aQjMEmXxNo5r_v47vgDABoM_vooHtnIOYLc5HHjU5sSTEvq0RVYzoXO2q-IsyE_AyvkL47c26yqiNifRhhUU8m_4M09myn9-enoZE"/>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Mastercard ending in 4242</span>
                      <span className="text-xs text-slate-500">Expires 12/25</span>
                    </div>
                    <span className="ml-auto bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded font-medium">Default</span>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
