import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between shrink-0 transition-colors duration-200 z-20 h-full hidden lg:flex">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat bg-cover rounded-xl size-10 shrink-0 shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh_ZvOcN7DgDxfF6t4YPbRG1UCa-F7M15AD9M-3T-Z8vJ9Pep3Q6eWViz_rMtOOXI5S_ldHdXUUXwON-Q4Y3FFzpQBBY6aEzseOturZF4W45C1FpQZhzKfqt7iCsQekaZHX6ZxdgtjZa8DXX09lfGcgGfRxA_AnIZaduN_yVMJi0QwEf6bhbcxyzjP8LlycGYbxRBChH_qKCHezll6vEixSfanLp7uv1vR1EzJdo1O4TXREOY2sZoajjjZ3i-iHp2tpKFHMXkHrJM')"}}></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-[#0d1b13] dark:text-white text-base font-bold leading-tight truncate">Spice Garden</h1>
              <p className="text-[#4c9a6c] dark:text-primary/80 text-xs font-medium leading-tight">Admin Portal</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <Link to="/admin" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive('/admin') ? 'bg-primary/10 text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link to="/admin/users" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive('/admin/users') ? 'bg-primary/10 text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[22px]">group</span>
            <span className="text-sm font-medium">User Management</span>
          </Link>
          <Link to="/admin/menu" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive('/admin/menu') ? 'bg-primary/10 text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[22px]">restaurant_menu</span>
            <span className="text-sm font-medium">Menu Management</span>
          </Link>
          <Link to="/admin/orders" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive('/admin/orders') ? 'bg-primary/10 text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span className="text-sm font-medium">Order Management</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            <span className="material-symbols-outlined text-[22px]">logout</span>
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
