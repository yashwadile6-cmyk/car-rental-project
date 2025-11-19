@echo off
echo 🚀 Car Rental Backend Setup
echo ============================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed

REM Check if .env file exists
if not exist .env (
    echo 📝 Creating .env file from template...
    copy env.example .env >nul
    echo ✅ .env file created successfully
    echo ⚠️  Please edit .env file with your configuration before starting the server
    echo.
) else (
    echo ✅ .env file already exists
    echo.
)

REM Install dependencies
if not exist node_modules (
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully
    echo.
) else (
    echo ✅ Dependencies already installed
    echo.
)

echo 🎉 Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Edit .env file with your configuration
echo 2. Run: npm run dev (for development)
echo 3. Run: node utils/seedData.js (to seed sample data)
echo 4. Open http://localhost:5000/api/health to test the API
echo.
echo 📚 Sample accounts after seeding:
echo Admin: admin@carrental.com / admin123
echo User: john@example.com / user123
echo.
pause
