import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [cart, setCart] = useState([]);

  const categories = ['All Items', 'Biryani & Rice', 'BBQ & Karahi', 'Breads', 'Beverages'];
  
  const menuItems = [
    { id: 1, name: 'Sindhi Chicken Biryani', price: '$14.99', category: 'Biryani & Rice', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy0_-n6nrnuoWxtVvlyiskNofspcd3avUQBMlDf9b-ihqY22iPg7rNT8Tlz0URB_UMKFCD9a73UYEQbvKhliIHxuOK8ceSVOI_mtyOA50fgmg3sUTH8-OD9KtyG6Pn0Q7K3doDJ92Mjpj_XpJ2ygYgXr4_7M1-anPSHryyqr7rQ-hVbTcW0uPkyk7zYyfoyEib0-dXJuAqxAOKABFRINTK00iVKdDNPsMVNh-t5S3DZzKDWfnzJmSTkPw5ufPXG99MjVPR3-cLEaI', rating: 4.8, description: 'Aromatic basmati rice cooked with tender chicken, potatoes, dried plums, and traditional Sindhi spices.' },
    { id: 2, name: 'Beef Yakhni Pulao', price: '$16.50', category: 'Biryani & Rice', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxIypPAbK3oCv4SpzSRK0g7UeV9Mwy7E4btajwk38LOpahnx7ERlX6gUk_WHK3gH7lEF38k5mS0pmz3nJoNSn_OlAwjHwSyLs0bhqJvavv8QveSa_osI7fXkiUc5b-T2fZa0SugljMtCfqCElQ2JQokTzql2Z_N_aKsF2IL38-l3njN5m2pPo5KWDAKbb_Pk9Id4viHIibaOOFVC-ot3FvWgbdLmrXI1hKnyw79sUasjxDb6X_2TGtNRJLLXOmSXxl-z6g6_ddCEg', description: 'Long grain rice cooked in a rich beef bone broth with whole spices, topped with fried onions.' },
    { id: 3, name: 'Chicken Tikka', price: '$12.99', category: 'BBQ & Karahi', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1XEdVPPeLhjv49fARgtI4IGVvxfFGj4tuPHYc9FFG1fLZb1OZqRSd64V4RVcC-APXHyNXj0I4d8L67hl-oXYsiRpPpdTTRa_-_oQO6e8SRUXrVyy38CTQFAj3RZYwiT-j6974ZJC-PrXhVai4AVbf6KnIBN0TtSKcHoTbVL50ZLjw9TH-e8J383GXpgUq7m1sNA7wpcu4s9FN2m7jhv0Ih9K2CGvyw1jPl8J9j1JFtAs3ouB-TJnMfeNQdfs5FOnLYfE-PW6DfuI', spicy: true, description: 'Quarter leg piece marinated in yogurt, lemon, and red chili, grilled over charcoal perfection.' },
    { id: 4, name: 'Mutton Karahi (Half)', price: '$24.99', category: 'BBQ & Karahi', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlmVWHmSOl_BfeQGBooNTsVV4cDAku7OGnNbHf04I1yIH3S6d5wVwePTyF05_Jcw2xlDqYnBA0mHz_kyHfJkHu4_O79fxobQwERZlRaZwhFrluaje9Nt_le86nhNQu6u2PS6vrKI_p8ZZz4wmUmGRDA_GDbAD5SPoeIKxqfatSFJEb5BHLg1_V3ez1oQTL1B_PTgItbib1J4CEORw8So5DNTIOPNrdQhPmHWRh0CPFWUZjXsvXV-JtD4S-IWTvCNwNOYfYx6krLfs', description: 'Goat meat wok-fried with tomatoes, green chilies, ginger, and coarse black pepper. Served in the wok.' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d1b13] dark:text-white font-display min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[1440px] mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-xl bg-[#102218]">
            <div className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-10 md:px-10" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuArexxcMX6iPws4llXKAKFSnvpHYW9qUt83Slxv_WPXDFZyaltBPa7VE_vgPbfegfIm_WVjURMgKsd363t83S1b3cRqN7MV0N81MHFRlxqu685pj-sF2gKvymVLEtfJGHzCAI4Mqgoq0qY5q8-RjeNauWpPgZYi3pcNQt8wbvFSpnEZPp_hYobzrsbmfVb5FTg6LkJ34zKNOo_sZl9jCdsEbqYpbrmIh3gg5xtishD84jNN8LDsPqK01W5U0a0qqpAwo0NeZj-0QIA')"}}>
              <div className="flex flex-col gap-2 text-left z-10">
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                  Free Delivery on orders over $50
                </h1>
                <h2 className="text-gray-200 text-sm md:text-base font-medium">Use code <span className="text-primary font-bold">FRESH50</span> at checkout</h2>
              </div>
              <Link to="/cart" className="z-10 flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#0d1b13] text-base font-bold hover:brightness-105 transition-all shadow-lg shadow-primary/30">
                Order Now
              </Link>
            </div>
          </div>
          <div className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pb-2 pt-2 -mx-2 px-2">
            <div className="flex flex-col gap-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#4c9a6c]">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="w-full h-12 rounded-lg bg-[#e7f3ec] dark:bg-[#1e3a2b] border-none pl-12 pr-4 text-[#0d1b13] dark:text-white placeholder-[#4c9a6c] focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Search menu items (e.g., Biryani, Naan)..." type="text"/>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex overflow-x-auto pb-1 border-b border-[#cfe7d9] dark:border-[#1e3a2b] no-scrollbar">
                  <div className="flex gap-8 min-w-max px-2">
                    {categories.map((cat) => (
                      <button key={cat} onClick={() => setActiveCategory(cat)} className={`group flex flex-col items-center pb-3 border-b-[3px] transition-colors ${activeCategory === cat ? 'border-primary text-[#0d1b13] dark:text-white' : 'border-transparent text-[#4c9a6c] hover:text-primary'}`}>
                        <span className="text-sm font-bold">{cat}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">rice_bowl</span>
              Biryani & Rice Specials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.filter(item => activeCategory === 'All Items' || item.category === activeCategory).map((item) => (
                <div key={item.id} className="group flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3ec] dark:border-[#1e3a2b] shadow-sm hover:shadow-md transition-all">
                  <div className="h-48 w-full bg-gray-200 overflow-hidden relative">
                    {item.rating && (
                      <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-[#0d1b13] dark:text-white flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-amber-500 text-sm">star</span> {item.rating}
                      </div>
                    )}
                    {item.spicy && (
                      <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-sm">local_fire_department</span> Spicy
                      </div>
                    )}
                    <img alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg font-bold text-[#0d1b13] dark:text-white">{item.name}</h4>
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">{item.description}</p>
                    <button onClick={() => addToCart(item)} className="w-full mt-auto flex items-center justify-center gap-2 rounded-lg bg-[#e7f3ec] dark:bg-[#1e3a2b] py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-[#0d1b13] transition-colors">
                      <span className="material-symbols-outlined text-lg">add</span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-[100px] flex flex-col h-[calc(100vh-120px)] rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3ec] dark:border-[#1e3a2b] shadow-lg overflow-hidden">
            <div className="p-5 border-b border-[#e7f3ec] dark:border-[#1e3a2b] bg-[#f8fcfa] dark:bg-[#102218] flex justify-between items-center">
              <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white">Your Order</h3>
              <div className="px-2 py-1 bg-primary/10 rounded text-xs font-bold text-primary">Pickup in 20m</div>
            </div>
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">Your cart is empty</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="size-16 rounded-lg bg-gray-200 bg-cover bg-center shrink-0" style={{backgroundImage: `url('${item.image}')`}}></div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-bold text-[#0d1b13] dark:text-white line-clamp-1">{item.name}</p>
                        <p className="text-sm font-bold text-[#0d1b13] dark:text-white">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center rounded-md border border-[#e7f3ec] dark:border-[#2a4d3b]">
                          <button className="size-6 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-[#e7f3ec] dark:hover:bg-[#2a4d3b] rounded-l-md transition-colors">
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#0d1b13] dark:text-white">1</span>
                          <button className="size-6 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-[#e7f3ec] dark:hover:bg-[#2a4d3b] rounded-r-md transition-colors">
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-5 border-t border-[#e7f3ec] dark:border-[#1e3a2b] bg-[#f8fcfa] dark:bg-[#102218]">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Tax (8%)</span>
                  <span>${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Delivery</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#0d1b13] dark:text-white mt-2 pt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
                  <span>Total</span>
                  <span>${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-[#0d1b13] text-sm font-bold hover:brightness-105 transition-all">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <Link to="/cart" className="w-full shadow-xl flex items-center justify-between rounded-xl bg-[#0d1b13] text-white p-4 h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary text-[#0d1b13] font-bold text-sm">{cart.length}</div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-300">Total</span>
              <span className="text-sm font-bold">${(cartTotal * 1.08).toFixed(2)}</span>
            </div>
          </div>
          <span className="font-bold text-sm flex items-center gap-2">
            View Cart <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
