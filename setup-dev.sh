#!/bin/bash

# CathLab Management System - Development Setup Script

echo "🏥 CathLab Management System - Development Setup"
echo "================================================"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create environment files if they don't exist
if [ ! -f backend/.env ]; then
    echo "📄 Creating backend environment file..."
    cp backend/.env.example backend/.env
fi

if [ ! -f frontend/.env ]; then
    echo "📄 Creating frontend environment file..."
    cp frontend/.env.example frontend/.env
fi

# Start services with Docker Compose
echo "🚀 Starting services with Docker Compose..."
docker-compose up -d

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Application URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:8000"
echo "   Backend Admin: http://localhost:8000/admin"
echo ""
echo "📊 Database:"
echo "   MySQL: localhost:3306"
echo "   Database: cathlab_db"
echo "   Username: cathlab_user"
echo "   Password: cathlab_password"
echo ""
echo "🛠️  Useful commands:"
echo "   Stop services: docker-compose down"
echo "   View logs: docker-compose logs -f"
echo "   Restart: docker-compose restart"
echo ""
