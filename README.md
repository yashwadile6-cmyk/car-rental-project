# Car Rental System - Complete Setup Guide

This is a full-stack car rental application with MongoDB backend and modern frontend.

## 🚀 Prerequisites

Before running this application, you need to install:

1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB** (v5 or higher)
   - Download from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## 📁 Project Structure

```
car-rental-system/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # Authentication middleware
│   ├── models/
│   │   ├── User.js         # User model
│   │   ├── Car.js          # Car model
│   │   └── Booking.js      # Booking model
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   ├── cars.js         # Car management routes
│   │   ├── bookings.js     # Booking routes
│   │   └── users.js        # User management routes
│   ├── utils/
│   │   └── seedData.js     # Database seeding script
│   ├── server.js           # Main server file
│   ├── package.json        # Dependencies
│   └── .env               # Environment variables
├── frontend/
│   ├── index1 (1).html    # Main homepage
│   ├── about.html         # About page
│   ├── best-seller.html   # Best sellers page
│   ├── style1.css         # Styles
│   ├── script (2).js     # Frontend JavaScript
│   └── api.js            # API client
└── README.md             # This file
```

## 🛠️ Installation & Setup

### Step 1: Install Dependencies

   ```bash
# Install Node.js dependencies
   npm install
   ```

### Step 2: Environment Configuration

1. Copy the environment template:
   ```bash
   copy env.example .env
   ```
   
2. Edit `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/car-rental
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:3000
   ```

### Step 3: Database Setup

#### Option A: Local MongoDB
1. Start MongoDB service:
   ```bash
   mongod
   ```

2. Seed the database with sample data:
   ```bash
   npm run seed
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at https://www.mongodb.com/atlas
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env` file

### Step 4: Start the Application

   ```bash
# Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000`

## 🧪 Testing the API

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "+1234567890"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Cars
```bash
curl http://localhost:5000/api/cars
```

## 📊 Sample Data

After running the seed script, you'll have:

### Sample Users:
- **Admin**: `admin@carrental.com` / `admin123`
- **User**: `john@example.com` / `user123`

### Sample Cars:
- Tesla Model S (Luxury Electric)
- BMW X5 (SUV)
- Mercedes-Benz C-Class (Luxury)
- Audi A4 (Luxury)
- Porsche 911 (Sports)
- Toyota Camry (Economy Hybrid)
- Range Rover Evoque (SUV)
- Lamborghini Huracán (Sports)

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

## 🎨 Frontend

The frontend is a modern single-page application with:
- Responsive design using Tailwind CSS
- Interactive car browsing and booking
- User authentication and profile management
- Admin dashboard for car and user management

### Frontend Features:
- **Homepage**: Car showcase and search
- **Car Details**: Detailed car information and booking
- **User Dashboard**: Booking history and profile
- **Admin Panel**: Car and user management
- **Authentication**: Login/Register with JWT

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create Heroku app
2. Set environment variables
3. Deploy with Git

### Frontend Deployment (Netlify/Vercel)
1. Build static files
2. Deploy to hosting service

## 🐛 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill existing process: `taskkill /f /im node.exe`

3. **JWT Secret Error**
   - Set a strong JWT_SECRET in `.env`

4. **CORS Issues**
   - Update FRONTEND_URL in `.env`

## 📝 Development

### Adding New Features:
1. Create model in `models/`
2. Add routes in `routes/`
3. Update frontend in `frontend/`
4. Test with API client

### Database Schema:
- **Users**: Authentication and profile data
- **Cars**: Vehicle information and availability
- **Bookings**: Rental transactions and status

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email: support@carrental.com

---

**Happy Coding! 🚗💨**