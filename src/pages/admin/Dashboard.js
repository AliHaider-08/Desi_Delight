import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d1b13] dark:text-gray-100 antialiased h-screen flex overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-full min-w-0">
        <header className="h-16 bg-background-light dark:bg-background-dark border-b border-transparent flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shrink-0">
          <div className="flex items-center lg:hidden">
            <button className="p-2 -ml-2 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="flex-1 max-w-lg hidden md:flex">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-white dark:bg-surface-dark text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm shadow-sm transition-shadow" placeholder="Search orders, menu items, or customers..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-background-dark"></span>
            </button>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Ahmed Khan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Owner</p>
              </div>
              <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">AK</div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-[#0d1b13] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Welcome back, Ahmed</h2>
                <p className="text-[#4c9a6c] dark:text-gray-400 text-base font-normal">Here is what is happening with your restaurant today.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium hidden sm:block">{currentDate}</p>
                <button className="flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-green-200 dark:shadow-none">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Add New Dish</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col justify-between gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Daily Sales</p>
                    <p className="text-[#0d1b13] dark:text-white text-2xl font-bold mt-1">PKR 45,000</p>
                  </div>
                  <div className="p-2 bg-[#e7f3ec] dark:bg-primary/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                  <span>+12% from yesterday</span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">New Orders</p>
                    <p className="text-[#0d1b13] dark:text-white text-2xl font-bold mt-1">23</p>
                  </div>
                  <div className="p-2 bg-[#e7f3ec] dark:bg-primary/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                  <span>+5% from yesterday</span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Reservations</p>
                    <p className="text-[#0d1b13] dark:text-white text-2xl font-bold mt-1">4</p>
                  </div>
                  <div className="p-2 bg-[#fff4e5] dark:bg-orange-500/20 rounded-lg text-orange-600 dark:text-orange-400">
                    <span className="material-symbols-outlined">event_seat</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-lg">info</span>
                  <span>Requires action</span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 p-5 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Visitors</p>
                    <p className="text-[#0d1b13] dark:text-white text-2xl font-bold mt-1">120</p>
                  </div>
                  <div className="p-2 bg-[#e0f2fe] dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined">visibility</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                  <span>+8% from yesterday</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-[#0d1b13] dark:text-white text-lg font-bold">Weekly Revenue Overview</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                      <p className="text-3xl font-bold text-[#0d1b13] dark:text-white">PKR 280,000</p>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">+15%</span>
                    </div>
                  </div>
                  <select className="bg-gray-50 dark:bg-white/5 border-none text-sm rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 focus:ring-1 focus:ring-primary cursor-pointer">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                  </select>
                </div>
                <div className="relative w-full aspect-[2/1] max-h-[250px] mt-4">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 478 150">
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="236" x2="236" y1="0" y2="150">
                        <stop stopColor="#11d462" stopOpacity="0.2"></stop>
                        <stop offset="1" stopColor="#11d462" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear)"></path>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" fill="none" stroke="#11d462" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                </div>
                <div className="flex justify-between mt-4 px-2">
                  <span className="text-xs font-medium text-gray-400">Mon</span>
                  <span className="text-xs font-medium text-gray-400">Tue</span>
                  <span className="text-xs font-medium text-gray-400">Wed</span>
                  <span className="text-xs font-medium text-gray-400">Thu</span>
                  <span className="text-xs font-medium text-gray-400">Fri</span>
                  <span className="text-xs font-medium text-gray-400">Sat</span>
                  <span className="text-xs font-medium text-gray-400">Sun</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex-1">
                  <h3 className="text-[#0d1b13] dark:text-white text-lg font-bold mb-4">Quick Actions</h3>
                  <div className="flex flex-col gap-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/5 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <span className="material-symbols-outlined text-[20px]">edit_note</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Create Blog Post</span>
                      </div>
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-[20px]">chevron_right</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/5 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-2 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                          <span className="material-symbols-outlined text-[20px]">book_online</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">View Reservations</span>
                      </div>
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-[20px]">chevron_right</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/5 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                          <span className="material-symbols-outlined text-[20px]">percent</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">New Deal/Offer</span>
                      </div>
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-[20px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center flex-wrap gap-4">
                <h3 className="text-[#0d1b13] dark:text-white text-lg font-bold">Recent Orders</h3>
                <a href="#" className="text-primary text-sm font-medium hover:underline">View All Orders</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-gray-800">
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Items</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#0d1b13] dark:text-white">#ORD-2394</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="bg-center bg-no-repeat bg-cover rounded-full size-6" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGU8ExZ9zo_TlMz8wSkFTNiJcDazh4OHii-UIxIuvPQBZLcqpHt3H38IJQT0WQ-v3Psb3D6HwralcYJb_tCmvoV75mggRWLN7KK9T52VLvV2Cm5J3AbAOh573-q26RqIIM8maZ0n3QAF9wqtsuq_VMxAaCUd5QmvdZgs4lhDGhIuqUe7nKlx1c_KwaAuF5upvq7oguYKcYrHHs6N1FqmgSr_oWOTqGNdNu_Ll7_oZi8hVFQ1ZOCXCIXJq-aYrObM4x3HxpRiQx568')"}}></div>
                          Sarah J.
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Chicken Biryani, Naan x2</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#0d1b13] dark:text-white">PKR 1,250</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Cooking</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">12 mins ago</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#0d1b13] dark:text-white">#ORD-2393</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="bg-center bg-no-repeat bg-cover rounded-full size-6" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy4irRBOm4Lz97DGkhCooHx_taVyBDOPbQ7AdmXy6cV7V_CiwhkU6F581XMyIVMStcW17xa6BdC16_4NoPXnwQ4MMJBnVmce1GWNKzyjs4_quBGru5re1QznPIXd0dAvlATgvpsEViHXn1tsELPJhdmP4wYjbdH7utaVxReltYY1AoY2h47x0OpjMHmRg9XdBid53vdCeI5yRH8ynEnoacxjAU9H_tRdi-GBVZol7czlaZiIEMGidt-OpDSxmnIL0Iu-ZIj-vBrGc')"}}></div>
                          Ali R.
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Seekh Kebab Platter</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#0d1b13] dark:text-white">PKR 850</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Ready</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">25 mins ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
