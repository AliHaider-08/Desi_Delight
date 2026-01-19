import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Homepage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d1b13] dark:text-[#f8fcfa] antialiased overflow-x-hidden selection:bg-primary/30">
      <Header />
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
          <div className="w-full h-full bg-cover bg-center animate-kenburns" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeRSlsma27i4KjuRjCvBtJEhNNhAt70rZfazypwiq-lFXDU4cIF64whBK2pm_NxJZmF1IvS89ClSonMkEiWfFHIAChKetHcnkGO4Xz81pk2F6qygh5ENkEyTEsWZbWokPXzBO58PISzj_QyKemb_-cLRGke5AlKPBMso4Gb7mVdPh4YF8aYATuST3WLZ7AoHxnTWohBN8yV5nlqJP_AHwM1bjcXt570QsusK2ZmOfXuKidsiVx5VWzcXKrlm7MT0duNPW_oJ2bmPk')"}}></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 pt-20">
          <span className="px-3 py-1 bg-accent-gold/20 border border-accent-gold/40 text-accent-gold rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Since 1995</span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-xl">
            Taste the Soul of <span className="text-primary">Lahore</span> in Every Bite
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed drop-shadow-md">
            Experience authentic Pakistani cuisine, where traditional recipes meet modern hospitality. Fresh spices, slow cooking, and pure passion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link to="/menu" className="bg-primary hover:bg-primary/90 text-[#0d1b13] px-8 py-3 rounded-lg text-base font-bold transition-all shadow-[0_0_20px_rgba(17,212,98,0.4)] hover:shadow-[0_0_30px_rgba(17,212,98,0.6)] flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              Order Online
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-lg text-base font-bold transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">table_restaurant</span>
              Book a Table
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto" id="about">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-accent-maroon font-bold uppercase tracking-wider text-sm">
              <span className="w-8 h-[2px] bg-accent-maroon"></span>
              Our Legacy
            </div>
            <h2 className="text-4xl font-bold text-[#0d1b13] dark:text-white leading-tight">
              From Grandmother's Kitchen to Your Table
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Started in 1995, we bring the authentic recipes passed down through generations. Our journey began in the narrow streets of Anarkali, Lahore, where our founder learned the art of spice blending from his mother.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Today, at Desi Delight, we grind our spices fresh daily, slow-cook our Nihari for 12 hours, and our chefs put their heart into every dish to bring you the true taste of home. We aren't just serving food; we are serving memories.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">25+</span>
                <span className="text-sm text-gray-500">Years of Service</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50k+</span>
                <span className="text-sm text-gray-500">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-gray-500">Halal Certified</span>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 h-[500px]">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10">
              <div className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBX1hizX51sbT_bRuPJ_kqXayKoV3PiG-epzH2DMG9ULxOtDfVY0GtNqtJJqttQ-my_aW6vMPmLAVpO2Y9ncmripeXzmgK05epMX6Zhbercd8huDnmSwKhTRrKLJJRFu-Ru_JY3RQ7IORJMdoXgBJhKHdI8QTFwl33Prd2itfvpr40WE8VktwlLxfoiLUatkt9u_V0fStonZy_d_R9w-n-Eq9HgZuy0vKd-MUvP8UXuhfBRNuXe9wuRPmY3y2WAyfmTFCb7YMXDsNI')"}}></div>
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#102218] z-20">
              <div className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIho3f_itHqxbeA7I3lX-EYGK1NDpAzmjxzMJ6j4pe0PxSQqMagC6pQFHY3_lEirHsGjLWoivGoP0Dt93ol98Y4jdWfcl11S0MDHC7QQtu5rTi3BZ72WFzOPVD5Nfv65BLpzD3tbJQWV-PVEGUzDuQoL8VeCLpuGp4NNpc2qX9jE-rHK5F0DfVQHBKcou4zKxO5cc5zosTAcnlX9647fDNjBcyg6ju5QsZ04WGJpbWQIKEE2ZmSDItWBwKeyOGwoUVv1mmM68id98')"}}></div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 text-accent-gold/10">
              <span className="material-symbols-outlined text-[180px]">local_dining</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-[#0c1a12]" id="menu">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Specialties</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b13] dark:text-white mb-6">Menu Highlights</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              <button className="px-6 py-2 bg-primary text-[#0d1b13] rounded-full text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">All</button>
              <button className="px-6 py-2 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">Biryani & Rice</button>
              <button className="px-6 py-2 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">BBQ & Karahi</button>
              <button className="px-6 py-2 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">Desserts</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Royal Chicken Biryani', price: '$14.99', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJnQ4mqGe-dXM-wNRHn95ulljkvN2OSuTIb9b_a6ZO_egkdIVCuNy0IczXANMUlGMrlFIofP5rHdqm6pduLBVvj2m3IkrV-G9J1KaBCc69LC4fipmiVuiGhSkl_QFyVbvkz1fWzKoywIZKLpWWSx2W1Fkoh826IbDreEhqpWF2l1dpGnyu3iSiNu8SoQoKdXKgWBDeiaxpEbWMqMDtIpxc-sG7RREXinEpz0nFf6_YAyc-xWbIfYewZh-nSxL2rNm3z8zF2bVD_Zs' },
              { name: 'Lahori Chicken Karahi', price: '$18.50', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMDKMhkc81gKimi8tJQaVvx2rOmfsZHe-HXvCGomuhzdDGqVpaTJ5YsiFWaaoD0oHS0acV5xXgcisAhM6PQsVfrKm3RKQMU5s0SMrTdD4CXMMsarTGO794UD1lGCN2FALV48fFdEhmc8e8YppWG49HtyK0XaKTRzAbt23Lq9R9BNItWtS_MYqHJiokskOJfBzW1Wig0xIzNqjG46S7RUKEwwBcRZGYFVBUJtJISOUSL9FpHv1LQfR86q8X6DK4e2cSEmicnekeE14' },
              { name: 'Beef Seekh Kabab', price: '$12.99', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZX7kx-Jg3y_GuiUUt7p_q95In3tAq3QtROi9TSvpw4I4-XcDBhs_wk7nS7qQ1P7XF7S-GoGBDVMy3MxAjHsHfo-2kuDJ-bArgROdE6LEPJUdaMqblM7Vq_Nldo7qWBTsOxpEXczHLIg2Q5I_MP4Nk4JuzTI6DeH5xogoPc_xsvSS7TOApuinZLTeHQhs-Jcl5i8aIIH2zULZtyzlX9Cs_sCZrzTSVFKXNJgAhmxAlP_n0N1x5zq0UtH2qpHPULFgXXxRTU1TKmXQ' },
              { name: 'Gulab Jamun', price: '$6.50', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-9wo65CCnyFZkdua4PRRT8gYegbTax-gERtECS2ziV1X_U-WIOs7SmUZVjMkGduwBsh6d4Hadt4As8HaBd0qQuniT12WQ370-XPviaahfNm0ICSluU5EBhMT7HklRSkWnLueuQNiqv-raVZfAiCLRkN06Vb6GOUkSH1UDphGKPmXW3JrQvijvjbUN4786sD-H8uvOBQQIqLsubisbINwS-Yx53bg6E6MwCzhOguMtlRtZlNgAZhC27EM3-sj29oGsSAQDAWMr77U' },
            ].map((item, idx) => (
              <div key={idx} className="group bg-[#f8fcfa] dark:bg-[#152e21] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="h-48 overflow-hidden relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: `url('${item.image}')`}}></div>
                  <div className="absolute top-3 right-3 bg-white dark:bg-black/80 px-2 py-1 rounded text-xs font-bold text-[#0d1b13] dark:text-white shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-[#0d1b13] dark:text-white">{item.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Aromatic basmati rice cooked with tender chicken, saffron, and our secret spice blend.</p>
                  <Link to="/menu" className="mt-auto w-full py-2 bg-white dark:bg-white/5 border border-primary text-primary hover:bg-primary hover:text-[#0d1b13] rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                    Add to Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu/full" className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4">
              View Full Menu
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
