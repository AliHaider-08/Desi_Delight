import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const OurStory = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d1b13] dark:text-[#f8fcfa] antialiased overflow-x-hidden selection:bg-primary/30">
      <Header />
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#f8fcfa] dark:to-[#102218] z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBX1hizX51sbT_bRuPJ_kqXayKoV3PiG-epzH2DMG9ULxOtDfVY0GtNqtJJqttQ-my_aW6vMPmLAVpO2Y9ncmripeXzmgK05epMX6Zhbercd8huDnmSwKhTRrKLJJRFu-Ru_JY3RQ7IORJMdoXgBJhKHdI8QTFwl33Prd2itfvpr40WE8VktwlLxfoiLUatkt9u_V0fStonZy_d_R9w-n-Eq9HgZuy0vKd-MUvP8UXuhfBRNuXe9wuRPmY3y2WAyfmTFCb7YMXDsNI')"}}></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-12 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-accent-gold"></span>
            <span className="text-accent-gold text-sm font-bold uppercase tracking-[0.2em]">Est. 1995</span>
            <span className="h-[1px] w-12 bg-accent-gold"></span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
            A Legacy of <span className="text-primary italic">Flavor</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl font-light max-w-2xl leading-relaxed drop-shadow-md">
            More than just a restaurant, Desi Delight is a celebration of Pakistani heritage, family values, and the timeless art of cooking with love.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] lg:h-[700px] w-full">
            <div className="absolute top-0 left-0 w-3/4 h-3/5 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden shadow-2xl z-10">
              <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeRSlsma27i4KjuRjCvBtJEhNNhAt70rZfazypwiq-lFXDU4cIF64whBK2pm_NxJZmF1IvS89ClSonMkEiWfFHIAChKetHcnkGO4Xz81pk2F6qygh5ENkEyTEsWZbWokPXzBO58PISzj_QyKemb_-cLRGke5AlKPBMso4Gb7mVdPh4YF8aYATuST3WLZ7AoHxnTWohBN8yV5nlqJP_AHwM1bjcXt570QsusK2ZmOfXuKidsiVx5VWzcXKrlm7MT0duNPW_oJ2bmPk')"}}></div>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-1/2 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-2xl border-8 border-[#f8fcfa] dark:border-[#102218] z-20">
              <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIho3f_itHqxbeA7I3lX-EYGK1NDpAzmjxzMJ6j4pe0PxSQqMagC6pQFHY3_lEirHsGjLWoivGoP0Dt93ol98Y4jdWfcl11S0MDHC7QQtu5rTi3BZ72WFzOPVD5Nfv65BLpzD3tbJQWV-PVEGUzDuQoL8VeCLpuGp4NNpc2qX9jE-rHK5F0DfVQHBKcou4zKxO5cc5zosTAcnlX9647fDNjBcyg6ju5QsZ04WGJpbWQIKEE2ZmSDItWBwKeyOGwoUVv1mmM68id98')"}}></div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Roots</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b13] dark:text-white leading-tight mb-6">From the Streets of <span className="text-accent-maroon">Anarkali</span></h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Our story begins in the bustling, spice-scented streets of Old Lahore. It was 1995 when our founder, Mr. Malik, opened a small roadside stall with nothing but his mother's secret spice blends and a large copper cauldron (Degh).
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                He believed that food wasn't just sustenance—it was a conversation. Every plate of Biryani served was an invitation to connect, to share stories, and to find comfort. That small stall quickly became a local landmark, known not just for the heat of the spices, but for the warmth of the hospitality.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-[#0d1b13] dark:text-white font-serif">
                "We don't serve customers; we serve guests. And a guest in our home is a blessing."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurStory;
