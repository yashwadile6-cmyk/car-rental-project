@echo off
echo Starting Car Rental System for Semester Project...

REM Add Node.js and MongoDB to PATH
set PATH=C:\Program Files\nodejs;C:\Program Files\MongoDB\Server\8.2\bin;%PATH%

REM Navigate to backend directory
cd /d "C:\Users\yashw\OneDrive\Documents\sem projrct\backend"

echo Starting MongoDB...
start "MongoDB" mongod --dbpath "C:\data\db"

REM Wait for MongoDB to start
timeout /t 5 /nobreak

echo Starting Backend Server...
node server.js

pause
