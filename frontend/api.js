// API service for connecting frontend to backend
class CarRentalAPI {
  constructor(baseURL = 'http://127.0.0.1:5000/api') {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('authToken');
  }

  // Helper method to make HTTP requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    // Add authorization header if token exists
    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // Authentication methods
  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async login(email, password) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async logout() {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearToken();
    }
  }

  async getCurrentUser() {
    return await this.request('/auth/me');
  }

  async updateProfile(profileData) {
    return await this.request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });
  }

  async changePassword(currentPassword, newPassword) {
    return await this.request('/auth/password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword })
    });
  }

  // Car methods
  async getCars(filters = {}) {
    const queryParams = new URLSearchParams();
    
    Object.keys(filters).forEach(key => {
      if (filters[key] !== undefined && filters[key] !== '') {
        queryParams.append(key, filters[key]);
      }
    });

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/cars?${queryString}` : '/cars';
    
    return await this.request(endpoint);
  }

  async getCar(id) {
    return await this.request(`/cars/${id}`);
  }

  async getFeaturedCars(limit = 4) {
    return await this.request(`/cars/featured?limit=${limit}`);
  }

  async searchCars(searchParams) {
    const queryParams = new URLSearchParams();
    
    Object.keys(searchParams).forEach(key => {
      if (searchParams[key] !== undefined && searchParams[key] !== '') {
        queryParams.append(key, searchParams[key]);
      }
    });

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/cars/search?${queryString}` : '/cars/search';
    
    return await this.request(endpoint);
  }

  async getCarCategories() {
    return await this.request('/cars/categories');
  }

  // Booking methods
  async createBooking(bookingData) {
    return await this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData)
    });
  }

  async getUserBookings(page = 1, limit = 10) {
    return await this.request(`/bookings?page=${page}&limit=${limit}`);
  }

  async getBooking(id) {
    return await this.request(`/bookings/${id}`);
  }

  async updateBookingStatus(id, status, notes = {}) {
    return await this.request(`/bookings/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status, notes })
    });
  }

  async cancelBooking(id, reason = '') {
    return await this.request(`/bookings/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason })
    });
  }

  async addReview(id, rating, comment = '') {
    return await this.request(`/bookings/${id}/review`, {
      method: 'POST',
      body: JSON.stringify({ rating, comment })
    });
  }

  // Admin methods
  async createCar(carData) {
    return await this.request('/cars', {
      method: 'POST',
      body: JSON.stringify(carData)
    });
  }

  async updateCar(id, carData) {
    return await this.request(`/cars/${id}`, {
      method: 'PUT',
      body: JSON.stringify(carData)
    });
  }

  async deleteCar(id) {
    return await this.request(`/cars/${id}`, {
      method: 'DELETE'
    });
  }

  async updateCarAvailability(id, available, status) {
    return await this.request(`/cars/${id}/availability`, {
      method: 'PUT',
      body: JSON.stringify({ available, status })
    });
  }

  async updateCarPrice(id, price) {
    return await this.request(`/cars/${id}/price`, {
      method: 'PUT',
      body: JSON.stringify({ price })
    });
  }

  async setFeaturedCars(carIds) {
    return await this.request('/cars/featured', {
      method: 'PUT',
      body: JSON.stringify({ carIds })
    });
  }

  async getAllBookings(filters = {}) {
    const queryParams = new URLSearchParams();
    
    Object.keys(filters).forEach(key => {
      if (filters[key] !== undefined && filters[key] !== '') {
        queryParams.append(key, filters[key]);
      }
    });

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/bookings/admin/all?${queryString}` : '/bookings/admin/all';
    
    return await this.request(endpoint);
  }

  async getBookingStats(startDate, endDate) {
    const queryParams = new URLSearchParams();
    if (startDate) queryParams.append('startDate', startDate);
    if (endDate) queryParams.append('endDate', endDate);

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/bookings/admin/stats?${queryString}` : '/bookings/admin/stats';
    
    return await this.request(endpoint);
  }

  async getAllUsers(filters = {}) {
    const queryParams = new URLSearchParams();
    
    Object.keys(filters).forEach(key => {
      if (filters[key] !== undefined && filters[key] !== '') {
        queryParams.append(key, filters[key]);
      }
    });

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/users?${queryString}` : '/users';
    
    return await this.request(endpoint);
  }

  async getUser(id) {
    return await this.request(`/users/${id}`);
  }

  async updateUser(id, userData) {
    return await this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }

  async deleteUser(id) {
    return await this.request(`/users/${id}`, {
      method: 'DELETE'
    });
  }

  async activateUser(id) {
    return await this.request(`/users/${id}/activate`, {
      method: 'PUT'
    });
  }

  async deactivateUser(id) {
    return await this.request(`/users/${id}/deactivate`, {
      method: 'PUT'
    });
  }

  async searchUsers(query, page = 1, limit = 10) {
    return await this.request(`/users/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
  }

  async getUserStats() {
    return await this.request('/users/admin/stats');
  }

  async getCarStats() {
    return await this.request('/cars/admin/stats');
  }

  // Token management
  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  isAuthenticated() {
    return !!this.token;
  }

  // Health check
  async healthCheck() {
    return await this.request('/health');
  }
}

