import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  
  @keyframes blob-delayed {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(-30px, 50px) scale(1.1); }
    66% { transform: translate(20px, -20px) scale(0.9); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-blob {
    animation: blob 15s ease-in-out infinite;
  }
  
  .animate-blob-delayed {
    animation: blob-delayed 15s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`;
document.head.appendChild(style);

const BookTable = () => {
  // Advanced state management
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Regular Dinner',
    specialRequests: '',
    tablePreference: 'Any',
    seatingArea: 'Main Dining',
    dietaryRestrictions: [],
    celebrationName: '',
    celebrationMessage: ''
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingProgress, setBookingProgress] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [peakHours, setPeakHours] = useState(false);
  const [waitTime, setWaitTime] = useState(0);
  const [savedBookings, setSavedBookings] = useState([]);
  const [showLoyalty, setShowLoyalty] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(1250);

  // Advanced features and data
  const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Halal', 'Dairy-Free', 'Nut-Free'];
  const seatingAreas = ['Main Dining', 'Outdoor Patio', 'Private Room', 'Bar Area', 'Chef\'s Table'];
  const tablePreferences = ['Any', 'Indoor Seating', 'Outdoor Seating', 'Private Booth', 'Window Table', 'Near Kitchen'];
  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'
  ];
  const enhancedOccasions = [
    { value: 'Regular Dinner', label: 'Regular Dinner', icon: 'restaurant' },
    { value: 'Birthday', label: 'Birthday Celebration', icon: 'cake' },
    { value: 'Anniversary', label: 'Anniversary', icon: 'favorite' },
    { value: 'Business Meeting', label: 'Business Meeting', icon: 'business_center' },
    { value: 'Date Night', label: 'Romantic Date Night', icon: 'favorite' },
    { value: 'Family Gathering', label: 'Family Gathering', icon: 'family_restroom' },
    { value: 'Celebration', label: 'Special Celebration', icon: 'celebration' }
  ];

  // Load saved bookings on mount
  useEffect(() => {
    const saved = localStorage.getItem('userBookings');
    if (saved) {
      setSavedBookings(JSON.parse(saved));
    }
    
    // Check if current time is peak hours
    const currentHour = new Date().getHours();
    setPeakHours(currentHour >= 18 && currentHour <= 21);
  }, []);

  // Calculate estimated wait time
  useEffect(() => {
    if (bookingData.date && bookingData.time) {
      const bookingDateTime = new Date(`${bookingData.date} ${bookingData.time}`);
      const now = new Date();
      const diff = bookingDateTime - now;
      const waitMinutes = Math.max(0, Math.floor(diff / 60000));
      setWaitTime(waitMinutes);
    }
  }, [bookingData.date, bookingData.time]);

  // Calculate booking progress
  useEffect(() => {
    const filledFields = Object.values(bookingData).filter(val => val && val !== '').length;
    const totalFields = Object.keys(bookingData).length - 2; // Exclude celebration fields
    const progress = (filledFields / totalFields) * 100;
    setBookingProgress(progress);
  }, [bookingData]);

  // Enhanced input handler with validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Dietary restriction toggle
  const handleDietaryToggle = (restriction) => {
    setBookingData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(restriction)
        ? prev.dietaryRestrictions.filter(r => r !== restriction)
        : [...prev.dietaryRestrictions, restriction]
    }));
  };

  // Function to check availability
  const checkAvailability = () => {
    if (bookingData.date) {
      // Simulate checking available slots
      const today = new Date();
      const selectedDate = new Date(bookingData.date);
      const isToday = selectedDate.toDateString() === today.toDateString();
      
      // For today, show only future slots
      const currentHour = today.getHours();
      const availableTimeSlots = timeSlots.filter(slot => {
        if (!isToday) return true;
        const slotHour = parseInt(slot.split(':')[0]) + (slot.includes('PM') && slot.split(':')[0] !== '12' ? 12 : 0);
        return slotHour > currentHour;
      });
      
      setAvailableSlots(availableTimeSlots);
    }
  };

  // Function to handle time slot selection
  const handleTimeSlotSelect = (time) => {
    setSelectedSlot(time);
    setBookingData(prev => ({
      ...prev,
      time: time
    }));
  };

  // Enhanced validation with real-time feedback
  const validateForm = () => {
    const { name, email, phone, date, time, guests } = bookingData;
    
    const errors = [];
    
    if (!name.trim() || name.length < 2) {
      errors.push('Please enter a valid name (minimum 2 characters)');
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email address');
    }
    if (!phone.trim() || !/^[\d\s\-\+\(\)]+$/.test(phone) || phone.replace(/\D/g, '').length < 10) {
      errors.push('Please enter a valid phone number');
    }
    if (!date) {
      errors.push('Please select a date');
    }
    if (!time) {
      errors.push('Please select a time');
    }
    if (guests < 1 || guests > 20) {
      errors.push('Number of guests must be between 1 and 20');
    }
    
    if (errors.length > 0) {
      setConfirmationMessage(errors[0]);
      return false;
    }
    return true;
  };

  // Enhanced submission with loyalty points
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setBookingProgress(25);
    
    try {
      // Simulate API progress
      for (let i = 0; i < 4; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setBookingProgress(prev => prev + 18.75);
      }
      
      // Generate booking confirmation
      const bookingId = 'DD' + Date.now();
      const pointsEarned = Math.floor(parseFloat(bookingData.guests) * 50);
      const bookingDetails = {
        ...bookingData,
        bookingId,
        timestamp: new Date().toISOString(),
        pointsEarned,
        peakHours,
        estimatedWaitTime: waitTime
      };
      
      // Store in localStorage
      localStorage.setItem('booking_' + bookingId, JSON.stringify(bookingDetails));
      
      // Update saved bookings
      const newBookings = [...savedBookings, bookingDetails];
      setSavedBookings(newBookings);
      localStorage.setItem('userBookings', JSON.stringify(newBookings));
      
      // Update loyalty points
      const newPoints = loyaltyPoints + pointsEarned;
      setLoyaltyPoints(newPoints);
      localStorage.setItem('loyaltyPoints', newPoints.toString());
      
      setConfirmationMessage(`🎉 Booking confirmed! Your booking ID is ${bookingId}. You earned ${pointsEarned} loyalty points! Confirmation sent to ${bookingData.email}.`);
      setBookingProgress(100);
      
      // Reset form after delay
      setTimeout(() => {
        setBookingData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          occasion: 'Regular Dinner',
          specialRequests: '',
          tablePreference: 'Any',
          seatingArea: 'Main Dining',
          dietaryRestrictions: [],
          celebrationName: '',
          celebrationMessage: ''
        });
        setSelectedSlot('');
        setAvailableSlots([]);
        setBookingProgress(0);
      }, 3000);
      
    } catch (error) {
      setConfirmationMessage('❌ Sorry, there was an error processing your booking. Please try again.');
      setBookingProgress(0);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Function to get maximum date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d1b13] dark:text-white font-display min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 animate-pulse"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2311d4b13' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-blob-delayed"></div>
      </div>
      
      <Header />
      
      {/* Progress Bar */}
      {bookingProgress > 0 && (
        <div className="w-full bg-primary/10 h-1 relative">
          <div 
            className="bg-gradient-to-r from-primary to-accent-gold h-full transition-all duration-500 relative"
            style={{ width: `${bookingProgress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
      )}
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto p-4 lg:p-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b13] dark:text-white relative">
              <span className="relative z-10">Reserve Your Table</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-gold rounded-full"></div>
            </h1>
            {peakHours && (
              <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full animate-pulse shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">local_fire_department</span>
                  Peak Hours
                </span>
              </span>
            )}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Book a table at Desi Delight and experience authentic Pakistani cuisine
          </p>
          
          {/* Enhanced Loyalty Section */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowLoyalty(!showLoyalty)}
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-gold/20 to-accent-gold/10 border border-accent-gold/30 rounded-xl text-accent-gold font-bold hover:from-accent-gold/30 hover:to-accent-gold/20 transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="material-symbols-outlined text-xl animate-spin-slow">stars</span>
              <div className="flex flex-col items-center">
                <span className="text-lg">{loyaltyPoints} Loyalty Points</span>
                <span className="text-xs opacity-75">Redeem for rewards</span>
              </div>
              <span className="material-symbols-outlined text-sm transform transition-transform group-hover:rotate-180">
                {showLoyalty ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>
          
          {showLoyalty && (
            <div className="mb-8 p-6 bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 border border-accent-gold/30 rounded-xl shadow-lg animate-fade-in">
              <div className="flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-3xl text-accent-gold">redeem</span>
                <div className="text-center">
                  <p className="text-accent-gold font-bold text-lg">🎁 Earn 50 points per guest!</p>
                  <p className="text-sm text-accent-gold/80">Redeem for free desserts and special offers</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary/10 to-accent-gold/10 p-6 border-b border-[#e7f3ec] dark:border-[#1e3a2b]">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#0d1b13] dark:text-white">Booking Details</h2>
                  {waitTime > 0 && (
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <span className="material-symbols-outlined">schedule</span>
                      <span className="text-sm font-medium">~{waitTime}min wait</span>
                    </div>
                  )}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">person</span>
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary transition-all peer"
                        placeholder="John Doe"
                        required
                      />
                      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary opacity-0 peer-focus:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">edit</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">email</span>
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary transition-all peer"
                        placeholder="john@example.com"
                        required
                      />
                      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary opacity-0 peer-focus:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">phone</span>
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary transition-all peer"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary opacity-0 peer-focus:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Booking Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        onBlur={checkAvailability}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80"
                      >
                        <span className="material-symbols-outlined">calendar_month</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={bookingData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                      required
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'} {i >= 8 && '⭐ Large Party'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Enhanced Occasion */}
                <div>
                  <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">celebration</span>
                    Special Occasion
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {enhancedOccasions.map(occasion => (
                      <button
                        key={occasion.value}
                        type="button"
                        onClick={() => setBookingData(prev => ({ ...prev, occasion: occasion.value }))}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          bookingData.occasion === occasion.value
                            ? 'bg-gradient-to-r from-primary to-accent-gold text-[#0d1b13] border-primary shadow-lg'
                            : 'bg-white dark:bg-[#152e21] border-[#cfe7d9] dark:border-[#2a4d3b] hover:border-primary hover:shadow-md'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <span className="material-symbols-outlined text-2xl transition-transform group-hover:scale-110">
                            {occasion.icon}
                          </span>
                          <div className="text-sm font-medium">{occasion.label}</div>
                        </div>
                        {bookingData.occasion === occasion.value && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-sm">check</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Seating */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                      Seating Area
                    </label>
                    <select
                      name="seatingArea"
                      value={bookingData.seatingArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                    >
                      {seatingAreas.map(area => (
                        <option key={area} value={area}>
                          {area} {area === 'Private Room' && '💎 Premium'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                      Table Preference
                    </label>
                    <select
                      name="tablePreference"
                      value={bookingData.tablePreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                    >
                      {tablePreferences.map(preference => (
                        <option key={preference} value={preference}>
                          {preference}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dietary Restrictions */}
                <div>
                  <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-3">
                    Dietary Restrictions
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {dietaryOptions.map(restriction => (
                      <button
                        key={restriction}
                        type="button"
                        onClick={() => handleDietaryToggle(restriction)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                          bookingData.dietaryRestrictions.includes(restriction)
                            ? 'bg-primary text-[#0d1b13] border-primary'
                            : 'bg-white dark:bg-[#152e21] border-[#cfe7d9] dark:border-[#2a4d3b] hover:border-primary'
                        }`}
                      >
                        {restriction}
                        {bookingData.dietaryRestrictions.includes(restriction) && (
                          <span className="ml-1 text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Celebration Fields */}
                {(bookingData.occasion === 'Birthday' || bookingData.occasion === 'Anniversary' || bookingData.occasion === 'Celebration') && (
                  <div className="space-y-4 p-4 bg-accent-gold/10 rounded-lg border border-accent-gold/30">
                    <div>
                      <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                        {bookingData.occasion === 'Birthday' ? 'Birthday Person Name' : 'Celebration Name'}
                      </label>
                      <input
                        type="text"
                        name="celebrationName"
                        value={bookingData.celebrationName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                        placeholder="Enter name..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                        Special Message for Celebration
                      </label>
                      <textarea
                        name="celebrationMessage"
                        value={bookingData.celebrationMessage}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors resize-none"
                        placeholder="Write a special message..."
                      />
                    </div>
                  </div>
                )}

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#cfe7d9] dark:border-[#2a4d3b] bg-white dark:bg-[#152e21] text-[#0d1b13] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition-colors resize-none"
                    placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
                  />
                </div>

                {/* Enhanced Time Slots */}
                {availableSlots.length > 0 && (
                  <div>
                    <label className="block text-sm font-bold text-[#0d1b13] dark:text-white mb-4">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                      {availableSlots.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleTimeSlotSelect(slot)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedSlot === slot
                              ? 'bg-primary text-[#0d1b13] shadow-md transform scale-105'
                              : 'bg-[#e7f3ec] dark:bg-[#1e3a2b] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-primary to-accent-gold text-[#0d1b13] font-bold text-lg hover:from-primary/90 hover:to-accent-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl transform hover:scale-[1.02] disabled:hover:scale-100 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-r-2 border-primary border-t-transparent border-l-transparent"></div>
                      <span>Processing Your Magical Reservation...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <span className="material-symbols-outlined text-xl">event_available</span>
                      <span>Reserve Your Table</span>
                      <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  )}
                </button>
              </form>

              {/* Enhanced Confirmation Message */}
              {confirmationMessage && (
                <div className={`m-6 p-4 rounded-lg border ${
                  confirmationMessage.includes('confirmed') 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 animate-fade-in'
                    : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 animate-fade-in'
                }`}>
                  <p className={`text-center font-medium ${
                    confirmationMessage.includes('confirmed') 
                      ? 'text-green-800 dark:text-green-200'
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {confirmationMessage}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Restaurant Info */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] p-6">
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Restaurant Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                    <div>
                      <p className="font-medium text-[#0d1b13] dark:text-white">Opening Hours</p>
                      <p className="text-gray-600 dark:text-gray-300">Mon - Sun: 11:00 AM - 11:00 PM</p>
                      <p className="text-primary font-medium">Jumma Break: 1:00 PM - 2:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                    <div>
                      <p className="font-medium text-[#0d1b13] dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">123 Spice Avenue, Food Street</p>
                      <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan 54000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">call</span>
                    <div>
                      <p className="font-medium text-[#0d1b13] dark:text-white">Contact</p>
                      <p className="text-gray-600 dark:text-gray-300">+92 300 123 4567</p>
                      <p className="text-gray-600 dark:text-gray-300">hello@desidelight.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Availability */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] p-6">
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">availability</span>
                  Live Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="text-green-700 dark:text-green-300 font-medium">Now</span>
                    <span className="text-green-600 dark:text-green-400 text-sm">4 tables free</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <span className="text-amber-700 dark:text-amber-300 font-medium">7-9 PM</span>
                    <span className="text-amber-600 dark:text-amber-400 text-sm">Peak hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="text-blue-700 dark:text-blue-300 font-medium">Tomorrow</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm">12 tables free</span>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              {savedBookings.length > 0 && (
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] p-6">
                  <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">history</span>
                    Recent Bookings
                  </h3>
                  <div className="space-y-3">
                    {savedBookings.slice(-3).map((booking, index) => (
                      <div key={index} className="p-3 bg-[#f8fcfa] dark:bg-[#102218] rounded-lg border border-[#e7f3ec] dark:border-[#1e3a2b]">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-[#0d1b13] dark:text-white">{booking.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {booking.guests} guests • {booking.date}
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-primary text-[#0d1b13] text-xs font-bold rounded">
                            {booking.bookingId}
                          </span>
                        </div>
                        {booking.pointsEarned && (
                          <div className="flex items-center gap-1 text-accent-gold text-sm">
                            <span className="material-symbols-outlined text-sm">stars</span>
                            +{booking.pointsEarned} points
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Booking Policies */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] p-6">
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                  Booking Policies
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reservations held for 15 minutes past arrival time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cancellations must be made 2 hours in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Large parties (8+ guests) require 25% deposit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Smart casual dress code recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Free parking available for all guests</span>
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] p-6">
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/menu"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#e7f3ec] dark:bg-[#1e3a2b] text-primary font-bold hover:bg-primary hover:text-[#0d1b13] transition-colors"
                  >
                    <span className="material-symbols-outlined">restaurant_menu</span>
                    View Menu
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#e7f3ec] dark:bg-[#1e3a2b] text-primary font-bold hover:bg-primary hover:text-[#0d1b13] transition-colors"
                  >
                    <span className="material-symbols-outlined">phone</span>
                    Call Us
                  </Link>
                  <button
                    onClick={() => window.open('https://wa.me/923001234567')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-colors"
                  >
                    <span className="material-symbols-outlined">whatsapp</span>
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Weather Widget */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2b] p-6">
                <h3 className="text-lg font-bold text-[#0d1b13] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">wb_sunny</span>
                  Today's Weather
                </h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0d1b13] dark:text-white">24°C</div>
                  <p className="text-gray-600 dark:text-gray-300">Partly Cloudy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Perfect weather for dining!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookTable;
