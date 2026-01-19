import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamic menu data
  const categories = ['All', 'Biryani & Rice', 'BBQ & Karahi', 'Desserts'];
  
  const menuItems = [
    // Biryani & Rice Category
    { 
      name: 'Royal Chicken Biryani', 
      price: '$14.99', 
      category: 'Biryani & Rice',
      description: 'Aromatic basmati rice cooked with tender chicken, saffron, and our secret spice blend.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Vegetable Biryani', 
      price: '$13.99', 
      category: 'Biryani & Rice',
      description: 'Fragrant basmati rice with mixed vegetables and aromatic spices.',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Mutton Biryani', 
      price: '$16.99', 
      category: 'Biryani & Rice',
      description: 'Tender mutton pieces slow-cooked with fragrant basmati rice and traditional spices.',
      image: 'https://images.unsplash.com/photo-1596797038534-9543c58d4940?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Chicken Pulao', 
      price: '$12.99', 
      category: 'Biryani & Rice',
      description: 'Light and flavorful rice dish with tender chicken and aromatic spices.',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Zeera Rice', 
      price: '$8.99', 
      category: 'Biryani & Rice',
      description: 'Basmati rice flavored with cumin seeds and aromatic herbs.',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=300&fit=crop' 
    },
    
    // BBQ & Karahi Category
    { 
      name: 'Lahori Chicken Karahi', 
      price: '$18.50', 
      category: 'BBQ & Karahi',
      description: 'Tender chicken cooked in traditional karahi with authentic spices and fresh herbs.',
      image: 'https://images.unsplash.com/photo-1589020647302-a2eac6c9c7e2?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Beef Seekh Kabab', 
      price: '$12.99', 
      category: 'BBQ & Karahi',
      description: 'Minced beef skewers grilled to perfection with aromatic spices and herbs.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581aeb6cd?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Chicken Tikka', 
      price: '$14.99', 
      category: 'BBQ & Karahi',
      description: 'Marinated chicken pieces grilled in tandoor with authentic spices.',
      image: 'https://images.unsplash.com/photo-1596075683259-48ce26b4b7d6?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Mutton Karahi', 
      price: '$22.50', 
      category: 'BBQ & Karahi',
      description: 'Tender mutton cooked in karahi with ginger, garlic, and traditional spices.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Reshmi Kabab', 
      price: '$13.99', 
      category: 'BBQ & Karahi',
      description: 'Soft and tender chicken kababs marinated in cream and spices.',
      image: 'https://images.unsplash.com/photo-1562565392-e1d6269c4cd3?w=400&h=300&fit=crop' 
    },
    
    // Desserts Category
    { 
      name: 'Gulab Jamun', 
      price: '$6.50', 
      category: 'Desserts',
      description: 'Soft milk dumplings soaked in aromatic sugar syrup, served warm.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Kheer', 
      price: '$5.50', 
      category: 'Desserts',
      description: 'Traditional rice pudding cooked with milk, cardamom, and nuts.',
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Rasmalai', 
      price: '$7.50', 
      category: 'Desserts',
      description: 'Soft cottage cheese dumplings in creamy milk flavored with cardamom.',
      image: 'https://images.unsplash.com/photo-1622290291468-32d5a56fa18c?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Gajar Ka Halwa', 
      price: '$6.99', 
      category: 'Desserts',
      description: 'Sweet carrot pudding cooked with milk, ghee, and nuts.',
      image: 'https://images.unsplash.com/photo-1614707267539-bc269612d823?w=400&h=300&fit=crop' 
    },
    { 
      name: 'Kulfi Falooda', 
      price: '$8.50', 
      category: 'Desserts',
      description: 'Traditional Indian ice cream served with vermicelli and rose syrup.',
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop' 
    }
  ];

  // Filter menu items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);
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
            <Link to="/book-table" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-lg text-base font-bold transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">table_restaurant</span>
              Book a Table
            </Link>
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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-[#0d1b13] shadow-md hover:bg-primary/90'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
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
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{item.description}</p>
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
