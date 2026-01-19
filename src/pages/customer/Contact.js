import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Contact = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d1b13] dark:text-[#f8fcfa] antialiased overflow-x-hidden selection:bg-primary/30">
      <Header />
      <section className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0d1b13]/90 z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeRSlsma27i4KjuRjCvBtJEhNNhAt70rZfazypwiq-lFXDU4cIF64whBK2pm_NxJZmF1IvS89ClSonMkEiWfFHIAChKetHcnkGO4Xz81pk2F6qygh5ENkEyTEsWZbWokPXzBO58PISzj_QyKemb_-cLRGke5AlKPBMso4Gb7mVdPh4YF8aYATuST3WLZ7AoHxnTWohBN8yV5nlqJP_AHwM1bjcXt570QsusK2ZmOfXuKidsiVx5VWzcXKrlm7MT0duNPW_oJ2bmPk')"}}></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-4 pt-10">
          <span className="px-3 py-1 bg-accent-gold/20 border border-accent-gold/40 text-accent-gold rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Get In Touch</span>
          <h1 className="text-white text-5xl font-black tracking-tight drop-shadow-xl font-display">Contact Us</h1>
          <p className="text-gray-200 text-lg font-light max-w-xl leading-relaxed drop-shadow-md">
            We'd love to hear from you. Whether you have a question about our menu, need a reservation, or want to provide feedback, our team is here to help.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#152e21] p-6 rounded-2xl shadow-sm border border-[#e7f3ec] dark:border-[#1e3b2b] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-2">Call Us</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Mon-Sun from 11am to 11pm.</p>
                <div className="flex flex-col gap-2">
                  <a className="font-bold text-[#0d1b13] dark:text-white hover:text-primary transition-colors text-lg" href="tel:+923001234567">+92 300 123 4567</a>
                  <a className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#128C7E] transition-colors" href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="bg-white dark:bg-[#152e21] p-6 rounded-2xl shadow-sm border border-[#e7f3ec] dark:border-[#1e3b2b] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-2">Email & Visit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">We reply within 24 hours.</p>
                <div className="flex flex-col gap-2">
                  <a className="font-bold text-[#0d1b13] dark:text-white hover:text-primary transition-colors" href="mailto:hello@desidelight.com">hello@desidelight.com</a>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">123 Spice Avenue, Lahore</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#152e21] p-8 rounded-2xl shadow-lg border-l-4 border-primary border-y border-r border-gray-100 dark:border-y-[#1e3b2b] dark:border-r-[#1e3b2b]">
              <h3 className="text-xl font-bold text-[#0d1b13] dark:text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-white/10 pb-2">
                  <span className="text-gray-600 dark:text-gray-300">Monday - Thursday</span>
                  <span className="font-bold text-[#0d1b13] dark:text-white">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-white/10 pb-2 bg-accent-gold/5 -mx-2 px-2 rounded">
                  <span className="text-accent-maroon font-bold flex items-center gap-2">
                    Friday (Jumma)
                    <span className="text-[10px] bg-accent-maroon text-white px-1.5 rounded uppercase">Break</span>
                  </span>
                  <div className="text-right">
                    <span className="block font-bold text-[#0d1b13] dark:text-white">11:00 AM - 12:00 AM</span>
                    <span className="block text-xs text-accent-maroon font-medium">Break: 1:00 PM - 2:30 PM</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-white/10 pb-2">
                  <span className="text-gray-600 dark:text-gray-300">Saturday - Sunday</span>
                  <span className="font-bold text-[#0d1b13] dark:text-white">11:00 AM - 12:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-[#1e3b2b] relative">
              <iframe allowFullScreen className="grayscale hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0470295116345!2d74.3073993151328!3d31.56790598135251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c9e833b7e9b%3A0x6d6492323485062f!2sFood%20Street%20Fort%20Road!5e0!3m2!1sen!2spk!4v1648043642323!5m2!1sen!2spk" style={{border:0}} width="100%"></iframe>
            </div>
            <div className="bg-[#f8fcfa] dark:bg-[#152e21] rounded-2xl p-8 shadow-lg border border-[#e7f3ec] dark:border-[#1e3b2b]">
              <h3 className="text-2xl font-bold text-[#0d1b13] dark:text-white mb-6">Send us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="John Doe" type="text"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="+92 300..." type="tel"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="you@example.com" type="email"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none" placeholder="Tell us about your event or feedback..." rows="4"></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-[#0d1b13] font-bold py-4 rounded-lg shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2" type="submit">
                  <span className="material-symbols-outlined">send</span>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
