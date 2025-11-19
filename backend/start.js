#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Car Rental Backend Setup');
console.log('============================\n');

// Check if .env file exists
if (!fs.existsSync('.env')) {
  console.log('📝 Creating .env file from template...');
  try {
    fs.copyFileSync('env.example', '.env');
    console.log('✅ .env file created successfully');
    console.log('⚠️  Please edit .env file with your configuration before starting the server\n');
  } catch (error) {
    console.log('❌ Failed to create .env file:', error.message);
    console.log('📝 Please manually copy env.example to .env and configure it\n');
  }
} else {
  console.log('✅ .env file already exists\n');
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully\n');
  } catch (error) {
    console.log('❌ Failed to install dependencies:', error.message);
    console.log('Please run: npm install\n');
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed\n');
}

// Check MongoDB connection
console.log('🔍 Checking MongoDB connection...');
try {
  const mongoose = require('mongoose');
  const dotenv = require('dotenv');
  
  dotenv.config();
  
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/car-rental';
  
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('✅ MongoDB connection successful');
    mongoose.connection.close();
    
    console.log('\n🎉 Setup completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Edit .env file with your configuration');
    console.log('2. Run: npm run dev (for development)');
    console.log('3. Run: node utils/seedData.js (to seed sample data)');
    console.log('4. Open http://localhost:5000/api/health to test the API');
    console.log('\n📚 Sample accounts after seeding:');
    console.log('Admin: admin@carrental.com / admin123');
    console.log('User: john@example.com / user123');
    
  }).catch((error) => {
    console.log('❌ MongoDB connection failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check your MONGODB_URI in .env file');
    console.log('3. For local MongoDB: mongod --dbpath /path/to/your/db');
    console.log('4. For MongoDB Atlas: Check your connection string');
  });
  
} catch (error) {
  console.log('❌ Setup check failed:', error.message);
  console.log('Please ensure all dependencies are installed: npm install');
}
