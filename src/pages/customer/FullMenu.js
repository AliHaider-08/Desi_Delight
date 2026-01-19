import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState('biryani');
  const [searchQuery, setSearchQuery] = useState('');

  const menuSections = {
    biryani: [
      { name: 'Royal Chicken Biryani', price: '$14.99', description: 'Long-grain Basmati rice layered with tender chicken marinated in yogurt and spices, steamed with saffron.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJnQ4mqGe-dXM-wNRHn95ulljkvN2OSuTIb9b_a6ZO_egkdIVCuNy0IczXANMUlGMrlFIofP5rHdqm6pduLBVvj2m3IkrV-G9J1KaBCc69LC4fipmiVuiGhSkl_QFyVbvkz1fWzKoywIZKLpWWSx2W1Fkoh826IbDreEhqpWF2l1dpGnyu3iSiNu8SoQoKdXKgWBDeiaxpEbWMqMDtIpxc-sG7RREXinEpz0nFf6_YAyc-xWbIfYewZh-nSxL2rNm3z8zF2bVD_Zs', spice: 2, tags: ['GF', 'Halal'] },
      { name: 'Mutton Pulao', price: '$18.50', description: 'Meat cooked with rice in a seasoned broth, flavored with coriander seeds, cumin, and cardamom.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeRSlsma27i4KjuRjCvBtJEhNNhAt70rZfazypwiq-lFXDU4cIF64whBK2pm_NxJZmF1IvS89ClSonMkEiWfFHIAChKetHcnkGO4Xz81pk2F6qygh5ENkEyTEsWZbWokPXzBO58PISzj_QyKemb_-cLRGke5AlKPBMso4Gb7mVdPh4YF8aYATuST3WLZ7AoHxnTWohBN8yV5nlqJP_AHwM1bjcXt570QsusK2ZmOfXuKidsiVx5VWzcXKrlm7MT0duNPW_oJ2bmPk', spice: 1, tags: ['GF'] },
    ],
    bbq: [
      { name: 'Lahori Chicken Karahi', price: '$19.99', description: 'Chicken wok-fried with tomatoes, green chilies, ginger, and garlic. A street food legend.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMDKMhkc81gKimi8tJQaVvx2rOmfsZHe-HXvCGomuhzdDGqVpaTJ5YsiFWaaoD0oHS0acV5xXgcisAhM6PQsVfrKm3RKQMU5s0SMrTdD4CXMMsarTGO794UD1lGCN2FALV48fFdEhmc8e8YppWG49HtyK0XaKTRzAbt23Lq9R9BNItWtS_MYqHJiokskOJfBzW1Wig0xIzNqjG46S7RUKEwwBcRZGYFVBUJtJISOUSL9FpHv1LQfR86q8X6DK4e2cSEmicnekeE14', spice: 3, tags: ['GF'] },
      { name: 'Beef Seekh Kabab', price: '$12.99', description: 'Minced beef mixed with onions, cilantro, and special kabab masala, grilled over charcoal.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZX7kx-Jg3y_GuiUUt7p_q95In3tAq3QtROi9TSvpw4I4-XcDBhs_wk7nS7qQ1P7XF7S-GoGBDVMy3MxAjHsHfo-2kuDJ-bArgROdE6LEPJUdaMqblM7Vq_Nldo7qWBTsOxpEXczHLIg2Q5I_MP4Nk4JuzTI6DeH5xogoPc_xsvSS7TOApuinZLTeHQhs-Jcl5i8aIIH2zULZtyzlX9Cs_sCZrzTSVFKXNJgAhmxAlP_n0N1x5zq0UtH2qpHPULFgXXxRTU1TKmXQ', spice: 2, tags: ['GF', 'Keto'] },
    ],
  };

  const currentItems = menuSections[activeCategory] || [];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d1b13] dark:text-[#f8fcfa] antialiased overflow-x-hidden selection:bg-primary/30">
      <Header />
      <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIho3f_itHqxbeA7I3lX-EYGK1NDpAzmjxzMJ6j4pe0PxSQqMagC6pQFHY3_lEirHsGjLWoivGoP0Dt93ol98Y4jdWfcl11S0MDHC7QQtu5rTi3BZ72WFzOPVD5Nfv65BLpzD3tbJQWV-PVEGUzDuQoL8VeCLpuGp4NNpc2qX9jE-rHK5F0DfVQHBKcou4zKxO5cc5zosTAcnlX9647fDNjBcyg6ju5QsZ04WGJpbWQIKEE2ZmSDItWBwKeyOGwoUVv1mmM68id98')"}}></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-3 pt-10">
          <span className="px-3 py-1 bg-primary/20 border border-primary/40 text-primary rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Authentic Cuisine</span>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-xl">Our Complete Menu</h1>
          <p className="text-gray-200 text-lg font-light max-w-xl leading-relaxed drop-shadow-md">From the streets of Lahore to your plate. Explore our diverse range of traditional dishes.</p>
        </div>
      </section>
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-[#102218]/95 backdrop-blur shadow-sm border-b border-[#e7f3ec] dark:border-[#1e3b2b]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
              </div>
              <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-[#0c1a12] placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm text-[#0d1b13] dark:text-white transition-colors" placeholder="Search for dishes, spices, ingredients..." type="text"/>
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              <button onClick={() => setActiveCategory('biryani')} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold shadow-md transition-colors ${activeCategory === 'biryani' ? 'bg-primary text-[#0d1b13]' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'}`}>Biryani & Rice</button>
              <button onClick={() => setActiveCategory('bbq')} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${activeCategory === 'bbq' ? 'bg-primary text-[#0d1b13] font-bold shadow-md' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-white/10'}`}>BBQ & Karahi</button>
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <section className="scroll-mt-48" id="biryani">
          <div className="flex items-end gap-4 mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-maroon dark:text-primary">Biryani & Rice</h2>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium pb-1 hidden sm:block">Aromatic basmati masterpieces</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item, idx) => (
              <div key={idx} className="flex flex-col bg-white dark:bg-[#152e21] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-60 overflow-hidden relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: `url('${item.image}')`}}></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-1 text-white">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span key={i} className={`material-symbols-outlined text-sm ${i < item.spice ? 'text-orange-500 fill-current' : 'text-gray-300'}`}>
                          local_fire_department
                        </span>
                      ))}
                      <span className="text-xs font-bold ml-1 opacity-90">{item.spice === 1 ? 'Mild' : item.spice === 2 ? 'Medium Spicy' : 'Extra Hot'}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl text-[#0d1b13] dark:text-white">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between gap-4">
                    <div className="flex gap-2">
                      {item.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded ${tag === 'GF' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : tag === 'Halal' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-[#0d1b13] p-2 rounded-full transition-colors shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FullMenu;
