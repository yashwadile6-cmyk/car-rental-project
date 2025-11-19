const mongoose = require('mongoose');
const Car = require('../models/Car');
const User = require('../models/User');
require('dotenv').config();

// Sample car data
const sampleCars = [
  {
    name: "Tesla Model S",
    category: "luxury",
    price: 299,
    fuel: "electric",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518444105432-6f2f2f95ee0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Autopilot", "Premium Audio", "Glass Roof", "Supercharging"],
    available: true,
    rating: 4.9,
    location: {
      city: "New York",
      state: "NY",
      zipCode: "10001",
      address: "123 Main St"
    },
    specifications: {
      engine: "Electric",
      horsepower: 670,
      torque: 1050,
      acceleration: "2.1s",
      topSpeed: 200,
      fuelEconomy: "402 miles",
      dimensions: {
        length: 196,
        width: 77,
        height: 56
      }
    },
    isFeatured: true
  },
  {
    name: "BMW X5",
    category: "suv",
    price: 199,
    fuel: "gasoline",
    seats: 7,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1619767886845-2264f5d3e38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549925412-37d6f3aa4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["4WD", "Leather Seats", "Navigation", "Heated Seats"],
    available: true,
    rating: 4.8,
    location: {
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
      address: "456 Sunset Blvd"
    },
    specifications: {
      engine: "3.0L I6",
      horsepower: 335,
      torque: 330,
      acceleration: "5.3s",
      topSpeed: 155,
      fuelEconomy: "22 MPG",
      dimensions: {
        length: 194,
        width: 78,
        height: 69
      }
    },
    isFeatured: true
  },
  {
    name: "Mercedes-Benz C-Class",
    category: "luxury",
    price: 249,
    fuel: "gasoline",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610388973146-98f9f0bd6a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Premium Interior", "Advanced Safety", "Wireless Charging", "Ambient Lighting"],
    available: true,
    rating: 4.9,
    location: {
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      address: "789 Michigan Ave"
    },
    specifications: {
      engine: "2.0L I4",
      horsepower: 255,
      torque: 295,
      acceleration: "5.9s",
      topSpeed: 155,
      fuelEconomy: "25 MPG",
      dimensions: {
        length: 187,
        width: 72,
        height: 56
      }
    },
    isFeatured: false
  },
  {
    name: "Audi A4",
    category: "luxury",
    price: 189,
    fuel: "gasoline",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624610246876-0ea6f2469fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616422105159-61bdead1bd05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio", "Matrix LED"],
    available: true,
    rating: 4.7,
    location: {
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      address: "321 Ocean Dr"
    },
    specifications: {
      engine: "2.0L I4",
      horsepower: 201,
      torque: 236,
      acceleration: "6.1s",
      topSpeed: 130,
      fuelEconomy: "27 MPG",
      dimensions: {
        length: 186,
        width: 72,
        height: 56
      }
    },
    isFeatured: false
  },
  {
    name: "Porsche 911",
    category: "sports",
    price: 599,
    fuel: "gasoline",
    seats: 4,
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610563166150-3b3a110fe2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Sport Chrono", "PASM", "Sport Exhaust", "Carbon Fiber"],
    available: true,
    rating: 5.0,
    location: {
      city: "Las Vegas",
      state: "NV",
      zipCode: "89101",
      address: "555 Strip Blvd"
    },
    specifications: {
      engine: "3.0L H6",
      horsepower: 379,
      torque: 331,
      acceleration: "4.0s",
      topSpeed: 182,
      fuelEconomy: "20 MPG",
      dimensions: {
        length: 178,
        width: 73,
        height: 51
      }
    },
    isFeatured: true
  },
  {
    name: "Toyota Camry",
    category: "economy",
    price: 79,
    fuel: "hybrid",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1597007511470-6f4bdc55570d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Hybrid Engine", "Safety Sense", "Apple CarPlay", "LED Headlights"],
    available: true,
    rating: 4.5,
    location: {
      city: "New York",
      state: "NY",
      zipCode: "10001",
      address: "123 Main St"
    },
    specifications: {
      engine: "2.5L I4 Hybrid",
      horsepower: 208,
      torque: 163,
      acceleration: "7.4s",
      topSpeed: 112,
      fuelEconomy: "52 MPG",
      dimensions: {
        length: 192,
        width: 72,
        height: 57
      }
    },
    isFeatured: false
  },
  {
    name: "Range Rover Evoque",
    category: "suv",
    price: 279,
    fuel: "gasoline",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1606016159991-8b5d2f87a5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606016159991-8b5d2f87a5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616389262221-7b6a3bc88e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616596876208-4e9fd3131ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Terrain Response", "Panoramic Roof", "Meridian Audio", "ClearSight"],
    available: true,
    rating: 4.8,
    location: {
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
      address: "456 Sunset Blvd"
    },
    specifications: {
      engine: "2.0L I4",
      horsepower: 246,
      torque: 269,
      acceleration: "7.0s",
      topSpeed: 135,
      fuelEconomy: "23 MPG",
      dimensions: {
        length: 172,
        width: 76,
        height: 65
      }
    },
    isFeatured: false
  },
  {
    name: "Lamborghini Huracán",
    category: "sports",
    price: 1299,
    fuel: "gasoline",
    seats: 2,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611105654921-b4a68a74b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534595098310-e3025c0c6f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["V10 Engine", "Carbon Fiber", "Track Mode", "Launch Control"],
    available: true,
    rating: 5.0,
    location: {
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      address: "321 Ocean Dr"
    },
    specifications: {
      engine: "5.2L V10",
      horsepower: 602,
      torque: 413,
      acceleration: "3.2s",
      topSpeed: 201,
      fuelEconomy: "13 MPG",
      dimensions: {
        length: 186,
        width: 75,
        height: 46
      }
    },
    isFeatured: true
  }
];

// Sample admin user
const sampleAdmin = {
  name: "Admin User",
  email: "admin@carrental.com",
  password: "admin123",
  role: "admin",
  phone: "+1234567890",
  isActive: true
};

// Sample regular user
const sampleUser = {
  name: "John Doe",
  email: "john@example.com",
  password: "user123",
  role: "user",
  phone: "+1234567891",
  isActive: true
};

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/car-rental', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Car.deleteMany({});
    await User.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample cars
    const cars = await Car.insertMany(sampleCars);
    console.log(`🚗 Inserted ${cars.length} cars`);

    // Insert sample users
    const admin = await User.create(sampleAdmin);
    const user = await User.create(sampleUser);
    console.log(`👥 Inserted ${2} users (1 admin, 1 regular)`);

    console.log('✅ Database seeded successfully!');
    console.log('\n📋 Sample Accounts:');
    console.log('Admin: admin@carrental.com / admin123');
    console.log('User: john@example.com / user123');
    console.log('\n🚀 You can now start the server with: npm start');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

// Run seeder if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase, sampleCars, sampleAdmin, sampleUser };
