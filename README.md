<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-brightgreen)
![Release Date](https://img.shields.io/badge/release-August%202025-blue)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-18%2B-green)
![Python](https://img.shields.io/badge/python-3.8%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-red)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-orange)
![Status](https://img.shields.io/badge/status-production--ready-green)
![Code Quality](https://img.shields.io/badge/code%20quality-A-brightgreen)
![PokeCoach](images/4.png)

**Transforming classic monster battles through deterministic real-time multiplayer platform**

[Getting Started](#quick-start-guide) •
[Features](#key-features) •
[Architecture](#system-architecture) •
[Documentation](#documentation) •
[Contributing](#contributing)

</div>

---

## Overview

**PokeCoach** is a modern multiplayer battle platform that brings together classic game mechanics with real-time web technology. It provides competitive turn-based battles through WebSocket communication, offering players strategic depth while maintaining technical reliability through containerized microservices.

The platform combines battle simulation, intelligent AI coaching, real-time multiplayer features, and comprehensive monitoring to create an engaging competitive environment. What makes this different from other battle simulators is the integrated AI Coach system that provides real-time strategic analysis and move recommendations.

**KEY DIFFERENTIATOR:** The AI Coach system sets this platform apart by providing real-time strategic analysis, move recommendations, and competitive insights based on heuristic algorithms and battle pattern recognition.

**INTELLECTUAL PROPERTY NOTICE:** This application is for educational and technical demonstration purposes only. It does not redistribute copyrighted assets. All Pokémon-related intellectual property belongs to their respective owners.

## Key Features

### Real-Time Multiplayer Battle Engine

<table>
<tr>
<td width="70%">
<ul>
<li><b>Deterministic Turn Resolution</b>: Every battle follows consistent rules with clear move priority and damage calculations, so outcomes are fair and predictable</li>
<li><b>Complete Type System</b>: All 18 Pokémon types are implemented with accurate effectiveness multipliers, just like in the official games</li>
<li><b>Status Effect Tracking</b>: Burns, poison, paralysis, freeze, and sleep all work properly with turn-by-turn effects</li>
<li><b>Real-time Battle Updates</b>: Both players see moves and results instantly through WebSocket connections</li>
</ul>
</td>
<td width="30%">
<img src="images/4.png" alt="Battle Engine Interface">
</td>
</tr>
</table>

### Interactive Team Building System

<table>
<tr>
<td width="30%">
<img src="images/3.png" alt="Team Builder">
</td>
<td width="70%">
<ul>
<li><b>Comprehensive Roster Management</b>: Access to extensive creature database with detailed stats, movesets, and type information</li>
<li><b>Strategic Team Composition</b>: Advanced team building tools with type coverage analysis and synergy recommendations</li>
<li><b>Random Team Generation</b>: Intelligent randomization algorithms creating balanced team compositions for quick matches</li>
<li><b>Move Set Customization</b>: Complete move selection with damage calculations, priority levels, and strategic effect previews</li>
</ul>
</td>
</tr>
</table>

### Sophisticated Room Management

<table>
<tr>
<td width="70%">
<ul>
<li><b>Easy Room Setup</b>: Create private rooms with unique codes or join public matches with just a few clicks</li>
<li><b>Built-in Chat</b>: Talk to your opponent or coordinate with friends during battles</li>
<li><b>Spectator Support</b>: Friends can watch your battles without interfering with the game</li>
<li><b>Reconnection System</b>: If you lose connection, you can rejoin your battle without losing progress</li>
</ul>
</td>
<td width="30%">
<img src="images/2.png" alt="Room Management">
</td>
</tr>
</table>

### AI-Powered Strategic Advisory

<table>
<tr>
<td width="30%">
<img src="images/6.png" alt="AI Coach">
</td>
<td width="70%">
<ul>
<li><b>Smart Move Suggestions</b>: The AI analyzes your current battle situation and recommends the best moves based on damage calculations and strategic positioning</li>
<li><b>Risk Assessment</b>: Get probability estimates for different outcomes to help you make informed decisions during critical moments</li>
<li><b>Type Matchup Analysis</b>: Understand which Pokémon have advantages over others with detailed explanations of type effectiveness</li>
<li><b>Adaptive Learning</b>: The AI learns from your playing style and improves its recommendations over time to match your preferences</li>
</ul>
</td>
</tr>
</table>

### Comprehensive Monitoring & Analytics

<table>
<tr>
<td width="70%">
<ul>
<li><b>Performance Monitoring</b>: Track how well the servers are running with real-time metrics and health checks</li>
<li><b>Battle Statistics</b>: View detailed analytics about battles, player activity, and system performance through interactive dashboards</li>
<li><b>Automated Testing</b>: Scripts that automatically verify everything is working correctly across different deployment environments</li>
<li><b>Game Analytics</b>: Monitor battle patterns and balance to ensure fair and competitive gameplay</li>
</ul>
</td>
<td width="30%">
<img src="images/1.png" alt="Monitoring Dashboard">
</td>
</tr>
</table>

---

## Technology Stack

<table>
<tr>
<th>Layer</th>
<th>Components</th>
<th>Technologies</th>
</tr>
<tr>
<td><b>Frontend</b></td>
<td>Battle Interface, Team Builder, Room Management</td>
<td>Vanilla JavaScript, HTML5 Canvas, WebSocket API, CSS3</td>
</tr>
<tr>
<td><b>Backend</b></td>
<td>Real-time Gateway, REST API, Battle Engine</td>
<td>Node.js, Socket.IO, FastAPI, Python, Uvicorn</td>
</tr>
<tr>
<td><b>Data Layer</b></td>
<td>Persistence, Caching, Session Management</td>
<td>PostgreSQL, Redis, JSON Schema Validation</td>
</tr>
<tr>
<td><b>Infrastructure</b></td>
<td>Containerization, Orchestration, Reverse Proxy</td>
<td>Docker, Docker Compose, AWS ECS, Nginx, Supervisor</td>
</tr>
<tr>
<td><b>Observability</b></td>
<td>Metrics, Dashboards, Health Monitoring</td>
<td>Prometheus, Grafana, Custom Health Endpoints</td>
</tr>
</table>

## Project Structure

```
PokeCoach/
├── api/                           # FastAPI REST service
│   ├── __init__.py                    # Package initialization
│   ├── main.py                        # FastAPI application entry
│   ├── routes/                        # API route handlers
│   │   ├── health.py                  # Health check endpoints
│   │   ├── stats.py                   # Battle statistics
│   │   └── rooms.py                   # Room metadata
│   └── models/                        # Data models
│
├── server/                        # Node.js WebSocket gateway
│   ├── server.js                      # Socket.IO server
│   ├── routes/                        # Socket event handlers
│   │   ├── battle.js                  # Battle event management
│   │   ├── rooms.js                   # Room lifecycle
│   │   └── chat.js                    # Chat functionality
│   └── utils/                         # Utility functions
│
├── components/                    # Frontend UI components
│   ├── battle/                        # Battle interface
│   │   ├── arena.js                   # Main battle arena
│   │   ├── moves.js                   # Move selection
│   │   └── status.js                  # Status display
│   ├── team/                          # Team building
│   │   ├── builder.js                 # Team composition
│   │   └── selector.js                # Pokemon selection
│   └── lobby/                         # Room management
│
├── data/                          # Game data and constants
│   ├── pokemon/                       # Pokemon datasets
│   ├── moves/                         # Move definitions
│   ├── types/                         # Type effectiveness
│   └── constants/                     # Game constants
│
├── monitoring/                    # Observability configuration
│   ├── prometheus/                    # Metrics configuration
│   ├── grafana/                       # Dashboard definitions
│   └── alerts/                        # Alert rules
│
├── deploy/                        # Deployment scripts
│   ├── docker/                        # Docker configurations
│   ├── aws/                           # AWS ECS deployment
│   ├── heroku/                        # Heroku deployment
│   └── scripts/                       # Automation scripts
│
├── static/                        # Static assets
│   ├── css/                           # Stylesheets
│   ├── images/                        # UI screenshots
│   └── fonts/                         # Typography assets
│
├── tests/                         # Test suite
│   ├── unit/                          # Unit tests
│   ├── integration/                   # Integration tests
│   └── e2e/                           # End-to-end tests
│
├── docker-compose.yml             # Multi-service orchestration
├── Dockerfile                     # Container definition
├── nginx.conf                     # Reverse proxy configuration
├── supervisord.conf               # Process supervision
└── README.md                      # This documentation
```

## Quick Start Guide

### System Requirements

<table>
<tr>
<th>Component</th>
<th>Minimum Requirements</th>
<th>Recommended Specifications</th>
</tr>
<tr>
<td>Operating System</td>
<td>Windows 10, macOS 11, Ubuntu 20.04</td>
<td>Windows 11, macOS 12+, Ubuntu 22.04+</td>
</tr>
<tr>
<td>Node.js</td>
<td>18.x</td>
<td>20.x or newer</td>
</tr>
<tr>
<td>Python</td>
<td>3.8</td>
<td>3.11 or newer</td>
</tr>
<tr>
<td>RAM</td>
<td>4 GB</td>
<td>8 GB or more</td>
</tr>
<tr>
<td>Browser</td>
<td>Chrome 90+, Firefox 88+, Safari 14+</td>
<td>Latest version of Chrome, Firefox, or Safari</td>
</tr>
</table>

### Installation Process

```bash
# 1. Clone the repository
git clone https://github.com/muhkartal/PokeCoach.git
cd PokeCoach

# 2. Launch with Docker (Recommended)
docker-compose up --build

# 3. Access the application
# Game Interface: http://localhost
# API Documentation: http://localhost:8000/docs
# Grafana Dashboard: http://localhost:3001 (admin/admin)
# Prometheus Metrics: http://localhost:9090
```

### Local Development Setup

```bash
# 1. Set up WebSocket server
cd server
npm install
npm start   # Runs on http://localhost:3000

# 2. Set up FastAPI service
cd ../api
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# 3. Serve static frontend
cd ..
python -m http.server 8080  # Serves on http://localhost:8080
```

---

## Server Configuration

The platform uses environment-based configuration for flexible deployment across different environments.

### Core Server Settings

```javascript
// server/server.js
const PORT = process.env.PORT || 3000;
const MAX_ROOMS = process.env.MAX_ROOMS || 100;
const MAX_PLAYERS_PER_ROOM = 2;
const ROOM_TIMEOUT = process.env.ROOM_TIMEOUT || 1800000; // 30 minutes
const HEARTBEAT_INTERVAL = 25000;
```

### API Configuration

```python
# api/config.py
import os

class Settings:
    API_HOST = os.getenv("API_HOST", "0.0.0.0")
    API_PORT = int(os.getenv("API_PORT", 8000))
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://localhost:5432/pokemon_battles")
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
    DEBUG = os.getenv("DEBUG", "false").lower() == "true"
    CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*").split(",")
```

### Environment Variables

| Variable       | Default   | Description                     |
| -------------- | --------- | ------------------------------- |
| `PORT`         | 3000      | WebSocket server port           |
| `API_PORT`     | 8000      | FastAPI service port            |
| `MAX_ROOMS`    | 100       | Maximum concurrent battle rooms |
| `ROOM_TIMEOUT` | 1800000   | Room timeout in milliseconds    |
| `DATABASE_URL` | localhost | PostgreSQL connection string    |
| `REDIS_URL`    | localhost | Redis connection string         |
| `DEBUG`        | false     | Enable debug logging            |
| `CORS_ORIGINS` | \*        | Allowed CORS origins            |

### Docker Environment

Create a `.env` file in your project root:

```bash
# Database Configuration
DATABASE_URL=postgresql://postgres:password@db:5432/pokemon_battles
REDIS_URL=redis://redis:6379

# Server Configuration
PORT=3000
API_PORT=8000
MAX_ROOMS=200
DEBUG=true

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,http://localhost:8080
```

---

## Demo & Screenshots

<p align="center">
  <img src="images/4.png" alt="Battle Arena Interface">
  <br>
  <em>Real-time Battle Arena with Turn Resolution and Status Tracking</em>
</p>

<p align="center">
  <img src="images/3.png" alt="Team Builder Interface">
  <br>
  <em>Strategic Team Composition with Type Coverage Analysis</em>
</p>

<p align="center">
  <img src="images/6.png" alt="AI Coach Interface">
  <br>
  <em>Advanced AI Coach System with Real-time Strategic Recommendations</em>
</p>

<p align="center">
  <img src="images/2.png" alt="Room Management">
  <br>
  <em>Multiplayer Lobby System with Real-time Chat Integration</em>
</p>

## Advanced AI Coach System

### Intelligence Engine Features

<table>
<tr>
<td width="70%">
<ul>
<li><b>Battle State Analysis</b>: The AI continuously watches the battle and calculates the best moves based on your Pokémon's health, status effects, and type advantages</li>
<li><b>Opponent Prediction</b>: Machine learning models study common player behaviors to predict what your opponent might do next</li>
<li><b>Outcome Probability</b>: The system evaluates different move options and tells you which ones are most likely to succeed</li>
<li><b>Personal Adaptation</b>: Over time, the AI learns how you like to play and adjusts its suggestions to match your style</li>
</ul>
</td>
<td width="30%">
<img src="images/5.png" alt="AI Coach Analytics">
</td>
</tr>
</table>

### Strategic Advisory Components

<table>
<tr>
<td width="30%">
<img src="images/6.png" alt="Coach Recommendations">
</td>
<td width="70%">
<ul>
<li><b>Move Analysis</b>: Examines all your available moves and ranks them by effectiveness, considering damage, status effects, and long-term strategy</li>
<li><b>Team Strategy</b>: Looks at your remaining Pokémon and suggests when to switch for better matchups and coverage</li>
<li><b>Meta Knowledge</b>: Provides insights into popular strategies and effective counters used by competitive players</li>
<li><b>Learning Explanations</b>: Explains why certain moves are recommended, helping you understand the strategy and improve your skills</li>
</ul>
</td>
</tr>
</table>

### AI Coach Technical Implementation

| Feature               | Algorithm                             | Purpose                                                                      |
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------- |
| **Move Scoring**      | Multi-factor weighted analysis        | Ranks all possible moves by expected value and strategic impact              |
| **Damage Prediction** | Statistical modeling with type charts | Accurate damage range calculations with critical hit probabilities           |
| **Opponent Modeling** | Behavioral pattern recognition        | Predicts likely opponent moves based on battle history and common strategies |
| **Risk Evaluation**   | Monte Carlo simulation                | Assesses potential outcomes across multiple battle scenarios                 |
| **Learning System**   | Reinforcement learning adaptation     | Improves recommendations based on user feedback and battle outcomes          |

## User Guide

### Getting Started with AI-Enhanced Battles

1. **Enable AI Coach System**

   -  Activate the AI Coach from the main menu settings
   -  Choose between beginner, intermediate, or advanced advisory levels
   -  Configure notification preferences for real-time recommendations

2. **Strategic Team Building with AI**

   -  Use AI-powered team composition analysis
   -  Receive suggestions for optimal move combinations
   -  Get type coverage recommendations and synergy insights
   -  Save AI-optimized team presets for different battle formats

3. **Real-time Battle Coaching**

   -  Monitor AI coach panel during battles for move recommendations
   -  View probability calculations and damage predictions
   -  Understand strategic reasoning through detailed explanations
   -  Learn from post-battle analysis and improvement suggestions

4. **Advanced Competitive Features**
   -  Access meta-game intelligence and trending strategies
   -  Receive opponent pattern recognition insights
   -  Utilize risk assessment for high-stakes decisions
   -  Track personal improvement metrics and skill development

### Pro Battle Tips with AI Integration

-  **AI-Assisted Decision Making**: Always consider AI recommendations alongside your instincts
-  **Learning Mode**: Use detailed explanations to understand why certain moves are optimal
-  **Adaptive Strategy**: Let the AI learn your playstyle for personalized recommendations
-  **Competitive Analysis**: Leverage AI insights to understand meta-game trends and counters

## Game Mechanics & Features

### Battle System Implementation

<table>
<tr>
<th>Mechanic</th>
<th>Implementation</th>
<th>Technical Details</th>
</tr>
<tr>
<td><b>Type Effectiveness</b></td>
<td>Multiplier-based damage calculation</td>
<td>18 types, 324 interaction matrix, floating-point precision</td>
</tr>
<tr>
<td><b>Status Effects</b></td>
<td>Turn-based condition tracking</td>
<td>Burn, poison, paralysis, freeze, sleep with duration management</td>
</tr>
<tr>
<td><b>Stat Modifications</b></td>
<td>Stage-based multiplier system</td>
<td>±6 stages per stat, multiplicative factors (2/8 to 8/2 range)</td>
</tr>
<tr>
<td><b>Priority System</b></td>
<td>Move-based turn ordering</td>
<td>5 priority levels (-4 to +4), speed tiebreaker resolution</td>
</tr>
<tr>
<td><b>Damage Formula</b></td>
<td>Generation IV+ standard</td>
<td>Level, power, attack/defense, modifiers, type effectiveness</td>
</tr>
</table>

## Observability & Monitoring

| Component         | Endpoint / Path                 | Purpose                    |
| ----------------- | ------------------------------- | -------------------------- |
| API Health        | `/health`                       | Liveness & readiness       |
| Metrics           | `/metrics`                      | Prometheus exposition      |
| Grafana           | :3001                           | Dashboards                 |
| Validation Script | `deploy/validate-deployment.sh` | Automated multi-env checks |

---

## Validation & Health

```bash
./deploy/validate-deployment.sh docker
./deploy/validate-deployment.sh aws
./deploy/validate-deployment.sh heroku
./deploy/validate-deployment.sh all
```

Checks: service availability • socket handshake • room lifecycle • health & metrics reachability

## Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/descriptor`)
3. Implement with tests / validation
4. Commit using conventional style (`feat: add x`)
5. Push and open Pull Request

Coding Standards: ES6 modules • (planned) linting • small reviewable units • deterministic battle logic

## Available Scripts

| Command                           | Purpose              |
| --------------------------------- | -------------------- |
| `docker-compose up --build`       | Full stack start     |
| `./scripts/setup-dev.sh`          | Local dev bootstrap  |
| `./deploy/deploy.sh`              | AWS ECS deploy       |
| `./deploy/heroku.sh`              | Heroku deploy        |
| `./deploy/validate-deployment.sh` | Multi-env validation |
| `./scripts/backup.sh`             | DB backup            |

---

## Support and Community

-  **Documentation**: [GitHub Wiki](https://github.com/muhkartal/PokeCoach/wiki)
-  **Issue Tracker**: [GitHub Issues](https://github.com/muhkartal/PokeCoach/issues)
-  **Discussion Forum**: [GitHub Discussions](https://github.com/muhkartal/PokeCoach/discussions)
-  **Developer Portal**: [API Documentation](http://localhost:8000/docs)

## License

PokeCoach is released under the MIT License. See the [LICENSE](LICENSE) file for complete terms.

### Intellectual Property Notice

This project is a fan-inspired technical demonstration platform. Pokémon and all related intellectual property (names, sprites, types, creatures, moves, etc.) are trademarks of their respective owners (Nintendo, Game Freak, The Pokémon Company).

**Important Disclaimers:**

-  No endorsement by or affiliation with Nintendo/The Pokémon Company is implied
-  This is a non-commercial, educational project for technical demonstration
-  No copyrighted assets are redistributed; only structured metadata for game mechanics
-  Always respect intellectual property rights and official game guidelines

---

<div align="center">

**Developed with ⚡ by [Muhammad Kartal](https://github.com/muhkartal)**

_Transforming classic battle mechanics through modern web technology_

</div>
