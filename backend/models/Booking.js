const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: [true, 'Car is required']
  },
  bookingId: {
    type: String,
    unique: true,
    required: true
  },
  customerDetails: {
    name: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Customer email is required'],
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'Customer phone is required'],
      trim: true
    }
  },
  rentalPeriod: {
    pickupDate: {
      type: Date,
      required: [true, 'Pickup date is required']
    },
    returnDate: {
      type: Date,
      required: [true, 'Return date is required']
    },
    duration: {
      type: Number, // in days
      required: true
    }
  },
  pricing: {
    dailyRate: {
      type: Number,
      required: [true, 'Daily rate is required']
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required']
    },
    taxes: {
      type: Number,
      default: 0
    },
    fees: {
      type: Number,
      default: 0
    },
    discount: {
      type: Number,
      default: 0
    }
  },
  payment: {
    method: {
      type: String,
      enum: ['upi', 'card', 'netbanking', 'cash'],
      required: [true, 'Payment method is required']
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionId: String,
    paymentReference: String,
    paidAt: Date
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'active', 'completed', 'cancelled', 'no-show'],
    default: 'pending'
  },
  location: {
    pickup: {
      address: String,
      city: String,
      coordinates: {
        lat: Number,
        lng: Number
      }
    },
    return: {
      address: String,
      city: String,
      coordinates: {
        lat: Number,
        lng: Number
      }
    }
  },
  additionalServices: [{
    name: String,
    price: Number,
    description: String
  }],
  notes: {
    customer: String,
    admin: String
  },
  cancellation: {
    reason: String,
    cancelledAt: Date,
    refundAmount: Number,
    refundStatus: {
      type: String,
      enum: ['pending', 'processed', 'failed'],
      default: 'pending'
    }
  },
  review: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    createdAt: Date
  }
}, {
  timestamps: true
});

// Indexes for better query performance
bookingSchema.index({ user: 1, createdAt: -1 });
bookingSchema.index({ car: 1, 'rentalPeriod.pickupDate': 1, 'rentalPeriod.returnDate': 1 });
bookingSchema.index({ bookingId: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ 'payment.status': 1 });

// Pre-save middleware to generate booking ID and calculate duration
bookingSchema.pre('save', function(next) {
  if (this.isNew) {
    // Generate unique booking ID
    this.bookingId = 'BK' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
  }
  
  // Calculate rental duration
  if (this.rentalPeriod.pickupDate && this.rentalPeriod.returnDate) {
    const diffTime = Math.abs(this.rentalPeriod.returnDate - this.rentalPeriod.pickupDate);
    this.rentalPeriod.duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
  next();
});

// Virtual for total amount including taxes and fees
bookingSchema.virtual('totalAmount').get(function() {
  return this.pricing.totalPrice + this.pricing.taxes + this.pricing.fees - this.pricing.discount;
});

// Method to check if booking can be cancelled
bookingSchema.methods.canBeCancelled = function() {
  const now = new Date();
  const pickupDate = new Date(this.rentalPeriod.pickupDate);
  const hoursUntilPickup = (pickupDate - now) / (1000 * 60 * 60);
  
  return this.status === 'confirmed' && hoursUntilPickup > 24;
};

// Method to calculate refund amount
bookingSchema.methods.calculateRefund = function() {
  if (!this.canBeCancelled()) {
    return 0;
  }
  
  const now = new Date();
  const pickupDate = new Date(this.rentalPeriod.pickupDate);
  const hoursUntilPickup = (pickupDate - now) / (1000 * 60 * 60);
  
  if (hoursUntilPickup > 72) {
    return this.totalAmount; // Full refund
  } else if (hoursUntilPickup > 24) {
    return this.totalAmount * 0.8; // 80% refund
  } else {
    return this.totalAmount * 0.5; // 50% refund
  }
};

// Static method to get user bookings
bookingSchema.statics.getUserBookings = function(userId, page = 1, limit = 10) {
  return this.find({ user: userId })
    .populate('car', 'name image price category')
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
};

// Static method to check car availability
bookingSchema.statics.checkCarAvailability = function(carId, startDate, endDate, excludeBookingId = null) {
  const query = {
    car: carId,
    status: { $in: ['confirmed', 'active'] },
    $or: [
      {
        'rentalPeriod.pickupDate': { $lte: endDate },
        'rentalPeriod.returnDate': { $gte: startDate }
      }
    ]
  };
  
  if (excludeBookingId) {
    query._id = { $ne: excludeBookingId };
  }
  
  return this.findOne(query);
};

// Static method to get booking statistics
bookingSchema.statics.getBookingStats = function(startDate, endDate) {
  const matchStage = {};
  if (startDate && endDate) {
    matchStage.createdAt = { $gte: startDate, $lte: endDate };
  }
  
  return this.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalRevenue: { $sum: '$pricing.totalPrice' }
      }
    }
  ]);
};

module.exports = mongoose.model('Booking', bookingSchema);
