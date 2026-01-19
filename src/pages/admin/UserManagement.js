import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

const UserManagement = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const users = [
    { id: 1, name: 'Ahmed Khan', email: 'ahmed@example.com', phone: '+92 300 1234567', role: 'Admin', status: 'active', lastActive: '2 mins ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm9ezY0ILOKewpzHKNcTU__grgGkbwNquztcZEv2WncsOMVXPzXOoUVV3EMpIxq0DN2AjOtpAneVkg0t0HfPgVEt2_PRqCZ-GU4ckW9WioXP2HC3Cl-JeKvElqJz7ASYmrdhP2EenV5pb2z-pw8dTaQzbclFa1cYIBWeaPcXbnstWF2BnAilVLFyypCnSEwScoscXGu8F-Hvquq9eaAiWHeD1xE1_8sHxU6q0y7lLEinmT4nKmGvDJWWD25bv5ho88JEFnisRp68c' },
    { id: 2, name: 'Sarah Bibi', email: 'sarah@example.com', phone: '+92 321 7654321', role: 'Customer', status: 'active', lastActive: '2 days ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXtFKamvWYwSPnJVxO3heYe3_maCX7YoRlDOQMHJ3-HoJRWQ9WjemtlM8HaMM1wJK7I7x0e4BhIgq7al0EsXwfgdHpBWTfRVg8ipv6qX1FDH-Z12CUySHOU3kLVTG_43B1D3R_fYuNom1-FDaEqdajfcCOGynPsPqBRQ4drH_1HMcs4Y_awtD7klfVQrPsj1ES7ih6D4-NlmOEj_gP6apfFso3DQtY_GOw61HtZUWMvJF3MSc2nx7BFDEkBaGBSi_fhu5gOKTnSV8' },
    { id: 3, name: 'Bilal Rider', email: 'bilal@delivery.com', phone: '+92 333 9988776', role: 'Delivery Boy', status: 'blocked', lastActive: '1 week ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOfRsGttRQHEwOxl5xUPSAKgw9A0vhSDLcBeMv01-EBjIP14Jjrs7Ukd9cArAH8FFv7lKTtxYVxE2Nb8rPbUZRrh7J1Ez0cRhk2VAZ1-9GJuv3ya_4LH-7bWhqRw9J431Uib8YGLaX-dPeuLDsNRS7rxGSGJlSEBXr5qntRU4lqzrtwnMFsPbSUqgbbalytL3a935URbk1SzNPFd6iZh04N31ckR0LwVMFg4JWW1Sgbz7Y97sdJSqPGQdOZJU-JQQ3KWFUY5xQ0oA' },
    { id: 4, name: 'Fatima Ali', email: 'fatima@example.com', phone: '+92 312 5554443', role: 'Customer', status: 'pending', lastActive: 'Never', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8QZVkzoaGoRU20_4Ub7PBYpx6dll99I4SUoPAAi3YAtEu3dV2F0-ywscTzauYE3xxPACT_Mq-KlQA-Oh8ox5NdBtSNwwbdT9a6-moRRsimTIUKoSpcTBNYcdexQPGcx4rNYd7oIHwunTCGsjcqT_nbzdqN8oEJtf-n5fzcaCvRrqtzI7X8ooBv3FbJW6jMjCpYL4LjQ0j_acds_NqlpSQsWDr7jTWH0LCL0x74ZIkJAA9cEhs5R9-J2tYhssOrjcMknHWehu0Ug' },
    { id: 5, name: 'Usman Zia', email: 'usman@example.com', phone: '+92 345 6789012', role: 'Delivery Boy', status: 'active', lastActive: '10 hours ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4x7oIyYlv_lVlr9zSUO6Zs_Ab44F1mMmXGMH4BIjspexFnoWz1pphWfgZ4jzpC4HrClvvQKYdgjiewnwUAaxejxfDM-XASTYyb9y8kj0ioh-rsZJUlfBNw5dnNSkbgNJCRnNmC_-gV999ImDcRIqp3x0_9WSmMj9aLGPpYjRHOcliv19TVaQcbXypSuVTrqrJrYAQI4EFVxvo5rlzDoK5gnyl-tx5FbokoRRqKKBMPj_2zJTRt5Kpa8YCmJ8x9BHL4csXxHwbEuE' },
  ];

  const getRoleBadge = (role) => {
    const badges = {
      Admin: 'bg-primary/10 text-primary border-primary/20',
      Customer: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
      'Delivery Boy': 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-100 dark:border-purple-800',
    };
    return badges[role] || badges.Customer;
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800',
      blocked: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-100 dark:border-red-800',
      pending: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-100 dark:border-amber-800',
    };
    return badges[status] || badges.active;
  };

  const getStatusDot = (status) => {
    const colors = {
      active: 'bg-emerald-500',
      blocked: 'bg-red-500',
      pending: 'bg-amber-500',
    };
    return colors[status] || colors.active;
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <AdminSidebar />
      <div className="flex flex-1 flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
        <div className="lg:hidden flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-900 dark:text-white">menu</span>
            <span className="font-bold text-lg text-slate-900 dark:text-white">Spice & Grill</span>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                  <a className="hover:text-primary transition-colors" href="#dashboard">Dashboard</a>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                  <span className="text-slate-900 dark:text-white font-medium">User Management</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">User Management</h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Manage access, roles, and view details for all registered system users.</p>
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 whitespace-nowrap">
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span className="font-medium">Add New User</span>
              </button>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
              <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
                <div className="relative w-full lg:max-w-md">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search by name, email, or phone..." type="text"/>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  <div className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-slate-500 dark:text-slate-400 mr-2 border-r border-slate-200 dark:border-slate-700 pr-4">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    <span>Filters:</span>
                  </div>
                  <button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors text-sm">
                    <span>Role: All</span>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-slate-600">expand_more</span>
                  </button>
                  <button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors text-sm">
                    <span>Status: All</span>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-slate-600">expand_more</span>
                  </button>
                  <button className="ml-auto lg:ml-2 text-sm text-primary hover:text-blue-700 font-medium hover:underline">
                    Clear all
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col flex-1">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                      <th className="p-4 w-12">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                      </th>
                      <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer hover:text-primary group">
                        <div className="flex items-center gap-1">
                          User
                          <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_downward</span>
                        </div>
                      </th>
                      <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Contact Info</th>
                      <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</th>
                      <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Last Active</th>
                      <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="p-4">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: `url('${user.avatar}')`}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 md:hidden">{user.email}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-600 dark:text-slate-300">{user.email}</span>
                            <span className="text-xs text-slate-400 dark:text-slate-500">{user.phone}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadge(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(user.status)}`}>
                            <span className={`size-1.5 rounded-full ${getStatusDot(user.status)}`}></span>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </td>
                        <td className="p-4 hidden lg:table-cell">
                          <span className="text-sm text-slate-500 dark:text-slate-400">{user.lastActive}</span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Profile">
                              <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors" title="Edit User">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="More Actions">
                              <span className="material-symbols-outlined text-[20px]">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 mt-auto">
                <div className="hidden sm:flex flex-1 items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-400">
                      Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">5</span> of <span className="font-medium text-slate-900 dark:text-white">42</span> results
                    </p>
                  </div>
                  <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                      <a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-offset-0" href="#">
                        <span className="sr-only">Previous</span>
                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                      </a>
                      <a aria-current="page" className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">1</a>
                      <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-offset-0" href="#">2</a>
                      <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-offset-0" href="#">3</a>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:outline-offset-0">...</span>
                      <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-offset-0" href="#">8</a>
                      <a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-offset-0" href="#">
                        <span className="sr-only">Next</span>
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
