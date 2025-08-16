<div align="center">

# Pokemon Battle Ultimate Arena

<p>
<strong>Deterministic real‑time turn‑based multiplayer battle platform.</strong><br/>
Modular engine • Competitive mechanics • Deployment & observability built in
</p>

<p>
<a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<img alt="Status" src="https://img.shields.io/badge/Status-Active%20Development-0A8F62">
<img alt="Build" src="https://img.shields.io/badge/Build-Scripts-green">
<img alt="API" src="https://img.shields.io/badge/API-FastAPI-009688">
<img alt="Realtime" src="https://img.shields.io/badge/WebSocket-Socket.IO-4A90E2">
<img alt="Container" src="https://img.shields.io/badge/Container-Docker-2496ED">
</p>

<p>
<a href="#quick-start">Quick Start</a> •
<a href="#feature-matrix">Features</a> •
<a href="#system-architecture">Architecture</a> •
<a href="#observability--monitoring">Monitoring</a> •
<a href="#roadmap">Roadmap</a> •
<a href="#contributing">Contributing</a>
</p>

<p><em>Not affiliated with or endorsed by Nintendo / The Pokémon Company. See Intellectual Property Notice below.</em></p>

</div>

---

## Platform Overview

| Domain        | Focus                  | Notes                                                         |
| ------------- | ---------------------- | ------------------------------------------------------------- |
| Engine        | Deterministic core     | Priority, status, type matchups, future generational variants |
| Gateway       | Realtime orchestration | Socket.IO rooms, matchmaking hooks, event dispatch            |
| API           | Service layer          | Stats, metadata, health, future persistence endpoints         |
| Data          | Structured sets        | Roster, moves, types, status & stage schemas                  |
| Extensibility | Modular formats        | Pluggable rules, AI advisory pipeline evolution               |
| Deployment    | Multi-surface          | Local Compose, container stack, AWS ECS scripts               |
| Observability | Metrics + dashboards   | Prometheus exporters, Grafana boards, validation scripts      |
| Operations    | Edge & supervision     | Nginx proxy & static, Supervisor multi-process patterns       |

---

## Quick Start (Essentials)

```bash
git clone https://github.com/muhkartal/PokeCoach.git
cd PokeCoach
docker-compose up --build
```
Access: Game http://localhost • API Docs :8000/docs • Grafana :3001 • Prometheus :9090

<details>
<summary><strong>Run Without Docker</strong></summary>

```bash
# WebSocket
cd server && npm install && npm start
# API
cd ../api && pip install -r requirements.txt && uvicorn main:app --reload --port 8000
# Static client
cd .. && python -m http.server 8080
```

</details>

---

## Table of Contents

