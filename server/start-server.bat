@echo off
echo ========================================
echo Pokemon Battle Multiplayer Server
echo ========================================
echo.

cd /d "%~dp0"

echo Checking if Node.js is installed...
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo.

echo Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed
echo.
echo 🚀 Starting Pokemon Battle Server...
echo 📡 Server will be available at: http://localhost:3001
echo 🔗 Your game should connect automatically
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm start

pause
