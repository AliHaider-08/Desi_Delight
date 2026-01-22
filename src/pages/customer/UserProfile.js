import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import { useAuth } from '../../context/AuthContext';
import { orderAPI, addressAPI, paymentMethodAPI, preferencesAPI } from '../../services/api';

const UserProfile = () => {
  const { user, isAuthenticated, updateUserProfile, logout, uploadProfilePicture } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadingPicture, setUploadingPicture] = useState(false);
  const [message, setMessage] = useState('');
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [addressesLoading, setAddressesLoading] = useState(false);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [preferences, setPreferences] = useState({});
  const [paymentMethodsLoading, setPaymentMethodsLoading] = useState(false);
  const [preferencesLoading, setPreferencesLoading] = useState(false);
  const [editingPreferences, setEditingPreferences] = useState(false);
  const [savingPreferences, setSavingPreferences] = useState(false);
  const [tempPreferences, setTempPreferences] = useState({});
  const [showAddPaymentMethod, setShowAddPaymentMethod] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [editingPaymentMethod, setEditingPaymentMethod] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);
  const [paymentMethodForm, setPaymentMethodForm] = useState({
    type: 'credit_card',
    cardType: 'visa',
    lastFour: '',
    expiryMonth: '',
    expiryYear: '',
    cardholderName: '',
    paypalEmail: ''
  });
  const [addressForm, setAddressForm] = useState({
    type: 'home',
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Pakistan',
    phone: '',
    isDefault: false
  });

  // Initialize profile data with user data
  useEffect(() => {
    if (user) {
      setProfileData({
        fullName: user.fullName || '',
        email: user.email || '',
        phone: user.phone || ''
      });
    }
  }, [user]);

  // Fetch addresses
  const fetchAddresses = async () => {
    setAddressesLoading(true);
    try {
      const response = await addressAPI.getAddresses();
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    } finally {
      setAddressesLoading(false);
    }
  };

  // Fetch orders
  const fetchOrders = async () => {
    setOrdersLoading(true);
    try {
      const response = await orderAPI.getOrders();
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setOrdersLoading(false);
    }
  };

  // Fetch payment methods
  const fetchPaymentMethods = async () => {
    setPaymentMethodsLoading(true);
    try {
      const response = await paymentMethodAPI.getPaymentMethods();
      setPaymentMethods(response.data);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    } finally {
      setPaymentMethodsLoading(false);
    }
  };

  // Fetch preferences
  const fetchPreferences = async () => {
    setPreferencesLoading(true);
    try {
      const response = await preferencesAPI.getPreferences();
      setPreferences(response.data);
      setTempPreferences(response.data);
    } catch (error) {
      console.error('Error fetching preferences:', error);
    } finally {
      setPreferencesLoading(false);
    }
  };

  // Handle preference changes
  const handlePreferenceChange = (field, value) => {
    setTempPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Save preferences
  const handleSavePreferences = async () => {
    setSavingPreferences(true);
    setMessage('');
    
    try {
      const response = await preferencesAPI.updatePreferences(tempPreferences);
      setPreferences(response.data);
      setEditingPreferences(false);
      setMessage('Preferences saved successfully!');
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving preferences:', error);
      setMessage('Failed to save preferences');
    } finally {
      setSavingPreferences(false);
    }
  };

  // Cancel preference editing
  const handleCancelPreferences = () => {
    setTempPreferences(preferences);
    setEditingPreferences(false);
  };

  // Set payment method as default
  const handleSetDefaultPaymentMethod = async (paymentMethodId) => {
    try {
      await paymentMethodAPI.setDefaultPaymentMethod(paymentMethodId);
      fetchPaymentMethods(); // Refresh payment methods
      setMessage('Default payment method updated!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error setting default payment method:', error);
      setMessage('Failed to update default payment method');
    }
  };

  // Delete payment method
  const handleDeletePaymentMethod = async (paymentMethodId) => {
    if (window.confirm('Are you sure you want to delete this payment method?')) {
      try {
        await paymentMethodAPI.deletePaymentMethod(paymentMethodId);
        fetchPaymentMethods(); // Refresh payment methods
        setMessage('Payment method deleted successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error('Error deleting payment method:', error);
        setMessage('Failed to delete payment method');
      }
    }
  };

  // Add/Edit payment method
  const handleSavePaymentMethod = async () => {
    try {
      if (editingPaymentMethod) {
        await paymentMethodAPI.updatePaymentMethod(editingPaymentMethod._id, paymentMethodForm);
        setMessage('Payment method updated successfully!');
      } else {
        await paymentMethodAPI.createPaymentMethod(paymentMethodForm);
        setMessage('Payment method added successfully!');
      }
      
      setShowAddPaymentMethod(false);
      setEditingPaymentMethod(null);
      setPaymentMethodForm({
        type: 'credit_card',
        cardType: 'visa',
        lastFour: '',
        expiryMonth: '',
        expiryYear: '',
        cardholderName: '',
        paypalEmail: ''
      });
      fetchPaymentMethods();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving payment method:', error);
      setMessage('Failed to save payment method');
    }
  };

  // Delete address
  const handleDeleteAddress = async (addressId) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      try {
        await addressAPI.deleteAddress(addressId);
        fetchAddresses(); // Refresh addresses
        setMessage('Address deleted successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error('Error deleting address:', error);
        setMessage('Failed to delete address');
      }
    }
  };

  // Add/Edit address
  const handleSaveAddress = async () => {
    try {
      if (editingAddress) {
        await addressAPI.updateAddress(editingAddress._id, addressForm);
        setMessage('Address updated successfully!');
      } else {
        await addressAPI.createAddress(addressForm);
        setMessage('Address added successfully!');
      }
      
      setShowAddAddress(false);
      setEditingAddress(null);
      setAddressForm({
        type: 'home',
        name: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'Pakistan',
        phone: '',
        isDefault: false
      });
      fetchAddresses();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving address:', error);
      setMessage('Failed to save address');
    }
  };

  // Set default address
  const handleSetDefaultAddress = async (addressId) => {
    try {
      await addressAPI.setDefaultAddress(addressId);
      fetchAddresses(); // Refresh addresses
      setMessage('Default address updated!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error setting default address:', error);
      setMessage('Failed to update default address');
    }
  };

  // Fetch data when tab changes
  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === 'addresses') {
        fetchAddresses();
      } else if (activeTab === 'orders') {
        fetchOrders();
      } else if (activeTab === 'payment') {
        fetchPaymentMethods();
      } else if (activeTab === 'preferences') {
        fetchPreferences();
      }
    }
  }, [activeTab, isAuthenticated]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        setMessage('Please select an image file');
        return;
      }
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setMessage('File size must be less than 5MB');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureUpload = async (file) => {
    setUploadingPicture(true);
    setMessage('');
    
    try {
      const result = await uploadProfilePicture(file);
      
      if (result.success) {
        setMessage('Profile picture updated successfully!');
        setPreviewImage(null);
        // Reset file input
        const fileInput = document.getElementById('profilePictureInput');
        if (fileInput) fileInput.value = '';
      } else {
        setMessage(result.message || 'Failed to upload profile picture');
      }
    } catch (error) {
      setMessage('An error occurred while uploading profile picture');
    } finally {
      setUploadingPicture(false);
    }
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      // Create updated user object
      const updatedUserData = {
        fullName: profileData.fullName,
        email: profileData.email,
        phone: profileData.phone
      };

      console.log('Updating user profile:', updatedUserData);
      
      // Make real API call to update profile
      const result = await updateUserProfile(updatedUserData);
      
      if (result.success) {
        setMessage('Profile updated successfully!');
        setEditing(false);
        
        // Update profile data with the latest from server
        if (result.user) {
          setProfileData({
            fullName: result.user.fullName || '',
            email: result.user.email || '',
            phone: result.user.phone || ''
          });
        }
      } else {
        setMessage(result.message || 'Failed to update profile');
      }
      
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('An error occurred while updating profile');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Please login to view your profile</h1>
        <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Account Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Manage your profile details, orders, and preferences.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 sticky top-24">
              <div className="flex items-center gap-3 mb-6 p-2">
                <div className="relative group">
                  <div className="h-12 w-12 rounded-full bg-cover bg-center bg-gradient-to-br from-primary to-accent-gold flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                    {user?.profilePicture ? (
                      <img 
                        src={`http://localhost:5000${user.profilePicture}`} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = user?.fullName?.charAt(0)?.toUpperCase() || 'U';
                        }}
                      />
                    ) : (
                      user?.fullName?.charAt(0)?.toUpperCase() || 'U'
                    )}
                  </div>
                  <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                    <span className="material-symbols-outlined text-white text-sm">camera_alt</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) handleProfilePictureUpload(file);
                      }}
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold leading-tight">{user?.fullName || 'User'}</span>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wide">Gold Member</span>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                <button 
                  onClick={() => setActiveTab('personal')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'personal' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">person</span>
                  Personal Info
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'orders' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">receipt_long</span>
                  Order History
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'addresses' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">location_on</span>
                  Saved Addresses
                </button>
                <button 
                  onClick={() => setActiveTab('payment')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'payment' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">credit_card</span>
                  Payment Methods
                </button>
                <button 
                  onClick={() => setActiveTab('preferences')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'preferences' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="material-symbols-outlined">settings</span>
                  Preferences
                </button>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2 mx-4"></div>
                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors">
                  <span className="material-symbols-outlined">logout</span>
                  Log Out
                </button>
              </nav>
            </div>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-8">
            {activeTab === 'personal' && (
              <>
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative group">
                      <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-cover bg-center border-4 border-slate-50 dark:border-slate-700 shadow-md shrink-0 bg-gradient-to-br from-primary to-accent-gold flex items-center justify-center text-white font-bold text-3xl overflow-hidden">
                        {user?.profilePicture ? (
                          <img 
                            src={`http://localhost:5000${user.profilePicture}`} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = user?.fullName?.charAt(0)?.toUpperCase() || 'U';
                            }}
                          />
                        ) : (
                          user?.fullName?.charAt(0)?.toUpperCase() || 'U'
                        )}
                      </div>
                      <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                        <span className="material-symbols-outlined text-white text-2xl">camera_alt</span>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) handleProfilePictureUpload(file);
                          }}
                        />
                      </label>
                      {uploadingPicture && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full">
                          <span className="material-symbols-outlined text-white animate-spin">refresh</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-center sm:items-start flex-1 text-center sm:text-left pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user?.fullName || 'User'}</h2>
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider border border-yellow-200 dark:border-yellow-800">Gold Member</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 mb-4">Member since {new Date(user?.createdAt || Date.now()).getFullYear()} • <span className="text-primary font-medium">1,250 Points</span></p>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 mb-2 overflow-hidden">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 w-full text-right">250 points to Platinum Status</p>
                    </div>
                  </div>
                </div>
                <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">badge</span>
                      Personal Information
                    </h3>
                    <button 
                      onClick={() => setEditing(!editing)}
                      className="text-primary hover:text-primary-dark text-sm font-medium"
                    >
                      {editing ? 'Cancel' : 'Edit'}
                    </button>
                  </div>
                  {message && (
                    <div className={`px-6 py-3 ${message.includes('success') ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'}`}>
                      <p className="text-sm">{message}</p>
                    </div>
                  )}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                      <input 
                        className={`w-full rounded-lg border-slate-300 dark:border-slate-700 ${editing ? 'bg-slate-50 dark:bg-slate-900' : 'bg-slate-100 dark:bg-slate-800'} text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5 ${!editing ? 'cursor-not-allowed' : ''}`} 
                        type="text" 
                        name="fullName"
                        value={profileData.fullName}
                        onChange={handleInputChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                      <input 
                        className={`w-full rounded-lg border-slate-300 dark:border-slate-700 ${editing ? 'bg-slate-50 dark:bg-slate-900' : 'bg-slate-100 dark:bg-slate-800'} text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5 ${!editing ? 'cursor-not-allowed' : ''}`} 
                        type="email" 
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input 
                        className={`w-full rounded-lg border-slate-300 dark:border-slate-700 ${editing ? 'bg-slate-50 dark:bg-slate-900' : 'bg-slate-100 dark:bg-slate-800'} text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5 ${!editing ? 'cursor-not-allowed' : ''}`} 
                        type="tel" 
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Account Type</label>
                      <input 
                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 cursor-not-allowed" 
                        type="text" 
                        value={user?.role || 'customer'}
                        disabled
                      />
                    </div>
                  </div>
                  {editing && (
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
                      <button 
                        onClick={() => setEditing(false)}
                        className="px-6 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleSaveChanges}
                        disabled={loading}
                        className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  )}
                </section>
              </>
            )}
            {activeTab === 'addresses' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">home_pin</span>
                    Saved Addresses
                  </h3>
                  <button 
                    onClick={() => {
                      setEditingAddress(null);
                      setAddressForm({
                        type: 'home',
                        name: '',
                        street: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        country: 'Pakistan',
                        phone: '',
                        isDefault: false
                      });
                      setShowAddAddress(true);
                    }}
                    className="flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add New
                  </button>
                </div>
                <div className="p-6">
                  {addressesLoading ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-primary animate-spin mb-4">refresh</span>
                      <p className="text-gray-500 dark:text-gray-400">Loading addresses...</p>
                    </div>
                  ) : addresses.length === 0 ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">location_off</span>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">No saved addresses yet</p>
                      <button 
                      onClick={() => {
                        setEditingAddress(null);
                        setAddressForm({
                          type: 'home',
                          name: '',
                          street: '',
                          city: '',
                          state: '',
                          zipCode: '',
                          country: 'Pakistan',
                          phone: '',
                          isDefault: false
                        });
                        setShowAddAddress(true);
                      }}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Add Your First Address
                    </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div key={address._id} className={`relative group rounded-lg border ${address.isDefault ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'} bg-white dark:bg-slate-900/50 p-4 flex flex-col gap-2 transition-colors`}>
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary">home</span>
                              <span className="font-bold text-slate-900 dark:text-white capitalize">{address.type}</span>
                              {address.isDefault && (
                                <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Default</span>
                              )}
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => {
                                  setEditingAddress(address);
                                  setAddressForm({
                                    type: address.type,
                                    name: address.name,
                                    street: address.street,
                                    city: address.city,
                                    state: address.state,
                                    zipCode: address.zipCode,
                                    country: address.country,
                                    phone: address.phone,
                                    isDefault: address.isDefault
                                  });
                                  setShowAddAddress(true);
                                }}
                                className="text-slate-400 hover:text-primary"
                              >
                                <span className="material-symbols-outlined text-[18px]">edit</span>
                              </button>
                              <button 
                                onClick={() => handleDeleteAddress(address._id)}
                                className="text-slate-400 hover:text-red-500"
                              >
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {address.name}<br/>
                            {address.street}<br/>
                            {address.city}, {address.state} {address.zipCode}<br/>
                            {address.country}
                          </p>
                          {address.phone && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              📞 {address.phone}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}
            {activeTab === 'orders' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">history</span>
                    Recent Orders
                  </h3>
                  <Link to="/orders" className="text-primary hover:text-primary-dark text-sm font-medium">View All</Link>
                </div>
                <div className="overflow-x-auto">
                  {ordersLoading ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-primary animate-spin mb-4">refresh</span>
                      <p className="text-gray-500 dark:text-gray-400">Loading orders...</p>
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">receipt_long</span>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">No orders yet</p>
                      <Link to="/menu" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        Order Now
                      </Link>
                    </div>
                  ) : (
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="px-6 py-3 font-medium" scope="col">Order ID</th>
                          <th className="px-6 py-3 font-medium" scope="col">Date</th>
                          <th className="px-6 py-3 font-medium" scope="col">Items</th>
                          <th className="px-6 py-3 font-medium" scope="col">Total</th>
                          <th className="px-6 py-3 font-medium" scope="col">Status</th>
                          <th className="px-6 py-3 font-medium text-right" scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {orders.map((order) => (
                          <tr key={order._id} className="bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#{order.orderNumber}</td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                              {new Date(order.createdAt).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400 max-w-xs truncate">
                              {order.items.map((item, index) => (
                                <span key={index}>
                                  {item.quantity}x {item.name}
                                  {index < order.items.length - 1 && ', '}
                                </span>
                              ))}
                            </td>
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                              ${order.totalAmount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                order.status === 'delivered' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                  : order.status === 'cancelled'
                                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                  : order.status === 'ready'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                              }`}>
                                <span className={`size-1.5 rounded-full ${
                                  order.status === 'delivered' 
                                    ? 'bg-green-500'
                                    : order.status === 'cancelled'
                                    ? 'bg-red-500'
                                    : order.status === 'ready'
                                    ? 'bg-blue-500'
                                    : 'bg-yellow-500'
                                }`}></span>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-primary hover:text-primary-dark font-medium text-xs border border-primary hover:bg-primary/5 px-3 py-1.5 rounded transition-colors">
                                Reorder
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </section>
            )}
            {activeTab === 'payment' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                    Payment Methods
                  </h3>
                  <button 
                    onClick={() => setShowAddPaymentMethod(true)}
                    className="text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    Add New
                  </button>
                </div>
                {message && (
                  <div className={`px-6 py-3 ${message.includes('success') ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'}`}>
                    <p className="text-sm">{message}</p>
                  </div>
                )}
                <div className="p-6">
                  {paymentMethodsLoading ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-primary animate-spin mb-4">refresh</span>
                      <p className="text-gray-500 dark:text-gray-400">Loading payment methods...</p>
                    </div>
                  ) : paymentMethods.length === 0 ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">credit_card_off</span>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">No payment methods saved</p>
                      <button 
                        onClick={() => setShowAddPaymentMethod(true)}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Add Payment Method
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method._id} className={`flex items-center gap-4 p-4 border rounded-lg max-w-md ${method.isDefault ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50'}`}>
                          <div className="h-10 w-16 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                            {method.type === 'credit_card' || method.type === 'debit_card' ? (
                              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase">
                                {method.cardType}
                              </span>
                            ) : method.type === 'paypal' ? (
                              <span className="text-xs font-bold text-blue-600">PayPal</span>
                            ) : (
                              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Cash</span>
                            )}
                          </div>
                          <div className="flex flex-col">
                            {method.type === 'credit_card' || method.type === 'debit_card' ? (
                              <>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                  {method.cardType.charAt(0).toUpperCase() + method.cardType.slice(1)} ending in {method.lastFour}
                                </span>
                                <span className="text-xs text-slate-500">Expires {method.expiryMonth}/{method.expiryYear.slice(2)}</span>
                              </>
                            ) : method.type === 'paypal' ? (
                              <>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">PayPal</span>
                                <span className="text-xs text-slate-500">{method.paypalEmail}</span>
                              </>
                            ) : (
                              <span className="text-sm font-bold text-slate-900 dark:text-white">Cash on Delivery</span>
                            )}
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            {method.isDefault ? (
                              <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded font-medium">Default</span>
                            ) : (
                              <button 
                                onClick={() => handleSetDefaultPaymentMethod(method._id)}
                                className="text-xs px-2 py-1 border border-primary text-primary rounded hover:bg-primary/5 transition-colors"
                              >
                                Set Default
                              </button>
                            )}
                            <button 
                              onClick={() => handleDeletePaymentMethod(method._id)}
                              className="text-slate-400 hover:text-red-500"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}
            {activeTab === 'preferences' && (
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">settings</span>
                    Preferences
                  </h3>
                  <div className="flex gap-2">
                    {editingPreferences ? (
                      <>
                        <button 
                          onClick={handleCancelPreferences}
                          className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={handleSavePreferences}
                          disabled={savingPreferences}
                          className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-3 py-1 rounded disabled:opacity-50"
                        >
                          {savingPreferences ? 'Saving...' : 'Save'}
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={() => setEditingPreferences(true)}
                        className="text-primary hover:text-primary-dark text-sm font-medium"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                {message && (
                  <div className={`px-6 py-3 ${message.includes('success') ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'}`}>
                    <p className="text-sm">{message}</p>
                  </div>
                )}
                <div className="p-6">
                  {preferencesLoading ? (
                    <div className="text-center py-8">
                      <span className="material-symbols-outlined text-4xl text-primary animate-spin mb-4">refresh</span>
                      <p className="text-gray-500 dark:text-gray-400">Loading preferences...</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Notification Preferences */}
                      <div>
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white mb-4">Notifications</h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-slate-700 dark:text-slate-300">Email Notifications</span>
                            <input 
                              type="checkbox" 
                              checked={tempPreferences.emailNotifications || false}
                              onChange={(e) => handlePreferenceChange('emailNotifications', e.target.checked)}
                              className="w-4 h-4 text-primary rounded focus:ring-primary"
                              disabled={!editingPreferences}
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-slate-700 dark:text-slate-300">SMS Notifications</span>
                            <input 
                              type="checkbox" 
                              checked={tempPreferences.smsNotifications || false}
                              onChange={(e) => handlePreferenceChange('smsNotifications', e.target.checked)}
                              className="w-4 h-4 text-primary rounded focus:ring-primary"
                              disabled={!editingPreferences}
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-slate-700 dark:text-slate-300">Order Updates</span>
                            <input 
                              type="checkbox" 
                              checked={tempPreferences.orderUpdates || false}
                              onChange={(e) => handlePreferenceChange('orderUpdates', e.target.checked)}
                              className="w-4 h-4 text-primary rounded focus:ring-primary"
                              disabled={!editingPreferences}
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-slate-700 dark:text-slate-300">Promotions & Offers</span>
                            <input 
                              type="checkbox" 
                              checked={tempPreferences.promotions || false}
                              onChange={(e) => handlePreferenceChange('promotions', e.target.checked)}
                              className="w-4 h-4 text-primary rounded focus:ring-primary"
                              disabled={!editingPreferences}
                            />
                          </label>
                        </div>
                      </div>

                      {/* Display Preferences */}
                      <div>
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white mb-4">Display</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Language</label>
                            <select 
                              value={tempPreferences.language || 'en'}
                              onChange={(e) => handlePreferenceChange('language', e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                              disabled={!editingPreferences}
                            >
                              <option value="en">English</option>
                              <option value="ur">Urdu</option>
                              <option value="ar">Arabic</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Currency</label>
                            <select 
                              value={tempPreferences.currency || 'USD'}
                              onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                              disabled={!editingPreferences}
                            >
                              <option value="USD">USD ($)</option>
                              <option value="PKR">PKR (₨)</option>
                              <option value="EUR">EUR (€)</option>
                              <option value="GBP">GBP (£)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Theme</label>
                            <select 
                              value={tempPreferences.theme || 'auto'}
                              onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                              disabled={!editingPreferences}
                            >
                              <option value="light">Light</option>
                              <option value="dark">Dark</option>
                              <option value="auto">Auto</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Order Preferences */}
                      <div>
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white mb-4">Orders</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Default Order Type</label>
                            <select 
                              value={tempPreferences.defaultOrderType || 'delivery'}
                              onChange={(e) => handlePreferenceChange('defaultOrderType', e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                              disabled={!editingPreferences}
                            >
                              <option value="delivery">Delivery</option>
                              <option value="pickup">Pickup</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Default Tip Percentage</label>
                            <select 
                              value={tempPreferences.defaultTipPercentage || 10}
                              onChange={(e) => handlePreferenceChange('defaultTipPercentage', parseInt(e.target.value))}
                              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                              disabled={!editingPreferences}
                            >
                              <option value="0">No Tip</option>
                              <option value="10">10%</option>
                              <option value="15">15%</option>
                              <option value="20">20%</option>
                              <option value="25">25%</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Spice Level</label>
                            <select 
                              value={tempPreferences.spiceLevel || 'medium'}
                              onChange={(e) => handlePreferenceChange('spiceLevel', e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                              disabled={!editingPreferences}
                            >
                              <option value="mild">Mild</option>
                              <option value="medium">Medium</option>
                              <option value="hot">Hot</option>
                              <option value="extra_hot">Extra Hot</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Payment Method Modal */}
      {showAddPaymentMethod && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">
              {editingPaymentMethod ? 'Edit Payment Method' : 'Add Payment Method'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Payment Type</label>
                <select 
                  value={paymentMethodForm.type}
                  onChange={(e) => setPaymentMethodForm({...paymentMethodForm, type: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="debit_card">Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash_on_delivery">Cash on Delivery</option>
                </select>
              </div>
              
              {(paymentMethodForm.type === 'credit_card' || paymentMethodForm.type === 'debit_card') && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Type</label>
                    <select 
                      value={paymentMethodForm.cardType}
                      onChange={(e) => setPaymentMethodForm({...paymentMethodForm, cardType: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                    >
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="amex">American Express</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number (Last 4)</label>
                    <input 
                      type="text"
                      maxLength={4}
                      value={paymentMethodForm.lastFour}
                      onChange={(e) => setPaymentMethodForm({...paymentMethodForm, lastFour: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="1234"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Month</label>
                      <input 
                        type="text"
                        maxLength={2}
                        value={paymentMethodForm.expiryMonth}
                        onChange={(e) => setPaymentMethodForm({...paymentMethodForm, expiryMonth: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="MM"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Year</label>
                      <input 
                        type="text"
                        maxLength={4}
                        value={paymentMethodForm.expiryYear}
                        onChange={(e) => setPaymentMethodForm({...paymentMethodForm, expiryYear: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="YYYY"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                    <input 
                      type="text"
                      value={paymentMethodForm.cardholderName}
                      onChange={(e) => setPaymentMethodForm({...paymentMethodForm, cardholderName: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="John Doe"
                    />
                  </div>
                </>
              )}
              
              {paymentMethodForm.type === 'paypal' && (
                <div>
                  <label className="block text-sm font-medium mb-1">PayPal Email</label>
                  <input 
                    type="email"
                    value={paymentMethodForm.paypalEmail}
                    onChange={(e) => setPaymentMethodForm({...paymentMethodForm, paypalEmail: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="paypal@example.com"
                  />
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-6">
              <button 
                onClick={() => {
                  setShowAddPaymentMethod(false);
                  setEditingPaymentMethod(null);
                  setPaymentMethodForm({
                    type: 'credit_card',
                    cardType: 'visa',
                    lastFour: '',
                    expiryMonth: '',
                    expiryYear: '',
                    cardholderName: '',
                    paypalEmail: ''
                  });
                }}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleSavePaymentMethod}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                {editingPaymentMethod ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Address Modal */}
      {showAddAddress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">
              {editingAddress ? 'Edit Address' : 'Add Address'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Address Type</label>
                <select 
                  value={addressForm.type}
                  onChange={(e) => setAddressForm({...addressForm, type: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address Name</label>
                <input 
                  type="text"
                  value={addressForm.name}
                  onChange={(e) => setAddressForm({...addressForm, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Home"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Street Address</label>
                <input 
                  type="text"
                  value={addressForm.street}
                  onChange={(e) => setAddressForm({...addressForm, street: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="123 Main St"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input 
                    type="text"
                    value={addressForm.city}
                    onChange={(e) => setAddressForm({...addressForm, city: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Karachi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input 
                    type="text"
                    value={addressForm.state}
                    onChange={(e) => setAddressForm({...addressForm, state: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Sindh"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">ZIP Code</label>
                  <input 
                    type="text"
                    value={addressForm.zipCode}
                    onChange={(e) => setAddressForm({...addressForm, zipCode: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="75400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel"
                    value={addressForm.phone}
                    onChange={(e) => setAddressForm({...addressForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  checked={addressForm.isDefault}
                  onChange={(e) => setAddressForm({...addressForm, isDefault: e.target.checked})}
                  className="w-4 h-4 text-primary rounded"
                />
                <label className="ml-2 text-sm">Set as default address</label>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button 
                onClick={() => {
                  setShowAddAddress(false);
                  setEditingAddress(null);
                  setAddressForm({
                    type: 'home',
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: 'Pakistan',
                    phone: '',
                    isDefault: false
                  });
                }}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveAddress}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                {editingAddress ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