// Create global API instance
window.api = new CarRentalAPI();

// Helper functions for backward compatibility with existing code
window.apiHelpers = {
  // Auth helpers
  async register(name, email, password, phone) {
    try {
      const response = await window.api.register({ name, email, password, phone });
      if (response.success) {
        window.currentUser = response.user;
        if (typeof updateAccountUI === 'function') updateAccountUI();
        return true;
      }
      return false;
    } catch (error) {
      alert(error.message || 'Registration failed');
      return false;
    }
  },

  async login(email, password) {
    try {
      const response = await window.api.login(email, password);
      if (response.success) {
        window.currentUser = response.user;
        if (typeof updateAccountUI === 'function') updateAccountUI();
        return true;
      }
      return false;
    } catch (error) {
      alert(error.message || 'Login failed');
      return false;
    }
  },

  async logout() {
    try {
      await window.api.logout();
      window.currentUser = null;
      if (typeof updateAccountUI === 'function') updateAccountUI();
      alert('You have been logged out.');
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local state even if API call fails
      window.currentUser = null;
      if (typeof updateAccountUI === 'function') updateAccountUI();
      alert('You have been logged out.');
    }
  },

  async loadAuthFromStorage() {
    try {
      if (window.api.isAuthenticated()) {
        const response = await window.api.getCurrentUser();
        if (response.success) {
          window.currentUser = response.user;
        } else {
          window.api.clearToken();
        }
      } else {
        window.currentUser = null;
      }
    } catch (error) {
      console.error('Auth load error:', error);
      window.api.clearToken();
      window.currentUser = null;
    }
    
    if (typeof updateAccountUI === 'function') updateAccountUI();
  },

  // Booking helpers
  async getUserBookings(userEmail) {
    try {
      const response = await window.api.getUserBookings();
      return response.bookings || [];
    } catch (error) {
      console.error('Get bookings error:', error);
      return [];
    }
  },

  async addBooking(userEmail, booking) {
    try {
      const response = await window.api.createBooking(booking);
      return response.success;
    } catch (error) {
      console.error('Add booking error:', error);
      alert(error.message || 'Failed to create booking');
      return false;
    }
  },

  async updateBooking(userEmail, bookingId, updates) {
    try {
      const response = await window.api.updateBookingStatus(bookingId, updates.status, updates.notes);
      return response.success;
    } catch (error) {
      console.error('Update booking error:', error);
      return false;
    }
  },

  async removeBooking(userEmail, bookingId) {
    try {
      const response = await window.api.cancelBooking(bookingId, 'User cancelled');
      return response.success;
    } catch (error) {
      console.error('Remove booking error:', error);
      return false;
    }
  },

  async hasBookedBefore(userEmail) {
    try {
      const response = await window.api.getUserBookings(1, 1);
      return response.total > 0;
    } catch (error) {
      console.error('Check booking history error:', error);
      return false;
    }
  },

  // Car helpers
  async getCars() {
    try {
      const response = await window.api.getCars();
      return response.cars || [];
    } catch (error) {
      console.error('Get cars error:', error);
      return [];
    }
  },

  async getFeaturedCars() {
    try {
      const response = await window.api.getFeaturedCars();
      return response.cars || [];
    } catch (error) {
      console.error('Get featured cars error:', error);
      return [];
    }
  }
};

// Override existing functions to use API
window.register = window.apiHelpers.register;
window.login = window.apiHelpers.login;
window.logout = window.apiHelpers.logout;
window.loadAuthFromStorage = window.apiHelpers.loadAuthFromStorage;
window.getUserBookings = window.apiHelpers.getUserBookings;
window.addBooking = window.apiHelpers.addBooking;
window.updateBooking = window.apiHelpers.updateBooking;
window.removeBooking = window.apiHelpers.removeBooking;
window.hasBookedBefore = window.apiHelpers.hasBookedBefore;

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', function() {
  window.apiHelpers.loadAuthFromStorage();
});
