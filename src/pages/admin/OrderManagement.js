import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

const OrderManagement = () => {
  const [filter, setFilter] = useState('all');

  const orders = [
    { id: '#5092', time: '2 mins ago', customer: 'Sarah Khan', type: 'Home Delivery', items: '1x Chicken Karahi (Full), 2x Garlic Naan, 1x Raita', amount: 'PKR 2,450', status: 'pending', driver: null, urgent: true },
    { id: '#5091', time: '15 mins ago', customer: 'Ahmed Ali', type: 'Pickup', items: '2x Chicken Biryani, 1x Salad', amount: 'PKR 1,800', status: 'cooking', driver: null },
    { id: '#5088', time: '28 mins ago', customer: 'Fatima Z.', type: 'Home Delivery', items: '1x Mutton Handi, 4x Roghni Naan', amount: 'PKR 3,200', status: 'ready', driver: 'Bilal K.', driverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uuaVb5KY2UFdbkg7xt8uv_uzsYjRuAhOQ1RPC72RA9JoFQjAbxliLBNhArUc7bLcb7RAtFLv6bk9FHXOqkULkHcaFjrzOjOSrp_cNk44dCo4pHs__d9iQMOm31rTk7Lr4WPc8sLwb4sh3IX07KKbD12X0UrO_EJM2_t-gEKPKrF4luoOg3Q3uS91Tf_uLGEP-lfS7_UeBPQACcnASIX7VRtZ_DxQvIZX2ycX3k9qcCRvC_rLGf_L5W2Vef-DdLMyQFEEUAAD2uY' },
    { id: '#5085', time: '35 mins ago', customer: 'Usman T.', type: 'Home Delivery', items: '3x Seekh Kabab, 1x Mint Chutney', amount: 'PKR 1,250', status: 'pending', driver: null },
    { id: '#5080', time: '52 mins ago', customer: 'Zainab B.', type: 'Pickup', items: '1x Gulab Jamun (1kg)', amount: 'PKR 950', status: 'delivered', driver: null },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900',
      cooking: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-900',
      ready: 'bg-primary/20 text-green-800 dark:text-green-400 border-green-200 dark:border-green-900',
      delivered: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700',
    };
    return badges[status] || badges.pending;
  };

  const getStatusDot = (status) => {
    const colors = {
      pending: 'bg-yellow-500',
      cooking: 'bg-blue-500',
      ready: 'bg-primary',
      delivered: '',
    };
    return colors[status] || colors.pending;
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <AdminSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="w-full shrink-0 border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-8 py-6 z-10">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-text-main dark:text-white text-3xl font-black tracking-tight">Order Management</h2>
              <p className="text-text-muted dark:text-gray-400 text-base">Real-time overview of all restaurant orders.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-text-main dark:text-white">
                <span className="material-symbols-outlined text-primary text-lg">add_circle</span>
                Manual Order
              </button>
              <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg text-primary text-sm font-medium">
                <span className="material-symbols-outlined text-lg animate-pulse">radio_button_checked</span>
                Live Updates On
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="flex flex-col gap-8 max-w-[1400px] mx-auto pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-text-muted dark:text-gray-400 text-sm font-medium">New Orders</p>
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">shopping_cart</span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold leading-none">12</p>
                  <span className="text-primary text-sm font-medium mb-1">+20%</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-text-muted dark:text-gray-400 text-sm font-medium">Revenue Today</p>
                  <span className="material-symbols-outlined text-blue-500 bg-blue-500/10 p-1.5 rounded-lg">payments</span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold leading-none">PKR 45.2k</p>
                  <span className="text-primary text-sm font-medium mb-1">+15%</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-text-muted dark:text-gray-400 text-sm font-medium">Avg Prep Time</p>
                  <span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-1.5 rounded-lg">timer</span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold leading-none">18m</p>
                  <span className="text-primary text-sm font-medium mb-1">-2m</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-text-muted dark:text-gray-400 text-sm font-medium">Active Drivers</p>
                  <span className="material-symbols-outlined text-purple-500 bg-purple-500/10 p-1.5 rounded-lg">delivery_dining</span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold leading-none">5</p>
                  <span className="text-text-muted text-sm font-medium mb-1">/ 8 Total</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
                <button onClick={() => setFilter('all')} className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-lg shadow-md transition-all ${filter === 'all' ? 'bg-text-main text-white dark:bg-white dark:text-background-dark' : 'bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark text-text-main dark:text-white border border-transparent hover:border-border-light dark:hover:border-border-dark'}`}>
                  <span className="material-symbols-outlined text-[20px]">list</span>
                  <span className="text-sm font-medium">All Orders</span>
                </button>
                <button onClick={() => setFilter('pending')} className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-lg transition-all ${filter === 'pending' ? 'bg-text-main text-white dark:bg-white dark:text-background-dark shadow-md' : 'bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark text-text-main dark:text-white border border-transparent hover:border-border-light dark:hover:border-border-dark'}`}>
                  <span className="material-symbols-outlined text-[20px] text-yellow-600">schedule</span>
                  <span className="text-sm font-medium">Pending <span className="ml-1 bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded-full">3</span></span>
                </button>
                <button onClick={() => setFilter('cooking')} className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-lg transition-all ${filter === 'cooking' ? 'bg-text-main text-white dark:bg-white dark:text-background-dark shadow-md' : 'bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark text-text-main dark:text-white border border-transparent hover:border-border-light dark:hover:border-border-dark'}`}>
                  <span className="material-symbols-outlined text-[20px] text-blue-500">local_fire_department</span>
                  <span className="text-sm font-medium">Cooking</span>
                </button>
                <button onClick={() => setFilter('ready')} className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-lg transition-all ${filter === 'ready' ? 'bg-text-main text-white dark:bg-white dark:text-background-dark shadow-md' : 'bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark text-text-main dark:text-white border border-transparent hover:border-border-light dark:hover:border-border-dark'}`}>
                  <span className="material-symbols-outlined text-[20px] text-primary">shopping_bag</span>
                  <span className="text-sm font-medium">Ready</span>
                </button>
              </div>
              <div className="flex flex-1 w-full lg:w-auto gap-3 min-w-0">
                <div className="relative flex-1 min-w-[200px]">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
                  <input className="w-full h-11 pl-10 pr-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary/20 focus:border-primary text-text-main dark:text-white placeholder:text-text-muted text-sm transition-all" placeholder="Search ID, Name..." type="text"/>
                </div>
                <div className="relative w-48 hidden md:block">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">calendar_today</span>
                  <input className="w-full h-11 pl-10 pr-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary/20 focus:border-primary text-text-main dark:text-white placeholder:text-text-muted text-sm transition-all cursor-pointer" placeholder="Today" readOnly type="text"/>
                </div>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark">
                    <tr>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Order ID</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Time</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Customer</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Items</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Amount</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Status</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">Driver</th>
                      <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-muted text-right whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    {orders.map((order, idx) => (
                      <tr key={idx} className={`group hover:bg-background-light dark:hover:bg-[#23352b] transition-colors ${order.status === 'delivered' ? 'opacity-75' : ''} ${order.urgent ? 'relative' : ''}`}>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-text-main dark:text-white">{order.id}</span>
                            {order.urgent && <div className="size-2 rounded-full bg-primary animate-pulse" title="New Order"></div>}
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <p className={`text-sm font-medium ${order.urgent ? 'text-red-600 dark:text-red-400' : 'text-text-main dark:text-white'}`}>{order.time}</p>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex flex-col">
                            <p className="text-sm font-medium text-text-main dark:text-white">{order.customer}</p>
                            <p className="text-xs text-text-muted">{order.type}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6 min-w-[200px]">
                          <p className="text-sm text-text-main dark:text-gray-300 line-clamp-1" title={order.items}>{order.items}</p>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <p className="text-sm font-bold text-text-main dark:text-white">{order.amount}</p>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.status)}`}>
                            {order.status !== 'delivered' && <span className={`size-1.5 rounded-full ${getStatusDot(order.status)} ${order.status === 'cooking' ? 'animate-pulse' : ''}`}></span>}
                            {order.status === 'delivered' && <span className="material-symbols-outlined text-[14px]">check</span>}
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          {order.driver ? (
                            <div className="flex items-center gap-2">
                              {order.driverImage && <div className="size-6 rounded-full bg-gray-200 bg-center bg-cover" style={{backgroundImage: `url('${order.driverImage}')`}}></div>}
                              <span className="text-sm font-medium text-text-main dark:text-white">{order.driver}</span>
                            </div>
                          ) : (
                            <span className="text-sm text-text-muted italic">--</span>
                          )}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-2">
                            {order.status === 'pending' && (
                              <button className="px-3 py-1.5 bg-primary hover:bg-green-600 text-white text-xs font-medium rounded-lg transition-colors shadow-sm">
                                Accept
                              </button>
                            )}
                            {order.status === 'cooking' && (
                              <button className="px-3 py-1.5 border border-border-light dark:border-border-dark bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 text-text-main dark:text-white text-xs font-medium rounded-lg transition-colors">
                                Mark Ready
                              </button>
                            )}
                            {order.status === 'ready' && (
                              <button className="px-3 py-1.5 border border-border-light dark:border-border-dark bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 text-text-main dark:text-white text-xs font-medium rounded-lg transition-colors">
                                Details
                              </button>
                            )}
                            {order.status === 'delivered' && (
                              <button className="px-3 py-1.5 border border-border-light dark:border-border-dark bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 text-text-main dark:text-white text-xs font-medium rounded-lg transition-colors">
                                View
                              </button>
                            )}
                            <button className="p-1.5 text-text-muted hover:text-text-main dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                              <span className="material-symbols-outlined text-[20px]">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark px-6 py-4 flex items-center justify-between">
                <p className="text-sm text-text-muted">Showing <span className="font-bold text-text-main dark:text-white">1-5</span> of <span className="font-bold text-text-main dark:text-white">42</span> orders</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-border-light dark:border-border-dark rounded-md bg-white dark:bg-surface-dark text-text-muted disabled:opacity-50 text-sm" disabled>Previous</button>
                  <button className="px-3 py-1 border border-border-light dark:border-border-dark rounded-md bg-white dark:bg-surface-dark text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 text-sm">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;
