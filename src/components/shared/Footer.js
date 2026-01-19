import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0c1a12] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined text-3xl">restaurant</span>
                <span className="text-2xl font-bold text-white">Desi Delight</span>
              </div>
              <p className="text-gray-400 max-w-md">Serving the community with authentic flavors and warm hospitality since 1995. Come dine with us.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">123 Spice Avenue, Food Street<br/>Lahore, Pakistan 54000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  <p className="text-primary text-sm font-medium mt-1">Jumma Break: 1:00 PM - 2:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Contact</h4>
                  <a href="tel:+923001234567" className="text-gray-400 text-sm block hover:text-white transition-colors">+92 300 123 4567</a>
                  <a href="mailto:hello@desidelight.com" className="text-gray-400 text-sm block hover:text-white transition-colors">hello@desidelight.com</a>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#0d1b13] transition-all">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#0d1b13] transition-all">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.527c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white/5">
            <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsWhNcdMZqhmkRTGhBoZsFvFNm07G6CXdH8NXKMQOhvXo4wTXUawzdwkK3XpHeEhtSfaQKyW4wILC8CuxXKsgbjyrZF0ZzD9v0bxCWrEksNNvjZb6rqoaCCEBlyHRwa6jPvyjXqEIb07VUfyox86QLqbCE_huE0O-2FwS3VJNPnah8QbjjWQ8DKGs5lne9roNkNvAN0JeFAlKlkRqL1TOaIcfVEp56YNkq6JDomBjusXrFEiyjaDBsi8wG_M3SuikY3uylDcgr_7s')"}}>
              <div className="w-full h-full bg-black/30 flex items-center justify-center group cursor-pointer relative">
                <div className="z-10 bg-white text-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transform group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-red-500">pin_drop</span>
                  <span className="font-bold text-sm">View on Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2024 Desi Delight. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
