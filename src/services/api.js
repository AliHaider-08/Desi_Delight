import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
  uploadProfilePicture: (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    return api.post('/auth/upload-profile-picture', formData, config);
  },
};

// Menu API calls
export const menuAPI = {
  getMenuItems: () => api.get('/menu'),
  createMenuItem: (menuItem) => api.post('/menu', menuItem),
  updateMenuItem: (id, menuItem) => api.put(`/menu/${id}`, menuItem),
  deleteMenuItem: (id) => api.delete(`/menu/${id}`),
};

// Order API calls
export const orderAPI = {
  getOrders: () => api.get('/orders/my-orders'),
  createOrder: (orderData) => api.post('/orders', orderData),
  updateOrder: (id, orderData) => api.put(`/orders/${id}`, orderData),
  deleteOrder: (id) => api.delete(`/orders/${id}`),
};

// Reservation API calls
export const reservationAPI = {
  getReservations: () => api.get('/reservations'),
  createReservation: (reservationData) => api.post('/reservations', reservationData),
  updateReservation: (id, reservationData) => api.put(`/reservations/${id}`, reservationData),
  deleteReservation: (id) => api.delete(`/reservations/${id}`),
};

// Address API calls
export const addressAPI = {
  getAddresses: () => api.get('/addresses'),
  createAddress: (addressData) => api.post('/addresses', addressData),
  updateAddress: (id, addressData) => api.put(`/addresses/${id}`, addressData),
  deleteAddress: (id) => api.delete(`/addresses/${id}`),
  setDefaultAddress: (id) => api.put(`/addresses/${id}/default`),
};

// Payment Method API calls
export const paymentMethodAPI = {
  getPaymentMethods: () => api.get('/payment-methods'),
  createPaymentMethod: (paymentData) => api.post('/payment-methods', paymentData),
  updatePaymentMethod: (id, paymentData) => api.put(`/payment-methods/${id}`, paymentData),
  deletePaymentMethod: (id) => api.delete(`/payment-methods/${id}`),
  setDefaultPaymentMethod: (id) => api.put(`/payment-methods/${id}/default`),
};

// Preferences API calls
export const preferencesAPI = {
  getPreferences: () => api.get('/preferences'),
  updatePreferences: (preferencesData) => api.put('/preferences', preferencesData),
  resetPreferences: () => api.post('/preferences/reset'),
};

export default api;
