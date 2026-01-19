import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

const MenuManagement = () => {
  const [activeCategory, setActiveCategory] = useState('Rice & Biryani');
  const [viewMode, setViewMode] = useState('list');

  const categories = [
    { name: 'Rice & Biryani', icon: 'rice_bowl', count: 8, active: true },
    { name: 'Starters', icon: 'local_fire_department', count: 12 },
    { name: 'BBQ & Tandoor', icon: 'kebab_dining', count: 6 },
    { name: 'Karahi Specials', icon: 'soup_kitchen', count: 5 },
    { name: 'Breads', icon: 'bakery_dining', count: 4 },
    { name: 'Desserts', icon: 'icecream', count: 3 },
    { name: 'Beverages', icon: 'local_bar', count: 8 },
  ];

  const menuItems = [
    { id: 1, name: 'Chicken Biryani', description: 'Aromatic basmati rice cooked with tender chicken and spices.', price: '$12.99', spice: 2, tags: ['Halal'], inStock: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfY6pvnf1uhEk9gZVpcF5egthcsfMLXOQQqCplG2-0rAjQJiTLPM766CGKQNfBx4FZ_Fb2FgJnAiTetZ08M7o7P7OXBGWUaFgDT_45TaicLP-5snWqjArxi_2gMbnMuMvhJq6bkGei_qDfWbxgsTgsxIFUZDY2QFk0A4fcGaltLltz0iuxsQ3muF1maLr3RtGd8nOTWDUVaMcgClbjzQmiHogsu4WzbF8_SpJkD86DGJYTbGOOSDU0LWb_d2zeKZPP_1LltQ18Xvg' },
    { id: 2, name: 'Vegetable Biryani', description: 'Seasonal vegetables cooked with premium long-grain rice.', price: '$10.50', spice: 1, tags: ['Veg', 'GF'], inStock: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXBeSYNT61bX_acEJz45WIqGyMgmZr40gRenj_JTs-IQQZmhl6d_fvp8P8yltbNpb8njUW0OahU0YEXqubiEHehE3TZdaIxzDJcPHKkYvrwt9NKdqxwkZ9oG0OcRrRKC6EoemG5czC0QEMgDbOV_J9HvTXBAZrt25gREURV3JsrEwLooRdTxdl2F2Rgwg2hoB4ydxyVpSROqSvrxpyQgCIe-fuRXW3rouEWRhwN2QNAUHm2AoG-PXAUfYohyZoZrnj2Gol7MSobF8' },
    { id: 3, name: 'Lamb Biryani', description: 'Succulent lamb pieces layered with saffron infused rice.', price: '$14.99', spice: 3, tags: ['Halal'], inStock: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTxVNLKUITtZmk1d7iSv1z3QnSFl35bWulkODWEf2tQJiAeUT1tYa1ByBf6r5Qofp-NBWu2v8rtxR37IR3QvOqfG5_bZl5pedueGLUXTuNLYdQPinW-jM4RGODdg4B3F_8E7QNHSMZBlCOCmukSPu0TZW28Q5M3oj64oLcV8eyeyoZ5u6cR5VV1moTmwV-2JV4GaFOGVeC3WmpwQ2xjHz11smDTONjNQz0GTolEkF1k0qD76ynslpmPTnDUfTIW2hUNbX5ZnMVO2M' },
  ];

  const renderSpiceLevel = (level) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((i) => (
          <span key={i} className={`material-symbols-outlined text-[18px] ${i <= level ? 'text-orange-500 fill-current' : 'text-gray-300'}`}>
            local_fire_department
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white antialiased min-h-screen flex flex-col overflow-hidden">
      <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-border-color bg-surface-light dark:bg-surface-dark px-10 py-3 z-20">
        <div className="flex items-center gap-4 text-text-main dark:text-white">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">restaurant_menu</span>
          </div>
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Karachi Kitchen Admin</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#dashboard">Dashboard</a>
            <a className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#orders">Orders</a>
            <a className="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-0.5" href="#menu">Menu Management</a>
            <a className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#settings">Settings</a>
          </nav>
          <div className="flex gap-2">
            <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-hover-bg hover:bg-primary/20 transition-colors text-text-main dark:text-white dark:bg-surface-dark/50">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>notifications</span>
            </button>
            <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-hover-bg hover:bg-primary/20 transition-colors text-text-main dark:text-white dark:bg-surface-dark/50">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>account_circle</span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="flex-none w-72 bg-surface-light dark:bg-surface-dark border-r border-border-color flex flex-col h-full overflow-y-auto hidden lg:flex">
          <div className="p-5 flex flex-col h-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-text-main dark:text-white text-lg font-bold leading-normal">Menu Categories</h1>
                <p className="text-text-secondary text-xs font-normal leading-normal">Drag handles to reorder sections</p>
              </div>
              <div className="flex flex-col gap-1">
                {categories.map((cat, idx) => (
                  <div key={idx} className={`group flex items-center justify-between gap-3 px-3 py-3 rounded-lg cursor-pointer border-l-4 transition-colors ${cat.active ? 'bg-primary/10 border-primary' : 'hover:bg-hover-bg dark:hover:bg-surface-dark/50 border-transparent'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${cat.active ? 'text-primary' : 'text-gray-400 group-hover:text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity'}`}>drag_indicator</span>
                      <span className={`material-symbols-outlined ${cat.active ? 'text-text-main dark:text-white' : 'text-text-secondary'}`}>{cat.icon}</span>
                      <p className={`${cat.active ? 'text-text-main dark:text-white font-bold' : 'text-text-secondary'} text-sm leading-normal`}>{cat.name}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat.active ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-gray-500'}`}>{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-border-color">
              <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-surface-light border border-dashed border-primary text-primary hover:bg-primary/5 transition-colors text-sm font-bold leading-normal">
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span>Add Category</span>
              </button>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark relative">
          <div className="flex-none px-6 py-5 md:px-10 md:py-8 border-b border-border-color bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm z-10">
            <div className="flex flex-col gap-6 max-w-[1200px] mx-auto w-full">
              <div className="flex flex-wrap justify-between items-end gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-text-main dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Rice & Biryani</h1>
                  <p className="text-text-secondary text-base font-normal leading-normal">Manage your rice dishes, availability, and pricing.</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-hover-bg dark:bg-surface-dark rounded-lg p-1 flex">
                    <button onClick={() => setViewMode('list')} className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm dark:bg-gray-700 text-primary' : 'text-text-secondary hover:text-primary'}`}>
                      <span className="material-symbols-outlined text-[20px]">view_list</span>
                    </button>
                    <button onClick={() => setViewMode('grid')} className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm dark:bg-gray-700 text-primary' : 'text-text-secondary hover:text-primary'}`}>
                      <span className="material-symbols-outlined text-[20px]">grid_view</span>
                    </button>
                  </div>
                  <button className="flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-green-600 transition-colors text-white text-sm font-bold leading-normal shadow-md shadow-primary/20">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span className="truncate">Add New Item</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <label className="flex flex-col min-w-40 h-10 w-full md:max-w-xs group">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-border-color bg-surface-light dark:bg-surface-dark focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <div className="text-text-secondary flex items-center justify-center pl-3">
                      <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-secondary/70 px-3 text-sm font-normal leading-normal" placeholder="Search dishes..." />
                  </div>
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
                  <button className="flex items-center gap-2 px-3 h-10 rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark text-text-main dark:text-white text-sm font-medium hover:bg-hover-bg transition-colors whitespace-nowrap">
                    <span>Status: All</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 h-10 rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark text-text-main dark:text-white text-sm font-medium hover:bg-hover-bg transition-colors whitespace-nowrap">
                    <span>Spice Level</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-6 md:p-10">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="rounded-xl border border-border-color bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-hover-bg/50 dark:bg-surface-dark border-b border-border-color">
                      <th className="p-4 w-12 text-center text-text-secondary">
                        <span className="material-symbols-outlined text-[20px]">drag_handle</span>
                      </th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider">Dish</th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider hidden md:table-cell">Details</th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider">Price</th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider hidden sm:table-cell">Spice</th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider hidden lg:table-cell">Tags</th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider">Status</th>
                      <th className="p-4 text-text-secondary text-xs font-bold uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color">
                    {menuItems.map((item) => (
                      <tr key={item.id} className={`group hover:bg-hover-bg/30 dark:hover:bg-white/5 transition-colors ${!item.inStock ? 'bg-red-50/50 dark:bg-red-900/10' : ''}`}>
                        <td className="p-4 text-center cursor-move text-gray-300 group-hover:text-text-secondary">
                          <span className="material-symbols-outlined">drag_indicator</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className={`relative size-12 flex-none rounded-lg overflow-hidden bg-gray-200 ${!item.inStock ? 'grayscale' : ''}`}>
                              <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                            </div>
                            <div>
                              <div className="text-text-main dark:text-white font-bold text-sm">{item.name}</div>
                              <div className="text-text-secondary text-xs md:hidden">{item.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 hidden md:table-cell max-w-xs">
                          <p className="text-text-secondary text-sm truncate">{item.description}</p>
                        </td>
                        <td className="p-4">
                          <span className="text-text-main dark:text-white font-medium text-sm">{item.price}</span>
                        </td>
                        <td className="p-4 hidden sm:table-cell">
                          {renderSpiceLevel(item.spice)}
                        </td>
                        <td className="p-4 hidden lg:table-cell">
                          <div className="flex gap-2">
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className={`px-2 py-1 rounded text-xs font-medium border ${tag === 'Halal' ? 'bg-blue-50 text-blue-700 border-blue-100' : tag === 'Veg' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input checked={item.inStock} className="sr-only peer" type="checkbox" readOnly />
                            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                            <span className={`ms-2 text-xs font-medium hidden xl:inline-block ${item.inStock ? 'text-primary' : 'text-red-500'}`}>
                              {item.inStock ? 'In Stock' : 'Sold Out'}
                            </span>
                          </label>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="size-8 flex items-center justify-center rounded-lg bg-white border border-border-color text-text-secondary hover:text-primary hover:border-primary transition-colors shadow-sm">
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded-lg bg-white border border-border-color text-text-secondary hover:text-red-500 hover:border-red-500 transition-colors shadow-sm">
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
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

export default MenuManagement;