1. [Overview](#overview)
2. [Feature Matrix](#feature-matrix)
3. [Screens & Interface](#screens--interface)
4. [System Architecture](#system-architecture)
5. [Project Structure](#project-structure)
6. [Technology Stack](#technology-stack)
7. [Getting Started](#getting-started)
   -  [Option 1: Docker Compose](#option-1-docker-compose)
   -  [Option 2: AWS ECS Deployment](#option-2-aws-ecs-deployment)
   -  [Option 3: Local Development](#option-3-local-development)
8. [Server Configuration](#server-configuration)
9. [How to Play](#how-to-play)
10.   [Data & Mechanics](#data--mechanics)
11.   [Observability & Monitoring](#observability--monitoring)
12.   [Validation & Health](#validation--health)
13.   [Performance & Scalability](#performance--scalability)
14.   [Security Considerations](#security-considerations)
15.   [Roadmap](#roadmap)
16.   [Contributing](#contributing)
17.   [Testing Strategy](#testing-strategy)
18.   [License & Attribution](#license--attribution)

---

## Overview

Deterministic turn engine + real‑time WebSocket orchestration. Clear separation: client UI, Socket.IO gateway, FastAPI service layer, Redis coordination, PostgreSQL persistence (expanding), Nginx edge, Prometheus/Grafana observability, container & cloud deployment scripts.

---

## Feature Matrix

<details open>
<summary><strong>Current / In Progress / Planned</strong></summary>

| Area          | Now                      | In Progress         | Next                   |
| ------------- | ------------------------ | ------------------- | ---------------------- |
| Multiplayer   | Live PvP rooms           | Spectators          | Tournaments            |
| Turn Engine   | Deterministic resolution | Edge case expansion | Generational rule sets |
| Team Builder  | Manual + random teams    | Persist presets     | Draft / ban phase      |
| Statistics    | Session scope            | Historical storage  | Leaderboards           |
| Settings      | Core toggles             | Accessibility depth | Profile sync           |
| AI Coach      | Heuristic advisory       | Predictive modeling | Learning agent         |
| Deployment    | Docker / AWS / Heroku    | CI artifacts        | Multi-region           |
| Observability | Metrics + dashboards     | Alert policy set    | Tracing (OTel)         |
| Security      | Basic sandbox            | Harden headers      | Rate limits / WAF      |
| Persistence   | Static roster/moves      | Battle logs         | Replay serialization   |

</details>

---

## Screens & Interface

| Screen         | Description                                       |
| -------------- | ------------------------------------------------- |
| Main Menu      | Entry, statistics summary, settings access        |
| Lobby          | Room creation/join, chat, ready state             |
| Team Builder   | Select or generate team compositions              |
| Battle Arena   | Turn order, health/state display, move selection  |
| Settings Panel | Gameplay, text, animation, accessibility controls |
| Coach Panel    | Strategic evaluation and ranked recommendations   |

See `images/` for full‑resolution UI captures (`images/1.png`–`images/6.png`).

### In-Game Screenshots

<div align="center">
      <table>
            <tr>
                  <td><img src="images/1.png" alt="Main Menu: entry screen with navigation options" width="240"/></td>
                  <td><img src="images/2.png" alt="Lobby: room list and readiness states" width="240"/></td>
                  <td><img src="images/3.png" alt="Team Builder: roster selection interface" width="240"/></td>
            </tr>
            <tr>
                  <td><img src="images/4.png" alt="Battle Arena: active turn resolution visuals" width="240"/></td>
                  <td><img src="images/5.png" alt="Settings Panel: gameplay & accessibility toggles" width="240"/></td>
                  <td><img src="images/6.png" alt="Coach Panel: advisory move recommendations" width="240"/></td>
            </tr>
      </table>
      <p><sub>Representative gameplay and interface states (development builds).</sub></p>
</div>

---

## System Architecture

### Visual Diagram (HTML/CSS Renderable)

<!-- Lightweight styled architecture diagram (GitHub strips <style>, so inline styles used) -->
<div align="center">
      <div style="display:flex; flex-direction:column; align-items:center; gap:18px; font-family:Arial,Helvetica,sans-serif;">
            <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center;">
                  <div style="padding:10px 14px; border:1px solid #ccc; border-radius:6px; background:#f9fafb; min-width:170px; text-align:center;">
                        <strong>Browser Client</strong><br/>
                        <span style="font-size:12px; color:#555;">UI / Team Builder / Battle Canvas</span>
                  </div>
            </div>
            <div style="font-size:13px; color:#333;">WebSocket (Socket.IO) + HTTPS</div>
            <div style="display:flex; gap:28px; flex-wrap:wrap; justify-content:center;">
                  <div style="padding:12px 16px; border:1px solid #bbb; border-radius:8px; background:#eef6ff; min-width:190px;">
                        <strong>Realtime Gateway</strong><br/>
                        <span style="font-size:12px; color:#444;">Node.js / Socket.IO<br/>Room lifecycle, events, dispatch</span>
                  </div>
                  <div style="padding:12px 16px; border:1px solid #bbb; border-radius:8px; background:#eefaf2; min-width:190px;">
                        <strong>REST API</strong><br/>
                        <span style="font-size:12px; color:#444;">FastAPI<br/>Stats, metadata, health</span>
                  </div>
            </div>
            <div style="display:flex; gap:22px; flex-wrap:wrap; justify-content:center;">
                  <div style="padding:10px 14px; border:1px solid #ccc; border-radius:6px; background:#fcfcfc; min-width:150px; text-align:center;">
                        <strong>Redis</strong><br/>
                        <span style="font-size:11px; color:#555;">Session store / PubSub / Coordination</span>
                  </div>
                  <div style="padding:10px 14px; border:1px solid #ccc; border-radius:6px; background:#fcfcfc; min-width:150px; text-align:center;">
                        <strong>PostgreSQL</strong><br/>
                        <span style="font-size:11px; color:#555;">Persistent data / Future logs</span>
                  </div>
            </div>
            <div style="display:flex; gap:14px; flex-wrap:wrap; justify-content:center;">
                  <div style="padding:10px 14px; border:1px solid #ccc; border-radius:6px; background:#f5f5f5; min-width:150px; text-align:center;">
                        <strong>Nginx</strong><br/>
                        <span style="font-size:11px; color:#555;">Reverse proxy / Static / TLS</span>
                  </div>
                  <div style="padding:10px 14px; border:1px solid #ccc; border-radius:6px; background:#f5f5f5; min-width:150px; text-align:center;">
                        <strong>Supervisor</strong><br/>
                        <span style="font-size:11px; color:#555;">Multi-process orchestration</span>
                  </div>
            </div>
            <div style="display:flex; gap:18px; flex-wrap:wrap; justify-content:center;">
                  <div style="padding:10px 14px; border:1px dashed #888; border-radius:6px; background:#fff; min-width:160px; text-align:center;">
                        <strong>Prometheus</strong><br/>
                        <span style="font-size:11px; color:#555;">Scrape metrics endpoints</span>
                  </div>
                  <div style="padding:10px 14px; border:1px dashed #888; border-radius:6px; background:#fff; min-width:160px; text-align:center;">
                        <strong>Grafana</strong><br/>
                        <span style="font-size:11px; color:#555;">Dashboards & analysis</span>
                  </div>
                  <div style="padding:10px 14px; border:1px dashed #888; border-radius:6px; background:#fff; min-width:160px; text-align:center;">
                        <strong>Validation Scripts</strong><br/>
                        <span style="font-size:11px; color:#555;">Health & deployment checks</span>
                  </div>
            </div>
            <div style="font-size:11px; color:#777; max-width:640px; text-align:center; line-height:1.4;">
                  Flow: Browser issues realtime (WebSocket) events to Realtime Gateway and REST calls to API. Redis coordinates sessions & publish/subscribe. PostgreSQL persists domain data. Nginx frontends traffic & static assets. Supervisor manages processes in container deployments. Observability stack (Prometheus, Grafana) ingests metrics & supports validation.
            </div>
      </div>
</div>

### Mermaid Fallback

```mermaid
flowchart TB
      A[Browser Client\n(HTML/JS UI)] -->|WebSocket / HTTPS| B[Realtime Gateway\nNode.js Socket.IO]
      A -->|REST| C[FastAPI Service]
      B <-->|Pub/Sub| R[(Redis)]
      C --> D[(PostgreSQL)]
      B --> D
      B --> N[Nginx]
      C --> N
      N --> A
      subgraph Observability
            P[Prometheus]
            G[Grafana]
            V[Validation Scripts]
      end
      B --> P
      C --> P
      P --> G
      V --> B
      V --> C
```

<p align="center"><sub>If inline HTML styling is stripped by the renderer, refer to the Mermaid fallback diagram above.</sub></p>

---

## Project Structure

```
api/            FastAPI service (stats, health, metadata)
server/         Socket.IO gateway (rooms, dispatch)
database/       SQL init & future migrations
constants/,data/Domain constants, roster, moves
components/     Client UI modules
styles/         CSS assets
monitoring/     Prometheus & Grafana configs
deploy/         Cloud / infra / validation scripts
scripts/        Dev & utility tooling
images/         UI & architecture captures
docker-compose.yml  Orchestrated local stack
Dockerfile      Multi-stage (client + proxy)
nginx*.conf     Reverse proxy config
supervisord.conf Process supervision
Procfile        Heroku definition
```

---

## Technology Stack

| Layer         | Primary                      | Purpose                            |
| ------------- | ---------------------------- | ---------------------------------- |
| Client        | Vanilla ES6 (Canvas planned) | Lightweight UI / no heavy SPA      |
| Realtime      | Node.js + Socket.IO          | Events, room lifecycle             |
| API           | FastAPI (Python)             | Stats, metadata, health            |
| Persistence   | PostgreSQL                   | Structured domain data (expanding) |
| Ephemeral     | Redis                        | Sessions, coordination, Pub/Sub    |
| Edge          | Nginx                        | TLS, static, reverse proxy         |
| Orchestration | Docker / Compose / ECS       | Packaging & scaling                |
| Observability | Prometheus + Grafana         | Metrics & dashboards               |
| Processes     | Supervisor                   | Multi-process pattern              |

---

## Getting Started

### Option 1: Docker Compose

```bash
git clone https://github.com/muhkartal/PokeCoach.git
cd PokeCoach
docker-compose up --build
```

Access:

-  Game Client: http://localhost
-  API Docs: http://localhost:8000/docs
-  Grafana: http://localhost:3001 (admin/admin)
-  Prometheus: http://localhost:9090

### Option 2: AWS ECS Deployment

```bash
aws cloudformation create-stack \
  --stack-name pokemon-battle-infrastructure \
  --template-body file://aws/cloudformation.yml \
  --capabilities CAPABILITY_IAM

chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

### Option 3: Local Development

```bash
git clone https://github.com/muhkartal/PokeCoach.git
cd PokeCoach

# WebSocket server
cd server
npm install
npm start   # http://localhost:3000

# API
cd ../api
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# Client (static)
cd ..
python -m http.server 8080  # http://localhost:8080
```

---

## Server Configuration

`server/server.js` excerpt:

```js
const PORT = process.env.PORT || 3000;
const MAX_ROOMS = 100;
const MAX_PLAYERS_PER_ROOM = 2;
```

Environment variables to follow (rate limits, instrumentation toggles).

---

## How to Play

1. Launch (New Game / Multiplayer)  
2. Create or join room (code)  
3. Build or randomize team  
4. Ready both players  
5. Select moves; engine resolves order/results  
6. Track health, status, switch strategically

---

## Data & Mechanics

| Mechanic | Notes |
| -------- | ----- |
| Type Effectiveness | Multiplier lookup table |
| Status Effects | Burn / poison / paralysis / freeze / sleep impact turns |
| Stat Boosts | Stage → factor mapping |
| Priority Moves | Precede speed order |
| Randomness | Planned deterministic per‑turn seed |
| AI Coach | Heuristic risk/reward & matchup |

---

## Observability & Monitoring

| Component | Endpoint / Path | Purpose |
| --------- | ---------------- | ------- |
| API Health | `/health` | Liveness & readiness |
| Metrics | `/metrics` | Prometheus exposition |
| Grafana | :3001 | Dashboards |
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

---

## Performance & Scalability

| Dimension | Strategy |
| --------- | -------- |
| Horizontal Scaling | Replicated containers (shared Redis) |
| Coordination | Redis pub/sub events |
| Network | Batched turn resolution |
| Caching | In‑memory roster & moves (warming planned) |
| Future Bottlenecks | Stateless WS + sticky / token routing |

---

## Security Considerations

| Area | Current | Planned |
| ---- | ------- | ------- |
| Input Validation | Basic checks | Schema enforcement |
| Authentication | None (open) | Token + session binding |
| Transport | Local HTTP | TLS termination |
| Rate Limiting | None | Redis token bucket |
| Isolation | Service separation | Network policy hardening |

---

## Roadmap

Short Term: battle logs • deeper AI advisory • replay encoding  
Mid Term: ranked ladder + matchmaking • spectators • replay viewer  
Long Term: tournaments • distributed simulation queue • modular generational rule plugins

---

## Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/descriptor`)
3. Implement with tests / validation
4. Commit using conventional style (`feat: add x`)
5. Push and open Pull Request

Coding Standards: ES6 modules • (planned) linting • small reviewable units • deterministic battle logic

---

## Testing Strategy

| Layer | Type | Scope |
| ----- | ---- | ----- |
| Unit | Engine functions | Move resolution / status application |
| Integration | WS room flow | Join / leave / sync |
| Contract | API endpoints | Health / metrics / room meta |
| Load (Planned) | Simulated rooms | Latency / throughput |
| Replay (Planned) | Determinism | Consistency checks |

---

## Available Scripts

| Command | Purpose |
| ------- | ------- |
| `docker-compose up --build` | Full stack start |
| `./scripts/setup-dev.sh` | Local dev bootstrap |
| `./deploy/deploy.sh` | AWS ECS deploy |
| `./deploy/heroku.sh` | Heroku deploy |
| `./deploy/validate-deployment.sh` | Multi-env validation |
| `./scripts/backup.sh` | DB backup |

---

## License & Attribution

Licensed under MIT. See [LICENSE](LICENSE).

Trademarks & Assets: Pokémon names, sprites, and related IP belong to their respective rights holders. This is a non-commercial, fan‑inspired technical platform; no proprietary asset redistribution.

---

## Acknowledgements

-  Open source ecosystems (FastAPI, Socket.IO, PostgreSQL, Redis)
-  Monitoring stack maintainers (Prometheus, Grafana)
-  Inspiration from classic turn-based battle mechanics

---

## Support & Issues

Open issues and feature requests via the issue tracker:

-  Repository: https://github.com/muhkartal/PokeCoach
-  Issues: https://github.com/muhkartal/PokeCoach/issues

Pull requests with focused scope and clear rationale are prioritized.

---

## Versioning

Current platform version: `2.0.0` (semantic progression planned as API stabilizes).

---

## Change Log (High-Level)

| Version | Summary                                                                      |
| ------- | ---------------------------------------------------------------------------- |
| 2.0.0   | Modular architecture, multi-environment deployment scripts, monitoring layer |
| 1.x     | Initial battle engine, room system, prototype UI                             |

(Full detailed changelog to be introduced in future `CHANGELOG.md`.)

---

---

## Intellectual Property Notice

This project is a fan‑inspired technical platform. Pokémon and all related intellectual property (names, sprites, types, creatures, moves, etc.) are trademarks of their respective owners (Nintendo, Game Freak, The Pokémon Company). No endorsement is implied. Assets are not redistributed; only structured metadata necessary for mechanics research and educational purposes is included.

---

End of Document
