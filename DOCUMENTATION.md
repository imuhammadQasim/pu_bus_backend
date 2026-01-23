# PU Bus Routing Backend - Documentation

Welcome to the **PU Bus Routing Backend** project. This documentation provides a comprehensive guide for both technical developers and non-technical stakeholders to understand how the system works, its purpose, and how to maintain it.

---

## 🚌 1. Project Overview (For Layman/Non-Technical Users)

### What is this project?

This is the "brain" behind the PU Bus Routing application. Its primary job is to manage Information about bus routes, stop locations (campuses, hostels, gates, etc.), and schedules for the University of the Punjab (PU).

### Why do we need it?

Students and staff often need to know which bus goes where and at what time. This backend provides that information to the mobile or web app that people use.

### Core Features:

- **Location Management**: A library of all important spots like Gates (1, 2, 4, 5), Campuses (New, Old), Hostels, and Grounds.
- **Route Tracking**: Detailed paths for different bus routes, including their colors (to identify them easily) and descriptions.
- **Batch Schedules**: Knowing if a bus runs in the Morning, Afternoon, or Evening.
- **Security**: Ensures the data is protected and that the system isn't overloaded by too many requests.

---

## 🛠 2. Technical Overview (For Developers)

### Tech Stack

- **Runtime**: Node.js (v22+)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma (Object-Relational Mapping)
- **Security**: Helmet, CORS, Express-Rate-Limit
- **Environment Management**: Dotenv

### Project Structure

```text
pu_bus_backend/
├── config/             # Configuration files (Env, Database utility)
├── controller/         # Business logic for API endpoints
├── database/           # Prisma client initialization
├── generated/          # Custom directory for Prisma Client
├── middlewares/        # Express middlewares (Error handling, etc.)
├── prisma/             # Prisma schema and migrations
├── routes/             # API route definitions
├── constants/          # Static data for seeding
├── .env                # Environment variables (Sensitive!)
├── app.js              # Express app setup
└── server.js           # Entry point
```

---

## 🚀 3. Getting Started (Technical)

### Prerequisites

- Node.js installed.
- PostgreSQL running locally or on a server.
- `.env` file configured with `DATABASE_URL`.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```
3. Sync Database Schema:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Seed the Database:
   ```bash
   npm run seed
   ```
5. Start the Server:
   ```bash
   npm start
   ```

---

## 📂 4. API Endpoints

### Locations

- `GET /api/location`: Fetch all registered locations (Campuses, Hostels, etc.).
- `GET /api/location/:id`: Get details for a specific location.

### Bus Routes

- `GET /api/bus-route`: Fetch all available bus routes.
- `GET /api/bus-route/:id`: Get detailed waypoints and batch timing for a specific route.

---

## 🗄 5. Database Schema (Prisma)

The database consists of the following main models:

- **Location**: Stores coordinates, names, and types (GATE, CAMPUS, HOSTEL, GROUND).
- **Route**: Stores the route's visual ID (color), name, and description.
- **Waypoint**: Geographical points that form the bus path.
- **RouteBatch**: Timing categories (MORNING, AFTERNOON, EVENING).

---

## 🛡 6. Security & Best Practices

- **Rate Limiting**: Limits the number of requests per window to prevent DDoS attacks.
- **Helmet**: Sets various HTTP headers for security.
- **CORS**: Restricted to specific origins (defined in `.env`).
- **Error Handling**: Global middleware to catch and format errors consistently.

---

## 📝 7. Maintenance & Updates

To add new locations or routes manually:

1. Update `constants/index.js` (if using seed method).
2. Run `npm run seed`.
3. Alternatively, use **Prisma Studio** to manage data visually:
   ```bash
   npx prisma studio
   ```

---

_Last Updated: January 2026_
