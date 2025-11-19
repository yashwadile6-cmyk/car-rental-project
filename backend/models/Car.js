const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Car name is required'],
    trim: true,
    maxlength: [100, 'Car name cannot be more than 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['economy', 'luxury', 'suv', 'sports', 'electric', 'hybrid'],
    lowercase: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Price must be greater than 0']
  },
  fuel: {
    type: String,
    required: [true, 'Fuel type is required'],
    enum: ['gasoline', 'electric', 'hybrid', 'diesel'],
    lowercase: true
  },
  seats: {
    type: Number,
    required: [true, 'Number of seats is required'],
    min: [1, 'Must have at least 1 seat'],
    max: [9, 'Cannot have more than 9 seats']
  },
  transmission: {
    type: String,
    required: [true, 'Transmission type is required'],
    enum: ['Automatic', 'Manual', 'CVT'],
    default: 'Automatic'
  },
  image: {
    type: String,
    required: [true, 'Main image is required'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+$/i.test(v);
      },
      message: 'Please provide a valid image URL'
    }
  },
  images: [{
    type: String,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+$/i.test(v);
      },
      message: 'Please provide a valid image URL'
    }
  }],
  features: [{
    type: String,
    trim: true
  }],
  available: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 4.5
  },
  totalBookings: {
    type: Number,
    default: 0
  },
  location: {
    city: {
      type: String,
      required: [true, 'City is required']
    },
    state: {
      type: String,
      required: [true, 'State is required']
    },
    zipCode: String,
    address: String
  },
  specifications: {
    engine: String,
    horsepower: Number,
    torque: Number,
    acceleration: String, // 0-60 mph time
    topSpeed: Number,
    fuelEconomy: String, // MPG or range for electric
    dimensions: {
      length: Number,
      width: Number,
      height: Number
    }
  },
  insurance: {
    included: { type: Boolean, default: true },
    coverage: String,
    deductible: Number
  },
  maintenance: {
    lastService: Date,
    nextService: Date,
    mileage: Number
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'maintenance', 'retired'],
    default: 'active'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
carSchema.index({ category: 1, available: 1 });
carSchema.index({ price: 1 });
carSchema.index({ location: 1 });
carSchema.index({ isFeatured: 1 });
carSchema.index({ rating: -1 });

// Virtual for average rating calculation
carSchema.virtual('averageRating').get(function() {
  // This would be calculated from reviews in a real application
  return this.rating;
});

// Method to check if car is available for booking
carSchema.methods.isAvailableForBooking = function(startDate, endDate) {
  if (!this.available || this.status !== 'active') {
    return false;
  }
  
  // Additional logic to check against existing bookings
  // This would require querying the bookings collection
  return true;
};

// Static method to get featured cars
carSchema.statics.getFeaturedCars = function(limit = 4) {
  return this.find({ 
    isFeatured: true, 
    available: true, 
    status: 'active' 
  })
  .sort({ rating: -1, totalBookings: -1 })
  .limit(limit);
};

// Static method to search cars
carSchema.statics.searchCars = function(filters = {}) {
  const query = { available: true, status: 'active' };
  
  if (filters.category) {
    query.category = filters.category;
  }
  
  if (filters.fuel) {
    query.fuel = filters.fuel;
  }
  
  if (filters.minPrice || filters.maxPrice) {
    query.price = {};
    if (filters.minPrice) query.price.$gte = filters.minPrice;
    if (filters.maxPrice) query.price.$lte = filters.maxPrice;
  }
  
  if (filters.seats) {
    query.seats = { $gte: filters.seats };
  }
  
  if (filters.location) {
    query['location.city'] = new RegExp(filters.location, 'i');
  }
  
  return this.find(query).sort({ rating: -1 });
};

module.exports = mongoose.model('Car', carSchema);
