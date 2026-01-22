import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    console.log('Form data:', formData);
    
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      };
      
      console.log('Sending user data:', userData);
      
      const result = await register(userData);
      
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased transition-colors duration-200">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7f3ec] dark:border-[#1a2e22] px-6 lg:px-40 py-3 bg-surface-light dark:bg-surface-dark sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-3xl">restaurant</span>
          </div>
          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Pakistani Restaurant</h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link to="/menu" className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Menu</Link>
            <Link to="/our-story" className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">About Us</Link>
            <Link to="/blog" className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Blog</Link>
            <Link to="/menu" className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Order Online</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-text-main dark:text-white text-sm font-bold leading-normal hover:text-primary transition-colors">Log In</Link>
            <Link to="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-green-500 text-[#0d1b13] text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
              <span className="truncate">Sign Up</span>
            </Link>
          </div>
        </div>
        <div className="lg:hidden text-text-main dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px] bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-[#e7f3ec] dark:border-[#2a4535] overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center relative group" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR9fPNGV4HZCpgBlm9Jz7NV-tlLshQj8gO3HIaNL7blG94uu4vtKVenOYLR-Nem7sCzyZBb0krlNbYpaCGyJM_oS1u4iMjsuoT1FaQSAu2QA-FPjwHdmAk6Yk0sMksNkUTwtnfEK7_oQBc3xaYf-khHi1Si4-Z_Kj7D_GgBMigL9C3krhbOVDQx9sk0Yo04G3LEP3XnrIjC0ELesCQlqx3O7fHDMvVY6X9FFuGw0cdEaQir_E6Eml0Rv2s2fwcxrcf9po3GxLctW8')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 lg:p-12">
              <h2 className="text-white text-3xl font-black leading-tight mb-2">Taste the Tradition</h2>
              <p className="text-white/90 text-sm font-medium">Join us for an authentic culinary journey through Pakistan.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-text-main dark:text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-2">Create Account</h1>
              <p className="text-text-muted dark:text-gray-400 text-base font-normal">Please enter your details to sign up.</p>
              {error && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}
              {success && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 text-sm">Registration successful! Redirecting to login...</p>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-1.5">
                <span className="text-text-main dark:text-gray-200 text-sm font-bold">Full Name</span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">person</span>
                  <input 
                    className="w-full h-12 rounded-lg border border-[#cfe7d9] dark:border-[#2a4535] bg-background-light dark:bg-background-dark text-text-main dark:text-white pl-11 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 text-sm transition-all outline-none" 
                    placeholder="Enter your full name" 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-text-main dark:text-gray-200 text-sm font-bold">Email Address</span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">mail</span>
                  <input 
                    className="w-full h-12 rounded-lg border border-[#cfe7d9] dark:border-[#2a4535] bg-background-light dark:bg-background-dark text-text-main dark:text-white pl-11 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 text-sm transition-all outline-none" 
                    placeholder="Enter your email" 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </label>
              <div className="flex flex-col sm:flex-row gap-5">
                <label className="flex flex-col gap-1.5 flex-1">
                  <span className="text-text-main dark:text-gray-200 text-sm font-bold">Password</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock</span>
                    <input 
                      className="w-full h-12 rounded-lg border border-[#cfe7d9] dark:border-[#2a4535] bg-background-light dark:bg-background-dark text-text-main dark:text-white pl-11 pr-10 focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 text-sm transition-all outline-none" 
                      placeholder="Create password" 
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </label>
                <label className="flex flex-col gap-1.5 flex-1">
                  <span className="text-text-main dark:text-gray-200 text-sm font-bold">Confirm Password</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock_reset</span>
                    <input 
                      className="w-full h-12 rounded-lg border border-[#cfe7d9] dark:border-[#2a4535] bg-background-light dark:bg-background-dark text-text-main dark:text-white pl-11 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 text-sm transition-all outline-none" 
                      placeholder="Confirm password" 
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-[20px]">{showConfirmPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </label>
              </div>
              <label className="flex items-start gap-3 mt-2 cursor-pointer">
                <input 
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/50 bg-background-light dark:bg-background-dark dark:border-gray-600" 
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 leading-normal select-none">
                  I agree to the <Link to="/terms" className="text-primary font-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-primary font-medium hover:underline">Privacy Policy</Link>.
                </span>
              </label>
              <button 
                className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary hover:bg-green-500 text-[#0d1b13] text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Creating Account...
                  </span>
                ) : (
                  'Sign Up'
                )}
              </button>
            </form>
            <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider">Or continue with</span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-11 rounded-lg border border-[#cfe7d9] dark:border-[#2a4535] bg-background-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-[#223d2d] transition-colors" type="button">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                  <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"></path>
                  <path d="M5.50253 14.3003C5.00236 12.8199 5.00236 11.1799 5.50253 9.69967V6.60879H1.51649C-0.18551 10.0056 -0.18551 13.9945 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
                  <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.60879L5.50264 9.69967C6.45506 6.86006 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"></path>
                </svg>
                <span className="text-text-main dark:text-white text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-11 rounded-lg border border-[#cfe7d9] dark:border-[#2a4535] bg-background-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-[#223d2d] transition-colors" type="button">
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.438C19.585 23.094 24 18.105 24 12.073z"></path>
                </svg>
                <span className="text-text-main dark:text-white text-sm font-medium">Facebook</span>
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Already have an account? 
                <Link to="/login" className="text-primary font-bold hover:underline ml-1">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-400 dark:text-gray-600">
        <p>© 2023 Pakistani Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
