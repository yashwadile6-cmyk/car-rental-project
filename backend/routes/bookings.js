const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Booking = require('../models/Booking');
const Car = require('../models/Car');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
router.post('/', [
  protect,
  body('carId')
    .notEmpty()
    .withMessage('Car ID is required'),
  body('customerDetails.name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Customer name is required'),
  body('customerDetails.email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('customerDetails.phone')
    .notEmpty()
    .withMessage('Phone number is required'),
  body('rentalPeriod.pickupDate')
    .isISO8601()
    .withMessage('Valid pickup date is required'),
  body('rentalPeriod.returnDate')
    .isISO8601()
    .withMessage('Valid return date is required'),
  body('payment.method')
    .isIn(['upi', 'card', 'netbanking', 'cash'])
    .withMessage('Valid payment method is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      carId,
      customerDetails,
      rentalPeriod,
      payment,
      location,
      additionalServices,
      notes
    } = req.body;

    // Check if car exists and is available
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found'
      });
    }

    if (!car.available || car.status !== 'active') {
      return res.status(400).json({
        success: false,
        message: 'Car is not available for booking'
      });
    }

    // Check car availability for the requested dates
    const isAvailable = await Booking.checkCarAvailability(
      carId,
      new Date(rentalPeriod.pickupDate),
      new Date(rentalPeriod.returnDate)
    );

    if (isAvailable) {
      return res.status(400).json({
        success: false,
        message: 'Car is not available for the selected dates'
      });
    }

    // Calculate pricing
    const pickupDate = new Date(rentalPeriod.pickupDate);
    const returnDate = new Date(rentalPeriod.returnDate);
    const duration = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
    const totalPrice = car.price * duration;

    // Create booking
    const booking = await Booking.create({
      user: req.user.id,
      car: carId,
      customerDetails,
      rentalPeriod: {
        ...rentalPeriod,
        pickupDate,
        returnDate,
        duration
      },
      pricing: {
        dailyRate: car.price,
        totalPrice,
        taxes: totalPrice * 0.1, // 10% tax
        fees: 0,
        discount: 0
      },
      payment,
      location,
      additionalServices,
      notes
    });

    // Populate car details for response
    await booking.populate('car', 'name image price category');

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
router.get('/', [
  protect,
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const bookings = await Booking.find({ user: req.user.id })
      .populate('car', 'name image price category')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Booking.countDocuments({ user: req.user.id });

    res.status(200).json({
      success: true,
      count: bookings.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      bookings
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('car', 'name image price category features')
      .populate('user', 'name email phone');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if user owns this booking or is admin
    if (booking.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this booking'
      });
    }

    res.status(200).json({
      success: true,
      booking
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private
router.put('/:id/status', [
  protect,
  body('status')
    .isIn(['pending', 'confirmed', 'active', 'completed', 'cancelled', 'no-show'])
    .withMessage('Invalid status')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check authorization
    if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this booking'
      });
    }

    const { status, notes } = req.body;

    // Update booking
    booking.status = status;
    if (notes) {
      booking.notes = { ...booking.notes, ...notes };
    }

    // Handle cancellation
    if (status === 'cancelled') {
      booking.cancellation = {
        reason: req.body.cancellationReason || 'User cancelled',
        cancelledAt: new Date(),
        refundAmount: booking.calculateRefund(),
        refundStatus: 'pending'
      };
    }

    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Booking status updated successfully',
      booking
    });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Cancel booking
// @route   POST /api/bookings/:id/cancel
// @access  Private
router.post('/:id/cancel', [
  protect,
  body('reason').optional().trim()
], async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check authorization
    if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to cancel this booking'
      });
    }

    // Check if booking can be cancelled
    if (!booking.canBeCancelled()) {
      return res.status(400).json({
        success: false,
        message: 'Booking cannot be cancelled at this time'
      });
    }

    // Calculate refund
    const refundAmount = booking.calculateRefund();

    // Update booking
    booking.status = 'cancelled';
    booking.cancellation = {
      reason: req.body.reason || 'User cancelled',
      cancelledAt: new Date(),
      refundAmount,
      refundStatus: 'pending'
    };

    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully',
      refundAmount,
      booking
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Add review to booking
// @route   POST /api/bookings/:id/review
// @access  Private
router.post('/:id/review', [
  protect,
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  body('comment').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check authorization
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to review this booking'
      });
    }

    // Check if booking is completed
    if (booking.status !== 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Can only review completed bookings'
      });
    }

    // Check if already reviewed
    if (booking.review && booking.review.rating) {
      return res.status(400).json({
        success: false,
        message: 'Booking already reviewed'
      });
    }

    // Add review
    booking.review = {
      rating: req.body.rating,
      comment: req.body.comment,
      createdAt: new Date()
    };

    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Review added successfully',
      booking
    });
  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get all bookings (Admin only)
// @route   GET /api/bookings/admin/all
// @access  Private/Admin
router.get('/admin/all', [
  protect,
  authorize('admin'),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isIn(['pending', 'confirmed', 'active', 'completed', 'cancelled', 'no-show'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }

    const bookings = await Booking.find(filter)
      .populate('user', 'name email phone')
      .populate('car', 'name image price category')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Booking.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: bookings.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      bookings
    });
  } catch (error) {
    console.error('Get all bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get booking statistics (Admin only)
// @route   GET /api/bookings/admin/stats
// @access  Private/Admin
router.get('/admin/stats', [
  protect,
  authorize('admin'),
  query('startDate').optional().isISO8601(),
  query('endDate').optional().isISO8601()
], async (req, res) => {
  try {
    const startDate = req.query.startDate ? new Date(req.query.startDate) : null;
    const endDate = req.query.endDate ? new Date(req.query.endDate) : null;

    const stats = await Booking.getBookingStats(startDate, endDate);

    // Get additional statistics
    const totalBookings = await Booking.countDocuments();
    const totalRevenue = await Booking.aggregate([
      { $group: { _id: null, total: { $sum: '$pricing.totalPrice' } } }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalBookings,
        totalRevenue: totalRevenue[0]?.total || 0,
        statusBreakdown: stats
      }
    });
  } catch (error) {
    console.error('Get booking stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
