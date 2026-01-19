import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const BlogPost = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d1b13] dark:text-[#f8fcfa] antialiased overflow-x-hidden selection:bg-primary/30">
      <Header />
      <main className="relative z-10">
        <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link to="/blog/1" className="hover:text-primary transition-colors">Blog</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-medium">Recipes</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Behind The Scenes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b13] dark:text-white leading-tight mb-6">
              How We Make Authentic Chicken Karahi
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover the secret balance of tomatoes, ginger, and green chilies that makes our Karahi famous across the city.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOxihvs9Y6kID0E6T5Cj6z9wN3FMJdRNg_8wzHXpP1rRWJIEKH89NaPbHqxl_jBnrL4K50kl9L1XkVxtxENYQ-0QEUKFG77O3oyiPjbOOKwFLh3625jRm9PUSs964fbkB5ioWYEimkkQlTt-aKp9qGJtgDzUJzpB2yVsloV-PYquH6Dz0gTU-e7PsfHLL-vyO4BONVJKekfhnuBqTywHcnEClWoWlAHvAqgjw3ZDrxPtklPs9hfC4octGGROUeDB7hnPf8q8JXWRU')"}}></div>
                <span className="text-[#0d1b13] dark:text-white">By Chef Hamza</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>October 15, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span>5 Min Read</span>
              </div>
            </div>
          </div>
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-12 relative group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjWIk9g82wdcQAma7GG0OegtZgxDWLLZ5Yj0qVBUYQeX-vKPH5es_pIlD89sVwdOICLYeAhsAV_5Z_djMc_3YToTT4d4hWSH-kZpxUVO9se9S18UR-G2jyln1xT9p1lfgK6hSd1Bml3NLfgQuCaqr8NV45hDd7IYYUx3aU-Ht0VEZYqtPNNx83WbyWgmH84QB6XZVHdLACLm4BVkCnPByQhxExtGBcwmljLRBSEKD63vnGw3zcP0Cjshte1H5uVv9Y3qtJ8Vn-hgY')"}}></div>
          </div>
        </section>
        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 text-lg leading-8 text-gray-700 dark:text-gray-300">
              <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                If there is one dish that defines the street food culture of Lahore, it's the Chicken Karahi. It's not just a curry; it's an emotion. Cooked in a heavy wok (karahi) over a fierce flame, this dish is a test of a chef's patience and timing. At Desi Delight, we have spent 25 years perfecting this recipe, ensuring that every bite transports you straight to the food street of Anarkali.
              </p>
              <h2 className="text-3xl font-bold text-[#0d1b13] dark:text-white mt-10 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                The "Bhunn-na" Technique
              </h2>
              <p className="mb-6">
                The secret to a great Karahi isn't just the spices—it's the cooking technique known as <em>Bhunn-na</em> (searing). Unlike other curries where you might stew the meat, Karahi requires high heat and constant stirring. This caramelizes the tomatoes and garlic, integrating them into the chicken fibers rather than just sitting on top as a sauce.
              </p>
              <p className="mb-8">
                We start by searing the chicken in pure ghee until it's golden brown. This locks in the juices. Only then do we add the ginger and garlic paste. The sizzle you hear at this stage is the sound of flavor developing.
              </p>
              <h2 className="text-3xl font-bold text-[#0d1b13] dark:text-white mt-10 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Tomatoes, Not Onions
              </h2>
              <p className="mb-6">
                Here is the most controversial part of our recipe: <strong>We do not use onions.</strong> A true Lahori Karahi gets its body and tangy flavor solely from tomatoes. Onions introduce a sweetness that interferes with the sharp, spicy profile we are aiming for.
              </p>
              <blockquote className="my-10 p-8 bg-[#f8fcfa] dark:bg-[#152e21] border-l-4 border-primary rounded-r-xl italic text-xl font-medium text-[#0d1b13] dark:text-white relative">
                <span className="material-symbols-outlined absolute top-4 left-4 text-primary/20 text-6xl -z-10">format_quote</span>
                "The Karahi is honest food. You cannot hide poor quality ingredients behind cream or sugar. It's just meat, fire, and spices."
                <footer className="mt-4 text-sm font-bold not-italic text-primary">— Head Chef Hamza</footer>
              </blockquote>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
