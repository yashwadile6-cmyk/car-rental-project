# Car Rental System - Complete Setup Guide

## 🎉 Project Successfully Organized!

Your car rental system has been completely organized into a professional structure:

```
car-rental-system/
├── 📁 backend/                    # Backend API Server
│   ├── 📁 middleware/             # Authentication & Security
│   │   └── auth.js               # JWT authentication middleware
│   ├── 📁 models/                # Database Models
│   │   ├── User.js              # User schema & methods
│   │   ├── Car.js               # Car schema & methods
│   │   └── Booking.js           # Booking schema & methods
│   ├── 📁 routes/                # API Routes
│   │   ├── auth.js              # Authentication endpoints
│   │   ├── cars.js              # Car management endpoints
│   │   ├── bookings.js          # Booking endpoints
│   │   └── users.js             # User management endpoints
│   ├── 📁 utils/                 # Utility Scripts
│   │   └── seedData.js          # Database seeding script
│   ├── server.js                # Main server file
│   ├── package.json             # Dependencies & scripts
│   ├── .env                     # Environment variables
│   ├── setup.bat                # Windows setup script
│   └── test-api.js              # API testing script
├── 📁 frontend/                  # Frontend Application
│   ├── index1 (1).html          # Main homepage
│   ├── about.html               # About page
│   ├── best-seller.html         # Best sellers page
│   ├── style1.css               # Styles
│   ├── script (2).js           # Frontend JavaScript
│   ├── api.js                   # API client
│   ├── authStore.js             # Authentication store
│   └── bookingStore.js          # Booking store
└── README.md                    # Complete documentation
```

## 🚀 Next Steps to Run Your Application

### 1. Install Prerequisites

**Install Node.js:**
- Download from: https://nodejs.org/
- Choose LTS version (recommended)
- Verify installation: Open Command Prompt and run `node --version`

**Install MongoDB:**
- Option A: Local MongoDB - Download from: https://www.mongodb.com/try/download/community
- Option B: MongoDB Atlas (Cloud) - Free at: https://www.mongodb.com/atlas

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Run setup script (Windows)
setup.bat

# Or manually:
# Copy environment file
copy env.example .env

# Edit .env file with your MongoDB connection string
# For local MongoDB: MONGODB_URI=mongodb://localhost:27017/car-rental
# For MongoDB Atlas: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/car-rental

# Seed database with sample data
npm run seed

# Start the server
npm run dev
```

### 3. Test the API

The server will run on `http://localhost:5000`

**Test endpoints:**
- Health check: `http://localhost:5000/api/health`
- Get cars: `http://localhost:5000/api/cars`
- Register user: `POST http://localhost:5000/api/auth/register`

### 4. Run Frontend

Open `frontend/index1 (1).html` in your web browser, or serve it with a local server:

```bash
# Using Python (if installed)
cd frontend
python -m http.server 8000

# Using Node.js serve (if installed globally)
npx serve frontend
```

## 🎯 Features Available

### ✅ Backend Features
- **Authentication**: JWT-based login/register system
- **User Management**: Profile management, password change
- **Car Management**: CRUD operations for cars
- **Booking System**: Complete booking lifecycle
- **Admin Panel**: User and car management
- **Database**: MongoDB with proper schemas
- **Security**: Password hashing, input validation
- **API**: RESTful API with proper error handling

### ✅ Frontend Features
- **Responsive Design**: Works on all devices
- **Car Browsing**: Search, filter, and view cars
- **Booking System**: Complete booking flow
- **User Dashboard**: View bookings and profile
- **Admin Interface**: Manage cars and users
- **Authentication**: Login/register forms
- **Modern UI**: Tailwind CSS styling

## 🧪 Sample Data

After running the seed script, you'll have:

**Sample Users:**
- Admin: `admin@carrental.com` / `admin123`
- User: `john@example.com` / `user123`

**Sample Cars:**
- Tesla Model S (Luxury Electric) - $299/day
- BMW X5 (SUV) - $199/day
- Mercedes-Benz C-Class (Luxury) - $249/day
- Audi A4 (Luxury) - $189/day
- Porsche 911 (Sports) - $599/day
- Toyota Camry (Economy Hybrid) - $79/day
- Range Rover Evoque (SUV) - $279/day
- Lamborghini Huracán (Sports) - $1299/day

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/password` - Change password
- `POST /api/auth/logout` - Logout

### Cars
- `GET /api/cars` - Get all cars (with filters)
- `GET /api/cars/:id` - Get single car
- `GET /api/cars/featured` - Get featured cars
- `GET /api/cars/search` - Search cars
- `POST /api/cars` - Create car (Admin)
- `PUT /api/cars/:id` - Update car (Admin)
- `DELETE /api/cars/:id` - Delete car (Admin)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get single booking
- `PUT /api/bookings/:id/status` - Update booking status
- `POST /api/bookings/:id/cancel` - Cancel booking
- `POST /api/bookings/:id/review` - Add review

### Users (Admin)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🎨 Frontend Pages

1. **Homepage** (`index1 (1).html`): Main landing page with car showcase
2. **About** (`about.html`): Company information
3. **Best Sellers** (`best-seller.html`): Featured cars page

## 🐛 Troubleshooting

### Common Issues:

1. **"npm is not recognized"**
   - Install Node.js from https://nodejs.org/
   - Restart Command Prompt after installation

2. **"mongod is not recognized"**
   - Install MongoDB from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud) instead

3. **"Port 5000 already in use"**
   - Change PORT in backend/.env file
   - Or kill existing process: `taskkill /f /im node.exe`

4. **"MongoDB connection failed"**
   - Ensure MongoDB is running (if using local)
   - Check connection string in .env file
   - For Atlas: Check username/password and network access

5. **Frontend not loading data**
   - Ensure backend server is running
   - Check browser console for errors
   - Verify API endpoints are accessible

## 🚀 Deployment Options

### Backend Deployment
- **Heroku**: Easy deployment with Git
- **Railway**: Modern platform with MongoDB
- **DigitalOcean**: VPS with full control

### Frontend Deployment
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for static sites

### Database Options
- **MongoDB Atlas**: Cloud database (recommended)
- **Local MongoDB**: For development
- **MongoDB Compass**: GUI for database management

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Check the console logs for error messages
4. Ensure all environment variables are set correctly

## 🎉 Congratulations!

You now have a complete, professional car rental system with:
- ✅ Organized project structure
- ✅ Complete backend API
- ✅ Modern frontend interface
- ✅ Database models and seeding
- ✅ Authentication system
- ✅ Booking management
- ✅ Admin functionality
- ✅ Comprehensive documentation

**Happy coding! 🚗💨**
