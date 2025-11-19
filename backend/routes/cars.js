const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Car = require('../models/Car');
const { protect, authorize, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all cars with filtering and pagination
// @route   GET /api/cars
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  query('category').optional().isIn(['economy', 'luxury', 'suv', 'sports', 'electric', 'hybrid']),
  query('fuel').optional().isIn(['gasoline', 'electric', 'hybrid', 'diesel']),
  query('minPrice').optional().isFloat({ min: 0 }),
  query('maxPrice').optional().isFloat({ min: 0 }),
  query('seats').optional().isInt({ min: 1, max: 9 }),
  query('location').optional().trim(),
  query('sortBy').optional().isIn(['price', 'rating', 'name', 'createdAt']),
  query('sortOrder').optional().isIn(['asc', 'desc'])
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
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    // Build filter object
    const filters = {
      available: true,
      status: 'active'
    };

    if (req.query.category) filters.category = req.query.category;
    if (req.query.fuel) filters.fuel = req.query.fuel;
    if (req.query.seats) filters.seats = { $gte: parseInt(req.query.seats) };
    if (req.query.location) {
      filters['location.city'] = new RegExp(req.query.location, 'i');
    }

    // Price range filter
    if (req.query.minPrice || req.query.maxPrice) {
      filters.price = {};
      if (req.query.minPrice) filters.price.$gte = parseFloat(req.query.minPrice);
      if (req.query.maxPrice) filters.price.$lte = parseFloat(req.query.maxPrice);
    }

    // Build sort object
    const sortBy = req.query.sortBy || 'rating';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
    const sort = { [sortBy]: sortOrder };

    const cars = await Car.find(filters)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Car.countDocuments(filters);

    res.status(200).json({
      success: true,
      count: cars.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      cars
    });
  } catch (error) {
    console.error('Get cars error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get single car
// @route   GET /api/cars/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found'
      });
    }

    res.status(200).json({
      success: true,
      car
    });
  } catch (error) {
    console.error('Get car error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get featured cars
// @route   GET /api/cars/featured
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 4;
    const cars = await Car.getFeaturedCars(limit);

    res.status(200).json({
      success: true,
      count: cars.length,
      cars
    });
  } catch (error) {
    console.error('Get featured cars error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Search cars
// @route   GET /api/cars/search
// @access  Public
router.get('/search', [
  query('q').optional().trim(),
  query('category').optional().isIn(['economy', 'luxury', 'suv', 'sports', 'electric', 'hybrid']),
  query('fuel').optional().isIn(['gasoline', 'electric', 'hybrid', 'diesel']),
  query('minPrice').optional().isFloat({ min: 0 }),
  query('maxPrice').optional().isFloat({ min: 0 }),
  query('seats').optional().isInt({ min: 1, max: 9 }),
  query('location').optional().trim()
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

    const searchFilters = {};

    if (req.query.category) searchFilters.category = req.query.category;
    if (req.query.fuel) searchFilters.fuel = req.query.fuel;
    if (req.query.seats) searchFilters.seats = parseInt(req.query.seats);
    if (req.query.location) searchFilters.location = req.query.location;
    if (req.query.minPrice) searchFilters.minPrice = parseFloat(req.query.minPrice);
    if (req.query.maxPrice) searchFilters.maxPrice = parseFloat(req.query.maxPrice);

    const cars = await Car.searchCars(searchFilters);

    res.status(200).json({
      success: true,
      count: cars.length,
      cars
    });
  } catch (error) {
    console.error('Search cars error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Create new car (Admin only)
// @route   POST /api/cars
// @access  Private/Admin
router.post('/', [
  protect,
  authorize('admin'),
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Car name must be between 2 and 100 characters'),
  body('category')
    .isIn(['economy', 'luxury', 'suv', 'sports', 'electric', 'hybrid'])
    .withMessage('Invalid category'),
  body('price')
    .isFloat({ min: 1 })
    .withMessage('Price must be greater than 0'),
  body('fuel')
    .isIn(['gasoline', 'electric', 'hybrid', 'diesel'])
    .withMessage('Invalid fuel type'),
  body('seats')
    .isInt({ min: 1, max: 9 })
    .withMessage('Seats must be between 1 and 9'),
  body('transmission')
    .optional()
    .isIn(['Automatic', 'Manual', 'CVT'])
    .withMessage('Invalid transmission type'),
  body('image')
    .isURL()
    .withMessage('Valid image URL is required'),
  body('images')
    .optional()
    .isArray()
    .withMessage('Images must be an array'),
  body('features')
    .optional()
    .isArray()
    .withMessage('Features must be an array'),
  body('location.city')
    .trim()
    .notEmpty()
    .withMessage('City is required'),
  body('location.state')
    .trim()
    .notEmpty()
    .withMessage('State is required')
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

    const car = await Car.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Car created successfully',
      car
    });
  } catch (error) {
    console.error('Create car error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update car (Admin only)
// @route   PUT /api/cars/:id
// @access  Private/Admin
router.put('/:id', [
  protect,
  authorize('admin'),
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Car name must be between 2 and 100 characters'),
  body('category')
    .optional()
    .isIn(['economy', 'luxury', 'suv', 'sports', 'electric', 'hybrid'])
    .withMessage('Invalid category'),
  body('price')
    .optional()
    .isFloat({ min: 1 })
    .withMessage('Price must be greater than 0'),
  body('fuel')
    .optional()
    .isIn(['gasoline', 'electric', 'hybrid', 'diesel'])
    .withMessage('Invalid fuel type'),
  body('seats')
    .optional()
    .isInt({ min: 1, max: 9 })
    .withMessage('Seats must be between 1 and 9'),
  body('transmission')
    .optional()
    .isIn(['Automatic', 'Manual', 'CVT'])
    .withMessage('Invalid transmission type'),
  body('image')
    .optional()
    .isURL()
    .withMessage('Valid image URL is required'),
  body('images')
    .optional()
    .isArray()
    .withMessage('Images must be an array'),
  body('features')
    .optional()
    .isArray()
    .withMessage('Features must be an array')
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

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      car
    });
  } catch (error) {
    console.error('Update car error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Delete car (Admin only)
// @route   DELETE /api/cars/:id
// @access  Private/Admin
router.delete('/:id', [protect, authorize('admin')], async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Car deleted successfully'
    });
  } catch (error) {
    console.error('Delete car error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update car availability (Admin only)
// @route   PUT /api/cars/:id/availability
// @access  Private/Admin
router.put('/:id/availability', [
  protect,
  authorize('admin'),
  body('available')
    .isBoolean()
    .withMessage('Available must be a boolean value'),
  body('status')
    .optional()
    .isIn(['active', 'maintenance', 'retired'])
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

    const { available, status } = req.body;
    const updateData = { available };

    if (status) {
      updateData.status = status;
    }

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Car availability updated successfully',
      car
    });
  } catch (error) {
    console.error('Update car availability error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update car price (Admin only)
// @route   PUT /api/cars/:id/price
// @access  Private/Admin
router.put('/:id/price', [
  protect,
  authorize('admin'),
  body('price')
    .isFloat({ min: 1 })
    .withMessage('Price must be greater than 0')
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

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { price: req.body.price },
      { new: true, runValidators: true }
    );

    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Car price updated successfully',
      car
    });
  } catch (error) {
    console.error('Update car price error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Set featured cars (Admin only)
// @route   PUT /api/cars/featured
// @access  Private/Admin
router.put('/featured', [
  protect,
  authorize('admin'),
  body('carIds')
    .isArray()
    .withMessage('Car IDs must be an array'),
  body('carIds.*')
    .isMongoId()
    .withMessage('Invalid car ID format')
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

    const { carIds } = req.body;

    // First, remove featured status from all cars
    await Car.updateMany({}, { isFeatured: false });

    // Then set featured status for selected cars
    if (carIds.length > 0) {
      await Car.updateMany(
        { _id: { $in: carIds } },
        { isFeatured: true }
      );
    }

    const featuredCars = await Car.find({ isFeatured: true });

    res.status(200).json({
      success: true,
      message: 'Featured cars updated successfully',
      featuredCars
    });
  } catch (error) {
    console.error('Update featured cars error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get car categories
// @route   GET /api/cars/categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Car.distinct('category');
    
    res.status(200).json({
      success: true,
      categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get car statistics (Admin only)
// @route   GET /api/cars/admin/stats
// @access  Private/Admin
router.get('/admin/stats', [protect, authorize('admin')], async (req, res) => {
  try {
    const totalCars = await Car.countDocuments();
    const availableCars = await Car.countDocuments({ available: true, status: 'active' });
    const featuredCars = await Car.countDocuments({ isFeatured: true });
    
    const categoryStats = await Car.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    const fuelStats = await Car.aggregate([
      { $group: { _id: '$fuel', count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalCars,
        availableCars,
        featuredCars,
        categoryBreakdown: categoryStats,
        fuelBreakdown: fuelStats
      }
    });
  } catch (error) {
    console.error('Get car stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
