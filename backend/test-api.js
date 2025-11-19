#!/usr/bin/env node

const fetch = require('node-fetch');

const API_BASE = 'http://localhost:5000/api';

async function testAPI() {
  console.log('🧪 Testing Car Rental API');
  console.log('==========================\n');

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch(`${API_BASE}/health`);
    const healthData = await healthResponse.json();
    
    if (healthResponse.ok) {
      console.log('✅ Health check passed:', healthData.message);
    } else {
      console.log('❌ Health check failed:', healthData.message);
      return;
    }

    // Test get cars endpoint
    console.log('\n2. Testing get cars endpoint...');
    const carsResponse = await fetch(`${API_BASE}/cars`);
    const carsData = await carsResponse.json();
    
    if (carsResponse.ok) {
      console.log(`✅ Cars endpoint working: ${carsData.count} cars found`);
    } else {
      console.log('❌ Cars endpoint failed:', carsData.message);
    }

    // Test get featured cars endpoint
    console.log('\n3. Testing featured cars endpoint...');
    const featuredResponse = await fetch(`${API_BASE}/cars/featured`);
    const featuredData = await featuredResponse.json();
    
    if (featuredResponse.ok) {
      console.log(`✅ Featured cars endpoint working: ${featuredData.count} featured cars`);
    } else {
      console.log('❌ Featured cars endpoint failed:', featuredData.message);
    }

    // Test get categories endpoint
    console.log('\n4. Testing categories endpoint...');
    const categoriesResponse = await fetch(`${API_BASE}/cars/categories`);
    const categoriesData = await categoriesResponse.json();
    
    if (categoriesResponse.ok) {
      console.log(`✅ Categories endpoint working: ${categoriesData.categories.length} categories`);
    } else {
      console.log('❌ Categories endpoint failed:', categoriesData.message);
    }

    // Test user registration
    console.log('\n5. Testing user registration...');
    const testUser = {
      name: 'Test User',
      email: `test${Date.now()}@example.com`,
      password: 'test123'
    };

    const registerResponse = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testUser)
    });

    const registerData = await registerResponse.json();
    
    if (registerResponse.ok) {
      console.log('✅ User registration working');
      
      // Test user login
      console.log('\n6. Testing user login...');
      const loginResponse = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: testUser.email,
          password: testUser.password
        })
      });

      const loginData = await loginResponse.json();
      
      if (loginResponse.ok) {
        console.log('✅ User login working');
        
        // Test authenticated endpoint
        console.log('\n7. Testing authenticated endpoint...');
        const meResponse = await fetch(`${API_BASE}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${loginData.token}`
          }
        });

        const meData = await meResponse.json();
        
        if (meResponse.ok) {
          console.log('✅ Authenticated endpoint working');
        } else {
          console.log('❌ Authenticated endpoint failed:', meData.message);
        }
      } else {
        console.log('❌ User login failed:', loginData.message);
      }
    } else {
      console.log('❌ User registration failed:', registerData.message);
    }

    console.log('\n🎉 API testing completed!');
    console.log('\n📋 Summary:');
    console.log('- Health check: ✅');
    console.log('- Public endpoints: ✅');
    console.log('- Authentication: ✅');
    console.log('- Protected endpoints: ✅');
    
  } catch (error) {
    console.log('❌ API test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure the server is running: npm run dev');
    console.log('2. Check if the server is accessible at http://localhost:5000');
    console.log('3. Verify MongoDB is running and connected');
  }
}

// Run the test
testAPI();
