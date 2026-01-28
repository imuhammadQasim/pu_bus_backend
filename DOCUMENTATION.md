# 🚌 PU Bus Routing Backend - Documentation

> **Empowering Students & Staff with Real-Time Routing Information.**

Welcome to the **PU Bus Routing Backend**. This system serves as the central intelligence hub for the University of the Punjab's transportation network, managing complex route data, stop locations, and scheduling.

---

## ✨ 1. Project Essence

### 🎯 The "Why"

Navigating a large university campus can be challenging. This backend bridge the gap between static bus schedules and digital accessibility, providing a single source of truth for the **PU Bus Routing App**.

### 🌟 Key Value Propositions

- **Precision Mapping**: High-fidelity geographical coordinates for all stops.
- **Dynamic Scheduling**: Support for Morning, Afternoon, and Evening batches.
- **Visual Clarity**: Color-coded routes for instant identification.
- **Developer First**: Clean API structure designed for rapid frontend integration.

---

## 🏗 2. Architecture & Design

### 🛠 Technology Stack

| Layer         | Technology       | Purpose                                                   |
| :------------ | :--------------- | :-------------------------------------------------------- |
| **Runtime**   | `Node.js v22+`   | High-performance asynchronous execution.                  |
| **Framework** | `Express.js`     | Robust routing and middleware ecosystem.                  |
| **Database**  | `PostgreSQL`     | Relational data integrity for geographical points.        |
| **ORM**       | `Prisma`         | Type-safe database access and automated migrations.       |
| **Security**  | `Helmet`, `CORS` | Hardening HTTP headers and cross-origin resource sharing. |

### 📂 Directory Map

```bash
pu_bus_backend/
├── ⚙️ config/         # System settings (Env, DB)
├── 🧠 controller/     # Core logic for processing requests
├── 💾 database/       # Prisma client initialization
├── 🛡️ middlewares/    # Security & Error handling layers
├── 📐 prisma/         # Database schema & migrations
├── 🛣️ routes/         # Endpoint definitions
├── 📦 constants/      # Static seed data (Routes, Locations)
├── 🛠️ utils/          # Global helper functions
└── 🚀 server.js       # Application entry point
```

---

## 🚀 3. Quick Start (Technical)

### 🧩 Prerequisites

- `Node.js` (LTS recommended)
- `PostgreSQL` instance
- `.env` file configured (see [Environment Variables](#-environment-variables))

### 🏎 Installation Steps

1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Setup Database**:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
3. **Seed Data**:
   ```bash
   npm run seed
   ```
4. **Launch Dev Mode**:
   ```bash
   npm start
   ```

---

## � 4. API Reference

### 📍 Location Service

Manage campus landmarks, gates, and hostels.

| Method | Endpoint                 | Description                          |
| :----- | :----------------------- | :----------------------------------- |
| `GET`  | `/api/location/campuses` | List all university campuses.        |
| `GET`  | `/api/location/hostels`  | List all student hostels.            |
| `GET`  | `/api/location/gates`    | Get entry/exit gate coordinates.     |
| `GET`  | `/api/location/grounds`  | List sports grounds and open spaces. |

### 🚌 Route Service

Detailed bus paths and timing information.

| Method | Endpoint                               | Description                                  |
| :----- | :------------------------------------- | :------------------------------------------- |
| `GET`  | `/api/bus-route/get-all-routes`        | Fetch all available bus paths.               |
| `GET`  | `/api/bus-route/get-all-routes/:batch` | Filter routes by Batch (MORNING/EVENING).    |
| `GET`  | `/api/bus-route/get-route/:id`         | Get full waypoint path for a specific route. |

---

## � 5. Security & Best Practices

- **🛡 Rate Limiting**: Intelligent throttling to prevent system abuse.
- **🩺 Global Error Handling**: Unified error response format for consistent debugging.
- **📄 SEO & Meta**: While this is a backend, we maintain structured responses that are easily indexable by frontend aggregators.

---

## � 6. Maintenance Guide

### Updating the Bus Network

To add a new route or update waypoint coordinates:

1. Modify the `constants/index.js` file with the new data.
2. Execute the seed script: `npm run seed`.
3. The Prisma ORM will handle the upsert logic to ensure no duplicate IDs.

---

## 🤝 7. Project Evolution

We are committed to continuous improvement. Future milestones include:

- [ ] Real-time bus tracking integration.
- [ ] Push notifications for schedule changes.
- [ ] Multi-campus route optimization algorithms.

---

_Last Synchronized: Early 2026_ | **Developed by [Muhammad](https://github.com/imuhammadQasim)**
