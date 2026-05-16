# Notification Dashboard System

## Project Overview

This project is a full stack notification dashboard system developed using:
- React
- Node.js
- Express
- Tailwind CSS

The system supports:
- notification filtering
- pagination
- viewed/unviewed notifications
- centralized logging middleware
- priority inbox implementation

---

# Features

## Backend
- REST API architecture
- reusable logging middleware
- notification APIs
- structured logging

## Frontend
- responsive dashboard
- pagination
- filtering
- viewed/unviewed badges
- loading states
- error handling

## System Design
- scalable REST API design
- database schema
- query optimization
- caching strategy
- bulk notification reliability

## Priority Inbox
Priority notifications are ranked based on:
- recency
- priority weight

Priority order:
1. Placement
2. Result
3. Event

---

# Tech Stack

## Frontend
- React
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express

## Database Design
- PostgreSQL

---

# Project Structure

```text
notification-dashboard
│
├── backend
├── frontend
├── notification_system_design.md
├── priority_inbox.py
├── screenshots
└── README.md
```

---

# Setup Instructions

## Backend

```bash
cd backend
npm install
node server.js
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Screenshots

Screenshots are available inside:
`screenshots/`

---

# Logging Middleware

Centralized logging middleware is implemented for:
- backend APIs
- frontend actions
- filtering
- pagination
- API requests

---

# Deployment

Frontend:
Vercel

Backend:
Render