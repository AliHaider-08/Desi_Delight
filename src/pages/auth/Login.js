import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main flex flex-col min-h-screen">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-color bg-background-light dark:bg-background-dark px-6 py-3 lg:px-10">
        <div className="flex items-center gap-4 text-text-main dark:text-white">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Spice of Lahore</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link to="/" className="text-text-main text-sm font-medium leading-normal hover:text-primary">Home</Link>
            <Link to="/menu" className="text-text-main text-sm font-medium leading-normal hover:text-primary">Menu</Link>
            <Link to="/blog" className="text-text-main text-sm font-medium leading-normal hover:text-primary">Blog</Link>
            <Link to="/menu" className="text-text-main text-sm font-medium leading-normal hover:text-primary">Order Online</Link>
          </div>
          <div className="flex gap-2">
            <Link to="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light border border-border-color text-text-main text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100">
              <span className="truncate">Sign Up</span>
            </Link>
            <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-main text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90">
              <span className="truncate">Login</span>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-text-main text-3xl cursor-pointer">menu</span>
        </div>
      </header>
      <main className="flex flex-1 w-full relative">
        <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-20 bg-background-light dark:bg-background-dark z-10 relative">
          <div className="w-full max-w-[440px] flex flex-col">
            <div className="mb-8">
              <h2 className="text-text-main dark:text-white text-[32px] font-bold leading-tight tracking-[-0.015em] pb-2">Welcome Back</h2>
              <p className="text-text-subtle text-base font-normal leading-normal">
                Please login to access your account and order delicious meals.
              </p>
              {error && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col">
                <p className="text-text-main dark:text-gray-200 text-base font-medium leading-normal pb-2">Email</p>
                <input 
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-text-main focus:outline-0 focus:ring-2 focus:ring-primary border border-border-color bg-white dark:bg-white/5 focus:border-primary h-14 placeholder:text-text-subtle p-[15px] text-base font-normal leading-normal transition-shadow" 
                  placeholder="Enter your email address" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col">
                <div className="flex justify-between items-baseline pb-2">
                  <p className="text-text-main dark:text-gray-200 text-base font-medium leading-normal">Password</p>
                </div>
                <div className="flex w-full items-stretch rounded-lg group focus-within:ring-2 focus-within:ring-primary transition-shadow">
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-text-main focus:outline-0 focus:ring-0 border border-border-color border-r-0 bg-white dark:bg-white/5 h-14 placeholder:text-text-subtle p-[15px] text-base font-normal leading-normal" 
                    placeholder="Enter your password" 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-text-subtle flex border border-border-color border-l-0 bg-white dark:bg-white/5 items-center justify-center pr-[15px] rounded-r-lg cursor-pointer hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </label>
              <div className="flex justify-end mt-[-10px]">
                <Link to="/forgot-password" className="text-text-subtle text-sm font-medium hover:text-primary hover:underline transition-colors">Forgot Password?</Link>
              </div>
              <button 
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-primary text-text-main text-base font-bold leading-normal tracking-[0.015em] hover:shadow-lg hover:bg-opacity-90 transition-all mt-2" 
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Logging in...
                  </span>
                ) : (
                  <span className="truncate">Log In</span>
                )}
              </button>
            </form>
            <div className="relative flex py-8 items-center">
              <div className="flex-grow border-t border-border-color"></div>
              <span className="flex-shrink mx-4 text-text-subtle text-sm">or continue with</span>
              <div className="flex-grow border-t border-border-color"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-12 rounded-lg border border-border-color bg-white dark:bg-transparent dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-semibold text-text-main dark:text-white">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 h-12 rounded-lg border border-border-color bg-white dark:bg-transparent dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors" type="button">
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                <span className="text-sm font-semibold text-text-main dark:text-white">Facebook</span>
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-text-main dark:text-gray-300 text-sm">
                New to Spice of Lahore? 
                <Link to="/signup" className="font-bold text-text-subtle hover:text-primary underline ml-1">Create an Account</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-background-light">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
          <div className="absolute bottom-10 left-10 z-20 max-w-md">
            <h3 className="text-white text-3xl font-bold mb-2 drop-shadow-md">Taste the Tradition</h3>
            <p className="text-white/90 text-lg drop-shadow-md">Authentic Pakistani flavors delivered straight to your doorstep.</p>
            <div className="flex items-center gap-2 mt-4 text-white/80">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-sm font-medium">Lahore, Pakistan</span>
            </div>
          </div>
          <img 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            alt="Close up view of a rich, spicy chicken curry dish garnished with fresh cilantro and ginger, served in a traditional bowl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfUktfApUXBNRclLHG48_NWRusrX_KqfxNrCRlJ0SRVdwQHN1dABDLRmK6Q80IZ_VU4cY0mrqxsibhPtqE-oQ5wIt4g5DQoQkwLeAkm3LcgnTnENdrsMimD5nlbruARZ2AFvahzOAEicCH6RkAcpk5B8_IPzCzbEyUS_u0x1eoptD4YKrouVFHvYYIOUWRtk_zUmtf08Z7WSiOS1JuvsaJPOymIlWUIHI-Zu7nYs-WUcH3i1VPqPuybiL4ebbUosdNxDqd8TLPHdA"
          />
        </div>
      </main>
    </div>
  );
};

export default Login;
